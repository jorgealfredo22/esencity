'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { cn } from '@/lib/utils';
import { ServiceCategory } from '@/types/service';

interface ServicesGridProps {
  initialServices: ServiceCategory[];
}

export function ServicesGrid({ initialServices }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (initialServices.some(cat => cat.id === hash)) return hash;
    }
    return initialServices[0]?.id || '';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (initialServices.some(cat => cat.id === hash)) {
        setActiveCategory(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [initialServices]);

  const activeServices = initialServices.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <section className="section-padding bg-surface">
      <Container size="lg">
        <SectionHeading
          subtitle="Explora"
          title="Todos nuestros servicios"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {initialServices.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors',
                activeCategory === category.id
                  ? 'bg-secondary text-text-inverse'
                  : 'bg-surface-alt text-text-secondary hover:bg-border'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
