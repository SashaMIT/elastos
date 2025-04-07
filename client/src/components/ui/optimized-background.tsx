
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getImagePath } from '@/lib/imageUtils';

interface OptimizedBackgroundProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: string;
}

export function OptimizedBackground({
  src,
  fallbackSrc = '/images/placeholder-image.jpg',
  className,
  children,
  overlay = false,
  overlayColor = 'bg-black',
  overlayOpacity = 'opacity-50',
}: OptimizedBackgroundProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const img = new Image();
    const resolvedSrc = getImagePath(src);
    
    img.src = resolvedSrc;
    setImageSrc(resolvedSrc);
    
    img.onload = () => setLoaded(true);
    img.onerror = () => {
      console.error(`Failed to load background image: ${resolvedSrc}`);
      setError(true);
      setImageSrc(fallbackSrc);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className={cn('relative', className)}>
      <div 
        className={cn(
          'absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}
      />
      
      {overlay && (
        <div className={cn('absolute inset-0', overlayColor, overlayOpacity)} />
      )}
      
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
