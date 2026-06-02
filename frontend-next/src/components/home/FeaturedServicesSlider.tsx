'use client';

import { featuredServices } from '@/data/featuredServices';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const serviceImages: Record<string, string> = {
  'corte-styling': 'https://images.unsplash.com/photo-1503951914875-452162a0f6f1?q=80&w=800&auto=format&fit=crop',
  'coloracion': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  'tratamientos': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
  'peinados': 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
};

export function FeaturedServicesSlider() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-secondary text-xs font-semibold tracking-widest uppercase mb-3">
            Lo Mejor para Ti
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Hacé clic en el servicio que deseas conocer y descubrí cómo transformamos la belleza en arte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredServices.map((service) => (
            <a
              key={service.id}
              href="/servicios"
              className="group block relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${serviceImages[service.id]}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-text-inverse font-display mb-1">
                  {service.name}
                </h3>
                <p className="text-text-inverse/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                  {service.description}
                </p>
                <div className="flex items-center text-secondary">
                  <span className="text-xs font-medium uppercase tracking-wider">Ver más</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
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
