const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

export async function getServices() {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
    throw new Error('Apps Script URL no configurada');
  }

  const url = `${APPS_SCRIPT_URL}?action=getServices`;
  const res = await fetch(url);
  return res.json();
}

export async function getGallery() {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
    throw new Error('Apps Script URL no configurada');
  }

  const url = `${APPS_SCRIPT_URL}?action=getGallery`;
  const res = await fetch(url);
  return res.json();
}

export async function getInstagramFeed() {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
    throw new Error('Apps Script URL no configurada');
  }

  const url = `${APPS_SCRIPT_URL}?action=getInstagramFeed`;
  const res = await fetch(url);
  return res.json();
}
