'use client';

import { useRef } from 'react';
import { featuredServices } from '@/data/featuredServices';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const fallbackImages: Record<string, string> = {
  'corte-styling': 'https://images.unsplash.com/photo-1503951914875-452162a0f6f1?q=80&w=800&auto=format&fit=crop',
  'coloracion': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format=fit=crop',
  'tratamientos': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format=fit=crop',
  'peinados': 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format=fit=crop',
};

interface FeaturedServicesSliderProps {
  featuredImages?: Record<string, string> | null;
}

const featuredToCategory: Record<string, string> = {
  'corte-styling': 'corte',
  'coloracion': 'color',
  'tratamientos': 'tratamientos',
  'peinados': 'peinados',
};

export function FeaturedServicesSlider({ featuredImages }: FeaturedServicesSliderProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = { ...fallbackImages, ...featuredImages };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-surface-alt flex flex-col items-center justify-center">
      <div className="container-custom w-full">
        <SectionHeading
          subtitle="Lo Mejor para Ti"
          title="Nuestros Servicios"
          description="Hacé clic en el servicio que deseas conocer y descubrí cómo transformamos la belleza en arte."
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        />

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-text" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredServices.map((service) => (
              <a
                key={service.id}
                href={`/servicios#${featuredToCategory[service.id] || ''}`}
                className="group block relative min-w-[350px] h-[450px] rounded-xl overflow-hidden flex-shrink-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${images[service.id]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-text-inverse font-display mb-2">
                    {service.name}
                  </h3>
                  <p className="text-text-inverse/70 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-secondary">
                    <span className="text-sm font-medium uppercase tracking-wider">Ver más</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-text" />
          </button>
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" size="lg" href="/servicios">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
