export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Esencity', href: '/#nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/#contacto' },
];

export const footerNavigation = {
  services: [
    { label: 'Barbería', href: '/servicios#barberia' },
    { label: 'Spa Capilar', href: '/servicios#spa-capilar' },
    { label: 'Color', href: '/servicios#color' },
    { label: 'Make Up', href: '/servicios#makeup' },
  ],
  company: [
    { label: 'Esencity', href: '/#nosotros' },
    { label: 'Galería', href: '/#galeria' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ],
};
