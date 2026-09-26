---
title: "Handling large file uploads"
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
    label: "Approach 1: Async Validation"
    content: "file-uploads-async"
    diagram: "file-upload-async"
  - id: "sync"
    label: "Approach 2: Sync Validation"
    content: "file-uploads-sync"
    diagram: "file-upload-sync"
---

## Context

The application needed to handle potentially large files without creating unnecessary impact on the server infrastructure, while supporting multiple validation workflows.

## Problem

Direct file uploads through the backend were consuming significant server resources and creating bottlenecks, especially for large files. Additionally, the system required different validation workflows depending on the use case: some files needed asynchronous validation after upload confirmation, while others required synchronous validation as part of a business operation (e.g., creating an entity that requires an image).

## Solution

**Common infrastructure:**
- Signed URL generation for direct-to-storage uploads
- Temporary bucket with TTL-based cleanup
- Path-based ownership enforcement (`/userid/operationid/`)
- Validation pipeline (reusable across both approaches)

**Validation pipeline (generic, reusable):**
- Existence: verify object exists and is accessible
- Integrity: checksum/hash verification
- Security: malware/virus scanning
- Format: structure and MIME type validation
- Business rules: size limits, type restrictions, quotas

## Result

The dual-strategy approach allowed handling files of any size efficiently by offloading transfer to object storage. The backend only manages metadata, coordination, and validation orchestration. The synchronous staged approach guarantees data integrity for critical business operations while the asynchronous approach provides better UX for non-blocking workflows. The path-based ownership model (`/userid/operationid/`) simplified access control without additional authorization checks.