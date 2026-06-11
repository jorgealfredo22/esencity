import { getAppsScriptUrl, isAppsScriptConfigured } from './appsScriptConfig';
import { proxyDriveUrl } from './url';

async function fetchFromAppsScriptServer(endpoint: string) {
  if (!isAppsScriptConfigured()) {
    throw new Error('Apps Script URL no configurada');
  }

  const url = `${getAppsScriptUrl()}?action=${endpoint}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Apps Script error: ${res.status}`);
  }

  return res.json();
}

export async function getServices() {
  const response = await fetchFromAppsScriptServer('getServices');

  if (response.status === 'success' && Array.isArray(response.data)) {
    return {
      ...response,
      data: response.data.map((cat: any) => ({
        ...cat,
        services: cat.services.map((s: any) => ({
          ...s,
          image: s.image ? proxyDriveUrl(s.image, 'w1200') : undefined,
        })),
      })),
    };
  }

  return response;
}

export async function getGallery() {
  const response = await fetchFromAppsScriptServer('getGallery');

  if (response.status === 'success' && response.data?.images) {
    return {
      ...response,
      data: {
        ...response.data,
        images: response.data.images.map((img: any) => ({
          ...img,
          url: proxyDriveUrl(img.url, 'w1000'),
          thumbnailUrl: proxyDriveUrl(img.url, 'w400'),
        })),
      },
    };
  }

  return response;
}

export async function getInstagramFeed() {
  return fetchFromAppsScriptServer('getInstagramFeed');
}
