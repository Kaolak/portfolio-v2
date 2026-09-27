---
title: "Integración automatizada de publicaciones en Mercado Libre"
description: "En un sistema inmobiliario, se necesitaba automatizar la publicación de propiedades en Mercado Libre. Se implementó una integración completa con OAuth 2.0, flujo de autenticación asíncrono y gestión de publicaciones."
category: "Backend / Integración de APIs"
technologies:
  - JavaScript
  - Node.js
  - Express
  - OAuth 2.0
  - Mercado Libre API
featured: true
diagram: "mercadolibre-publication"
---

## Contexto

En una plataforma inmobiliaria, las publicaciones de propiedades necesitaban publicarse automáticamente en Mercado Libre, la plataforma de e-commerce más grande de Latinoamérica. El proceso manual era propenso a errores y consumía mucho tiempo.

## Problema

La publicación manual de propiedades en Mercado Libre era inconsistente y lenta. Los usuarios tenían que copiar datos manualmente, gestionar la autenticación y administrar los estados de publicación. Los errores en el formato de datos causaban publicaciones fallidas y requerían intervención manual.

## Enfoque

Implementé un módulo de integración completo con Express.js que automatiza todo el ciclo de vida de la publicación:

1. **Autenticación**: Flujo OAuth 2.0 con Mercado Libre, gestionando la obtención y renovación de tokens
2. **Gestión de datos de propiedades**: Una capa de servicio se encarga de la obtención y validación de los datos
3. **Operaciones de publicación**: Operaciones CRUD sobre las publicaciones de Mercado Libre (crear, actualizar, eliminar)
4. **Integración con frontend**: UI basada en modales para el flujo de autenticación del usuario y la confirmación de publicación
5. **Manejo de errores**: Captura centralizada de errores con mensajes amigables para el usuario

La arquitectura separa responsabilidades en tres capas:
- **Backend**: API de Express.js con Controller, Servicio de Propiedades y Servicio de MercadoLibre
- **Frontend**: Componentes de React/Vue con vistas de Modal y Detalle de Propiedad
- **API de MercadoLibre**: Endpoints externos de OAuth e Items

## Solución

### Arquitectura backend

**Controller de Propiedades**: Maneja las peticiones HTTP, coordina entre servicios y retorna respuestas al frontend.

**Servicio de Propiedades**: Obtiene y prepara los datos de la propiedad para la publicación, validando los campos requeridos localmente.

**Servicio MercadoLibre**: Servicio de integración central que:
- Gestiona el ciclo de vida de los tokens OAuth 2.0 (obtener, renovar, almacenar)
- Invoca los endpoints de la API de Mercado Libre (/items, /oauth/token)
- Maneja las operaciones de crear/actualizar/eliminar publicaciones
- Transforma los datos internos al formato de Mercado Libre

### Flujo frontend

1. **Interfaz de usuario**: El usuario visualiza la propiedad e inicia la publicación
2. **Modal de MercadoLibre**: Se abre el modal de autenticación/autorización
3. **Detalle de Propiedad**: Maneja el callback de OAuth y envía el código de autorización al backend

### Integración con la API de MercadoLibre

- **Autenticación**: Flujo OAuth 2.0 del lado del servidor, intercambia el código de autorización por un access token
- **Publicación**: POST/PUT/DELETE al endpoint /items con datos de propiedad validados

### Decisiones técnicas clave

- **Flujo OAuth asíncrono**: El frontend inicia la autenticación, el backend gestiona el intercambio de tokens
- **Validación local**: La validación temprana previene errores de la API
- **Manejo de errores**: Captura centralizada de errores con mensajes para el usuario
- **Gestión de tokens**: Almacenamiento seguro y renovación automática

## Resultado

La integración automatiza por completo el flujo de publicación en Mercado Libre. Los usuarios pueden publicar propiedades directamente desde la UI de la plataforma, con manejo automático de autenticación, validación de datos y recuperación ante errores. El sistema redujo el tiempo de publicación manual de minutos a segundos y eliminó los errores de formato.
