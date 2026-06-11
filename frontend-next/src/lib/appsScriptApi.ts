import { isAppsScriptConfigured } from '@/lib/appsScriptConfig';

export async function fetchFromAppsScript(endpoint: string, params?: Record<string, string>) {
  if (!isAppsScriptConfigured()) {
    throw new Error('Apps Script URL no configurada');
  }

  const url = new URL('/api/apps-script', window.location.origin);
  url.searchParams.set('action', endpoint);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function postToAppsScript(endpoint: string, data: Record<string, unknown>) {
  if (!isAppsScriptConfigured()) {
    throw new Error('Apps Script URL no configurada');
  }

  const response = await fetch('/api/apps-script', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: endpoint, ...data }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getServices() {
  return fetchFromAppsScript('getServices');
}

export async function getGallery() {
  return fetchFromAppsScript('getGallery');
}

export async function getInstagramFeed() {
  return fetchFromAppsScript('getInstagramFeed');
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return postToAppsScript('submitContact', data);
}
