export function proxyDriveUrl(url: string, size = "w1000"): string {
  return url.replace(
    /https:\/\/drive\.google\.com\/thumbnail\?id=([^&]+)&sz=w\d+/,
    `https://drive.google.com/thumbnail?id=$1&sz=${size}`
  );
}
