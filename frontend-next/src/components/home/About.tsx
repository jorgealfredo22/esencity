'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Scissors, Sparkles, Heart, Hand, Crown, Palette, Star, Users, Eye, ScissorsLineDashed } from 'lucide-react';

const experiences = [
  {
    icon: Scissors,
    title: 'Barbería',
    description: 'Estilo que marca diferencia',
  },
  {
    icon: Sparkles,
    title: 'Spa Capilar',
    description: 'Renueva, repara y brilla',
  },
  {
    icon: Heart,
    title: 'Spa Corporal',
    description: 'Relaja cuerpo, mente y alma',
  },
  {
    icon: Hand,
    title: 'Spa Manos y Pies',
    description: 'Elegancia celestial',
  },
  {
    icon: Crown,
    title: 'Ocasiones Especiales',
    description: 'Tu momento para brillar',
  },
  {
    icon: Palette,
    title: 'Color',
    description: 'Vive el poder de los tonos perfectos',
  },
  {
    icon: Star,
    title: 'Make Up',
    description: 'Belleza que se siente y se ve',
  },
  {
    icon: Users,
    title: 'Hair Style Kids',
    description: 'Diversión y estilo para los peques',
  },
  {
    icon: Eye,
    title: 'Cejas y Pestañas',
    description: 'Donde la expresión cobra vida',
  },
  {
    icon: ScissorsLineDashed,
    title: 'Cortes y Peinados',
    description: 'Elegancia en cada movimiento',
  },
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
      <Container size="lg">
        <div className="text-center mb-16">
          <p className={`text-[var(--color-gray-300)] text-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Más de 20 años perfeccionando el arte del color, el corte y la transformación capilar.
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-white)] font-primary mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            ¿Qué experiencia quieres vivir hoy?
          </h2>
          <p className={`text-[var(--color-gray-400)] max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            En <strong className="text-[var(--color-white)]">Esencity</strong>, cada servicio es un ritual de belleza diseñado para resaltar tu esencia con técnica, elegancia y precisión.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`flex flex-col items-center text-center p-6 rounded-xl hover:bg-[var(--color-primary-light)] transition-all duration-500 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50 + 400}ms` }}
            >
              <div className="p-4 bg-[var(--color-secondary)]/10 rounded-full mb-4 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                <exp.icon className="w-8 h-8 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-[var(--color-white)] font-semibold mb-2 text-sm md:text-base">
                {exp.title}
              </h3>
              <p className="text-[var(--color-gray-400)] text-xs md:text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button variant="outline" size="lg" href="/servicios">
            Ver servicios
          </Button>
        </div>
      </Container>
    </section>
  );
}
