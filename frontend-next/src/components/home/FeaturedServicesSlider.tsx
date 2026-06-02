'use client';

import { useRef } from 'react';
import { featuredServices } from '@/data/featuredServices';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SliderControls } from '@/components/ui/SliderControls';
import { useAutoSlider } from '@/hooks/useAutoSlider';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, Clock } from 'lucide-react';

export function FeaturedServicesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { currentIndex, next, prev, goTo } = useAutoSlider({
    totalSlides: featuredServices.length,
    interval: 6000,
  });

  return (
    <section className="py-20 md:py-32 bg-[var(--color-white)]">
      <Container size="lg">
        <SectionHeading
          subtitle="Nuestros Servicios"
          title="Lo que ofrecemos"
          description="Descubrí nuestra amplia gama de servicios diseñados para realzar tu belleza y bienestar."
        />

        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredServices.map((service) => (
                <div
                  key={service.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[var(--color-gray-50)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-[16/9] bg-[var(--color-gray-200)] relative">
                      <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/30 to-[var(--color-primary)]/30 flex items-center justify-center">
                        <span className="text-[var(--color-gray-500)]">Imagen de {service.name}</span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-3">
                        {service.name}
                      </h3>
                      <p className="text-[var(--color-gray-600)] mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {service.price && (
                            <span className="text-2xl font-bold text-[var(--color-secondary)]">
                              {formatPrice(service.price)}
                            </span>
                          )}
                          {service.duration && (
                            <span className="flex items-center gap-1 text-[var(--color-gray-500)] text-sm">
                              <Clock className="w-4 h-4" />
                              {service.duration}
                            </span>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          href="/servicios"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          Ver más
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <SliderControls
              currentIndex={currentIndex}
              totalSlides={featuredServices.length}
              onPrev={prev}
              onNext={next}
              onDotClick={goTo}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" href="/servicios">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </section>
  );
}
