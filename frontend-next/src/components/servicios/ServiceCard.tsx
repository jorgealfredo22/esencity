import { Service } from '@/types/service';
import { formatPrice } from '@/lib/utils';
import { siteConfig } from '@/data/site';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact';
}

export function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-surface rounded-xl p-5 border border-border">
        <h4 className="text-base font-semibold text-text mb-1.5">
          {service.name}
        </h4>
        <p className="text-text-secondary text-sm mb-3">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {service.price && (
              <span className="text-lg font-bold text-secondary">
                {formatPrice(service.price)}
              </span>
            )}
            {service.duration && (
              <span className="flex items-center gap-1 text-text-muted text-xs">
                <Clock className="w-3 h-3" />
                {service.duration}
              </span>
            )}
          </div>
          <Button variant="ghost" size="sm" href={siteConfig.social.whatsapp}>
            Reservar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-elevated rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] bg-surface-alt relative overflow-hidden">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-text-muted text-sm">Imagen de {service.name}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-text font-display mb-1.5">
          {service.name}
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {service.price && (
              <span className="text-base font-bold text-secondary">
                {formatPrice(service.price)}
              </span>
            )}
            {service.duration && (
              <span className="flex items-center gap-1 text-text-muted text-xs">
                <Clock className="w-3 h-3" />
                {service.duration}
              </span>
            )}
          </div>
          <Button variant="primary" size="sm" href={siteConfig.social.whatsapp}>
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
}
