---
title: "Sistema de Inventario y Ventas"
description: "API REST en Spring Boot para la gestión de negocios de venta y reparación — inventario, ventas, órdenes de reparación, movimientos financieros y reportes analíticos."
category: "Backend"
featured: true
private: true
technologies:
  - Java
  - Spring Boot
  - MySQL
  - JPA/Hibernate
  - Spring Security
  - JWT
  - MinIO/S3
  - Mailgun
diagram: "inventory-sales-architecture"
---

## Descripción general

Una API REST integral en Spring Boot para la gestión de negocios de venta y reparación — manejo de inventario, ventas, órdenes de reparación, movimientos financieros y reportes analíticos.

El sistema proporciona control centralizado sobre inventario, transacciones de ventas, órdenes de reparación, movimientos financieros y reportes analíticos. Soporta entornos multiusuario con control de acceso basado en roles y notificaciones automatizadas.

## Arquitectura

### Arquitectura en capas
| Capa | Responsabilidad |
|-------|---------------|
| **Presentación** | Controllers (endpoints REST, validación de DTOs, permisos) |
| **Servicio** | Lógica de negocio (`@Transactional`, orquestación, mapeo) |
| **Repositorio** | JpaRepository + consultas nativas personalizadas (reportes) |
| **Dominio** | Entidades (JPA, Auditable), Enums, objetos de valor |

### Estructura de módulos
| Módulo | Responsabilidad | Entidades clave |
|--------|---------------|--------------|
| `user` | Autenticación, autorización, gestión de usuarios/roles/permisos | User, Role, Permission, RefreshToken |
| `inventory` | Productos, categorías, proveedores, compras | Item, Category, Provider, Purchase, PurchaseDetail |
| `sales` | Transacciones de venta, medios de pago | Sale, SoldItem, GenericItem, PaymentMethod |
| `works` | Órdenes de reparación, tipos de trabajo | Work, WorkItem, GenericWorkItem, WorkType, WorkStatusLog |
| `movements` | Registro de movimientos financieros | Movement |
| `report` | Reportes analíticos (SQL nativo) | Projections, Period Responses |
| `audit` | Auditoría automática | Auditable (base) |
| `config` | Seguridad, JWT, CORS, Swagger, Email, Storage | JWTService, SecurityConfig, S3StorageService |
| `exception` | Manejo global de errores, excepciones personalizadas | ErrorHandler, ExceptionList |
| `utils` | Utilidades compartidas | ValidationUtils, TimeHelpers |
| `dataSource` | Abstracción de almacenamiento | StorageService, FileContent |
| `scheduler` | Tareas en segundo plano | ImageCleanupScheduler |

## Funcionalidades clave

### Gestión de inventario
- **Productos y categorías**: CRUD completo con niveles de stock, precios, códigos de barras y gestión de imágenes
- **Proveedores**: Gestión de proveedores con historial de compras
- **Compras**: Reposición de stock con actualización automática de inventario y seguimiento de pagos
- **Alertas de stock**: Clasificación automática de estado (En stock / Alarma / Crítico / Sin stock)

### Ventas y punto de venta
- **Ventas multi-artículo**: Artículos de inventario + artículos genéricos puntuales en una sola transacción
- **Descuentos flexibles**: Por línea y por venta (porcentaje o monto fijo)
- **Pagos divididos**: Múltiples medios de pago por venta con seguimiento automático de saldos
- **Integración con reparaciones**: Vinculación de órdenes de trabajo con ventas para transacciones unificadas

### Órdenes de reparación
- **Ciclo de vida del trabajo**: Pendiente → En reparación → Listo → Entregado con trazabilidad
- **Repuestos y mano de obra**: Consumo de artículos de inventario y/o servicios personalizados por orden
- **Notificaciones al cliente**: Email automático cuando el trabajo está listo para retirar
- **Tipos de trabajo**: Categorización de reparaciones con precios personalizados

### Seguimiento financiero
- **Movimientos**: Registro de ingresos/gastos con categorización
- **Medios de pago**: Saldos acumulados por tipo de tender (efectivo, tarjeta, transferencia)
- **Rentabilidad**: Análisis de costo vs. ingresos por venta y orden de trabajo

