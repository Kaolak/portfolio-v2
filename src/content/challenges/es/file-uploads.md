---
title: "Manejo de cargas grandes de archivos"
description: "La aplicación necesitaba trabajar con archivos potencialmente grandes sin generar un impacto innecesario sobre el servidor, permitiendo validaciones asíncronas y estrategias de carga escalonada."
category: "Backend"
technologies:
  - Java
  - Spring Boot
  - AWS S3
  - Redis
featured: true
tabs:
  - id: "async"
    label: "Enfoque 1: Validación asíncrona"
    content: "file-uploads-async"
    diagram: "file-upload-async"
  - id: "sync"
    label: "Enfoque 2: Validación síncrona"
    content: "file-uploads-sync"
    diagram: "file-upload-sync"
---

## Contexto

La aplicación necesitaba manejar archivos potencialmente grandes sin crear un impacto innecesario sobre la infraestructura del servidor, soportando a la vez múltiples flujos de validación.

## Problema

Las cargas directas de archivos a través del backend consumían recursos significativos del servidor y generaban cuellos de botella, especialmente con archivos grandes. Además, el sistema requería flujos de validación diferentes según el caso de uso: algunos archivos necesitaban validación asíncrona después de confirmada la subida, mientras otros requerían validación síncrona como parte de una operación de negocio (por ejemplo, crear una entidad que requiere una imagen).

## Solución

**Infraestructura común:**
- Generación de URLs firmadas para cargas directas al almacenamiento
- Bucket temporal con limpieza basada en TTL
- Control de propiedad basado en la ruta (`/userid/operationid/`)
- Pipeline de validación (reutilizable en ambos enfoques)

**Pipeline de validación (genérico y reutilizable):**
- Existencia: verificar que el objeto existe y es accesible
- Integridad: verificación de checksum/hash
- Seguridad: escaneo de malware/virus
- Formato: validación de estructura y tipo MIME
- Reglas de negocio: límites de tamaño, restricciones de tipo, cuotas

## Resultado

El enfoque de estrategia dual permitió manejar archivos de cualquier tamaño de forma eficiente, descargando la transferencia al almacenamiento de objetos. El backend solo gestiona metadatos, coordinación y orquestación de validaciones. El enfoque síncrono escalonado garantiza la integridad de los datos en operaciones de negocio críticas, mientras que el enfoque asíncrono brinda mejor experiencia de usuario en flujos no bloqueantes. El modelo de propiedad basado en la ruta (`/userid/operationid/`) simplificó el control de acceso sin verificaciones de autorización adicionales.
