'use client';

import { useState } from 'react';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { ServiceCard } from './ServiceCard';
import { cn } from '@/lib/utils';

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(servicesData[0]?.id || '');

  const activeServices = servicesData.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <section className="section-padding bg-surface">
      <Container size="lg">
        <div className="text-center mb-12">
          <p className="text-secondary text-xs font-semibold tracking-widest uppercase mb-3">
            Explorá
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display mb-4">
            Todos nuestros servicios
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {servicesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors',
                activeCategory === category.id
                  ? 'bg-secondary text-white'
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
