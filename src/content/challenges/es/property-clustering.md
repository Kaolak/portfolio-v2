---
title: "Recomendación de propiedades mediante clustering K-Means"
description: "En un sistema inmobiliario, se necesitaba mostrar propiedades relacionadas en la página de detalle. Se implementó clustering K-Means en un servicio Python/Flask asíncrono."
category: "Backend / ML"
technologies:
  - JavaScript
  - Express.js
  - Python
  - Flask
  - scikit-learn
featured: true
diagram: "property-clustering"
---

## Contexto

En una plataforma inmobiliaria (backend con Express.js), las páginas de detalle de propiedades necesitaban mostrar propiedades relacionadas/similares para mejorar el engagement y el descubrimiento de los usuarios.

## Problema

No existía una forma automática de determinar qué propiedades eran similares. El etiquetado manual no era mantenible a escala.

## Enfoque

Implementé un pipeline asíncrono de ML para calcular clústers de similitud entre propiedades:

1. **Disparo**: Cuando se crea o actualiza una propiedad, se inicia un proceso asíncrono
2. **Procesamiento**: El proceso invoca a un servicio Python/Flask y le envía los datos de la propiedad
3. **Clustering**: El servicio aplica K-Means sobre todas las propiedades y retorna las asignaciones de clúster
4. **Almacenamiento**: Cada propiedad recibe su número de clúster, almacenado en la base de datos

El clustering usa k = cantidad de propiedades relacionadas a mostrar por página. Con p propiedades en total, el algoritmo las agrupa en k clústers, de modo que cada propiedad recibe un número de clúster. Luego el frontend consulta propiedades que comparten el mismo clúster para mostrarlas como relacionadas.

## Solución

**Arquitectura:**
- **API de Express.js**: Gestiona el CRUD de propiedades y dispara el clustering asíncrono al crear/actualizar
- **Servicio Python/Flask**: Recibe los datos de la propiedad, ejecuta el clustering K-Means y retorna las asignaciones
- **Base de datos**: Almacena el número de clúster en cada registro de propiedad

**Lógica de clustering:**
- Features: precio, ubicación (lat/lon), superficie, dormitorios, baños, tipo de propiedad, amenidades
- K-Means con k = propiedades relacionadas deseadas por página (típicamente 4-6)
- Se ejecuta sobre el dataset completo para garantizar asignaciones consistentes
- La ejecución asíncrona mantiene rápidas las escrituras de propiedades

**Flujo:**
1. Propiedad creada/actualizada vía API de Express
2. Se dispara el proceso asíncrono y envía los datos al servicio de Python
3. El servicio ejecuta K-Means sobre todas las propiedades y retorna { propertyId: clusterId }
4. La API de Express actualiza el campo de clúster de cada propiedad
5. El frontend muestra propiedades relacionadas consultando el mismo clúster

## Resultado

Las propiedades relacionadas ahora se determinan automáticamente por similitud sin curaduría manual. El pipeline asíncrono mantiene receptivas las escrituras de propiedades mientras el servicio de ML calcula los clústers en segundo plano.
