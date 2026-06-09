# Esencity - Deploy Guide

## Arquitectura del Proyecto

```
esencity/
├── frontend-next/          # Next.js 15 + React 19
│   ├── src/
│   ├── public/
│   ├── wrangler.toml       # Cloudflare Workers config
│   └── package.json
└── backend-apps-script/    # Google Apps Script (separate)
```

---

## Requisitos de Arquitectura para Cloudflare Workers

### 1. Sin API Routes de Next.js (o convertirlas a Workers)

Cloudflare Workers **no soporta** las API routes de Next.js (`src/app/api/`) de forma nativa. Si tu proyecto tiene:

- **API routes** → Convertirlas a funciones del Worker o eliminarlas
- **Server Actions** → Funcionan con `@cloudflare/next-on-pages`
- **Dynamic routes** → Funcionan, pero se pre-renderizan como estáticas

**Regla:** Si usas `output: "export"` en `next.config.ts`, NO puedes tener API routes ni dynamic routes.

### 2. Imágenes: URLs directas, no proxies internos

Las imágenes remotas deben usar URLs directas. **NO** usar rutas como `/api/image?id=xxx` porque:
- Requieren un route handler que no existe en Workers
- El browser puede seguir redirects de URLs externas directamente

```typescript
// ❌ MAL: Requiere route handler interno
const imgSrc = `/api/apps-script/image?id=${fileId}&sz=w1000`;

// ✅ BIEN: URL directa, el browser sigue el redirect
const imgSrc = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
```

### 3. Colores: No forzar `body { color: #fff }` global

Si el body tiene color blanco y hay secciones con fondo claro, el texto será invisible.

```css
/* ❌ MAL: Texto blanco en toda la página */
body { color: #ffffff; }

/* ✅ BIEN: Color por defecto oscuro, secciones oscuras usan clase explícita */
body { color: var(--color-text); }
```

Las secciones con fondo oscuro (hero, CTA) deben usar `text-text-inverse` explícitamente.

### 4. Variables de Entorno

Todas las env vars que se usan en el cliente deben tener prefijo `NEXT_PUBLIC_`:

```env
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/xxx/exec
NEXT_PUBLIC_SITE_URL=https://esencitybarber.com
```

Las que NO tienen `NEXT_PUBLIC_` solo están disponibles en server-side (build time).

### 5. No usar `output: "export"` si necesitas server-side

Si el proyecto necesita:
- API routes
- Server Actions
- Dynamic rendering con `fetch()` en runtime

Entonces **NO** uses `output: "export"`. Usá `@cloudflare/next-on-pages` que convierte el app a un Worker con SSR.

---

## Instrucciones de Deploy

### Pre-requisitos

```bash
# Node.js 18+
node --version

# Wrangler CLI instalado globalmente
npm install -g wrangler

# Autenticado en Cloudflare
wrangler login
```

### Paso 1: Instalar dependencias

```bash
cd frontend-next
npm install
```

### Paso 2: Build para Workers

```bash
# Build de Next.js
npm run build

# Convertir a formato Cloudflare Workers
npx @cloudflare/next-on-pages
```

Esto genera `.vercel/output/static/` con:
- HTML estático pre-renderizado
- `_worker.js` para SSR y routing
- Assets (CSS, JS, imágenes)

### Paso 3: Deploy al Worker

```bash
# Crear archivo .assetsignore para evitar warning
touch .vercel/output/static/.assetsignore

# Deploy
npx wrangler deploy --assets .vercel/output/static
```

El `wrangler.toml` debe tener:
```toml
name = "esencity"
compatibility_date = "2025-06-01"
compatibility_flags = ["nodejs_compat"]
```

### Paso 4: Verificar

```bash
# El Worker se despliega en:
# https://esencity.prigmasoftware.workers.dev

# Si tenés un dominio personalizado configurado en DNS:
curl -sI https://esencitybarber.com
```

### Deploy Automático (CI/CD)

Si el proyecto está conectado a GitHub, Cloudflare Pages puede hacer deploy automático:

1. **Workers & Pages → Create → Connect to Git**
2. Seleccionar repo y branch (`master`)
3. Build command: `cd frontend-next && npm install && npm run build && npx @cloudflare/next-on-pages`
4. Deploy command: `npx wrangler deploy --assets .vercel/output/static`
5. Root directory: `/`

**Importante:** El `package.json` debe tener el script `pages:build`:
```json
{
  "scripts": {
    "pages:build": "next build && npx @cloudflare/next-on-pages"
  }
}
```

---

## Checklist Pre-Deploy

- [ ] No hay rutas `/api/` activas (o están convertidas a Workers)
- [ ] Las imágenes usan URLs directas, no proxies internos
- [ ] `body { color }` no fuerza blanco sobre fondos claros
- [ ] Variables de entorno con `NEXT_PUBLIC_` están en `.env`
- [ ] `wrangler.toml` tiene `name`, `compatibility_date`, `nodejs_compat`
- [ ] `@cloudflare/next-on-pages` está en `devDependencies`
- [ ] Build local pasa sin errores: `npm run build`
- [ ] `npx @cloudflare/next-on-pages` genera `.vercel/output/static/`
- [ ] No hay archivos >25MB en `.next/cache` (limpiar antes de deploy)

---

## Comandos Útiles

```bash
# Limpiar cache antes de build (evita archivos >25MB)
rm -rf .next/cache

# Build completo
npm run build && npx @cloudflare/next-on-pages

# Deploy
npx wrangler deploy --assets .vercel/output/static

# Ver logs del Worker
wrangler tail esencity

# Listar deployments
wrangler deployments list --name esencity
```

---

## Problemas Comunes

### "Asset too large" (>25MB)
```bash
rm -rf .next/cache && npm run build
```

### "Project not found"
Verificar que `name` en `wrangler.toml` coincida con el Worker existente.

### Imágenes 404
Las URLs de imágenes no deben apuntar a `/api/` interno. Usar URLs directas.

### Texto invisible en secciones claras
No usar `body { color: #fff }`. Usar `body { color: var(--color-text) }` y `text-text-inverse` en secciones oscuras.

### API routes no funcionan
Cloudflare Workers no soporta API routes de Next.js directamente. Convertir a funciones del Worker o eliminar.
