# Esencity Backend — Google Apps Script

Backend API para Esencity Peluquería. Provee servicios, galería, feed de Instagram y formulario de contacto.

## Estructura de archivos

Crear estos 6 archivos en el editor de Apps Script en este orden:

| # | Archivo | Tipo |
|---|---------|------|
| 1 | `appsscript.json` | Manifiesto |
| 2 | `Config.gs` | Configuración |
| 3 | `DriveService.gs` | Servicio de Drive |
| 4 | `InstagramService.gs` | Servicio de Instagram |
| 5 | `ResponseService.gs` | Respuestas y servicios |
| 6 | `Code.gs` | Punto de entrada |

---

## 1. `appsscript.json`

Archivo → Nuevo → HTML → renombrar a `appsscript.json`. También activar en Configuración → "Mostrar archivo de manifiesto".

```json
{
  "timeZone": "America/Argentina/Buenos_Aires",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/script.external_request"
  ],
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "ANYONE_ANONYMOUS"
  }
}
```

---

## 2. `Config.gs`

Archivo → Nuevo → Archivo de secuencia de comandos.

```javascript
var CONFIG = {
  DRIVE_FOLDER_ID: 'YOUR_DRIVE_FOLDER_ID',
  SERVICE_IMAGES_FOLDER_ID: '1Tel9IUG-KjU7Dl8h0Zks-D30HHFK10e9',
  INSTAGRAM_ACCESS_TOKEN: 'YOUR_INSTAGRAM_ACCESS_TOKEN',
  INSTAGRAM_ACCOUNT_ID: 'YOUR_INSTAGRAM_ACCOUNT_ID',
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',
  CONTACT_SHEET_NAME: 'Contactos',
  ALLOWED_ORIGINS: [
    'https://esencity.com',
    'https://www.esencity.com',
    'http://localhost:3000'
  ],
  CACHE_DURATION: 3600
};
```

---

## 3. `DriveService.gs`

Archivo → Nuevo → Archivo de secuencia de comandos.

```javascript
function getGallery() {
  try {
    var folderId = CONFIG.DRIVE_FOLDER_ID;
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var images = [];
    while (files.hasNext()) {
      var file = files.next();
      var mimeType = file.getMimeType();
      if (mimeType.indexOf('image') !== -1) {
        images.push({
          id: file.getId(),
          name: file.getName(),
          mimeType: mimeType,
          url: 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w1000',
          thumbnailUrl: 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w400',
          width: 1000,
          height: 1000
        });
      }
    }
    return createResponse('success', 'Gallery fetched successfully', {
      images: images,
      total: images.length
    });
  } catch (error) {
    return createResponse('error', 'Error fetching gallery: ' + error.toString(), null);
  }
}

function getServiceImages() {
  try {
    var folderId = CONFIG.SERVICE_IMAGES_FOLDER_ID;
    if (!folderId || folderId.indexOf('YOUR_') === 0) {
      return {};
    }
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var imageMap = {};
    while (files.hasNext()) {
      var file = files.next();
      var mimeType = file.getMimeType();
      if (mimeType.indexOf('image') !== -1) {
        var name = file.getName();
        var serviceId = name.replace(/\.[^.]+$/, '');
        imageMap[serviceId] = 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w1200';
      }
    }
    return imageMap;
  } catch (error) {
    console.error('Error fetching service images: ' + error.toString());
    return {};
  }
}

function getDriveFileUrl(fileId) {
  return 'https://drive.google.com/thumbnail?id=' + fileId + '&sz=w1000';
}

function getDriveFileThumbnail(fileId, size) {
  size = size || 400;
  return 'https://drive.google.com/thumbnail?id=' + fileId + '&sz=w' + size;
}
```

---

## 4. `InstagramService.gs`

Archivo → Nuevo → Archivo de secuencia de comandos.

