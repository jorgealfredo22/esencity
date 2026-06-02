import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  action?: ReactNode;
  className?: string;
}

export function ErrorState({
  title = 'Algo salió mal',
  message = 'Ha ocurrido un error inesperado. Por favor, intenta de nuevo.',
  action,
  className,
}: ErrorStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 text-center', className)}>
      <AlertCircle className="w-10 h-10 text-error mb-3" />
      <h3 className="text-lg font-semibold text-text mb-1">
        {title}
      </h3>
      <p className="text-text-secondary text-sm max-w-sm mb-4">
        {message}
      </p>
      {action}
    </div>
  );
}
