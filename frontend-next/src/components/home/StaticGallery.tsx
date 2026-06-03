'use client';

import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
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

const SPEED = 80;

export function StaticGallery({ images }: StaticGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const displayImages = images && images.length > 0 ? images : fallbackImages;

  const duplicatedImages = useMemo(
    () => [...displayImages, ...displayImages],
    [displayImages]
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const movedRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (!draggingRef.current && !pausedRef.current) {
      positionRef.current -= SPEED / 60;

      const halfWidth = (trackRef.current?.scrollWidth ?? 0) / 2;
      if (positionRef.current <= -halfWidth) {
        positionRef.current += halfWidth;
      }
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true;
    movedRef.current = 0;
    lastXRef.current = e.clientX;
    pointerIdRef.current = e.pointerId;
    containerRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current || !trackRef.current) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    movedRef.current += Math.abs(dx);
    positionRef.current += dx;

    const halfWidth = trackRef.current.scrollWidth / 2;
    if (positionRef.current > 0) {
      positionRef.current -= halfWidth;
    } else if (positionRef.current < -halfWidth) {
      positionRef.current += halfWidth;
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
    if (pointerIdRef.current != null) {
      containerRef.current?.releasePointerCapture(pointerIdRef.current);
      pointerIdRef.current = null;
    }
  }, []);

  const wasDrag = useCallback(() => movedRef.current > 5, []);

  return (
    <section id="galeria" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading
          subtitle="Resultados Reales"
          title="Ellos ya confiaron en Nosotros"
          description="Conocé los resultados de quienes ya vivieron la experiencia Esencity."
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        />

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onTouchStart={() => { pausedRef.current = true; }}
          onTouchEnd={() => { pausedRef.current = false; }}
        >
          <div ref={trackRef} className="flex will-change-transform">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 p-2"
              >
                <button
                  onClick={() => { if (!wasDrag()) setSelectedImage(image); }}
                  className="relative aspect-square w-full rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                    <Expand className="w-6 h-6 text-text-inverse opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </div>
            ))}
          </div>
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
