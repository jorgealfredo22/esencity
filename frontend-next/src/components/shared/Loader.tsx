import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: 'w-6 h-6 border-2',
  md: 'w-10 h-10 border-3',
  lg: 'w-16 h-16 border-4',
};

export function Loader({ size = 'md', fullScreen = false, className }: LoaderProps) {
  const loader = (
    <div
      className={cn(
        'border-[var(--color-secondary)] border-t-transparent rounded-full animate-spin',
        sizeStyles[size],
        className
      )}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-white)]/90 backdrop-blur-sm z-50">
        {loader}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {loader}
    </div>
  );
}
