---
diagram: "file-upload-sync"
---

## Enfoque 2: Carga escalonada con validación síncrona

Para operaciones en las que el archivo es requerido para completar una transacción de negocio (por ejemplo, crear un ítem que requiere una imagen), se utiliza un enfoque escalonado con validación síncrona.

**Fase 1 - Pre-carga:** El cliente sube el archivo a un bucket temporal mediante una URL firmada. La ruta del objeto sigue el patrón `/userid/operationid/`, donde `userid` asegura que el usuario solo pueda acceder a sus propios archivos, y `operationid` distingue entre múltiples intentos de carga para la misma operación.

**Fase 2 - Confirmar y validar:** El cliente envía la petición de la operación de negocio (por ejemplo, POST /items con los datos del ítem) incluyendo el `operationid` en lugar del archivo. El backend recupera el archivo del bucket temporal usando la ruta, ejecuta todas las validaciones de forma síncrona (existencia, integridad, antivirus, formato, reglas de negocio) y solo si todas pasan, mueve el archivo al bucket permanente y completa la operación de negocio. Si alguna validación falla, la operación se rechaza y el archivo temporal queda disponible para reintentar o para su limpieza vía TTL.

Este enfoque garantiza que la operación de negocio nunca se complete con un archivo inválido, manteniendo las transferencias de archivos grandes fuera del servidor de aplicación.

### Flujo

1. El backend emite una URL PUT firmada para el bucket temporal en `/userid/operationid/`
2. El cliente sube el archivo directamente a la ubicación temporal
3. El cliente envía la petición de operación de negocio con `operationid` (sin archivo)
4. El backend recupera el archivo del bucket temporal usando la ruta
5. El pipeline de validación se ejecuta de forma síncrona
6. Si todas las validaciones pasan: mueve el archivo al bucket permanente y completa la operación
7. Si alguna validación falla: rechaza la operación, retorna el error, el archivo temporal expira vía TTL
8. En caso de éxito: el archivo temporal se limpia y el archivo permanente se vincula a la entidad creada