```javascript
function getInstagramFeed() {
  try {
    var accessToken = CONFIG.INSTAGRAM_ACCESS_TOKEN;
    var accountId = CONFIG.INSTAGRAM_ACCOUNT_ID;
    if (!accessToken || !accountId) {
      return createResponse('error', 'Instagram credentials not configured', null);
    }
    var url = 'https://graph.facebook.com/v18.0/' + accountId + '/media' +
      '?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp' +
      '&access_token=' + accessToken +
      '&limit=12';
    var response = UrlFetchApp.fetch(url, {
      method: 'get',
      muteHttpExceptions: true
    });
    if (response.getResponseCode() === 200) {
      var data = JSON.parse(response.getContentText());
      return createResponse('success', 'Instagram feed fetched successfully', data);
    } else {
      return createResponse('error', 'Instagram API error: ' + response.getResponseCode(), null);
    }
  } catch (error) {
    return createResponse('error', 'Error fetching Instagram feed: ' + error.toString(), null);
  }
}

function getInstagramPost(postId) {
  try {
    var accessToken = CONFIG.INSTAGRAM_ACCESS_TOKEN;
    var url = 'https://graph.facebook.com/v18.0/' + postId +
      '?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp' +
      '&access_token=' + accessToken;
    var response = UrlFetchApp.fetch(url, {
      method: 'get',
      muteHttpExceptions: true
    });
    if (response.getResponseCode() === 200) {
      var data = JSON.parse(response.getContentText());
      return createResponse('success', 'Post fetched successfully', data);
    } else {
      return createResponse('error', 'Instagram API error', null);
    }
  } catch (error) {
    return createResponse('error', 'Error fetching post: ' + error.toString(), null);
  }
}
```

---

## 5. `ResponseService.gs`

Archivo → Nuevo → Archivo de secuencia de comandos.

```javascript
function createResponse(status, message, data) {
  var response = {
    status: status,
    message: message,
    timestamp: new Date().toISOString()
  };
  if (data !== null && data !== undefined) {
    response.data = data;
  }
  return response;
}

function getServices() {
  var services = [
    {
      id: 'corte',
      name: 'Corte & Styling',
      description: 'Cortes modernos y clásicos para todos los estilos',
      services: [
        { id: 'corte-mujer', name: 'Corte Mujer', description: 'Corte personalizado con lavado y styling incluido', price: 3500, duration: '45 min', category: 'corte' },
        { id: 'corte-hombre', name: 'Corte Hombre', description: 'Corte clásico o moderno con acabado perfecto', price: 2500, duration: '30 min', category: 'corte' },
        { id: 'corte-nino', name: 'Corte Niño/a', description: 'Corte divertido y profesional para los más pequeños', price: 2000, duration: '30 min', category: 'corte' },
        { id: 'brushing', name: 'Brushing', description: 'Secado y peinado profesional para cualquier ocasión', price: 2000, duration: '30 min', category: 'corte' }
      ]
    },
    {
      id: 'color',
      name: 'Coloración',
      description: 'Técnicas de color de vanguardia para un look único',
      services: [
        { id: 'color-completo', name: 'Color Completo', description: 'Tinte completo con productos de alta calidad', price: 8000, duration: '2 hrs', category: 'color' },
        { id: 'mechas', name: 'Mechas / Balayage', description: 'Mechas naturales o llamativas con técnica balayage', price: 12000, duration: '3 hrs', category: 'color' },
        { id: 'reflejos', name: 'Reflejos', description: 'Reflejos sutiles para dar dimensión y brillo', price: 9000, duration: '2.5 hrs', category: 'color' },
        { id: 'decoloracion', name: 'Decoloración', description: 'Aclarado profesional con cuidado del cabello', price: 10000, duration: '2-3 hrs', category: 'color' }
      ]
    },
    {
      id: 'tratamientos',
      name: 'Tratamientos',
      description: 'Cuidado y restauración para un cabello saludable',
      services: [
        { id: 'hidratacion', name: 'Hidratación Profunda', description: 'Tratamiento intensivo de hidratación y nutrición', price: 5000, duration: '1 hr', category: 'tratamiento' },
        { id: 'keratina', name: 'Keratina', description: 'Alisado y brillo con tratamiento de keratina profesional', price: 15000, duration: '2-3 hrs', category: 'tratamiento' },
        { id: 'botox-capilar', name: 'Botox Capilar', description: 'Rejuvenecimiento y volumen para cabello dañado', price: 8000, duration: '1.5 hrs', category: 'tratamiento' },
        { id: 'reconstruccion', name: 'Reconstrucción', description: 'Reparación profunda para cabello muy dañado', price: 6000, duration: '1.5 hrs', category: 'tratamiento' }
      ]
    },
    {
      id: 'peinados',
      name: 'Peinados',
      description: 'Peinados especiales para eventos y ocasiones únicas',
      services: [
        { id: 'peinado-novia', name: 'Peinado de Novia', description: 'Look elegante para tu día especial con prueba incluida', price: 12000, duration: '1.5 hrs', category: 'peinado' },
        { id: 'peinado-fiesta', name: 'Peinado de Fiesta', description: 'Peinado elegante para eventos y celebraciones', price: 6000, duration: '1 hr', category: 'peinado' },
        { id: 'alaciado', name: 'Alaciado', description: 'Alaciado profesional con plancha y productos protectores', price: 4000, duration: '1 hr', category: 'peinado' }
      ]
    }
  ];

  var serviceImages = getServiceImages();
  for (var i = 0; i < services.length; i++) {
    for (var j = 0; j < services[i].services.length; j++) {
      var serviceId = services[i].services[j].id;
      services[i].services[j].image = serviceImages[serviceId] || null;
    }
  }
  return createResponse('success', 'Services fetched successfully', services);
}

function submitContactForm(data) {
  try {
    var name = data.name;
    var email = data.email;
    var phone = data.phone || '';
    var message = data.message;
    if (!name || !email || !message) {
      return createResponse('error', 'Missing required fields', null);
    }
    var sheet = getContactSheet();
    sheet.appendRow([new Date(), name, email, phone, message]);
    return createResponse('success', 'Message sent successfully', null);
  } catch (error) {
    return createResponse('error', 'Error submitting form: ' + error.toString(), null);
  }
}

function getContactSheet() {
  var spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(CONFIG.CONTACT_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.CONTACT_SHEET_NAME);
    sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Teléfono', 'Mensaje']);
  }
  return sheet;
}
```

