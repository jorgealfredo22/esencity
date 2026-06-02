'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-primary)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/60 via-[var(--color-primary)]/40 to-[var(--color-primary)]/80" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <span
          className={`inline-block text-[var(--color-secondary)] text-sm md:text-base font-semibold tracking-widest uppercase mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Bienvenidos a
        </span>
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-white)] font-primary mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {siteConfig.name}
        </h1>
        <p
          className={`text-lg md:text-xl text-[var(--color-gray-300)] max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {siteConfig.description}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.social.whatsapp}
          >
            Reservar Turno
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/servicios"
          >
            Ver Servicios
          </Button>
        </div>
      </div>

      <button
        onClick={() => {
          document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-white)]/70 hover:text-[var(--color-white)] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
