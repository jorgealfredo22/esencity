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
            className="p-2 rounded-full bg-[var(--color-white)]/90 hover:bg-[var(--color-white)] transition-colors shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--color-primary)]" />
          </button>
          <button
            onClick={onNext}
            className="p-2 rounded-full bg-[var(--color-white)]/90 hover:bg-[var(--color-white)] transition-colors shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-[var(--color-primary)]" />
          </button>
        </>
      )}

      {showDots && (
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick?.(index)}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-[var(--color-secondary)] w-8'
                  : 'bg-[var(--color-gray-300)] hover:bg-[var(--color-gray-400)]'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
