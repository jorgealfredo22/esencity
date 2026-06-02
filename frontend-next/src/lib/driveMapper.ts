import { GalleryImage } from '@/types/gallery';

export function getDriveImageUrl(fileId: string): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

export function getDriveImageThumbnail(fileId: string, size: number = 400): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
}

export function extractFileIdFromDriveUrl(url: string): string | null {
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : null;
}

export function mapDriveFilesToGallery(files: Array<{ id: string; name: string; mimeType: string }>): GalleryImage[] {
  return files
    .filter(file => file.mimeType.startsWith('image/'))
    .map(file => ({
      id: file.id,
      url: getDriveImageUrl(file.id),
      thumbnailUrl: getDriveImageThumbnail(file.id, 400),
      alt: file.name.replace(/\.[^/.]+$/, ''),
    }));
}
