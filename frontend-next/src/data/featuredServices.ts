import { Service } from '@/types/service';

export const featuredServices: Service[] = [
  {
    id: 'corte-styling',
    name: 'Corte & Styling',
    description: 'Cortes personalizados que reflejan tu estilo único. Nuestros estilistas expertos crean looks que realzan tu belleza natural.',
    price: 3500,
    duration: '45 min',
    category: 'corte',
    featured: true,
  },
  {
    id: 'coloracion',
    name: 'Coloración',
    description: 'Desde mechas sutiles hasta cambios radicales de color. Utilizamos productos de primera calidad para resultados vibrantes y duraderos.',
    price: 8000,
    duration: '2-3 hrs',
    category: 'color',
    featured: true,
  },
  {
    id: 'tratamientos',
    name: 'Tratamientos Capilares',
    description: 'Hidratación profunda, keratina y reconstrucción. Devuelve la vida y el brillo a tu cabello con nuestros tratamientos especializados.',
    price: 5000,
    duration: '1-2 hrs',
    category: 'tratamiento',
    featured: true,
  },
  {
    id: 'peinados',
    name: 'Peinados de Novia',
    description: 'Look perfecto para tu día especial. Diseñamos peinados elegantes que complementan tu vestido y personalidad.',
    price: 12000,
    duration: '1.5 hrs',
    category: 'peinado',
    featured: true,
  },
];
