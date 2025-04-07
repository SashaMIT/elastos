
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getOptimizedImageUrl } from '@/lib/imageUtils';

interface OptimizedBackgroundProps {
  src: string;
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
  format?: 'webp' | 'jpeg' | 'png' | 'original';
  quality?: number;
  blurEffect?: boolean;
}

export function OptimizedBackground({
  src,
  fallback = '/images/placeholder-image.jpg',
  className,
  children,
  format = 'webp',
  quality = 80,
  blurEffect = false,
}: OptimizedBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(!blurEffect);
  const [bgSrc, setBgSrc] = useState<string>(blurEffect ? fallback : src);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (src && blurEffect) {
      const optimizedSrc = getOptimizedImageUrl(src, { format, quality });
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = () => {
        setBgSrc(optimizedSrc);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setBgSrc(fallback);
        setError(true);
      };
    } else if (src) {
      setBgSrc(getOptimizedImageUrl(src, { format, quality }));
    }
  }, [src, format, quality, blurEffect, fallback]);

  return (
    <div
      className={cn(
        'bg-cover bg-center bg-no-repeat transition-all duration-500',
        blurEffect && !isLoaded && 'filter blur-md scale-105',
        className
      )}
      style={{
        backgroundImage: `url(${error ? fallback : bgSrc})`,
      }}
    >
      {children}
    </div>
  );
}
