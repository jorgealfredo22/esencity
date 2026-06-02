'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowLeft } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://wallpapers.com/images/hd/barber-shop-background-1vd4gzeiyvyg4ghl.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />
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
          <SectionHeading
            subtitle="Nuestros Servicios"
            title="Descubrí el arte de tu belleza"
            description="Agendá tu cita y descubrí por qué la belleza, en manos expertas, se convierte en arte."
            light
          />
        </div>
      </Container>
    </section>
  );
}
