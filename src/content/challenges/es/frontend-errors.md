---
title: "Mantener los errores de frontend útiles para los desarrolladores"
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

## Contexto

Los errores de frontend en la aplicación eran difíciles de investigar posteriormente porque la información visible para el usuario no siempre permitía identificar la causa raíz.

## Problema

Cuando ocurrían errores en producción, la información disponible para los desarrolladores era insuficiente para un debug efectivo. Los mensajes de error visibles para el usuario carecían de contexto técnico.

## Enfoque

Diseñé un mecanismo para recopilar la información relevante del error manteniendo la separación entre lo que se muestra al usuario y lo que se usa internamente para la investigación.

## Solución

Implementé un sistema de reporte de errores que:
- Captura el contexto del error y la información de la traza
- Recopila datos del navegador y del entorno
- Almacena los errores con marcas de tiempo
- Brinda mensajes significativos a los usuarios
- Conserva los detalles técnicos para los desarrolladores

## Resultado

Los errores podían registrarse con mayor contexto, facilitando el análisis y diagnóstico posteriores, mientras los usuarios recibían mensajes de error claros y útiles.
