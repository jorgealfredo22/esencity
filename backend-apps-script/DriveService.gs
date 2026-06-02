/**
 * Drive Service - Handles fetching images from Google Drive
 */

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
        imageMap[serviceId] = 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w800';
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
