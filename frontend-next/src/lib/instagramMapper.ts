import { InstagramPost } from '@/types/instagram';

export function mapInstagramResponse(data: any): InstagramPost[] {
  if (!data || !data.data) return [];

  return data.data.map((item: any) => ({
    id: item.id,
    caption: item.caption || '',
    mediaUrl: item.media_url || item.permalink,
    permalink: item.permalink,
    timestamp: item.timestamp,
    mediaType: item.media_type || 'IMAGE',
    thumbnailUrl: item.thumbnail_url,
  }));
}

export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Ayer';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;

  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getInstagramProfileUrl(username: string): string {
  return `https://www.instagram.com/${username}/`;
}
