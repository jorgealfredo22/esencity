import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface BrandLogoProps {
  className?: string;
  invert?: boolean;
  style?: CSSProperties;
}

export function BrandLogo({ className, invert = true, style }: BrandLogoProps) {
  return (
    <img
      src="/brand/imagotipo.svg"
      alt={siteConfig.name}
      className={cn(invert && 'brightness-0 invert', className)}
      style={style}
    />
  );
}
