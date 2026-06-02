'use client';

import { featuredServices } from '@/data/featuredServices';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { Clock } from 'lucide-react';

export function FeaturedServicesSlider() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-white)]">
      <Container size="lg">
        <div className="text-center mb-16">
          <p className="text-[var(--color-secondary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] font-primary mb-6">
            Haz clic en el servicio que deseas conocer
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-2xl mx-auto">
            Descubre cómo transformamos la belleza en arte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <a
              key={service.id}
              href="/servicios"
              className="group block bg-[var(--color-gray-50)] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-[var(--color-gray-200)] relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-[var(--color-gray-400)]">Imagen de {service.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[var(--color-gray-500)] text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {service.price && (
                      <span className="text-lg font-bold text-[var(--color-secondary)]">
                        {formatPrice(service.price)}
                      </span>
                    )}
                    {service.duration && (
                      <span className="flex items-center gap-1 text-[var(--color-gray-400)] text-xs">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
