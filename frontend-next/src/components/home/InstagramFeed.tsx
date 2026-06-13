'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import Script from 'next/script';

export function InstagramFeed() {
  const username = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'esencity';

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-custom">
        <SectionHeading
          subtitle={`@${username}`}
          title="Conoce nuestros Resultados"
          description="Seguí nuestras últimas transformaciones y descubrí por qué somos la mejor opción para tu look."
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        />

        {/* Contenedor del Widget de SociableKIT usando iFrame para evitar problemas de React */}
        <div className="relative w-full h-[85dvh] md:h-[1000px] rounded-lg overflow-hidden">
          <iframe 
            src="https://widgets.sociablekit.com/instagram-feed/iframe/25689193"
            frameBorder="0" 
            width="100%" 
            height="100%"
            className="w-full h-full border-none"
            title="Instagram Feed"
          ></iframe>
          
          {/* HACK VISUAL: Capa sobrepuesta para ocultar el enlace de marca de agua */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-surface-alt z-10 pointer-events-none flex justify-center items-end pb-2">
             {/* Un pequeño difuminado arriba del bloque sólido para que el scroll se vea natural */}
             <div className="absolute bottom-full left-0 w-full h-8 bg-gradient-to-t from-surface-alt to-transparent"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

