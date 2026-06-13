# Esencity

Monorepo with two independent workspaces: Next.js frontend and Google Apps Script backend. Site for a Buenos Aires hair salon — content is in Spanish (es_AR), prices in ARS.

> **¡ATENCIÓN AGENTES!** Antes de realizar cualquier tarea de despliegue en el frontend, debes leer obligatoriamente el archivo `AGENTS_CLOUDFLARE_WORKER.md`. Este proyecto se despliega como un Cloudflare Worker con Assets y tiene reglas estrictas para las imágenes y los comandos de despliegue.

## Workspaces

| Directory | Type | Tech |
|-----------|------|------|
| `frontend-next/` | Next.js app | Next 15, React 19, Tailwind v4, TypeScript |
| `backend-apps-script/` | Backend API | Google Apps Script (no npm) |

## Frontend commands

Run from `frontend-next/`:
- `npm run dev` — Start dev server on http://localhost:3000
- `npm run build` — Production build
- `npm run lint` — ESLint (no separate typecheck command)
- `npm run start` — Start production server

No test suite exists. No CI/CD.

## Path aliases & imports

Use `@/` alias for src (configured in tsconfig.json `paths`):
```ts
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
```

## Environment variables

All prefixed with `NEXT_PUBLIC_` (required for client-side). See `frontend-next/.env.example`:
- `NEXT_PUBLIC_APPS_SCRIPT_URL` — Google Apps Script web app URL
- `NEXT_PUBLIC_INSTAGRAM_USERNAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`

## Tailwind v4 — key differences from v3

- Uses `@tailwindcss/postcss` plugin (not `tailwindcss`)
- `@import "tailwindcss"` replaces `@tailwind base/components/utilities`
- Custom theme tokens defined in `@theme {}` block in `globals.css`
- Theme tokens referenced as CSS custom properties (`var(--color-secondary)`, `var(--radius-lg)`) — NOT Tailwind utility classes like `bg-secondary`
- Utility Tailwind classes still available for spacing, layout, etc.

## Image domains (next.config.ts)

Remote images allowed from: `drive.google.com`, `lh3.googleusercontent.com`, `*.instagram.com`.

## App structure (frontend-next)

```
src/app/            — App Router pages (home, /servicios, sitemap)
src/components/     — Feature-organized (home/, layout/, servicios/, ui/, shared/)
src/lib/            — API client (appsScriptApi.ts), mappers, utils
src/data/           — Static content (services, navigation, site config)
src/types/          — TypeScript interfaces (Service, Gallery, Instagram)
src/hooks/          — Custom hooks (useActiveSection, useAutoSlider)
src/styles/         — animations.css
```

## Architecture

Frontend fetches from Apps Script at build time and via client-side API calls. The `APPS_SCRIPT_URL` env var is the single backend integration point.

**Services data** is **static** in `src/data/services.ts` — not fetched from the API. The API is used for gallery, Instagram feed, and contact form submission.

Backend entrypoint: `backend-apps-script/Code.gs` (doGet/doPost). Deployed manually via [clasp](https://github.com/google/clasp). Do not run npm commands in that directory.

## Key components

- `StickySubmenu` — sticky sub-navigation on scroll (layout component)
- `SliderControls` — prev/next navigation for sliders (ui component)
- `ErrorState`, `EmptyState`, `Loader` — shared state components
