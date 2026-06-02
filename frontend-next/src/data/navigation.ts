export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Contacto', href: '/#contacto' },
];

export const footerNavigation = {
  services: [
    { label: 'Corte & Styling', href: '/servicios#corte' },
    { label: 'Coloración', href: '/servicios#color' },
    { label: 'Tratamientos', href: '/servicios#tratamientos' },
    { label: 'Peinados', href: '/servicios#peinados' },
  ],
  company: [
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Galería', href: '/#galeria' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ],
};
