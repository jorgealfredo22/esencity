'use client';

import { useState } from 'react';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { cn } from '@/lib/utils';

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(servicesData[0]?.id || '');

  const activeServices = servicesData.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <section className="py-20 md:py-32 bg-[var(--color-gray-50)]">
      <Container size="lg">
        <SectionHeading
          subtitle="Explorá"
          title="Todos nuestros servicios"
          description="Elegí una categoría para ver los servicios disponibles."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {servicesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-[var(--color-secondary)] text-[var(--color-white)] shadow-md'
                  : 'bg-[var(--color-white)] text-[var(--color-gray-600)] hover:bg-[var(--color-gray-100)] border border-[var(--color-gray-200)]'
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
