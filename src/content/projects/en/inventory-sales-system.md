---
title: "Inventory-Sales System"
description: "Spring Boot REST API for retail and repair business management — inventory, sales, repair work orders, financial movements, and analytical reporting."
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

## Overview

A comprehensive Spring Boot REST API for retail and repair business management — handling inventory, sales, repair work orders, financial movements, and analytical reporting.

The system provides centralized control over inventory, sales transactions, repair work orders, financial movements, and analytical reporting. It supports multi-user environments with role-based access control and automated notifications.

## Architecture

### Layered Architecture
| Layer | Responsibility |
|-------|---------------|
| **Presentation** | Controllers (REST endpoints, DTO validation, permissions) |
| **Service** | Business Logic (@Transactional, orchestration, mapping) |
| **Repository** | JpaRepository + Custom Native Queries (Reports) |
| **Domain** | Entities (JPA, Auditable), Enums, Value Objects |

### Module Structure
| Module | Responsibility | Key Entities |
|--------|---------------|--------------|
| `user` | Authentication, authorization, user/role/permission management | User, Role, Permission, RefreshToken |
| `inventory` | Products, categories, suppliers, purchases | Item, Category, Provider, Purchase, PurchaseDetail |
| `sales` | Sales transactions, payment methods | Sale, SoldItem, GenericItem, PaymentMethod |
| `works` | Repair work orders, work types | Work, WorkItem, GenericWorkItem, WorkType, WorkStatusLog |
| `movements` | Financial movements tracking | Movement |
| `report` | Analytical reporting (native SQL) | Projections, Period Responses |
| `audit` | Automatic audit trail | Auditable (base) |
| `config` | Security, JWT, CORS, Swagger, Email, Storage | JWTService, SecurityConfig, S3StorageService |
| `exception` | Global error handling, custom exceptions | ErrorHandler, ExceptionList |
| `utils` | Shared utilities | ValidationUtils, TimeHelpers |
| `dataSource` | Storage abstraction | StorageService, FileContent |
| `scheduler` | Background jobs | ImageCleanupScheduler |

## Key Features

### Inventory Management
- **Products & Categories**: Full CRUD with stock levels, pricing, barcodes, and image management
- **Suppliers**: Provider management with purchase history
- **Purchases**: Stock replenishment with automatic inventory updates and payment tracking
- **Stock Alerts**: Automatic status classification (In Stock / Alarm / Critical / Out of Stock)

### Sales & Point of Sale
- **Multi-item Sales**: Inventory items + ad-hoc generic items in a single transaction
- **Flexible Discounts**: Line-level and sale-level (percentage or fixed amount)
- **Split Payments**: Multiple payment methods per sale with automatic balance tracking
- **Repair Integration**: Link work orders to sales for unified transactions

### Repair Work Orders
- **Work Lifecycle**: Pending → In Repair → Ready → Delivered with audit trail
- **Parts & Labor**: Consume inventory items and/or custom services per work order
- **Customer Notifications**: Automatic email when work is ready for pickup
- **Work Types**: Categorize repairs with custom pricing

### Financial Tracking
- **Movements**: Income/expense recording with categorization
- **Payment Methods**: Running balances per tender type (cash, card, transfer)
- **Profitability**: Cost vs. revenue analysis per sale and work order

### Reporting & Analytics
- **Time-Series Reports**: Sales, items, works, payment methods grouped by Day/Week/Month
- **Zero-Period Filling**: Continuous date series even for periods without data
- **Multi-Source Aggregation**: Combines sales, repairs, and purchases in single queries
- **Running Balances**: Historical and projected payment method balances

### User Management & Security
- **Role-Based Access**: Fine-grained permissions (see/create/edit/delete per entity)
- **JWT Authentication**: Dual-token (access + refresh) in secure HttpOnly cookies
- **Password Recovery**: Secure token-based reset via email
- **Audit Trail**: Automatic created/updated timestamps and user tracking on all entities

## Technical Highlights

### Reporting Engine
Generates time-series reports with zero-value period filling, multi-source aggregation, and running balances using recursive CTEs and native SQL.

### S3 Image Upload
Two-phase presigned workflow: direct browser-to-storage uploads without server bandwidth, with atomic replacement confirmation and cleanup.

### JWT Dual-Token Architecture
Access token (~1 hour) + refresh token (~30 days, derived from password hash) with JTI rotation for immediate revocation.

### Multi-Source Inventory Consumption
Unified stock tracking across sales, works, and purchases with automatic stock status classification (In Stock, Alarm, Critical, Out of Stock).

## Tech Stack

| Area | Implementation |
|------|----------------|
| **Framework** | Spring Boot 3.x, Java 21, Maven |
| **Database** | MySQL 8+, JPA/Hibernate |
| **Security** | Spring Security 6, JWT (HMAC256), BCrypt, method-level `@PreAuthorize` |
| **Storage** | S3-compatible (MinIO/AWS) with presigned URLs |
| **Email** | Mailgun API + Thymeleaf templates, delivery logging |
| **Reporting** | Native SQL with recursive CTEs, dynamic time grouping (DAY/WEEK/MONTH) |
| **Scheduling** | Spring `@Scheduled` (daily image cleanup) |
| **API Docs** | SpringDoc OpenAPI 3 (Swagger UI) |
| **Error Handling** | Global `@RestControllerAdvice` with request body capture |
| **Validation** | Bean Validation (Jakarta) + reusable batch validation utilities |
| **Auditing** | Spring Data JPA Auditing via `AuditorAware` |

## Security & Permissions

### Permission Model
- **Format**: `{entity}{Action}` → `seeItems`, `createSales`, `editWorks`, `deleteCategories`
- **Enforcement**: `@PreAuthorize("hasAuthority('permissionName')")` on controller methods
- **Assignment**: Roles aggregate permissions; Users assigned one or more Roles

### Security Features
| Area | Implementation |
|------|----------------|
| Authentication | JWT in HttpOnly Secure cookies (access + refresh) |
| Authorization | Method-level `@PreAuthorize` with permission authorities |
| Password Storage | BCrypt (via `PasswordEncoder` bean) |
| Token Rotation | Refresh generates new pair; old JTI invalidated in DB |
| Password Recovery | Separate JWT secret, 30-min expiry, email link |
| CORS | Configurable via `CorsConfig` |
| Actuator Protection | Separate filter chain with Basic Auth |
| Request Validation | Bean Validation (Jakarta) on all DTOs |
| SQL Injection | JPA parameter binding; native queries use named parameters |

## Result

The system fully automates business operations for retail and repair shops. It eliminates manual spreadsheet tracking, provides real-time inventory visibility, enables professional repair workflows with customer communication, and delivers actionable analytics through multi-dimensional reporting. The architecture is production-ready with comprehensive security, observability, and deployment automation.