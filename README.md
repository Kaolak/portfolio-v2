# Esteban Pinto — Personal Portfolio

[![Astro](https://img.shields.io/badge/Astro-v5-ff5d01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-all%20rights%20reserved-lightgrey)](#license)

Personal portfolio of **Esteban Pinto**, Backend Developer focused on Java, Spring Boot and enterprise software development.

The site presents professional experience, selected projects and a **Technical Challenges** section designed to show problem-solving skills without exposing confidential information from professional projects.

**Live site:** [https://estebanpinto.dev](https://estebanpinto.dev)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Content Authoring](#content-authoring)
- [Internationalization (i18n)](#internationalization-i18n)
- [SEO](#seo)
- [Accessibility & Performance](#accessibility--performance)
- [Deployment](#deployment)
- [License](#license)

---

## About

This portfolio complements the résumé instead of duplicating it. Its main goal is to communicate:

- **Who** I am and what I do.
- **What** I have worked on.
- **How** I approach and solve technical problems.

Confidential information about professional projects (internal architecture, data models, endpoints, business rules, infrastructure) is never published. Instead, technical problems are described generically in the [Technical Challenges](#content-authoring) section, with context, problem, approach, solution and result.

---

## Features

- **Fully static** — generated at build time with Astro's static output; almost no client-side JavaScript.
- **Bilingual (es / en)** — Spanish default locale without URL prefix, English under `/en/*`, with an accessible language switcher.
- **Dark / light mode** — respects `prefers-color-scheme`, persists the choice in `localStorage` and avoids flash-of-theme on load.
- **Content Collections** — projects, challenges and challenge tabs defined as Markdown with Zod-validated frontmatter.
- **Responsive, mobile-first** — layouts and diagrams adapt from mobile to desktop.
- **SEO** — canonical URLs, Open Graph and Twitter/X metadata, `robots.txt` and an i18n-aware sitemap.
- **Accessible** — semantic HTML, keyboard navigation, visible focus states, `aria-*` labels and `prefers-reduced-motion` support.
- **Sensible animations** — subtle fades and transitions only; no heavy effects or scroll hijacking.

---

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | [Astro 5](https://astro.build)                 |
| Language   | TypeScript, JavaScript, HTML, CSS              |
| Content    | Astro Content Collections + Markdown + Zod     |
| Styling    | Plain CSS (design tokens, theme, components)   |
| SEO        | `@astrojs/sitemap`                             |
| Diagrams   | Inline SVG                                     |

No frontend framework is used unless there is a concrete need — the site is intentionally lightweight and static.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) `^18.17.1 || ^20.3.0 || >=22.0.0` (LTS recommended)
- npm (bundled with Node.js)
- Git

### Installation

```bash
git clone https://github.com/Kaolak/portfolio-v2.git
cd portfolio-v2
npm install
```

### Development

```bash
npm run dev
```

The site is served at [http://localhost:4321](http://localhost:4321) by default.

### Production build

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

---

## Available Scripts

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload       |
| `npm run start`   | Alias of the development server                    |
| `npm run build`   | Build the production site into `dist/`             |
| `npm run preview` | Preview the production build locally               |

---

## Project Structure

```
portfolio/
├── astro.config.mjs        # Astro config: static output, i18n routing, sitemap
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── assets/diagrams/    # Static SVG diagrams
├── src/
│   ├── assets/diagrams/    # Diagrams bundled by Astro
│   ├── components/         # Reusable UI components (.astro)
│   │   └── pages/          # Page-level compositions (Home, Project, Challenge, 404)
│   ├── content/            # Content Collections
│   │   ├── config.ts       # Collection schemas (Zod)
│   │   ├── projects/{es,en}
│   │   ├── challenges/{es,en}
│   │   └── challengeTabs/{es,en}
│   ├── data/               # Structured data (e.g. experience modules)
│   ├── i18n/               # Dictionaries (es.json, en.json), config and helpers
│   ├── layouts/            # BaseLayout and shared page chrome
│   ├── pages/              # Routes
│   │   ├── index.astro     # /        → Spanish (default locale)
│   │   ├── en/…            # /en/…    → English
│   │   ├── projects/[slug].astro
│   │   ├── challenges/[slug].astro
│   │   └── 404.astro
│   └── styles/
│       ├── theme.css       # Design tokens (colors, typography) per theme
│       ├── global.css      # Reset and base styles
│       └── components.css  # Component styles
└── dist/                   # Build output (generated, git-ignored)
```

Home page sections: **Header → Hero → About → Experience → Selected Projects → Technical Skills → Technical Challenges → Contact → Footer**.

---

## Content Authoring

All content lives in Markdown files under `src/content/`, split by locale.

### Adding a project

Create `src/content/projects/<locale>/<slug>.md`:

```markdown
---
title: "Project name"
description: "Short description shown on the card."
category: "Backend"
featured: true
private: false
technologies:
  - Java
  - Spring Boot
  - MySQL
github: "https://github.com/username/repo"
demo: "https://example.com"
diagram: "my-diagram"
---

## Overview

…

## Problem

…

## Solution

…
```

| Field          | Type      | Notes                                              |
| -------------- | --------- | -------------------------------------------------- |
| `title`        | `string`  | Required                                           |
| `description`  | `string`  | Required                                           |
| `category`     | `string`  | Required, e.g. `Backend / Full Stack`              |
| `featured`     | `boolean` | Show in the featured projects section              |
| `private`      | `boolean` | Renders the “Private project” notice instead       |
| `technologies` | `string[]`| Rendered as tags                                   |
| `github`       | `string`  | Optional                                           |
| `demo`         | `string`  | Optional                                           |
| `diagram`      | `string`  | Optional diagram id from `public/assets/diagrams`  |

### Adding a technical challenge

Create `src/content/challenges/<locale>/<slug>.md`:

```markdown
---
title: "Reducing slow backend responses"
description: "Short description of the challenge."
category: "Backend"
technologies:
  - Java
  - Spring Boot
featured: true
---

## Context

Generic context.

## Problem

What went wrong and why it mattered.

## Approach

How the problem was analyzed.

## Solution

What was implemented (keep confidential details out).

## Result

Outcome, with metrics only when it is safe to publish them.
```

### Content guidelines

- **Be specific when it is safe**, generic when it is not: “an enterprise application”, never internal names, URLs, credentials or private business rules.
- **Show impact** with measurable results when publishing them is harmless (`Before: ~12s → After: ~4s`).
- **Explain the reasoning**, not just the technology used — this is what demonstrates problem-solving ability.
- Keep diagrams simple and generic: `Problem → Approach → Solution → Result`.

---

## Internationalization (i18n)

- Locales: `es` (default) and `en`, configured in `astro.config.mjs`.
- Routing: Spanish at `/`, English at `/en/*` (`prefixDefaultLocale: false`).
- UI strings live in `src/i18n/es.json` and `src/i18n/en.json`; helpers are exported from `src/i18n/index.ts`.
- Content Collections mirror locales with `es/` and `en/` folders — **keep both in sync when editing content**.
- The sitemap is generated with i18n annotations for search engines.

To add a new locale: extend `locales` in `astro.config.mjs` and `src/i18n/config.ts`, add the dictionary JSON, and create the corresponding content folders and `src/pages/<locale>/` routes.

---

## SEO

- Per-page `title`, `description` and canonical URL.
- Open Graph and Twitter/X metadata with locale-aware values.
- `public/robots.txt` allowing crawling and pointing at the sitemap.
- Sitemap generated at build time (`/sitemap-index.xml`).
- Structured data where appropriate (see `BaseLayout.astro`).

---

## Accessibility & Performance

- Semantic HTML landmarks and heading hierarchy.
- Full keyboard navigation with visible focus states.
- Descriptive `alt` text and `aria-label`s; meaning is never conveyed by color alone.
- `prefers-reduced-motion` disables or reduces animations.
- Static HTML + CSS: no framework hydration, minimal JavaScript (theme toggle, menu, language switcher).
- SVG-first assets and lazy-loaded images for fast loads on slow connections.

---

## Deployment

The build output is a static site in `dist/`, so it can be hosted on any static provider:

- **[Netlify](https://www.netlify.com)** — build command `npm run build`, publish directory `dist`
- **[Vercel](https://vercel.com)** — framework preset *Astro*, output `dist`
- **[Cloudflare Pages](https://pages.cloudflare.com)** — build `npm run build`, output `dist`
- Any web server (nginx, Apache) serving the contents of `dist/`

Update `site` in `astro.config.mjs` when deploying to a different domain — it drives canonical URLs and the sitemap.

---

## License

All rights reserved. The source code is available for reference, and content, design and assets may not be reused without permission.

© 2026 Esteban Pinto.