### Reportes y analítica
- **Reportes de series de tiempo**: Ventas, artículos, trabajos y medios de pago agrupados por Día/Semana/Mes
- **Relleno de períodos en cero**: Serie de fechas continua incluso para períodos sin datos
- **Agregación multi-fuente**: Combina ventas, reparaciones y compras en consultas únicas
- **Saldos acumulados**: Saldos históricos y proyectados por medio de pago

### Gestión de usuarios y seguridad
- **Acceso basado en roles**: Permisos de granularidad (ver/crear/editar/eliminar por entidad)
- **Autenticación JWT**: Doble token (access + refresh) en cookies HttpOnly seguras
- **Recuperación de contraseñas**: Restablecimiento seguro basado en token por email
- **Trazabilidad**: Marcas de tiempo automáticas de creación/actualización y seguimiento de usuario en todas las entidades

## Aspectos técnicos destacados

### Motor de reportes
Genera reportes de series de tiempo con relleno de períodos en cero, agregación multi-fuente y saldos acumulados usando CTEs recursivas y SQL nativo.

### Carga de imágenes a S3
Flujo presigned en dos fases: subidas directas del navegador al almacenamiento sin consumir ancho de banda del servidor, con confirmación atómica de reemplazo y limpieza.

### Arquitectura JWT de doble token
Token de acceso (~1 hora) + refresh token (~30 días, derivado del hash de contraseña) con rotación de JTI para revocación inmediata.

### Consumo de inventario multi-fuente
Seguimiento de stock unificado en ventas, trabajos y compras con clasificación automática de estado (En stock, Alarma, Crítico, Sin stock).

## Stack técnico

| Área | Implementación |
|------|----------------|
| **Framework** | Spring Boot 3.x, Java 21, Maven |
| **Base de datos** | MySQL 8+, JPA/Hibernate |
| **Seguridad** | Spring Security 6, JWT (HMAC256), BCrypt, `@PreAuthorize` a nivel de método |
| **Almacenamiento** | Compatible con S3 (MinIO/AWS) con URLs presigned |
| **Email** | API de Mailgun + plantillas Thymeleaf, registro de entregas |
| **Reportes** | SQL nativo con CTEs recursivas, agrupación temporal dinámica (DAY/WEEK/MONTH) |
| **Tareas programadas** | Spring `@Scheduled` (limpieza diaria de imágenes) |
| **Documentación API** | SpringDoc OpenAPI 3 (Swagger UI) |
| **Manejo de errores** | `@RestControllerAdvice` global con captura del cuerpo de la petición |
| **Validación** | Bean Validation (Jakarta) + utilidades reutilizables de validación por lotes |
| **Auditoría** | Spring Data JPA Auditing vía `AuditorAware` |

## Seguridad y permisos

### Modelo de permisos
- **Formato**: `{entidad}{Acción}` → `seeItems`, `createSales`, `editWorks`, `deleteCategories`
- **Aplicación**: `@PreAuthorize("hasAuthority('permissionName')")` en métodos del controller
- **Asignación**: Los roles agregan permisos; los usuarios se les asignan uno o más roles

### Funcionalidades de seguridad
| Área | Implementación |
|------|----------------|
| Autenticación | JWT en cookies HttpOnly Secure (access + refresh) |
| Autorización | `@PreAuthorize` a nivel de método con autoridades de permiso |
| Almacenamiento de contraseñas | BCrypt (vía el bean `PasswordEncoder`) |
| Rotación de tokens | El refresh genera un nuevo par; el JTI anterior se invalida en la DB |
| Recuperación de contraseña | JWT con secreto propio, expiración de 30 min, link por email |
| CORS | Configurable vía `CorsConfig` |
| Protección de Actuator | Cadena de filtros separada con Basic Auth |
| Validación de peticiones | Bean Validation (Jakarta) en todos los DTOs |
| Inyección SQL | Vinculación de parámetros de JPA; las consultas nativas usan parámetros con nombre |

## Resultado

El sistema automatiza por completo las operaciones del negocio de venta y reparación. Elimina el seguimiento manual en planillas, brinda visibilidad de inventario en tiempo real, permite flujos de reparación profesionales con comunicación al cliente y entrega analítica accionable a través de reportes multidimensionales. La arquitectura está lista para producción con seguridad, observabilidad y automatización de despliegue integral.
