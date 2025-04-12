"use client"

import { type ImgHTMLAttributes } from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import { cn } from "@/lib/utils"

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
        src: props.src,
      }}
    >
      {children ?? (
        <img
          className={cn(
            "cursor-zoom-in rounded-md transition-all",
            className
          )}
          {...props}
        />
      )}
    </Zoom>
  )
}
