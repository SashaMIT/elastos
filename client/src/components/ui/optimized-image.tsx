import React from "react";
import { cn } from "@/lib/utils";
import { optimizeImageUrl } from "@/lib/imageUtils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  width?: number;
  height?: number;
  quality?: number;
  blurEffect?: boolean;
  fallback?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

export function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = "aspect-auto",
  format = "webp",
  width,
  height,
  quality = 80,
  blurEffect = false,
  fallback = "/images/placeholder-image.jpg",
  onError,
  ...props
}: OptimizedImageProps) {
  // Use direct URL if it's already an absolute URL
  const isAbsoluteUrl = src.startsWith('http') || src.startsWith('data:');
  const optimizedSrc = isAbsoluteUrl ? src : optimizeImageUrl(src, { width, height, quality, format });

  // Handle loading state and missing images
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Handle image errors with fallback
  const handleError = React.useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    
    // Use custom error handler if provided
    if (onError) {
      onError(e);
    } else if (fallback && imgRef.current) {
      // Set fallback image if available
      imgRef.current.src = fallback;
    }
  }, [fallback, onError]);

  React.useEffect(() => {
    // Reset loading and error state when source changes
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", aspectRatio, className)}>
      {blurEffect && isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md" />
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
          <span className="text-xs text-gray-500">Image not available</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={hasError && fallback ? fallback : optimizedSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300 rounded-md",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        width={width}
        height={height}
        loading={props.loading || "lazy"}
        {...props}
      />
    </div>
  );
}