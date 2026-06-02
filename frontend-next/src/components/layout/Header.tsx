'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? 'bg-[var(--color-white)]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/brand/imagotipo.svg"
              alt={siteConfig.name}
              className={`h-8 md:h-10 transition-all ${
                isScrolled ? 'opacity-100' : 'opacity-90'
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-secondary)] ${
                  isScrolled ? 'text-[var(--color-gray-700)]' : 'text-[var(--color-white)]/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="primary"
              size="sm"
              href={siteConfig.social.whatsapp}
            >
              Reservar Turno
            </Button>
          </nav>

          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-[var(--color-primary)]' : 'text-[var(--color-white)]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-white)] border-t border-[var(--color-gray-100)] animate-fade-in-down">
          <nav className="flex flex-col py-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-[var(--color-gray-700)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-secondary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.social.whatsapp}
                className="w-full"
              >
                Reservar Turno
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
