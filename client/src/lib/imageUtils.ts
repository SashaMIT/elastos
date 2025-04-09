/**
 * Utility functions for image optimization
 */

export interface OptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
}

/**
 * Optimize an image URL based on specified options
 */
export const optimizeImageUrl = (src: string, options: OptimizationOptions = {}): string => {
  // Skip processing for external URLs or SVGs
  if (src.startsWith('http') || src.endsWith('.svg')) {
    return src;
  }
  
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // Simple implementation that appends query parameters for client-side image optimization
  // In production, this would use a proper image optimization service or CDN
  let optimizedUrl = src;
  
  // Add format conversion if needed
  if (format && !src.endsWith(`.${format}`)) {
    // Extract base path without extension
    const basePath = src.substring(0, src.lastIndexOf('.'));
    optimizedUrl = `${basePath}.${format}`;
  }
  
  // Add query parameters for dimensions and quality
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  
  const queryString = params.toString();
  if (queryString) {
    optimizedUrl += `?${queryString}`;
  }
  
  return optimizedUrl;
};

/**
 * Preload critical images
 */
export const preloadCriticalImages = async (imageUrls: string[] = []): Promise<void> => {
  const defaultCriticalImages = [
    '/images/Elastos Logo Light - 1.png',
    '/images/Elastosbanner.jpg',
    '/images/Elastos Icon - 2.svg',
  ];

  const imagesToPreload = imageUrls.length > 0 ? imageUrls : defaultCriticalImages;

  await Promise.all(
    imagesToPreload.map(async (imageUrl) => {
      const img = new Image();
      img.src = optimizeImageUrl(imageUrl);
      await new Promise((resolve) => (img.onload = resolve));
    }),
  );
};