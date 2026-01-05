---
description: Sube los cambios a GitHub, actualizando la versión y el changelog.
---

1. **Verificar estado de Git**:
   - Ejecuta `git status` para ver los archivos modificados.

2. **Determinar nueva versión**:
   - Revisa la versión actual en `index.html` o `package.json` (si existe).
   - Incrementa el número de versión (generalmente el 'patch', ej: 1.0.0 -> 1.0.1) a menos que se trate de una funcionalidad mayor.

3. **Actualizar archivos de versión**:
   - **`index.html`**: Busca el elemento con id `version-badge` y actualiza el texto (ej: `v3.0.1`).
   - **`sw.js`**: Busca la constante `CACHE_NAME` y actualiza el string de versión (ej: `studyboard-v3.0.1`).

4. **Actualizar Changelog**:
   - **`CHANGELOG.md`**:
     - Añade una nueva sección al principio del archivo con el formato:
       ```markdown
       ## [VERSION] - AAAA-MM-DD
       
       ### 🔧 Cambios
       - Descripción de los cambios realizados...
       ```
     - Asegúrate de incluir la fecha actual.

5. **Subir a GitHub**:
   - Ejecuta: `git add .`
   - Ejecuta: `git commit -m "chore: bump version to v[VERSION]"`
   - Ejecuta: `git push`

6. **Confirmar**:
   - Confirma al usuario que la versión ha sido actualizada y subida correctamente.
