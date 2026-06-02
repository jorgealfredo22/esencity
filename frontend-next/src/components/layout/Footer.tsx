import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { MapPin, Phone, Mail, Clock, Camera, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-[var(--color-white)] mb-6 font-primary">
              Ubicación
            </h4>
            <div className="bg-[var(--color-primary-light)] rounded-2xl overflow-hidden mb-4">
              <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary-light)]">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[var(--color-secondary)]/50 mx-auto mb-2" />
                  <span className="text-[var(--color-gray-500)] text-sm">Mapa</span>
                </div>
              </div>
            </div>
            <p className="text-[var(--color-gray-400)] text-sm">
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.country}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[var(--color-white)] mb-6 font-primary">
              Te puede interesar
            </h4>
            <ul className="space-y-3 mb-8">
              {mainNavFooter.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[var(--color-gray-400)] hover:text-[var(--color-secondary)] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mb-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[var(--color-gray-700)] rounded-full hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4 text-[var(--color-gray-400)] hover:text-[var(--color-secondary)]" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[var(--color-gray-700)] rounded-full hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4 text-[var(--color-gray-400)] hover:text-[var(--color-secondary)]" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[var(--color-gray-700)] rounded-full hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[var(--color-gray-400)] hover:text-[var(--color-secondary)]" />
              </a>
            </div>

            <div className="flex items-start gap-3 text-[var(--color-gray-400)] text-sm">
              <div className="p-2 bg-[var(--color-secondary)]/10 rounded-lg">
                <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
              </div>
              <span>Contamos con Parqueadero Privado</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[var(--color-white)] mb-6 font-primary">
              Contacto
            </h4>

            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-[var(--color-gray-400)] text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-[var(--color-secondary)]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-secondary)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[var(--color-secondary)]/10">
                  <Phone className="w-4 h-4 text-[var(--color-secondary)]" />
                </div>
                <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-white)] font-medium text-sm hover:text-[var(--color-secondary)] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--color-secondary)]" />
                <div className="text-[var(--color-gray-400)] text-sm space-y-2">
                  <div>
                    <p className="font-semibold text-[var(--color-gray-300)] mb-1">Horarios:</p>
                    <p>Lunes a Sábado: {siteConfig.hours.monday}</p>
                    <p>Domingos: {siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-gray-800)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-gray-600)] text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-[var(--color-gray-600)] text-sm hover:text-[var(--color-secondary)] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const mainNavFooter = [
  { label: 'Inicio', href: '/' },
  { label: 'Esencity', href: '/#nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/#contacto' },
];
