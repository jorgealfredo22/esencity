import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: 'w-5 h-5 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-3',
};

export function Loader({ size = 'md', fullScreen = false, className }: LoaderProps) {
  const loader = (
    <div
      className={cn(
        'border-secondary border-t-transparent rounded-full animate-spin',
        sizeStyles[size],
        className
      )}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-surface/90 backdrop-blur-sm z-50">
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
