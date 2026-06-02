'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/60 via-[var(--color-primary)]/40 to-[var(--color-primary)]/90" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <img
            src="/brand/imagotipo.svg"
            alt={siteConfig.name}
            className="h-16 md:h-24 lg:h-32 mx-auto mb-8 brightness-0 invert"
          />
        </div>

        <p
          className={`text-lg md:text-xl text-[var(--color-gray-200)] tracking-wide mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          La belleza elevada a arte.
        </p>

        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-white)] font-primary mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Precisión, estilo y sensibilidad en cada transformación
        </h1>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.social.whatsapp}
            className="uppercase tracking-wider"
          >
            Agenda tu cita ahora
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--color-white)]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
