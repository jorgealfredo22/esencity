'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Scissors, Sparkles, Heart, Hand, Crown, Palette, Star, Users, Eye, ScissorsLineDashed, ChevronRight } from 'lucide-react';

const experiences = [
  { icon: Scissors, title: 'Barbería — Estilo que marca diferencia' },
  { icon: Sparkles, title: 'Spa Capilar — Renueva, repara y brilla' },
  { icon: Heart, title: 'Spa Corporal — Relaja cuerpo, mente y alma' },
  { icon: Hand, title: 'Spa Manos y pies con elegancia celestial' },
  { icon: Crown, title: 'Ocasiones Especiales — Tu momento para brillar' },
  { icon: Palette, title: 'Color — Vive el poder de los tonos perfectos' },
  { icon: Star, title: 'Make Up — Belleza que se siente y se ve' },
  { icon: Users, title: 'Hair Style Kids' },
  { icon: Eye, title: 'Cejas y Pestañas — Donde la expresión cobra vida' },
  { icon: ScissorsLineDashed, title: 'Cortes y Peinados — Elegancia en cada movimiento' },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="py-20 md:py-32 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-white)] font-primary mb-6">
                ¿Qué experiencia quieres vivir hoy?
              </h2>
              <p className="text-[var(--color-gray-300)] text-lg mb-2">
                Más de 20 años perfeccionando el arte del color, el corte y la transformación capilar.
              </p>
              <p className="text-[var(--color-gray-300)]/80 mb-10">
                En <strong className="text-[var(--color-white)]">Esencity</strong>, cada servicio es un ritual de belleza diseñado para resaltar tu esencia con técnica, elegancia y precisión.
              </p>
            </div>

            <div className="space-y-1">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`flex items-center gap-4 py-3 px-2 border-b border-[var(--color-gray-800)]/50 hover:border-[var(--color-secondary)]/30 transition-all duration-500 group cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <div className="p-2.5 rounded-full bg-[var(--color-secondary)]/10 group-hover:bg-[var(--color-secondary)]/20 transition-colors flex-shrink-0">
                    <exp.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h4 className="text-[var(--color-white)]/80 text-sm md:text-base group-hover:text-[var(--color-white)] transition-colors">
                    {exp.title}
                  </h4>
                  <ChevronRight className="w-4 h-4 text-[var(--color-gray-600)] ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>

            <div className={`mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button variant="primary" size="lg" href="/servicios">
                Ver servicios
              </Button>
            </div>
          </div>

          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-gray-800)]">
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary-light)] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-[var(--color-secondary)]" />
                  </div>
                  <p className="text-[var(--color-gray-400)] text-sm">Imagen representativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
