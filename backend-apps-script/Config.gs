/**
 * Configuration file for Esencity Apps Script Backend
 * Update these values with your actual configuration
 */

var CONFIG = {
  // Google Drive folder ID containing gallery images
  DRIVE_FOLDER_ID: 'YOUR_DRIVE_FOLDER_ID',

  // Google Drive folder ID containing service images (filename = service ID)
  SERVICE_IMAGES_FOLDER_ID: '1Tel9IUG-KjU7Dl8h0Zks-D30HHFK10e9',

  // Instagram API configuration
  INSTAGRAM_ACCESS_TOKEN: 'YOUR_INSTAGRAM_ACCESS_TOKEN',
  INSTAGRAM_ACCOUNT_ID: 'YOUR_INSTAGRAM_ACCOUNT_ID',

  // Google Sheet ID for contact form responses
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',
  CONTACT_SHEET_NAME: 'Contactos',

  // CORS allowed origins
  ALLOWED_ORIGINS: [
    'https://esencity.com',
    'https://www.esencity.com',
    'http://localhost:3000'
  ],

  // Cache duration in seconds
  CACHE_DURATION: 3600 // 1 hour
};
