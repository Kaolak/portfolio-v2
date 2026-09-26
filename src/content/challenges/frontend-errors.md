---
title: "Keeping frontend errors useful for developers"
description: "Los errores producidos en una aplicación frontend podían ser difíciles de investigar posteriormente porque la información visible para el usuario no siempre permitía identificar el origen del problema."
category: "Frontend / Backend"
technologies:
  - JavaScript
  - React
  - Java
  - Spring Boot
featured: true
diagram: "error-reporting"
---

## Context

Frontend errors in the application were difficult to investigate afterward because the information visible to the user didn't always allow identifying the root cause.

## Problem

When errors occurred in production, the information available to developers was insufficient for effective debugging. User-facing error messages lacked technical context.

## Approach

I designed a mechanism to collect relevant error information while maintaining separation between what's shown to the user and what's used internally for investigation.

## Solution

Implemented an error reporting system that:
- Captures error context and stack information
- Collects browser and environment data
- Stores errors with timestamps
- Provides meaningful messages to users
- Preserves technical details for developers

## Result

Errors could be logged with greater context, facilitating subsequent analysis and diagnosis, while users received clear and helpful error messages.
