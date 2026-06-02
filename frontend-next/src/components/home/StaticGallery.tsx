'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GalleryImage } from '@/types/gallery';
import { Expand } from 'lucide-react';

const placeholderImages: GalleryImage[] = [
  { id: '1', url: '', alt: 'Resultado 1' },
  { id: '2', url: '', alt: 'Resultado 2' },
  { id: '3', url: '', alt: 'Resultado 3' },
  { id: '4', url: '', alt: 'Resultado 4' },
  { id: '5', url: '', alt: 'Resultado 5' },
  { id: '6', url: '', alt: 'Resultado 6' },
  { id: '7', url: '', alt: 'Resultado 7' },
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
    <section id="galeria" ref={sectionRef} className="py-20 md:py-32 bg-[var(--color-primary)]">
      <Container size="lg">
        <div className="text-center mb-16">
          <p className="text-[var(--color-secondary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-white)] font-primary mb-6">
            Conoce nuestros Resultados
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholderImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-square bg-[var(--color-primary-light)] rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-gray-800)]/50 flex items-center justify-center">
                <span className="text-[var(--color-gray-500)] text-sm">{image.alt}</span>
              </div>
              <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/50 transition-colors flex items-center justify-center">
                <Expand className="w-8 h-8 text-[var(--color-white)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </Container>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[var(--color-black)]/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] bg-[var(--color-primary-light)] rounded-xl overflow-hidden">
            <div className="w-[80vw] h-[60vh] bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-gray-800)]/50 flex items-center justify-center">
              <span className="text-[var(--color-gray-400)] text-xl">{selectedImage.alt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
