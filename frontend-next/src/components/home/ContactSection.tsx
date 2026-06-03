'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521590832167-7bcb581a4ce6?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-secondary" />
            <p className="text-secondary text-xs font-semibold tracking-widest uppercase">
              Tu Transformación Comienza Aquí
            </p>
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-inverse font-display mb-4 leading-tight">
            Descubrí el arte de tu belleza con Esencity
          </h2>

          <p className="text-text-inverse/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Agendá tu cita y descubrí por qué la belleza, en manos expertas, se convierte en arte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={siteConfig.social.booking}
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Reservar mi cita
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/servicios"
              icon={<Calendar className="w-5 h-5" />}
              className="border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary"
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
