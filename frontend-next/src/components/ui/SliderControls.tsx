'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick?: (index: number) => void;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export function SliderControls({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onDotClick,
  showArrows = true,
  showDots = true,
  className,
}: SliderControlsProps) {
  if (totalSlides <= 1) return null;

  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      {showArrows && (
        <>
          <button
            onClick={onPrev}
            className="p-2 rounded-full bg-surface-elevated hover:bg-surface-alt transition-colors shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 text-text" />
          </button>
          <button
            onClick={onNext}
            className="p-2 rounded-full bg-surface-elevated hover:bg-surface-alt transition-colors shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 text-text" />
          </button>
        </>
      )}

      {showDots && (
        <div className="flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick?.(index)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-200',
                index === currentIndex
                  ? 'bg-secondary w-6'
                  : 'bg-border-strong w-1.5 hover:bg-text-muted'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
