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
  fallback,
  ...props
}: OptimizedImageProps) {
  const optimizedSrc = optimizeImageUrl(src, { width, height, quality, format });

  // Handle loading state and missing images
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={cn("overflow-hidden relative", aspectRatio, className)}>
      {blurEffect && isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      <img
        src={hasError && fallback ? fallback : optimizedSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </div>
  );
}