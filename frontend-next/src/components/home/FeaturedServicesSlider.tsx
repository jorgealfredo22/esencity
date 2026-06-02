'use client';

import { featuredServices } from '@/data/featuredServices';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export function FeaturedServicesSlider() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] font-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-[var(--color-gray-500)] max-w-2xl mx-auto text-lg">
            Haz clic en el servicio que deseas conocer y descubre cómo transformamos la belleza en arte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <a
              key={service.id}
              href="/servicios"
              className="group block bg-[var(--color-white)] rounded-2xl overflow-hidden border border-[var(--color-gray-200)] hover:border-[var(--color-secondary)]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                      <span className="text-2xl font-bold text-[var(--color-secondary)] font-primary">{service.name.charAt(0)}</span>
                    </div>
                    <span className="text-[var(--color-gray-400)] text-sm">{service.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors font-primary">
                  {service.name}
                </h3>
                <p className="text-[var(--color-gray-500)] text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-[var(--color-secondary)] text-sm font-medium">
                  <span className="group-hover:underline">Ver más</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" href="/servicios">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
