---
title: "Automated Mercado Libre publication integration"
description: "En un sistema inmobiliario, se necesitaba automatizar la publicación de propiedades en Mercado Libre. Se implementó una integración completa con OAuth 2.0, flujo de autenticación asíncrono y gestión de publicaciones."
category: "Backend / API Integration"
technologies:
  - JavaScript
  - Node.js
  - Express
  - OAuth 2.0
  - Mercado Libre API
featured: true
diagram: "mercadolibre-publication"
---

## Context

In a real estate platform, property listings needed to be published automatically to Mercado Libre, the largest e-commerce platform in Latin America. The manual process was error-prone and time-consuming.

## Problem

Manual publication of properties on Mercado Libre was inconsistent and slow. Users had to manually copy data, handle authentication, and manage publication states. Errors in data formatting caused failed publications and required manual intervention.

## Approach

Implemented a complete integration module with Express.js that automates the entire publication lifecycle:

1. **Authentication**: OAuth 2.0 flow with Mercado Libre, handling token acquisition and refresh
2. **Property Data Management**: Service layer handles property data retrieval and validation
3. **Publication Operations**: CRUD operations for Mercado Libre publications (create, update, delete)
4. **Frontend Integration**: Modal-based UI for user authentication flow and publication confirmation
5. **Error Handling**: Centralized error capture with user-friendly messages

The architecture separates concerns across three layers:
- **Backend**: Express.js API with Controller, Property Service, and MercadoLibre Service
- **Frontend**: React/Vue components with Modal and Property Detail views
- **MercadoLibre API**: External OAuth and Items endpoints

## Solution

### Backend Architecture

**Controller de Propiedades**: Handles HTTP requests, coordinates between services, returns responses to frontend.

**Servicio de Propiedades**: Retrieves and prepares property data for publication, validates required fields locally.

**Servicio MercadoLibre**: Core integration service that:
- Manages OAuth 2.0 token lifecycle (acquire, refresh, store)
- Calls Mercado Libre API endpoints (/items, /oauth/token)
- Handles publication create/update/delete operations
- Transforms internal data to Mercado Libre format

### Frontend Flow

1. **Interfaz de Usuario**: User views property and initiates publication
2. **Modal de MercadoLibre**: Opens authentication/authorization modal
3. **Detalle de Propiedad**: Handles OAuth callback, sends authorization code to backend

### MercadoLibre API Integration

- **Autenticación**: OAuth 2.0 server-side flow, exchanges authorization code for access token
- **Publicación**: POST/PUT/DELETE to /items endpoint with validated property data

### Key Technical Decisions

- **Async OAuth Flow**: Frontend initiates auth, backend handles token exchange
- **Local Validation**: Early validation prevents API errors
- **Error Handling**: Centralized error capture with user-facing messages
- **Token Management**: Secure storage and automatic refresh

## Result

The integration fully automates Mercado Libre publication workflow. Users can publish properties directly from the platform UI, with automatic authentication handling, data validation, and error recovery. The system reduced manual publication time from minutes to seconds and eliminated formatting errors.