/**
 * Instagram Service - Fetches posts from Instagram Graph API
 */

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

    var statusCode = response.getResponseCode();
    var responseBody = response.getContentText();

    if (statusCode === 200) {
      var data = JSON.parse(responseBody);
      return createResponse('success', 'Instagram feed fetched successfully', data);
    } else {
      return createResponse('error', 'Instagram API error: ' + statusCode, JSON.parse(responseBody));
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
