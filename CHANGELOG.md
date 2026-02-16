# 📋 Changelog - StudyBoard

Todos los cambios notables de este proyecto serán documentados en este archivo.




## [v3.2.9] - 2026-02-16
### Nuevas Funcionalidades
- **Resumen Inteligente de Cuatrimestre**: Cuando todas las asignaturas están completadas al 100%, la IA genera un resumen personalizado del cuatrimestre.
- **Análisis de Rendimiento Completo**: Mensajes específicos según el resultado (matrícula de honor, todas aprobadas, mixto, etc.).
- **Estadísticas Detalladas**: Muestra promedio general, asignaturas aprobadas/suspendidas, y distribución de calificaciones.
- **Tolerancia de Precisión**: Detección de completado con margen de ±3% (97%-103%) para manejar errores de punto flotante.

### Mejoras
- **Mensajes Personalizados**: 
  - 🏆 Matrícula de honor (todas sobresalientes)
  - 🌟 Cuatrimestre brillante (≥70% sobresalientes)
  - 🎓 Excelente (todas aprobadas, promedio ≥8)
  - 💪 Buen rendimiento (todas aprobadas, promedio ≥7)
  - ✅ Objetivo cumplido (todas aprobadas, promedio ≥6)
  - ⚡ Balance positivo (más aprobadas que suspendidas)
  - 🔄 Mixto (aprobadas y suspendidas equilibradas)
  - ⚠️ Complicado (más suspendidas que aprobadas)
  - 📚 Difícil (todas suspendidas)

## [v3.2.8] - 2026-02-16
### Correcciones
- **Modal de Pruebas**: Corregido error crítico que impedía abrir el modal de pruebas evaluables en asignaturas con subdivisiones.
- **Selector JavaScript**: Solucionado selector incorrecto (`.test-name` → `.sub-name`) en el evento de input de subdivisiones.

### Mejoras UI
- **Alineación de Subdivisiones**: Inputs de subdivisiones ahora están perfectamente alineados con las pruebas principales.
- **Consistencia Visual**: Eliminado fondo blanco de inputs en subdivisiones para mantener coherencia con el diseño general.

## [v3.2.7] - 2026-02-16
### Reordenación Móvil
- **Corrección Fantasmas UI**: Implementada limpieza robusta de elementos de arrastre para evitar que se queden atascados en pantalla.
- **Mejoras de Estabilidad**: Añadidos listeners de seguridad para cancelar el arrastre en interrupciones del sistema.

## [v3.2.6] - 2026-02-16
### Reordenación Móvil
- **Rediseño Completo Touch**: Nueva lógica robusta para reordenar asignaturas "m manteniendo pulsado".
- **Feedback Visual**: La tarjeta sigue al dedo exactamente donde se pulsó, con un clon visual flotante.
- **Swipe Preservado**: Se puede seguir deslizando lateralmente para eliminar o ver información.

## [v3.2.5] - 2026-02-16
### Correcciones
- **Scroll en Pruebas**: Corregido problema donde la lista de pruebas no permitía scroll cuando había muchos elementos.
- **Formato Fijo**: Asegurado que las tarjetas de prueba mantengan un tamaño mínimo y no se colapsen.

