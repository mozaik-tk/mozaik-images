# Mozaik Images

Production website for **Mozaik Images** — a photography & motion portfolio.
Built with **Next.js 14 (App Router)**, **TypeScript**, **next/font**, and **next/image**.

## Stack

- **Next.js 14** App Router — file-based routing, server components, SSG.
- **TypeScript** (strict).
- **next/font** — self-hosted, optimized Google fonts (Inter Tight, Instrument Serif, JetBrains Mono).
- **next/image** — optimized, responsive imagery.
- Plain CSS with design tokens (no CSS framework) in `src/app/globals.css`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload. |
| `npm run build` | Production build (type-check + lint + static generation). |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint (`next/core-web-vitals`). |

## Project structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, <head> metadata, app shell
    globals.css         # Design tokens + component styles
    page.tsx            # Home
    work/page.tsx       # Work index
    work/[id]/page.tsx  # Project detail (SSG, one page per project)
    about/page.tsx
    contact/page.tsx
    icon.svg            # Favicon
  components/           # Header, Footer, Hero, WorkGrid, ReelStrip, etc.
  lib/
    data.ts             # Typed content (projects + reel)
```

## Editing content

All content lives in [`src/lib/data.ts`](src/lib/data.ts) (projects, locations,
imagery) and the page components. Contact details (email, phone, studio address)
are in [`src/app/contact/page.tsx`](src/app/contact/page.tsx) and
[`src/components/Footer.tsx`](src/components/Footer.tsx).

### Replacing placeholder imagery

Project images currently point at Unsplash. To use real work:

1. Drop the files in `public/` (e.g. `public/work/sara-theo/01.jpg`) and
   reference them as `/work/sara-theo/01.jpg`, **or** keep remote URLs.
2. If you use a new remote image host, add it to `images.remotePatterns` in
   [`next.config.mjs`](next.config.mjs).

## Deploy

Deploys as-is to **Vercel** (zero config) or any Node host via `npm run build`
+ `npm run start`. Most routes are static; project pages are pre-rendered.
