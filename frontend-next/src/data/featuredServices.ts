import { Service } from '@/types/service';

export const featuredServices: Service[] = [
  {
    id: 'cortes',
    name: 'Cortes',
    description: 'Cortes personalizados que reflejan tu estilo único. Nuestros estilistas expertos crean looks que realzan tu belleza natural.',
    price: 3500,
    duration: '45 min',
    category: 'corte',
    featured: true,
  },
  {
    id: 'barba',
    name: 'Barba',
    description: 'Definición limpia y detalle superior. Dale carácter a tu presencia con nuestros servicios de barbería premium.',
    price: 2000,
    duration: '20-30 min',
    category: 'corte',
    featured: true,
  },
  {
    id: 'facial',
    name: 'Facial',
    description: 'Frescura y cuidado para una piel impecable. Tratamientos faciales que rejuvenecen y revitalizan.',
    price: 3000,
    duration: '30 min',
    category: 'tratamiento',
    featured: true,
  },
  {
    id: 'cabello',
    name: 'Cabello',
    description: 'Ondas, cepillados, color y asesoría de imagen. Todo lo que necesitás para un look que resalte tu esencia.',
    price: 4000,
    duration: '30-60 min',
    category: 'peinado',
    featured: true,
  },
];
