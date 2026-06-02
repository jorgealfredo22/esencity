import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

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
    <div className={cn('flex flex-col items-center justify-center py-16 text-center', className)}>
      <div className="mb-4">
        <svg
          className="w-16 h-16 text-[var(--color-secondary)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-gray-700)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-gray-500)] max-w-md mb-6">
        {message}
      </p>
      {action}
    </div>
  );
}
