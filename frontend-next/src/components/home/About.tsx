'use client';

import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import {
  GiScissors,
  GiBeard,
  GiComb,
  GiHairStrands,
  GiCurlyMask,
  GiRazor,
  GiWomanElfFace,
  GiMirrorMirror,
  GiLargeDress,
  GiHeartBeats,
} from 'react-icons/gi';
import { ArrowRight } from 'lucide-react';


const experiences = [
  { icon: GiScissors, title: 'Corte Para Caballero Básico', subtitle: 'Tu estilo empieza con un gran corte' },
  { icon: GiComb, title: 'Corte Para Caballero Premium', subtitle: 'Precisión premium para una imagen impecable' },
  { icon: GiBeard, title: 'Barba Clásica', subtitle: 'Definición limpia para una presencia más firme' },
  { icon: GiRazor, title: 'Barba Premium', subtitle: 'Detalle superior para una barba con carácter' },
  { icon: GiCurlyMask, title: 'Limpieza Facial', subtitle: 'Frescura y cuidado para una piel impecable' },
  { icon: GiWomanElfFace, title: 'Corte de Dama', subtitle: 'Un look pensado para resaltar tu esencia' },
  { icon: GiHairStrands, title: 'Ondas de Agua', subtitle: 'Movimiento, forma y elegancia en cada onda' },
  { icon: GiMirrorMirror, title: 'Cepillado Cabello Corto', subtitle: 'Acabado ligero con estilo y movimiento' },
  { icon: GiLargeDress, title: 'Cepillado Cabello Largo', subtitle: 'Suavidad, brillo y presencia que se notan' },
  { icon: GiHeartBeats, title: 'Asesoría de Imagen', subtitle: 'Estilos hechos para destacar en cada ocasión' },
];

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="nosotros" ref={ref} className="section-padding bg-surface flex flex-col items-center justify-center">
      <div className="container-custom">
        <SectionHeading
          subtitle="Nuestros Servicios"
          title="¿Qué experiencia quieres vivir hoy?"
          description={
            <>
              Más de 10 años perfeccionando el arte del color, el corte y la transformación capilar.
              En <strong className="text-text font-semibold">Esencity</strong>, cada servicio es un ritual de belleza diseñado para resaltar tu esencia.
            </>
          }
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group flex items-center gap-5 py-4 border-b border-border hover:border-secondary transition-all duration-300 cursor-pointer ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary-muted flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <exp.icon className="w-6 h-6 text-secondary group-hover:text-text-inverse transition-colors" />
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

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button variant="primary" size="lg" href="/servicios">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
