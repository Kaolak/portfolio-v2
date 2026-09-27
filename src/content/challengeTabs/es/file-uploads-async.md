---
diagram: "file-upload-async"
---

## Enfoque 1: Carga directa con validación asíncrona

El cliente sube directamente al almacenamiento de objetos mediante una URL firmada generada por el backend. Una vez que el usuario confirma la carga, el backend encola trabajos de validación que se ejecutan de forma asíncrona. Las validaciones incluyen verificación de existencia, comprobaciones de integridad, escaneo antivirus, verificación de formato y otras reglas de negocio. El estado de validación se expone mediante una API que el frontend puede consultar (polling) o a la que puede suscribirse vía WebSocket, transitando por los estados: pendiente → validando → válido/inválido → completado. Este enfoque es adecuado cuando las validaciones pueden ejecutarse en segundo plano y el usuario puede continuar trabajando.

### Flujo

1. El backend emite una URL PUT firmada para el bucket destino
2. El cliente sube el archivo directamente al almacenamiento
3. El usuario confirma la carga mediante una llamada a la API
4. El backend encola los trabajos de validación
5. Los workers de validación procesan las verificaciones en paralelo
6. El estado se actualiza en el store en tiempo real
7. El frontend consulta/suscribe el completado
