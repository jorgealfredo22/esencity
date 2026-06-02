'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { GalleryImage } from '@/types/gallery';
import { Expand } from 'lucide-react';

const placeholderImages: GalleryImage[] = [
  { id: '1', url: '', alt: 'Corte moderno' },
  { id: '2', url: '', alt: 'Coloración balayage' },
  { id: '3', url: '', alt: 'Peinado de novia' },
  { id: '4', url: '', alt: 'Tratamiento capilar' },
  { id: '5', url: '', alt: 'Mechas rubias' },
  { id: '6', url: '', alt: 'Corte masculino' },
  { id: '7', url: '', alt: 'Brushing profesional' },
  { id: '8', url: '', alt: 'Keratina brasileña' },
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
    <section id="galeria" ref={sectionRef} className="py-20 md:py-32 bg-[var(--color-gray-50)]">
      <Container size="lg">
        <SectionHeading
          subtitle="Nuestro Trabajo"
          title="Galería"
          description="Mirá algunos de nuestros mejores trabajos y transformaciones."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholderImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-square bg-[var(--color-gray-200)] rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 flex items-center justify-center">
                <span className="text-[var(--color-gray-400)] text-sm text-center px-2">{image.alt}</span>
              </div>
              <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/40 transition-colors flex items-center justify-center">
                <Expand className="w-8 h-8 text-[var(--color-white)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" href="https://instagram.com/esencity" target="_blank">
            Ver más en Instagram
          </Button>
        </div>
      </Container>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[var(--color-black)]/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] bg-[var(--color-gray-200)] rounded-2xl overflow-hidden">
            <div className="w-[80vw] h-[60vh] bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 flex items-center justify-center">
              <span className="text-[var(--color-gray-500)] text-xl">{selectedImage.alt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
