
/**
 * Image optimization utilities
 */

interface ImageOptimizationOptions {
  format?: 'webp' | 'jpeg' | 'png' | 'original';
  quality?: number;
  width?: number;
  height?: number;
}

/**
 * Generates an optimized URL for images
 * This is a simplified implementation - in a production app, you might use
 * services like Cloudinary, ImageKit, or Next.js Image for more advanced optimizations
 */
export function getOptimizedImageUrl(
  src: string,
  options: ImageOptimizationOptions = {}
): string {
  // For external URLs or data URLs, return as is
  if (!src || src.startsWith('data:') || src.startsWith('http') || src.startsWith('blob:')) {
    return src;
  }

  // Default options
  const { format = 'webp', quality = 80, width, height } = options;
  
  // In a real production app, you'd have a server endpoint to handle image optimization
  // For this implementation, we'll just add parameters to simulate the concept
  
  // Clean up the source path
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Add query parameters to indicate optimization settings
  // These would be used by a real image optimization service
  const params = new URLSearchParams();
  
  if (format !== 'original') {
    params.append('format', format);
  }
  
  params.append('q', quality.toString());
  
  if (width) {
    params.append('w', width.toString());
  }
  
  if (height) {
    params.append('h', height.toString());
  }
  
  const queryString = params.toString();
  return `${cleanSrc}${queryString ? `?${queryString}` : ''}`;
}

/**
 * Preloads an image for faster rendering
 */
export function preloadImage(src: string, options: ImageOptimizationOptions = {}): void {
  const optimizedSrc = getOptimizedImageUrl(src, options);
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = optimizedSrc;
  document.head.appendChild(link);
}

/**
 * Utility to create a background image with lazy loading
 */
export function optimizedBackgroundImage(src: string, options: ImageOptimizationOptions = {}): string {
  return `url(${getOptimizedImageUrl(src, options)})`;
}
