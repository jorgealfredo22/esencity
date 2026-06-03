# Esencity Backend — Google Apps Script

Backend API para Esencity Peluquería. Provee servicios, galería, feed de Instagram y formulario de contacto.

## Estructura

| Archivo | Descripción |
|---------|-------------|
| `appsscript.json` | Manifiesto del proyecto (timezone, scopes, acceso) |
| `Config.gs` | Variables de configuración (Drive, Instagram, Sheets) |
| `DriveService.gs` | Lectura de imágenes desde Google Drive |
| `InstagramService.gs` | Feed de Instagram vía Facebook Graph API |
| `ResponseService.gs` | Datos de servicios, formulario de contacto |
| `Code.gs` | Punto de entrada (doGet / doPost) |

El código completo de cada archivo está en [CODIGO.md](./CODIGO.md).

## Configuración

### Variables en `Config.gs`

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `DRIVE_FOLDER_ID` | `YOUR_DRIVE_FOLDER_ID` | Carpeta de Drive para galería |
| `SERVICE_IMAGES_FOLDER_ID` | ID de carpeta | Carpeta con imágenes de servicios |
| `INSTAGRAM_ACCESS_TOKEN` | `YOUR_INSTAGRAM_ACCESS_TOKEN` | Token de Facebook Graph API |
| `INSTAGRAM_ACCOUNT_ID` | `YOUR_INSTAGRAM_ACCOUNT_ID` | ID de cuenta de Instagram Business |
| `SPREADSHEET_ID` | `YOUR_SPREADSHEET_ID` | Google Sheet para formulario de contacto |

### Deploy

1. Seleccionar `getServices` del desplegable y ejecutar ▶️ (autorizar permisos)
2. **Implementar → Nueva implementación → Aplicación web**
3. Ejecutar como: **Yo** — Acceso: **Cualquier persona**
4. Copiar la URL y configurarla en `frontend-next/.env.local` como `NEXT_PUBLIC_APPS_SCRIPT_URL`

## Endpoints API

### GET

| Parámetro | Retorna |
|-----------|---------|
| `?action=getServices` | Categorías y servicios con imágenes de Drive |
| `?action=getGallery` | Imágenes de la galería |
| `?action=getInstagramFeed` | Posts de Instagram |

### POST

```json
{
  "action": "submitContact",
  "name": "Nombre",
  "email": "email@ejemplo.com",
  "phone": "+54...",
  "message": "Mensaje"
}
```

Todas las respuestas siguen el formato:

```json
{
  "status": "success",
  "message": "Descripción",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "data": {}
}
```
