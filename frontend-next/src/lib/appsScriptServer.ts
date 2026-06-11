import { getAppsScriptUrl, isAppsScriptConfigured } from './appsScriptConfig';

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
  return fetchFromAppsScriptServer('getServices');
}

export async function getGallery() {
  return fetchFromAppsScriptServer('getGallery');
}

export async function getInstagramFeed() {
  return fetchFromAppsScriptServer('getInstagramFeed');
}