---

## 6. `Code.gs`

Archivo → Nuevo → Archivo de secuencia de comandos.

```javascript
function doGet(e) {
  var action = e.parameter.action;
  var result;
  try {
    switch (action) {
      case 'getServices':
        result = getServices();
        break;
      case 'getGallery':
        result = getGallery();
        break;
      case 'getInstagramFeed':
        result = getInstagramFeed();
        break;
      default:
        result = createResponse('error', 'Invalid action', null);
    }
  } catch (error) {
    result = createResponse('error', error.toString(), null);
  }
  return createJsonOutput(result);
}

function doPost(e) {
  var result;
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    switch (action) {
      case 'submitContact':
        result = submitContactForm(data);
        break;
      default:
        result = createResponse('error', 'Invalid action', null);
    }
  } catch (error) {
    result = createResponse('error', error.toString(), null);
  }
  return createJsonOutput(result);
}

function createJsonOutput(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## Deploy

1. Autorizar: seleccionar `getServices` del desplegable y ejecutar ▶️. Aceptar todos los permisos.
2. **Implementar → Nueva implementación**
3. Tipo: **Aplicación web**
4. Ejecutar como: **Yo**
5. Acceso: **Cualquier persona**
6. **Implementar**
7. Copiar la URL y configurarla en `frontend-next/.env.local` como `NEXT_PUBLIC_APPS_SCRIPT_URL`

---

## Endpoints

| Método | Parámetro | Descripción |
|--------|----------|-------------|
| GET | `?action=getServices` | Lista de servicios con imágenes de Drive |
| GET | `?action=getGallery` | Imágenes de la galería desde Drive |
| GET | `?action=getInstagramFeed` | Feed de Instagram |
| POST | `{ action: "submitContact", name, email, phone?, message }` | Formulario de contacto |

---

## Imágenes de servicios

La carpeta de Drive `SERVICE_IMAGES_FOLDER_ID` contiene imágenes nombradas según el ID del servicio (sin espacios ni tildes):

| Servicio | Archivo |
|----------|---------|
| Corte Mujer | `corte-mujer.jpg` |
| Corte Hombre | `corte-hombre.jpg` |
| Corte Niño/a | `corte-nino.jpg` |
| Brushing | `brushing.jpg` |
| Color Completo | `color-completo.jpg` |
| Mechas / Balayage | `mechas.jpg` |
| Reflejos | `reflejos.jpg` |
| Decoloración | `decoloracion.jpg` |
| Hidratación Profunda | `hidratacion.jpg` |
| Keratina | `keratina.jpg` |
| Botox Capilar | `botox-capilar.jpg` |
| Reconstrucción | `reconstruccion.jpg` |
| Peinado de Novia | `peinado-novia.jpg` |
| Peinado de Fiesta | `peinado-fiesta.jpg` |
| Alaciado | `alaciado.jpg` |
