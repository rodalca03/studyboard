# 📋 Changelog - StudyBoard

Todos los cambios notables de este proyecto serán documentados en este archivo.

## [3.0.0] - 2026-01-03

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
