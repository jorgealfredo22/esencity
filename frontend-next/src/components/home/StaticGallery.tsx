'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { GalleryImage } from '@/types/gallery';
import { Expand } from 'lucide-react';

const fallbackImages: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop', alt: 'Transformación 1' },
  { id: '2', url: 'https://images.unsplash.com/photo-1605497788044-5f8e8e692758?w=600&auto=format&fit=crop', alt: 'Transformación 2' },
  { id: '3', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&auto=format&fit=crop', alt: 'Transformación 3' },
  { id: '4', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop', alt: 'Transformación 4' },
  { id: '5', url: 'https://images.unsplash.com/photo-1527799820374-d8221b2e6246?w=600&auto=format&fit=crop', alt: 'Transformación 5' },
  { id: '6', url: 'https://images.unsplash.com/photo-1593702288056-7927wdf047a?w=600&auto=format&fit=crop', alt: 'Transformación 6' },
  { id: '7', url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&auto=format&fit=crop', alt: 'Transformación 7' },
];

interface StaticGalleryProps {
  images?: GalleryImage[] | null;
}

export function StaticGallery({ images }: StaticGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const displayImages = images && images.length > 0 ? images : fallbackImages;

  return (
    <section id="galeria" ref={ref} className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading
          subtitle="Resultados Reales"
          title="Ellos ya confiaron en Nosotros"
          description="Conocé los resultados de quienes ya vivieron la experiencia Esencity."
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {displayImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                <Expand className="w-6 h-6 text-text-inverse opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" href="/servicios">
            Ver galería completa
          </Button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-surface-elevated rounded-xl overflow-hidden">
            <div className="aspect-video">
              <img src={selectedImage.url} alt={selectedImage.alt} className="w-full h-full object-cover" />
            </div>
          </div>
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-surface-elevated rounded-full flex items-center justify-center text-text hover:bg-secondary hover:text-text-inverse transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
