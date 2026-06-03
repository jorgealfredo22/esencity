function encode(value: string): string {
  return encodeURIComponent(value.trim());
}

export function buildGoogleMapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encode(
    query
  )}`;
}

export function buildGoogleMapsDirectionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encode(
    destination
  )}`;
}

export function buildGoogleMapsEmbedQuery(query: string): string {
  return `https://maps.google.com/maps?q=${encode(query)}&output=embed`;
}

export function buildAddressLabel(parts: Array<string | undefined | null>): string {
  return parts
    .filter((part): part is string => Boolean(part && part.trim()))
    .join(", ");
}