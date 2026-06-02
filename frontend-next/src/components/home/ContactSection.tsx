'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { Scissors } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-secondary)]/10 mb-6">
            <Scissors className="w-8 h-8 text-[var(--color-secondary)]" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-white)] font-primary mb-6">
          Descubre el arte de tu belleza con Esencity
        </h2>

        <p className="text-[var(--color-gray-300)] text-lg mb-10 max-w-2xl mx-auto">
          Agenda tu cita y descubre por qué la belleza, en manos expertas, se convierte en arte.
        </p>

        <Button
          variant="primary"
          size="lg"
          href={siteConfig.social.whatsapp}
          className="uppercase tracking-wider text-base"
        >
          Reservar mi cita
        </Button>
      </div>
    </section>
  );
}
