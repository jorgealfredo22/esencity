import { Service } from '@/types/service';
import { formatPrice } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact';
}

export function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-[var(--color-white)] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[var(--color-gray-100)]">
        <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
          {service.name}
        </h4>
        <p className="text-[var(--color-gray-600)] text-sm mb-3">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {service.price && (
              <span className="text-xl font-bold text-[var(--color-secondary)]">
                {formatPrice(service.price)}
              </span>
            )}
            {service.duration && (
              <span className="flex items-center gap-1 text-[var(--color-gray-500)] text-xs">
                <Clock className="w-3 h-3" />
                {service.duration}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            href="https://wa.me/541112345678"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Reservar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-white)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[var(--color-gray-100)]">
      <div className="aspect-[16/10] bg-[var(--color-gray-100)] relative">
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 flex items-center justify-center">
          <span className="text-[var(--color-gray-400)]">Imagen de {service.name}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
          {service.name}
        </h3>
        <p className="text-[var(--color-gray-600)] mb-4">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {service.price && (
              <span className="text-2xl font-bold text-[var(--color-secondary)]">
                {formatPrice(service.price)}
              </span>
            )}
            {service.duration && (
              <span className="flex items-center gap-1 text-[var(--color-gray-500)] text-sm">
                <Clock className="w-4 h-4" />
                {service.duration}
              </span>
            )}
          </div>
          <Button
            variant="primary"
            size="sm"
            href="https://wa.me/541112345678"
          >
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
}
