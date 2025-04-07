
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getImagePath, getFallbackImage, getAspectRatio } from '@/lib/imageUtils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  aspectRatio?: string;
  format?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto';
  alt: string;
  blurEffect?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback,
  format,
  aspectRatio,
  loading = 'lazy',
  decoding = 'async',
  blurEffect = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  
  const resolvedAspectRatio = aspectRatio || getAspectRatio(format);
  const resolvedFallback = fallback || getFallbackImage(format);

  useEffect(() => {
    if (src) {
      setImageSrc(getImagePath(src));
    }
  }, [src]);

  return (
    <div className={cn('overflow-hidden relative', resolvedAspectRatio, className)}>
      {blurEffect && !isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      )}
      
      {imageSrc && (
        <img
          src={error ? resolvedFallback : imageSrc}
          alt={alt}
          loading={loading}
          decoding={decoding}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            props.className
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.error(`Failed to load image: ${imageSrc}`);
            setError(true);
          }}
          {...props}
        />
      )}
    </div>
  );
}
