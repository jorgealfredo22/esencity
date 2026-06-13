# Contexto de Despliegue: Cloudflare Workers

> [!WARNING]
> **ESTE PROYECTO SE DESPLIEGA COMO UN CLOUDFLARE WORKER CON ASSETS. NO USAR CLOUDFLARE PAGES.**
> 
> Muchos agentes intentan migrar este proyecto a Cloudflare Pages ejecutando `wrangler pages deploy`. **ESTO ESTÁ ESTRICTAMENTE PROHIBIDO** porque cambia la URL del proyecto, rompe el enrutamiento y deshace la configuración existente de Workers.

## Reglas de Despliegue

1. **El comando de despliegue**: Siempre debe usarse `wrangler deploy` (NO `wrangler pages deploy`). Esto está configurado en el script `deploy` del `package.json` de `frontend-next/`.
2. **El archivo de configuración**: El archivo `/frontend-next/wrangler.toml` tiene la configuración `main = ".vercel/output/static/_worker.js/index.js"` y `[assets] directory = ".vercel/output/static"`. Esta es la configuración correcta para un *Worker with Assets*. NO la modifiques para apuntar a un proyecto de Pages.
3. **Imágenes**: El proyecto usa intencionalmente etiquetas nativas `<img>` en lugar del componente `<Image>` (`next/image`) de Next.js. Esto es porque `<Image>` no está optimizado por defecto para correr en un Cloudflare Worker sin configuraciones externas (OpenNext o Custom Loaders). El linter está configurado para ignorar la regla `@next/next/no-img-element`. **NO REFACTORICES las etiquetas `<img>` a `<Image>`.**

## Proceso de Build y Deploy

El flujo de despliegue configurado en el script `npm run deploy` de `frontend-next/` es el siguiente:
1. `next build`: Compila la aplicación Next.js.
2. `npx @cloudflare/next-on-pages`: Transforma la salida del build para que sea compatible con el entorno de Edge de Cloudflare (genera el `_worker.js`).
3. `echo '_worker.js' > .vercel/output/static/.assetsignore`: Evita que el propio script del worker sea tratado como un asset estático.
4. `wrangler deploy`: Sube el Worker y los assets a Cloudflare.
