'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="relative py-24 md:py-32 bg-primary">
      <Container size="lg" className="relative z-10">
        <div className="text-center">
          <Button
            variant="ghost"
            href="/"
            className="text-text-inverse-secondary hover:text-text-inverse mb-6"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Volver al inicio
          </Button>
          <p className="text-secondary text-xs font-semibold tracking-widest uppercase mb-3">
            Nuestros Servicios
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse font-display mb-4">
            Descubrí el arte de tu belleza
          </h1>
          <p className="text-lg text-text-inverse-secondary/70 max-w-xl mx-auto">
            Agendá tu cita y descubrí por qué la belleza, en manos expertas, se convierte en arte.
          </p>
        </div>
      </Container>
    </section>
  );
}
