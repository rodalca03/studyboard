const CACHE_NAME = 'studyboard-v2.0.1';
const urlsToCache = [
  '/studyboard/',
  '/studyboard/index.html',
  '/studyboard/styles.css',
  '/studyboard/widget.html',
  '/studyboard/widget-data.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
  // Forzar activación inmediata
  self.skipWaiting();
});

// Manejar mensajes para skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Activación y limpieza de cachés antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Network First, fallback a Cache
self.addEventListener('fetch', (event) => {
  // Interceptar peticiones de widget-data.json para generarlas dinámicamente
  if (event.request.url.includes('widget-data.json')) {
    event.respondWith(
      generateWidgetData()
    );
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la petición es exitosa, guardar en caché
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, usar caché
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // Si no está en caché, devolver página offline
          if (event.request.mode === 'navigate') {
            return caches.match('/studyboard/index.html');
          }
        });
      })
  );
});

// Generar datos del widget dinámicamente desde localStorage
async function generateWidgetData() {
  try {
    // Intentar leer desde IndexedDB/localStorage
    const clients = await self.clients.matchAll();
    
    if (clients.length > 0) {
      // Solicitar datos al cliente activo
      const client = clients[0];
      const data = await new Promise((resolve) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = (event) => {
          resolve(event.data);
        };
        client.postMessage({ type: 'GET_WIDGET_DATA' }, [channel.port2]);
        
        // Timeout si no responde en 2s
        setTimeout(() => resolve(null), 2000);
      });
      
      if (data) {
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    // Fallback: datos por defecto
    const defaultData = {
      average: "-",
      subjects: 0,
      ects: 0,
      nextExam: null,
      timestamp: new Date().toISOString()
    };
    
    return new Response(JSON.stringify(defaultData), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error generando widget data:', err);
    return new Response('{}', {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
