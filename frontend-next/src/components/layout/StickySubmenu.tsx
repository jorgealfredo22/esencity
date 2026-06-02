'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SubmenuItem {
  label: string;
  href: string;
}

interface StickySubmenuProps {
  items: SubmenuItem[];
  className?: string;
}

export function StickySubmenu({ items, className }: StickySubmenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach((item) => {
      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!isVisible || items.length === 0) return null;

  return (
    <div className={cn(
      'fixed top-0 left-0 right-0 z-40 bg-[var(--color-white)]/95 backdrop-blur-md shadow-sm animate-fade-in-down',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-hide">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'whitespace-nowrap text-sm font-medium transition-colors pb-1 border-b-2',
                activeItem === item.href.replace('#', '')
                  ? 'text-[var(--color-secondary)] border-[var(--color-secondary)]'
                  : 'text-[var(--color-gray-600)] border-transparent hover:text-[var(--color-secondary)]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
