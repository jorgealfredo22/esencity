# Esencity Backend - Google Apps Script

Backend API para el sitio web de Esencity Peluquería, construido con Google Apps Script.

## Estructura de archivos

- `Code.gs` - Punto de entrada principal (doGet/doPost)
- `Config.gs` - Configuración del proyecto
- `DriveService.gs` - Servicio para obtener imágenes de Google Drive
- `InstagramService.gs` - Servicio para obtener posts de Instagram
- `ResponseService.gs` - Helpers de respuesta y servicios de datos
- `appsscript.json` - Configuración del proyecto Apps Script

## Configuración

### 1. Crear proyecto en Google Apps Script

1. Ir a [script.google.com](https://script.google.com)
2. Crear un nuevo proyecto
3. Copiar todos los archivos `.gs` y `appsscript.json` al proyecto

### 2. Configurar variables en `Config.gs`

```javascript
var CONFIG = {
  DRIVE_FOLDER_ID: 'TU_DRIVE_FOLDER_ID',
  INSTAGRAM_ACCESS_TOKEN: 'TU_INSTAGRAM_ACCESS_TOKEN',
  INSTAGRAM_ACCOUNT_ID: 'TU_INSTAGRAM_ACCOUNT_ID',
  SPREADSHEET_ID: 'TU_SPREADSHEET_ID',
  CONTACT_SHEET_NAME: 'Contactos',
  ALLOWED_ORIGINS: ['https://esencity.com', 'http://localhost:3000'],
  CACHE_DURATION: 3600
};
```

### 3. Configurar Google Drive

1. Crear una carpeta en Google Drive para las imágenes de la galería
2. Copiar el ID de la carpeta (la parte final de la URL)
3. Actualizar `DRIVE_FOLDER_ID` en `Config.gs`

### 4. Configurar Instagram API

1. Crear una app en [Facebook Developers](https://developers.facebook.com/)
2. Obtener un token de acceso para Instagram Graph API
3. Obtener el ID de la cuenta de Instagram
4. Actualizar `INSTAGRAM_ACCESS_TOKEN` e `INSTAGRAM_ACCOUNT_ID` en `Config.gs`

### 5. Configurar Google Sheets

1. Crear una Google Sheet para almacenar los contactos
2. Copiar el ID de la sheet (la parte final de la URL)
3. Actualizar `SPREADSHEET_ID` en `Config.gs`

### 6. Deploy

1. Click en "Deploy" > "New deployment"
2. Seleccionar tipo "Web app"
3. Configurar:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click en "Deploy"
5. Copiar la URL del web app
6. Actualizar `NEXT_PUBLIC_APPS_SCRIPT_URL` en `.env.local` del frontend

## Endpoints

### GET

- `?action=getServices` - Obtiene la lista de servicios
- `?action=getGallery` - Obtiene las imágenes de la galería desde Drive
- `?action=getInstagramFeed` - Obtiene el feed de Instagram

### POST

- `action: 'submitContact'` - Envía un formulario de contacto

```json
{
  "action": "submitContact",
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "phone": "+541112345678",
  "message": "Quiero reservar un turno"
}
```

## Respuestas

Todas las respuestas siguen este formato:

```json
{
  "status": "success",
  "message": "Descripción de la respuesta",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "data": {}
}
```

## Desarrollo

Para probar localmente:

1. Usar [clasp](https://github.com/google/clasp) para sincronizar archivos
2. O copiar manualmente los archivos al editor de Apps Script

```bash
npm install -g @google/clasp
clasp login
clasp create --type standalone
clasp push
```
