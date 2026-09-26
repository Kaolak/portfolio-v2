---
title: "Designing secure access to resources"
description: "Una aplicación necesitaba controlar el acceso de diferentes usuarios a distintas funcionalidades y recursos de manera centralizada."
category: "Backend"
technologies:
  - Java
  - Spring Boot
  - Spring Security
featured: true
diagram: "auth-flow"
---

## Context

An enterprise application needed to control access for different users to various functionalities and resources. The existing approach relied heavily on frontend validations.

## Problem

Security rules were scattered across the application, making them difficult to maintain and potentially leaving gaps in access control.

## Approach

I separated authentication from authorization and established centralized rules to determine what operations each user could perform. The goal was to keep security rules centralized and prevent them from depending solely on frontend validations.

## Solution

Implemented a centralized authorization mechanism with:
- Clear separation of authentication and authorization
- Role-based access control
- Permission-based resource access
- Centralized security configuration

## Result

The system obtained a centralized mechanism to control access to protected operations, with clear rules that could be maintained and audited.
