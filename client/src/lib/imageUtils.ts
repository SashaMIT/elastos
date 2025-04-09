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
  // In a real implementation, this would transform the URL to fetch an optimized version
  // For now, just return the original URL as a placeholder
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