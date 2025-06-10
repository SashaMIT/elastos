import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface WebPImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

// List of images that should stay as PNG (transparent backgrounds)
const KEEP_PNG = [
  'Elastos Vision World Computer.png',
  'Elastos Icon - 2.png',
  'Elastos New Logo_Kit-01.png',
  'Elastos New Logo_Kit-02.png',
  'Elastos New Logo_Kit-03.png',
  'Elastos Logo Light - 1.png',
  'Elastos Logo Dark - 1.png',
  'Security.png',
  'L2.png',
  'World.png',
  'Depin.png'
];

function getOptimizedSrc(originalSrc: string): { webpSrc: string; shouldUseWebp: boolean } {
  // Check if this image should remain as PNG
  const filename = originalSrc.split('/').pop() || '';
  const shouldKeepPNG = KEEP_PNG.some(keepFile => 
    filename.includes(keepFile.replace('.png', ''))
  );

  if (shouldKeepPNG) {
    return { webpSrc: originalSrc, shouldUseWebp: false };
  }

  // Convert to optimized WebP path
  const webpSrc = originalSrc.replace(/\.(jpe?g|png)$/i, '.webp');
  
  // Check if this is from the images directory (our optimized images)
  const isLocalImage = originalSrc.startsWith('/images/');
  
  if (isLocalImage) {
    // WebP files are in the same directory as originals
    return { 
      webpSrc: webpSrc, 
      shouldUseWebp: true 
    };
  }

  return { webpSrc: originalSrc, shouldUseWebp: false };
}

export function WebPImage({
  src,
  alt,
  className,
  fallbackSrc,
  width,
  height,
  loading = 'lazy',
  priority = false,
  ...props
}: WebPImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { webpSrc, shouldUseWebp } = getOptimizedSrc(src);
  const finalFallbackSrc = fallbackSrc || src;

  // Use original src if WebP failed or not applicable
  const imageSrc = imageError || !shouldUseWebp ? finalFallbackSrc : webpSrc;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    if (shouldUseWebp && !imageError) {
      // If WebP failed, try original
      setImageError(true);
    }
    setIsLoading(false);
  };

  return (
    <picture>
      {shouldUseWebp && !imageError && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </picture>
  );
}

// Hook for preloading WebP images
export function useWebPPreloader(images: string[]) {
  React.useEffect(() => {
    const preloadImages = images.map(src => {
      const { webpSrc, shouldUseWebp } = getOptimizedSrc(src);
      
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
          // If WebP fails, preload original
          if (shouldUseWebp) {
            const fallbackImg = new Image();
            fallbackImg.onload = () => resolve();
            fallbackImg.onerror = () => resolve();
            fallbackImg.src = src;
          } else {
            resolve();
          }
        };
        img.src = shouldUseWebp ? webpSrc : src;
      });
    });

    Promise.all(preloadImages).catch(console.warn);
  }, [images]);
}

export default WebPImage; 