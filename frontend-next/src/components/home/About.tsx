'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Scissors, Heart, Award, Users } from 'lucide-react';

const stats = [
  { icon: Scissors, value: '15+', label: 'Años de experiencia' },
  { icon: Heart, value: '10K+', label: 'Clientes felices' },
  { icon: Award, value: '50+', label: 'Premios ganados' },
  { icon: Users, value: '20+', label: 'Estilistas expertos' },
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="py-20 md:py-32 bg-[var(--color-gray-50)]">
      <Container size="lg">
        <SectionHeading
          subtitle="Sobre Nosotros"
          title="Tu belleza, nuestra pasión"
          description="Somos un equipo de profesionales dedicados a realzar tu belleza natural con las últimas tendencias y técnicas del mundo de la peluquería."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="aspect-[4/5] bg-[var(--color-gray-200)] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 flex items-center justify-center">
                  <span className="text-[var(--color-gray-400)] text-lg">Imagen del salón</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-secondary)] rounded-2xl -z-10" />
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Más que una peluquería, una experiencia
            </h3>
            <p className="text-[var(--color-gray-600)] mb-6 leading-relaxed">
              En Esencity creemos que cada persona merece sentirse especial. Nuestro salón está diseñado para brindarte una experiencia única, donde el lujo y la comodidad se combinan con la excelencia profesional.
            </p>
            <p className="text-[var(--color-gray-600)] mb-8 leading-relaxed">
              Utilizamos productos de primera calidad y nos mantenemos actualizados con las últimas tendencias internacionales para ofrecerte resultados que superen tus expectativas.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl">
                    <stat.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                    <div className="text-sm text-[var(--color-gray-500)]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
