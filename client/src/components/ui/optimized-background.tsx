import React from "react";
import { cn } from "@/lib/utils";
import { optimizeImageUrl } from "@/lib/imageUtils";

interface OptimizedBackgroundProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  quality?: number;
}

export function OptimizedBackground({
  src,
  alt,
  className,
  children,
  format = "webp",
  quality = 80,
}: OptimizedBackgroundProps) {
  const optimizedSrc = optimizeImageUrl(src, { quality, format });

  return (
    <div 
      className={cn("relative bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${optimizedSrc})` }}
      role="img"
      aria-label={alt}
    >
      {children}
    </div>
  );
}