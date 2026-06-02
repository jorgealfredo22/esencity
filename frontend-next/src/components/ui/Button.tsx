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
  primary: 'bg-[var(--color-secondary)] text-[var(--color-white)] hover:bg-[var(--color-secondary-dark)]',
  secondary: 'bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary-light)]',
  outline: 'border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)]',
  ghost: 'text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10',
};

const sizeStyles = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-base',
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
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed';
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