## [v3.2.4] - 2026-02-16
### 🎨 Visual
- **Fondo de Pruebas**: Ajustado el color de fondo de las tarjetas de prueba a un tono gris más visible (#f1f5f9) para mayor consistencia.
- **Espaciado**: Aumentado el padding en el campo de ponderación para evitar definitivamente el solapamiento de texto.

## [v3.2.3] - 2026-02-16
### 🎨 Visual
- **Consistencia Visual**: Unificado el color de fondo de las pruebas y sus subdivisiones para una mejor integración.
- **Correcciones UI**: Solucionado el solapamiento del símbolo "%" en el campo de ponderación.

## [v3.2.2] - 2026-02-16
### Mejorado
- **Rediseño Lista de Pruebas**: Integración visual de las subdivisiones dentro de la tarjeta del examen principal.
- **Optimización Móvil**: Ajuste del layout de pruebas para que todos los campos (nombre, nota, peso) quepan en una sola línea en pantallas pequeñas.

## [v3.2.1] - 2026-02-16
### Añadido
- **Paso de Notas en Wizard**: Añadido un paso final al asistente para introducir directamente las notas obtenidas (global o por partes).

## [v3.2.0] - 2026-02-16
### Añadido
- **Nuevo Asistente de Pruebas**: Implementado un wizard paso a paso para añadir pruebas evaluables de forma intuitiva.
- **Soporte de Subdivisiones**: Ahora las pruebas pueden dividirse en partes (ej: Teoría/Práctica) con pesos independientes.
- **Sustitución de Notas**: Funcionalidad para indicar si una prueba sustituye la nota de otra anterior.
- **Visualización Anidada**: Las pruebas subdivididas se muestran jerárquicamente en la tarjeta de la asignatura.

### Mejorado
- **Cálculo de Notas**: Actualizado el motor de cálculo para soportar recursividad en subdivisiones y lógica de sustitución.

## [v3.1.0] - 2026-01-05
### Añadido
- **Calendario Interactivo**: Nueva vista mensual para visualizar los exámenes y entregas.
- **Edición desde Calendario**: Ahora se pueden abrir y editar los exámenes directamente pulsando en el detalle del día.
- Soporte para navegación entre meses en el calendario.

### Mejorado
- **Diseño Móvil del Calendario**: Optimizada la rejilla para evitar superposiciones en pantallas pequeñas, usando marcadores tipo "dot".
- **Accesibilidad**: Mejorado el contraste del botón "Cancelar" en los formularios modales.

## [v3.0.1] - 2026-01-05

### 🔧 Correcciones
- **Botón Nuevo Cuatrimestre**: Solucionado error que impedía ver el botón de crear cuatrimestre cuando no existían cursos.

## [3.0.0] - 2026-01-05

### 🎨 Mejoras de UI/UX
- **Desktop Layout Mejorado**: Implementado diseño centrado inicial que transiciona a vista dividida al seleccionar un cuatrimestre
- **Barra de Progreso Horizontal**: Revertido el diseño circular a barra horizontal con animaciones suaves de expansión/colapso
- **Botones de Exámenes**: Rediseñados y reposicionados los botones "Añadir Examen" y "Exportar" en el modal de exámenes futuros
- **Modo Oscuro**: Corregido el fondo que permanecía claro en modo nocturno

### 🔧 Correcciones
- **Notificaciones**: Solucionado el problema de solicitud repetitiva de permisos de notificaciones usando localStorage
- **Botón "Nuevo Cuatrimestre"**: Movido correctamente al final de la lista de cuatrimestres
- **Toggle de Progresos**: Corregido el botón para mostrar/ocultar todos los progresos a la vez

### ❌ Funcionalidades Eliminadas
- **Exámenes Pasados**: Eliminada completamente la funcionalidad de ver exámenes antiguos para simplificar la interfaz

### 🎯 Mejoras de Rendimiento
- Optimizadas transiciones y animaciones CSS
- Mejorado el uso de flexbox para layouts más eficientes

---

## [2.3.22] - 2025-12-17

### ✨ Nuevas Funcionalidades
- **Liquid Glass Mode**: Activación directa desde ventana de sugerencia en iOS y tutorial de onboarding
- **Gestión de Cuatrimestres**: Ventanas de creación, edición y duplicación centradas en pantalla
- **Modal de Pruebas**: Redimensionado a 80% de altura de pantalla con márgenes del 10%

### 🔧 Mejoras
- Sistema de versionamiento robusto
- Workflow de deployment mejorado
- Actualización automática de versiones en `index.html` y `sw.js`

---

## [2.0.0] - 2025-11-XX

### ✨ Nuevas Funcionalidades
- **Export PDF Profesional**: Generación de informes académicos en PDF con estadísticas y gráficos
- **Widget para Móviles**: Widget independiente con estadísticas en tiempo real
- **Recomendaciones IA**: Sistema de sugerencias personalizadas basado en rendimiento

### 🎨 Mejoras de Diseño
- Interfaz completamente rediseñada
- Modo oscuro mejorado
- Animaciones y transiciones suaves

---

## [1.0.0] - 2025-XX-XX

### 🎉 Lanzamiento Inicial
- Gestión de cuatrimestres y asignaturas
- Sistema de notas y pruebas evaluables
- Cálculo automático de notas finales
- Gestión de exámenes futuros
- PWA con soporte offline
- Sincronización con Firebase

---

**Formato del Changelog basado en [Keep a Changelog](https://keepachangelog.com/)**
