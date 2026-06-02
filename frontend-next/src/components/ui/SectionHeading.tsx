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
    <div className={cn('mb-10 md:mb-14', alignStyles[align], className)}>
      {subtitle && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-2 text-secondary">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-3 font-display',
        light ? 'text-text-inverse' : 'text-text'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-base md:text-lg max-w-2xl mx-auto',
          light ? 'text-text-inverse-secondary/70' : 'text-text-secondary'
        )}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
