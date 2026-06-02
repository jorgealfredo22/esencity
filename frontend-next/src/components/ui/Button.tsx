'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  target?: string;
  rel?: string;
}

const variantStyles = {
  primary: 'bg-secondary text-text-inverse hover:bg-secondary-dark',
  secondary: 'bg-primary text-text-inverse hover:bg-primary-light',
  outline: 'border border-secondary text-secondary hover:bg-secondary hover:text-text-inverse',
  ghost: 'text-secondary hover:bg-secondary-muted',
};

const sizeStyles = {
  sm: 'px-5 py-2 text-xs font-medium tracking-wider uppercase',
  md: 'px-6 py-2.5 text-sm font-medium tracking-wider uppercase',
  lg: 'px-8 py-3.5 text-sm font-medium tracking-wider uppercase',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled = false,
  type = 'button',
  icon,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-colors duration-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed';
  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined} target={target} rel={rel}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
