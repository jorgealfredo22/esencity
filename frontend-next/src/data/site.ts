export const siteConfig = {
  name: 'Esencity Peluquería',
  description: 'Tu destino de belleza y estilo. Expertos en color, corte y tratamientos capilares.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://esencity.com',
  email: 'info@esencity.com',
  phone: '+54 11 1234-5678',
  address: {
    street: 'Av. Principal 1234',
    city: 'Buenos Aires',
    country: 'Argentina',
  },
  social: {
    instagram: 'https://instagram.com/esencity',
    facebook: 'https://facebook.com/esencity',
    whatsapp: 'https://wa.me/541112345678',
  },
  hours: {
    monday: '10:00 - 20:00',
    tuesday: '10:00 - 20:00',
    wednesday: '10:00 - 20:00',
    thursday: '10:00 - 20:00',
    friday: '10:00 - 20:00',
    saturday: '09:00 - 18:00',
    sunday: 'Cerrado',
  },
};
