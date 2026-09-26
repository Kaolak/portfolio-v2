# Portfolio personal — Esteban Pinto

## Objetivo

Crear un portfolio profesional personal para **Esteban Pinto**, orientado principalmente a oportunidades laborales como **Backend Developer / Software Developer**, con especial énfasis en Java, Spring Boot y desarrollo de sistemas empresariales.

El portfolio debe transmitir:

- Experiencia profesional real.
- Capacidad para resolver problemas.
- Conocimiento técnico.
- Capacidad de aprendizaje.
- Profesionalismo.
- Personalidad, sin caer en un diseño excesivamente creativo.
- Interés por backend, arquitectura, sistemas y desarrollo de software.

El sitio **no debe ser una copia del CV**. Debe complementarlo mostrando proyectos, experiencia y principalmente la capacidad de enfrentar problemas técnicos.

Los proyectos profesionales pueden contener información confidencial. Por lo tanto, **no se deben revelar detalles que puedan comprometer el secreto profesional**, incluyendo arquitectura interna, modelos de datos específicos, reglas de negocio privadas, endpoints internos, nombres de sistemas, infraestructura privada, procesos internos o decisiones técnicas confidenciales.

En lugar de eso, se utilizará una sección llamada **Technical Challenges**, donde se describirán problemas técnicos de forma generalizada y se explicará cómo fueron abordados.

---

# 1. Stack

Utilizar:

- Astro
- TypeScript
- HTML
- CSS
- JavaScript únicamente cuando sea necesario
- Markdown/MDX para contenido
- SVG para diagramas e iconografía cuando corresponda

Priorizar Astro y contenido estático.

No utilizar un framework frontend adicional salvo que exista una necesidad concreta.

El portfolio debe ser principalmente estático y tener excelente rendimiento.

---

# 2. Filosofía de diseño

El diseño debe ser:

- Profesional.
- Minimalista.
- Moderno.
- Sobrio.
- Tecnológico.
- Personal.
- Fácil de leer.
- Visualmente memorable sin ser extravagante.

Evitar:

- Animaciones excesivas.
- Efectos 3D.
- Partículas.
- Grandes efectos de parallax.
- Cursores personalizados.
- Pantallas de carga innecesarias.
- Barras de progreso de habilidades.
- Diseños excesivamente similares a portfolios de diseñadores.
- Grandes bloques de texto.
- Elementos visuales que distraigan del contenido.

La personalidad debe aparecer principalmente mediante:

- Tipografía.
- Composición.
- Uso cuidadoso de color.
- Pequeños detalles visuales.
- Microinteracciones.
- Diagramas.
- Presentación de proyectos.
- Una identidad visual coherente.

El resultado debe parecer el portfolio de un **software developer**, no el de un diseñador gráfico.

---

# 3. Tema claro / oscuro

Implementar:

- Dark mode.
- Light mode.
- Selector visible de tema.
- Detección inicial de `prefers-color-scheme`.
- Persistencia de la elección del usuario mediante `localStorage`.
- Evitar flash visual al cargar la página.

El diseño debe funcionar correctamente en ambos temas.

Utilizar variables CSS para colores:

```css
:root {
  --background: ...;
  --surface: ...;
  --surface-hover: ...;
  --text-primary: ...;
  --text-secondary: ...;
  --border: ...;
  --accent: ...;
}
No duplicar estilos completos para cada tema.

4. Identidad visual

El sitio debe tener una identidad reconocible.

Usar una paleta sobria con un color de acento.

Como punto de partida:

Background:
Dark  -> casi negro
Light -> blanco / gris muy claro

Text:
Dark  -> blanco / gris claro
Light -> gris muy oscuro

Accent:
Naranja o color similar asociado a la identidad personal.

El color de acento debe utilizarse principalmente para:

Links.
Botones.
Estados activos.
Detalles.
Iconos.
Líneas decorativas.
Elementos importantes.

No utilizar el color de acento en grandes superficies constantemente.

5. Tipografía

Utilizar una tipografía moderna y altamente legible.

Preferentemente:

Inter
Geist
IBM Plex Sans
Manrope

Para fragmentos técnicos o código:

JetBrains Mono
Fira Code

No utilizar demasiadas familias tipográficas.

6. Estructura general

La página principal debe contener:

/
│
├── Header
│
├── Hero
│
├── About
│
├── Experience
│
├── Featured Projects
│
├── Technical Skills
│
├── Technical Challenges
│
└── Contact

La navegación debe ser simple y permitir desplazarse rápidamente entre las secciones.

En desktop:

Logo / Name                         Navigation

En mobile:

Name                              Menu
7. Header

Crear un header fijo o sticky, pero discreto.

Contenido:

Esteban Pinto

About
Experience
Projects
Challenges
Contact

[Theme Toggle]

El nombre debe funcionar también como enlace hacia el inicio.

El header debe reducir su presencia visual al hacer scroll si resulta conveniente.

No crear un header excesivamente grande.

8. Hero

Esta es la sección más importante.

Debe comunicar rápidamente:

Nombre.
Profesión.
Especialización.
Una descripción breve.
Links principales.

Contenido placeholder:

Esteban Pinto

Backend Developer

Construyo sistemas y APIs orientados a resolver problemas reales,
con especial interés en Java, Spring Boot y desarrollo de software empresarial.

[View Projects]
[Contact Me]

GitHub
LinkedIn

Agregar una pequeña etiqueta o línea contextual:

Java · Spring Boot · Backend · Cloud

No utilizar frases genéricas como:

"I am passionate about technology."

La presentación debe ser concreta.

9. About

Título:

About me

Contenido placeholder:

Soy desarrollador de software con foco principalmente en backend.

Me interesa diseñar y construir sistemas que sean mantenibles,
seguros y capaces de resolver problemas reales.

Trabajo principalmente con Java y Spring Boot, aunque también
tengo experiencia trabajando con frontend, bases de datos,
servicios cloud y herramientas de automatización.

Agregar una pequeña mención al título universitario.

Placeholder:

🎓 Licenciado/a en Análisis de Sistemas
Universidad Nacional de Salta

Adaptar el texto al título real posteriormente.

La mención académica debe ser breve y no competir con la experiencia profesional.

10. Experience

Título:

Experience

Mostrar experiencia profesional en formato timeline o cards.

Experiencia principal

Placeholder:

Auditoría General de la Provincia de Salta

Backend Developer
[Fecha de inicio] — [Fecha de finalización / Present]

Participación en el desarrollo y mantenimiento de sistemas
orientados a la gestión de procesos institucionales.

Responsabilidades:

- Desarrollo de funcionalidades backend.
- Diseño e implementación de APIs.
- Integración con bases de datos.
- Implementación de autenticación y autorización.
- Desarrollo y mantenimiento de funcionalidades existentes.
- Colaboración con frontend.
- Automatización de procesos de desarrollo y despliegue.

Tecnologías:
Java · Spring Boot · SQL · React · AWS · Docker · Git

IMPORTANTE:

No incluir información confidencial del sistema.

No incluir:

Arquitectura interna.
Diagramas de arquitectura del sistema real.
Modelos de datos privados.
Endpoints internos.
Reglas de negocio específicas.
Infraestructura privada.
Información de usuarios.
Información institucional sensible.
Código propietario.
Capturas de pantallas internas.
Métricas que puedan revelar información sensible.

Cuando sea necesario describir un problema técnico relacionado con este trabajo, utilizar la sección Technical Challenges y generalizarlo.

11. Featured Projects

Título:

Selected Projects

Mostrar solamente proyectos relevantes.

Objetivo:

Demostrar diferentes capacidades, no acumular cantidad de proyectos.

Proyectos iniciales placeholder:

Project 01 — Enterprise System
Backend / Full Stack

Descripción:

Sistema orientado a la gestión de procesos y operaciones
de una organización.

Este proyecto representa experiencia práctica en el desarrollo
de software aplicado a un entorno real.

Technologies:

Java
Spring Boot
React
SQL
AWS
Docker

[View details]

No mostrar información privada.

Project 02 — Business Platform
Backend / Software Architecture

Descripción:

Plataforma backend modular diseñada como base reutilizable
para diferentes tipos de aplicaciones empresariales.

El proyecto explora modularidad, reutilización de componentes,
seguridad, persistencia y servicios comunes.

Technologies:

Java
Spring Boot
MySQL
Docker

[View details]
[GitHub]
Project 03 — Real Estate Platform
Full Stack / University Thesis

Descripción:

Plataforma web orientada al mercado inmobiliario desarrollada
como proyecto de tesis universitaria.

Incluye funcionalidades de gestión de propiedades,
visualización geográfica y recomendaciones.

Technologies:

Node.js
Express
MongoDB
React
Python
Machine Learning

[View details]
[GitHub]
12. Project details

Cada proyecto puede tener una página:

/projects/[slug]

La estructura:

Project title

Short description

Technologies

Overview

Problem

Solution

Main features

My contribution

Challenges

Results

Links

No es necesario explicar cada decisión técnica.

Para proyectos públicos:

Mostrar GitHub.
Mostrar demo si existe.
Mostrar screenshots cuando sean útiles.

Para proyectos privados:

Private project

The original project contains private information and
cannot be publicly shared.

This page presents the project at a high level and focuses
on the skills and responsibilities involved.
13. Technical Skills

Título:

Technical Skills

No utilizar porcentajes.

No utilizar:

Java     █████████░ 90%
Spring   ████████░░ 80%

En su lugar utilizar categorías.

Backend
Java
Spring Boot
Spring Security
JPA / Hibernate
REST APIs
WebSockets
Databases
MySQL
PostgreSQL
MongoDB
Cloud & DevOps
AWS
Docker
GitHub Actions
CI/CD
CloudFront
S3
Frontend
React
JavaScript
HTML
CSS
Tools
Git
GitHub
OpenAPI
IntelliJ IDEA
VS Code

Mostrar solamente tecnologías que realmente tengan relación con la experiencia del usuario.

14. Technical Challenges

Esta es una de las secciones principales del portfolio.

Objetivo:

Demostrar capacidad técnica y de resolución de problemas sin revelar información confidencial.

Los desafíos deben ser presentados de manera genérica.

No mencionar:

Nombre del sistema privado.
Organización.
Información institucional.
Datos reales.
Arquitectura privada.
Código propietario.
Endpoints reales.
URLs internas.
Configuraciones privadas.
Credenciales.
Reglas de negocio confidenciales.

La estructura de cada challenge debe ser:

Challenge

Context

Problem

Approach

Solution

Result

Technologies
Challenge example 01

Título:

Reducing slow backend responses

Descripción:

En una aplicación empresarial, algunas operaciones comenzaron
a presentar tiempos de respuesta elevados debido a la cantidad
de información que debía recuperarse y procesarse.

El desafío consistía en mejorar el tiempo de respuesta sin
cambiar el comportamiento funcional de la aplicación.

Diagrama genérico:

Client
  │
  ▼
REST API
  │
  ▼
Service
  │
  ├──── Query A
  ├──── Query B
  ├──── Query C
  │
  ▼
Database

Explicación:

Se analizaron los tiempos individuales de las operaciones,
identificando qué partes del procesamiento tenían mayor impacto.

Luego se redujo la cantidad de información innecesaria,
se revisó la estrategia de acceso a datos y se optimizó
el procesamiento de los resultados.

Resultado placeholder:

Result

La optimización permitió reducir significativamente el tiempo
de respuesta de las operaciones afectadas.

[Agregar métricas concretas si es posible]
15. Challenge example 02

Título:

Designing secure access to resources

Context:

Una aplicación necesitaba controlar el acceso de diferentes
usuarios a distintas funcionalidades y recursos.

Diagrama:

User
 │
 ▼
Authentication
 │
 ▼
Authorization
 │
 ├── Permission
 ├── Role
 └── Resource access
 │
 ▼
Protected API

Explicación:

Se separó la autenticación de la autorización y se establecieron
reglas para determinar qué operaciones podía realizar cada usuario.

El objetivo fue mantener las reglas centralizadas y evitar que
la seguridad dependiera únicamente de validaciones realizadas
desde el frontend.

Resultado:

El sistema obtuvo un mecanismo centralizado para controlar
el acceso a las operaciones protegidas.
16. Challenge example 03

Título:

Handling large file uploads

Context:

La aplicación necesitaba trabajar con archivos potencialmente
grandes sin generar un impacto innecesario sobre el servidor.

Diagrama:

Client
   │
   │ Request upload
   ▼
Backend
   │
   │ Temporary / signed access
   ▼
Object Storage

Explicación:

Se analizó el flujo de transferencia de archivos y se separó
la gestión de la operación de negocio del transporte del archivo.

Esto permitió reducir el trabajo que debía realizar directamente
la aplicación backend.

Resultado:

El flujo permitió manejar archivos de mayor tamaño de manera
más eficiente y reducir la carga sobre la aplicación.
17. Challenge example 04

Título:

Keeping frontend errors useful for developers

Context:

Los errores producidos en una aplicación frontend podían ser
difíciles de investigar posteriormente porque la información
visible para el usuario no siempre permitía identificar
el origen del problema.

Diagrama:

Frontend
   │
   │ Error
   ▼
Error Reporter
   │
   ▼
Backend
   │
   ▼
Error Repository
   │
   ├── Context
   ├── Stack information
   ├── Browser information
   └── Timestamp

Explicación:

Se diseñó un mecanismo para recopilar información relevante
del error manteniendo una separación entre la información
mostrada al usuario y la información utilizada internamente
para investigar el problema.

Resultado:

Los errores pudieron ser registrados con mayor contexto,
facilitando posteriormente su análisis y diagnóstico.
18. Diagramas

Los diagramas de Technical Challenges deben ser:

Simples.
Genéricos.
Fáciles de entender.
Sin información privada.

Preferir:

SVG.
Mermaid si resulta conveniente.
CSS diagrams cuando sean simples.

Evitar diagramas excesivamente detallados.

El objetivo no es documentar una arquitectura real.

El objetivo es explicar:

Problem
   ↓
Approach
   ↓
Solution
   ↓
Result
19. Contact

Título:

Let's work together

Texto placeholder:

¿Tenés un proyecto, una oportunidad laboral o simplemente
querés ponerte en contacto?

Podés encontrarme en:

GitHub
LinkedIn
Email

Agregar CTA:

[Get in touch]

El email debe estar protegido contra scraping cuando sea razonable.

20. Footer

Contenido:

© 2026 Esteban Pinto

Built with Astro

GitHub
LinkedIn

No agregar información innecesaria.

21. Responsive design

El sitio debe funcionar correctamente en:

Desktop.
Laptop.
Tablet.
Mobile.

Diseñar mobile-first.

Priorizar:

legibilidad,
navegación,
espaciado,
tamaño de botones,
diagramas adaptables.

Los diagramas deben poder visualizarse correctamente en pantallas pequeñas.

Cuando un diagrama sea demasiado ancho:

permitir scroll horizontal controlado,
o utilizar una versión responsive simplificada.
22. Accesibilidad

Implementar como mínimo:

HTML semántico.
Navegación mediante teclado.
aria-label cuando sea necesario.
Contraste suficiente.
Focus states visibles.
alt descriptivos.
No depender exclusivamente del color.
Respetar prefers-reduced-motion.

Las animaciones deben desactivarse o reducirse cuando:

@media (prefers-reduced-motion: reduce)
23. Animaciones

Utilizar pocas animaciones.

Permitidas:

Fade-in sutil.
Hover de botones.
Transiciones de cards.
Aparición suave de elementos.
Cambio de tema.
Pequeños movimientos en elementos decorativos.

No utilizar:

animaciones constantes,
scroll hijacking,
grandes transformaciones,
elementos que se muevan permanentemente,
animaciones que dificulten leer contenido.

La página debe sentirse viva pero profesional.

24. SEO

Implementar:

title
description
canonical
Open Graph
Twitter/X metadata
favicon
robots.txt
sitemap

Title placeholder:

Esteban Pinto | Backend Developer

Description placeholder:

Portfolio de Esteban Pinto, Backend Developer especializado
en Java, Spring Boot y desarrollo de sistemas de software.

Agregar structured data cuando sea apropiado.

25. Performance

Priorizar:

Static generation.
Imágenes optimizadas.
SVG.
Lazy loading.
Poco JavaScript.
Evitar dependencias innecesarias.
Evitar fuentes excesivamente pesadas.
Minimizar client-side hydration.

El portfolio debe cargar rápidamente incluso en conexiones lentas.

26. Arquitectura del proyecto

Propuesta:

src/
│
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ThemeToggle.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Experience.astro
│   ├── ProjectCard.astro
│   ├── SkillGroup.astro
│   ├── ChallengeCard.astro
│   ├── ChallengeDiagram.astro
│   └── Contact.astro
│
├── content/
│   ├── projects/
│   └── challenges/
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── ProjectLayout.astro
│   └── ChallengeLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── projects/
│   │   └── [slug].astro
│   └── challenges/
│       └── [slug].astro
│
├── styles/
│   ├── global.css
│   ├── theme.css
│   └── components.css
│
└── assets/

Utilizar Astro Content Collections para proyectos y technical challenges cuando sea conveniente.

27. Modelo de contenido
Project
---
title: "Project name"
description: "Short description"
category: "Backend"
featured: true
private: false
technologies:
  - Java
  - Spring Boot
  - MySQL
github: ""
demo: ""
---
Technical Challenge
---
title: "Challenge title"
description: "Short description"
category: "Backend"
technologies:
  - Java
  - Spring Boot
featured: true
---

Contenido:

## Context

Generic context.

## Problem

Generic problem.

## Approach

How the problem was analyzed.

## Solution

Generic explanation of the solution.

## Result

Result and, when appropriate, measurable improvement.
28. Content guidelines

Todo contenido del portfolio debe seguir estas reglas:

Ser específico cuando sea seguro

Preferir:

"Optimicé una operación que procesaba una gran cantidad de registros."

Sobre:

"Optimicé cosas del backend."

Generalizar información confidencial

Preferir:

"Una aplicación empresarial"

Sobre:

"[Nombre exacto del sistema interno]"

Mostrar impacto

Cuando sea posible:

Before: ~12 seconds
After:  ~4 seconds

Siempre que publicar la métrica no revele información sensible.

Explicar el razonamiento

No limitarse a:

"Usé X tecnología."

Explicar:

"El problema estaba relacionado con..."

"Analicé..."

"La solución consistió en..."

Esto permite demostrar conocimiento sin revelar información privada.

29. Personalidad

Agregar pequeños detalles que hagan que el sitio sea reconocible como propio.

Ejemplos:

Un pequeño elemento visual relacionado con código.
Uso consistente del color de acento.
Pequeños snippets de código decorativos.
Detalles inspirados en terminales.
Microanimaciones.
Frases técnicas cortas.

Ejemplo:

while (problem.exists()) {
    analyze();
    build();
    improve();
}

Este tipo de elemento debe ser decorativo y discreto.

No convertir el Hero en una terminal gigante.

30. Principio general

El portfolio debe responder rápidamente estas preguntas:

Who are you?
        ↓
What do you do?
        ↓
What have you worked on?
        ↓
What can you build?
        ↓
How do you solve problems?
        ↓
How can I contact you?

La prioridad del contenido debe ser:

Professional experience
        ↓
Projects
        ↓
Technical challenges
        ↓
Skills
        ↓
Education

La experiencia práctica debe tener más protagonismo que el título universitario.

31. Primera versión

La primera versión del proyecto debe implementarse con contenido placeholder pero con la estructura definitiva.

Debe incluir:

Astro funcionando.
Dark/light mode.
Responsive design.
Header.
Hero.
About.
Experience.
Projects.
Technical Skills.
Technical Challenges.
Contact.
Footer.
SEO básico.
Accesibilidad.
Animaciones sutiles.
Arquitectura preparada para agregar páginas de proyectos y challenges.

No intentar completar todo el contenido personal en la primera implementación.

Primero construir una base visual y técnica sólida.

Después reemplazar progresivamente los placeholders con información real.

32. Resultado esperado

El resultado final debe sentirse como:

Un portfolio profesional de un Backend Developer moderno, con experiencia real en desarrollo de software, capaz de mostrar conocimiento técnico y capacidad para resolver problemas sin exponer información confidencial de proyectos profesionales.

Debe evitar sentirse como:

Un template genérico de portfolio de desarrollador.

La personalidad debe surgir de la combinación de:

Contenido real
+
Diseño sobrio
+
Detalles visuales propios
+
Technical Challenges
+
Diagramas
+
Buena experiencia de usuario

y no de una gran cantidad de efectos visuales.


### Una decisión que considero especialmente buena

La sección **Technical Challenges** puede terminar siendo una de las partes más valiosas del portfolio. En tu caso permite contar cosas como optimización de Hibernate, manejo de archivos, autorización, WebSockets, observabilidad, errores frontend, despliegues, etc., pero **desacoplándolas completamente de los detalles confidenciales de AGPS**.

Además, te permite mostrar algo que un listado de tecnologías no demuestra: **cómo pensás frente a un problema técnico**.

Para la implementación inicial yo mantendría **todo en una sola página + páginas individuales para Projects y Challenges**,