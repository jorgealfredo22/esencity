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
    <section className="py-20 md:py-32 bg-[var(--color-white)]">
      <Container size="lg">
        <div className="text-center mb-16">
          <p className="text-[var(--color-secondary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Explorá
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] font-primary mb-6">
            Todos nuestros servicios
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {servicesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-medium transition-all uppercase tracking-wide',
                activeCategory === category.id
                  ? 'bg-[var(--color-secondary)] text-[var(--color-white)] shadow-md'
                  : 'bg-[var(--color-gray-100)] text-[var(--color-gray-600)] hover:bg-[var(--color-gray-200)]'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
