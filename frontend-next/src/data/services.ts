import { ServiceCategory } from '@/types/service';

export const servicesData: ServiceCategory[] = [
  {
    id: 'cortes',
    name: 'Cortes',
    description: 'Cortes profesionales con experiencia y dedicación',
    services: [
      {
        id: 'corte-caballero-basico',
        name: 'Corte de Caballero Básico',
        description:
          'Incluye asesoría de imagen, lavado de cabello, masaje de cuello, masaje ocular y un café o agua.',
        price: 30000,
        duration: '30 min',
        category: 'cortes',
      },
      {
        id: 'corte-caballero-premium',
        name: 'Corte de Caballero Premium',
        description:
          'Incluye asesoría de imagen, lavado de cabello, asesoría de productos, mascarilla de puntos negros, masajes de espalda/cuello/capilar/ocular y cerveza o Coca-Cola.',
        price: 35000,
        duration: '45 min',
        category: 'cortes',
      },
      {
        id: 'corte-dama',
        name: 'Corte de Dama',
        description:
          'Incluye lavado de cabello, masajes muscular y ocular, cerveza o gaseosa. No incluye cepillado.',
        price: 30000,
        duration: '40 min',
        category: 'cortes',
      },
    ],
  },
  {
    id: 'barba',
    name: 'Barba',
    description: 'Diseño y cuidado de barba con técnica profesional',
    services: [
      {
        id: 'barba-basica',
        name: 'Barba Básica',
        description:
          'Incluye una sola guía, conexión con el corte de cabello, delineación con gel y café o agua.',
        price: 0,
        duration: '20 min',
        category: 'barba',
      },
      {
        id: 'barba-premium',
        name: 'Barba Premium',
        description:
          'Realizada con vapor o toalla caliente según el tipo de barba. Incluye desvanecidos, diseño personalizado, asesoría de barba, masajes capilar/cuello/facial y café o agua.',
        price: 0,
        duration: 'Consultar',
        category: 'barba',
      },
    ],
  },
  {
    id: 'facial',
    name: 'Facial',
    description: 'Tratamientos faciales para el cuidado de tu piel',
    services: [
      {
        id: 'limpieza-facial',
        name: 'Limpieza Facial',
        description:
          'Incluye lavado con espuma, gel facial, vapor, exfoliación, extracción de espinillas, agua micelar, parches de Aloe Vera para ojeras, velo humectante y máscara UV. Incluye cerveza o Coca-Cola.',
        price: 35000,
        duration: '45 min',
        category: 'facial',
      },
    ],
  },
  {
    id: 'cabello',
    name: 'Cabello',
    description: 'Tratamientos y estilos para tu cabello',
    services: [
      {
        id: 'hondas-de-agua',
        name: 'Hondas de Agua',
        description:
          'Incluye masajes musculares de cuello y ocular, café o agua natural.',
        price: 25000,
        duration: '30 min',
        category: 'cabello',
      },
      {
        id: 'cepillado-corto',
        name: 'Cepillado Cabello Corto',
        description:
          'Para cabello hasta los hombros. Incluye lavado de cabello, masajes de cuello y ocular, café o agua natural.',
        price: 25000,
        duration: '30 min',
        category: 'cabello',
      },
      {
        id: 'cepillado-largo',
        name: 'Cepillado Cabello Largo',
        description:
          'Incluye lavado de cabello, masajes de cuello y ocular, café o agua natural.',
        price: 30000,
        duration: '40 min',
        category: 'cabello',
      },
    ],
  },
];