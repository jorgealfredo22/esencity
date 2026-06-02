import { useState, useEffect, useCallback } from 'react';

interface UseAutoSliderOptions {
  totalSlides: number;
  interval?: number;
  autoplay?: boolean;
}

export function useAutoSlider({ totalSlides, interval = 5000, autoplay = true }: UseAutoSliderOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [isPlaying, interval, next, totalSlides]);

  return {
    currentIndex,
    isPlaying,
    next,
    prev,
    goTo,
    setIsPlaying,
  };
}
