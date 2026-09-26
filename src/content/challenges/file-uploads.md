---
title: "Handling large file uploads"
description: "La aplicación necesitaba trabajar con archivos potencialmente grandes sin generar un impacto innecesario sobre el servidor."
category: "Backend"
technologies:
  - Java
  - Spring Boot
  - AWS S3
featured: true
diagram: "file-upload"
---

## Context

The application needed to handle potentially large files without creating unnecessary impact on the server infrastructure.

## Problem

Direct file uploads through the backend were consuming significant server resources and creating bottlenecks, especially for large files.

## Approach

I analyzed the file transfer flow and separated the business operation management from the actual file transport. This allowed reducing the work the backend application needed to perform directly.

## Solution

Implemented a flow where:
- The backend generates temporary/signed access URLs
- Files are uploaded directly to object storage
- The backend only handles metadata and business logic
- Upload status is tracked asynchronously

## Result

The flow allowed handling larger files more efficiently and reduced the load on the application server.
