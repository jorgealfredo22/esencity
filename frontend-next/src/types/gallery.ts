export interface GalleryImage {
  id: string;
  url: string;
  thumbnailUrl?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Gallery {
  images: GalleryImage[];
  title?: string;
  description?: string;
}
