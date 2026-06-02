'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Scissors, Sparkles, Heart, Hand, Crown, Palette, Star, Users, Eye, ScissorsLineDashed, ArrowRight } from 'lucide-react';

const experiences = [
  { icon: Scissors, title: 'Barbería', subtitle: 'Estilo que marca diferencia' },
  { icon: Sparkles, title: 'Spa Capilar', subtitle: 'Renueva, repara y brilla' },
  { icon: Heart, title: 'Spa Corporal', subtitle: 'Relaja cuerpo, mente y alma' },
  { icon: Hand, title: 'Spa Manos y Pies', subtitle: 'Elegancia celestial' },
  { icon: Crown, title: 'Ocasiones Especiales', subtitle: 'Tu momento para brillar' },
  { icon: Palette, title: 'Color', subtitle: 'Los tonos perfectos' },
  { icon: Star, title: 'Make Up', subtitle: 'Belleza que se siente y se ve' },
  { icon: Users, title: 'Hair Style Kids', subtitle: 'Estilo para los pequeños' },
  { icon: Eye, title: 'Cejas y Pestañas', subtitle: 'Donde la expresión cobra vida' },
  { icon: ScissorsLineDashed, title: 'Cortes y Peinados', subtitle: 'Elegancia en cada movimiento' },
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
    <section id="nosotros" ref={sectionRef} className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-secondary text-xs font-semibold tracking-widest uppercase mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display mb-4 leading-tight">
            ¿Qué experiencia quieres vivir hoy?
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Más de 20 años perfeccionando el arte del color, el corte y la transformación capilar.
            En <strong className="text-text font-semibold">Esencity</strong>, cada servicio es un ritual de belleza diseñado para resaltar tu esencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group flex items-center gap-5 py-4 border-b border-border hover:border-secondary transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary-muted flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <exp.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-text font-medium text-base md:text-lg">
                  {exp.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {exp.subtitle}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-secondary group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button variant="primary" size="lg" href="/servicios">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
