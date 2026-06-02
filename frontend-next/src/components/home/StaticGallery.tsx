'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { GalleryImage } from '@/types/gallery';
import { Expand } from 'lucide-react';

const placeholderImages: GalleryImage[] = [
  { id: '1', url: '', alt: 'Transformación 1' },
  { id: '2', url: '', alt: 'Transformación 2' },
  { id: '3', url: '', alt: 'Transformación 3' },
  { id: '4', url: '', alt: 'Transformación 4' },
  { id: '5', url: '', alt: 'Transformación 5' },
  { id: '6', url: '', alt: 'Transformación 6' },
  { id: '7', url: '', alt: 'Transformación 7' },
];

export function StaticGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" ref={sectionRef} className="py-20 md:py-32 bg-[var(--color-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] font-primary mb-4">
            Ellos ya confiaron en Nosotros
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-2xl mx-auto text-lg">
            Conoce los resultados de quienes ya vivieron la experiencia Esencity
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholderImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-[3/4] bg-[var(--color-gray-100)] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-gray-200)] flex items-center justify-center">
                <span className="text-[var(--color-gray-400)] text-sm">{image.alt}</span>
              </div>
              <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/50 transition-colors flex items-center justify-center">
                <Expand className="w-8 h-8 text-[var(--color-white)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" href="/servicios">
            Ver galería completa
          </Button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[var(--color-black)]/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] bg-[var(--color-white)] rounded-2xl overflow-hidden">
            <div className="w-[80vw] h-[60vh] bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-gray-200)] flex items-center justify-center">
              <span className="text-[var(--color-gray-400)] text-xl">{selectedImage.alt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
