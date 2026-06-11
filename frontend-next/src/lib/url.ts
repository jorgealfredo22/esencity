export function proxyDriveUrl(url: string, size = "w1000", cacheBuster?: string | number): string {
  const match = url.match(/https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)/);
  if (match) {
    let proxyUrl = `/api/apps-script/image?id=${match[1]}&sz=${size}`;
    if (cacheBuster) {
      proxyUrl += `&t=${cacheBuster}`;
    }
    return proxyUrl;
  }
  return url;
}

export function directDriveUrl(url: string, cacheBuster?: string | number): string {
  const match = url.match(/https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)(?:&sz=(w\d+))?/);
  if (match) {
    const fileId = match[1];
    const size = match[2] || 'w1000';
    let directUrl = `https://lh3.googleusercontent.com/d/${fileId}=${size}`;
    if (cacheBuster) {
      directUrl += `?t=${cacheBuster}`;
    }
    return directUrl;
  }
  return url;
}
