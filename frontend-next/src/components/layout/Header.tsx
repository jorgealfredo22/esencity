'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TikTokIcon } from '@/components/shared/SocialIcons';
import { Menu, X } from 'lucide-react';

const socialLinks = [
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: TikTokIcon, href: siteConfig.social.tiktok, label: 'TikTok' },
  { icon: WhatsAppIcon, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
];

function SocialLinks() {
  return (
    <div className="flex gap-2">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 opacity-60 hover:opacity-100 hover:text-secondary transition-colors"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <BrandLogo className="h-6 md:h-7" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-widest uppercase text-text-inverse opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <SocialLinks />
            <Button
              variant="primary"
              size="sm"
              href={siteConfig.social.booking}
            >
              Agenda tu cita
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-text-inverse"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-text-inverse/10">
          <nav className="flex flex-col py-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-text-inverse opacity-80 hover:opacity-100 hover:text-secondary transition-colors uppercase tracking-widest text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-6 pt-4 pb-2">
              <SocialLinks />
            </div>
            <div className="px-6 pt-2 pb-4">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.social.booking}
                className="w-full"
              >
                Agenda tu cita
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
