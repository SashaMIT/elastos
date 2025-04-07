
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getOptimizedImageUrl } from '@/lib/imageUtils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  aspectRatio?: string;
  format?: 'webp' | 'jpeg' | 'png' | 'original';
  quality?: number;
  blurEffect?: boolean;
  width?: number;
  height?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = '/images/placeholder-image.jpg',
  aspectRatio = 'aspect-video',
  format = 'webp',
  quality = 80,
  blurEffect = false,
  width,
  height,
  loading = 'lazy',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(blurEffect ? fallback : (src || fallback));
  
  useEffect(() => {
    if (src) {
      // Only process optimization if we have a source
      const optimizedSrc = getOptimizedImageUrl(src, { format, quality, width, height });
      
      if (!blurEffect) {
        setImageSrc(optimizedSrc);
      } else {
        // For blur effect, we'll load the optimized image in the background
        const img = new Image();
        img.src = optimizedSrc;
        img.onload = () => {
          setImageSrc(optimizedSrc);
          setIsLoaded(true);
        };
        img.onerror = () => {
          setError(true);
          setImageSrc(fallback);
        };
      }
    }
  }, [src, format, quality, width, height, blurEffect, fallback]);

  return (
    <div className={cn('overflow-hidden relative', aspectRatio, className)}>
      <img
        src={error ? fallback : imageSrc}
        alt={alt || ''}
        loading={loading}
        width={width}
        height={height}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-300',
          blurEffect ? (isLoaded ? 'opacity-100' : 'opacity-60 blur-[2px]') : 'opacity-100',
          props.className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}
