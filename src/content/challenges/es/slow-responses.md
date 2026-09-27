---
title: "Reducción de respuestas lentas del backend"
description: "En una aplicación empresarial, algunas operaciones comenzaron a presentar tiempos de respuesta elevados. Se aplicaron optimizaciones en consultas, profundidad de respuestas, caché HTTP y caché interno."
category: "Backend"
technologies:
  - Java
  - Spring Boot
  - SQL
  - Hibernate
  - Spring Cache
  - Caffeine
featured: true
diagram: "query-optimization-detailed"
---

## Contexto

Una aplicación empresarial tenía varias operaciones que comenzaron a presentar tiempos de respuesta elevados. El problema estaba relacionado con la cantidad de datos que se recuperaban y procesaban en cada petición.

## Problema

Ciertas operaciones del backend tardaban demasiado en responder, afectando la experiencia de usuario y el rendimiento del sistema. Las operaciones involucraban múltiples consultas a la base de datos y grandes conjuntos de resultados.

## Enfoque

Analicé el tiempo individual de cada operación para identificar los cuellos de botella. El análisis cubrió:
- Perfilado de consultas a la base de datos (identificación de problemas N+1)
- Revisión de patrones de acceso a datos
- Análisis del tamaño de las respuestas
- Evaluación de cacheabilidad en endpoints de mucha lectura

## Solución

### 1. Optimización de consultas y prevención de N+1

Reemplacé las colecciones con lazy loading por `@EntityGraph` y `JOIN FETCH` para eliminar consultas N+1. Agregué fetch por lotes en las colecciones donde `JOIN FETCH` no era viable. Optimicé la estructura de las consultas para traer solo las columnas necesarias.

### 2. Reducción de profundidad de respuestas

Introduje proyecciones DTO para limitar la profundidad de serialización. Eliminé relaciones anidadas innecesarias de las respuestas de la API. Implementé selección de campos para endpoints de listado vs. endpoints de detalle.

### 3. Caché HTTP (ShallowETag y Last-Modified)

Agregué `ShallowEtagHeaderFilter` para la generación automática de ETag en las respuestas. Implementé headers `Last-Modified` mediante inspección con `WebRequest`. Configuré headers `Cache-Control` por endpoint (público/privado, max-age).

### 4. Caché interno (Spring Cache)

Agregué `@Cacheable` en métodos de repositorio para datos de referencia de lectura frecuente. Cacheé resultados procesados/agregados en la capa de servicio con expiración basada en TTL. Usé `@CacheEvict` en operaciones de escritura para mantener la consistencia. Configuré Caffeine como proveedor de caché.

## Resultado

Las optimizaciones combinadas redujeron significativamente los tiempos de respuesta:
- La optimización de consultas eliminó los N+1, reduciendo los roundtrips a la base de datos
- La reducción de profundidad de respuestas disminuyó el tamaño de los payloads
- El caché HTTP habilitó respuestas 304 para recursos sin cambios
- El caché interno redujo la carga sobre la base de datos para datos de referencia populares
