import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TikTokIcon } from '@/components/shared/SocialIcons';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const socialLinks = [
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: TikTokIcon, href: siteConfig.social.tiktok, label: 'TikTok' },
  { icon: WhatsAppIcon, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
];

const mainNavFooter = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Contacto', href: '/#contacto' },
];

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <BrandLogo className="h-10 mb-5" />
            <p className="text-text-inverse-secondary/60 text-sm leading-relaxed mb-6">
              La belleza, en manos expertas, se convierte en arte. Más de 20 años creando experiencias únicas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-text-inverse/10 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors group"
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
            <div className="flex items-start gap-3 text-text-inverse-secondary/60 text-sm mb-4">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-secondary" />
              <div>
                <a
                  href="https://www.google.com/maps/place/Esencity+barber+studio/@5.7155527,-72.9291762,1181m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e6a45007ac9d2bd:0x21c91150476fcf6a!8m2!3d5.7155527!4d-72.9291762!16s%2Fg%2F11npdjz68t?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-text-inverse/10 mb-3">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.8901!2d-72.9291762!3d5.7155527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45007ac9d2bd%3A0x21c91150476fcf6a!2sEsencity%20barber%20studio!5e0!3m2!1ses!2sco!4v1748999365000!5m2!1ses!2sco`}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Esencity"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Esencity+barber+studio/@5.7155527,-72.9291762,1181m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e6a45007ac9d2bd:0x21c91150476fcf6a!8m2!3d5.7155527!4d-72.9291762!16s%2Fg%2F11npdjz68t?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-secondary-dark transition-colors font-medium"
            >
              Dejar una reseña
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
            
          </div>
        </div>

        <div className="border-t border-text-inverse/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
