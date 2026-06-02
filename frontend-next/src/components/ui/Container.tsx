import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export function Container({
  children,
  size = 'lg',
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizeStyles[size], className)}>
      {children}
    </Component>
  );
}
