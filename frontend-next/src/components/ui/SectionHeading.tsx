import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
  className,
  children,
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12 md:mb-16', alignStyles[align], className)}>
      {subtitle && (
        <span className={cn(
          'inline-block text-sm font-semibold tracking-widest uppercase mb-3',
          light ? 'text-[var(--color-secondary-light)]' : 'text-[var(--color-secondary)]'
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
        light ? 'text-[var(--color-white)]' : 'text-[var(--color-primary)]'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-lg max-w-2xl mx-auto',
          light ? 'text-[var(--color-gray-300)]' : 'text-[var(--color-gray-600)]'
        )}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
