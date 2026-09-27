---
title: "Reducing slow backend responses"
description: "In an enterprise application, some operations began showing high response times. Optimizations were applied to queries, response depth, HTTP caching and internal caching."
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

## Context

An enterprise application had several operations that began showing high response times. The issue was related to the amount of data being retrieved and processed for each request.

## Problem

Certain backend operations were taking too long to respond, affecting user experience and system performance. The operations involved multiple database queries and large result sets.

## Approach

I analyzed individual timing of each operation to identify bottlenecks. The analysis covered:
- Database query profiling (identifying N+1 problems)
- Data access pattern review
- Response payload size analysis
- Cacheability assessment for read-heavy endpoints

## Solution

### 1. Query Optimization & N+1 Prevention

Replaced lazy-loading collections with `@EntityGraph` and `JOIN FETCH` to eliminate N+1 queries. Added batch fetching for collections where JOIN FETCH wasn't feasible. Optimized query structure to fetch only required columns.

### 2. Response Depth Reduction

Introduced DTO projections to limit serialization depth. Removed unnecessary nested relationships from API responses. Implemented field selection for list endpoints vs detail endpoints.

### 3. HTTP Caching (ShallowETag & Last-Modified)

Added `ShallowEtagHeaderFilter` for automatic ETag generation on responses. Implemented `Last-Modified` headers via `WebRequest` inspection. Configured `Cache-Control` headers per endpoint (public/private, max-age).

### 4. Internal Caching (Spring Cache)

Added `@Cacheable` on repository methods for frequently-read reference data. Cached processed/aggregated results in service layer with TTL-based eviction. Used `@CacheEvict` on write operations to maintain consistency. Configured Caffeine as cache provider.

## Result

The combined optimizations significantly reduced response times:
- Query optimization eliminated N+1, reducing DB roundtrips
- Response depth reduction cut payload size
- HTTP cache enabled 304 responses for unchanged resources
- Internal cache reduced DB load for hot reference data