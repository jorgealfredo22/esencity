import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { Camera, Globe, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-white)]">
      <Container size="lg" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-primary mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-[var(--color-gray-400)] mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[var(--color-primary-light)] rounded-full hover:bg-[var(--color-secondary)] transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[var(--color-primary-light)] rounded-full hover:bg-[var(--color-secondary)] transition-colors"
                aria-label="Facebook"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[var(--color-primary-light)] rounded-full hover:bg-[var(--color-secondary)] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[var(--color-gray-400)] hover:text-[var(--color-secondary)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[var(--color-gray-400)] hover:text-[var(--color-secondary)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--color-gray-400)]">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-gray-400)]">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--color-secondary)] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-gray-400)]">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-secondary)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-gray-400)]">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Lun - Vie: {siteConfig.hours.monday}</div>
                  <div>Sáb: {siteConfig.hours.saturday}</div>
                  <div>Dom: {siteConfig.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-primary-light)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-gray-500)] text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-[var(--color-gray-500)] text-sm hover:text-[var(--color-secondary)] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
