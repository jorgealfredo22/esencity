'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { siteConfig } from '@/data/site';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary" />

      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <BrandLogo
            className="w-auto mx-auto mb-6 md:mb-8"
            style={{ height: 'clamp(220px, 18vw, 420px)' }}
          />
        </div>

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse font-display mb-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          La belleza elevada a arte.
        </h1>

        <p
          className={`text-lg md:text-xl text-text-inverse opacity-80 max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Precisión, estilo y sensibilidad en cada transformación firmada por{' '}
          <strong className="text-secondary font-semibold">Esencity</strong>
        </p>

        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.social.booking}
          >
            Agenda tu cita ahora
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-inverse/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-text-inverse/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
