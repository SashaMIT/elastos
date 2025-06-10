"use client"

import { type ImgHTMLAttributes } from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import { cn } from "@/lib/utils"

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

function getOptimizedSrc(originalSrc: string): string {
  // Check if this image should remain as PNG
  const filename = originalSrc.split('/').pop() || '';
  const shouldKeepPNG = KEEP_PNG.some(keepFile => 
    filename.includes(keepFile.replace('.png', ''))
  );

  if (shouldKeepPNG) {
    return originalSrc;
  }

  // Convert to optimized WebP path
  const webpSrc = originalSrc.replace(/\.(jpe?g|png)$/i, '.webp');
  
  // Check if this is from the images directory (our optimized images)
  const isLocalImage = originalSrc.startsWith('/images/');
  
  if (isLocalImage) {
    // WebP files are in the same directory as originals
    return webpSrc;
  }

  return originalSrc;
}

export interface ImageZoomProps extends ImgHTMLAttributes<HTMLImageElement> {
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>
  zoomProps?: UncontrolledProps
  className?: string
  width?: number
  height?: number
}

export function ImageZoom({
  zoomInProps,
  zoomProps,
  className,
  children,
  ...props
}: ImageZoomProps) {
  // Get optimized WebP source if available
  const optimizedSrc = props.src ? getOptimizedSrc(props.src) : props.src;
  
  return (
    <Zoom
      classDialog={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      )}
      zoomMargin={20}
      wrapElement="span"
      {...zoomProps}
      zoomImg={{
        className: cn(
          "image-rendering-high-quality cursor-zoom-out", 
          zoomInProps?.className
        ),
        ...zoomInProps,
        src: optimizedSrc,
      }}
    >
      {children ?? (
        <img
          {...props}
          src={optimizedSrc}
          className={cn(
            "cursor-zoom-in rounded-md transition-all",
            className
          )}
        />
      )}
    </Zoom>
  )
}
