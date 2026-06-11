const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

export function isAppsScriptConfigured() {
  return APPS_SCRIPT_URL.length > 0;
}

export function getAppsScriptUrl() {
  return APPS_SCRIPT_URL;
}
