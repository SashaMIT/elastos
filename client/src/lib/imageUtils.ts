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
  // Check if src is a remote URL (starts with http or https)
  if (src.startsWith('http')) {
    // For remote URLs, we can't modify them directly
    return src;
  }
  
  // For local images served from our own server
  const { width, height, quality = 80, format } = options;
  
  // Build query parameters for optimization
  const params = new URLSearchParams();
  
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  if (format) params.append('fmt', format);
  
  // If we have parameters, append them to the URL
  const queryString = params.toString();
  if (queryString) {
    // Add optimization path prefix
    return `/image-optimize${src}?${queryString}`;
  }
  
  return src;
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