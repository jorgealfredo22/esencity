export function proxyDriveUrl(url: string, size = "w1000"): string {
  const match = url.match(/https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)/);
  if (match) {
    return `/api/apps-script/image?id=${match[1]}&sz=${size}`;
  }
  return url;
}
