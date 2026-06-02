const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

function isConfigured() {
  return APPS_SCRIPT_URL.length > 0 && !APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID');
}

export async function fetchFromAppsScript(endpoint: string, params?: Record<string, string>) {
  if (!isConfigured()) {
    throw new Error('Apps Script URL no configurada');
  }

  const url = new URL('/api/apps-script', window.location.origin);
  url.searchParams.set('action', endpoint);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching from Apps Script:', error);
    throw error;
  }
}

export async function postToAppsScript(endpoint: string, data: Record<string, unknown>) {
  if (!isConfigured()) {
    throw new Error('Apps Script URL no configurada');
  }

  try {
    const response = await fetch('/api/apps-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: endpoint,
        ...data,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error posting to Apps Script:', error);
    throw error;
  }
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
