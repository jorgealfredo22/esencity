'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="relative py-32 md:py-40 bg-[var(--color-primary)] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/services-hero.jpg)',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 to-[var(--color-primary)]/90" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="text-center">
          <Button
            variant="ghost"
            href="/"
            className="text-[var(--color-white)]/80 hover:text-[var(--color-white)] mb-6"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Volver al inicio
          </Button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-white)] font-primary mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-gray-300)] max-w-2xl mx-auto">
            Descubrí nuestra amplia gama de servicios profesionales diseñados para realzar tu belleza y bienestar.
          </p>
        </div>
      </Container>
    </section>
  );
}
