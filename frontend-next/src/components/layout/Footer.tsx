import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <img
              src="/brand/imagotipo.svg"
              alt={siteConfig.name}
              className="h-10 brightness-0 invert mb-5"
            />
            <p className="text-text-inverse-secondary/60 text-sm leading-relaxed mb-6">
              La belleza, en manos expertas, se convierte en arte. Más de 20 años creando experiencias únicas.
            </p>
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
                { icon: WhatsAppIcon, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors group"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-text-inverse text-sm font-semibold uppercase tracking-wider mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {mainNavFooter.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-text-inverse-secondary/60 hover:text-secondary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-inverse text-sm font-semibold uppercase tracking-wider mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
                <a href={`mailto:${siteConfig.email}`} className="text-text-inverse-secondary/60 hover:text-secondary transition-colors text-sm">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <a href={`tel:${siteConfig.phone}`} className="text-text-inverse hover:text-secondary transition-colors text-sm">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
                <div className="text-text-inverse-secondary/60 text-sm">
                  <p className="font-medium text-text-inverse/80 mb-1">Horarios</p>
                  <p>Lun - Sáb: {siteConfig.hours.monday}</p>
                  <p>Dom: {siteConfig.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-inverse text-sm font-semibold uppercase tracking-wider mb-5">
              Ubicación
            </h4>
            <div className="flex items-start gap-3 text-text-inverse-secondary/60 text-sm mb-6">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
              <span>
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-inverse-secondary/60 text-sm">
              <Car className="w-4 h-4 text-secondary" />
              <span>Contamos con Parqueadero Privado</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-inverse-secondary/40 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-text-inverse-secondary/40 hover:text-secondary transition-colors text-xs">
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
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Contacto', href: '/#contacto' },
];
