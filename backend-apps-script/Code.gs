/**
 * Main entry point for Google Apps Script Web App
 * Handles GET and POST requests from the frontend
 */

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
