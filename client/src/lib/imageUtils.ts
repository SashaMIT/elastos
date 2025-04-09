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
  // Handle empty or invalid src
  if (!src) return '/images/placeholder-image.jpg';
  
  // Skip processing for external URLs, SVGs, or data URLs
  if (src.startsWith('http') || src.startsWith('data:') || src.endsWith('.svg')) {
    return src;
  }
  
  try {
    const { width, height, quality = 80, format = 'webp' } = options;
    
    // Handle image path
    let optimizedUrl = src;
    
    // Ensure the source path starts with a slash if it's a relative path
    if (!optimizedUrl.startsWith('/')) {
      optimizedUrl = `/${optimizedUrl}`;
    }
    
    // Don't modify the format of GIF files (to preserve animation)
    const isGif = src.toLowerCase().endsWith('.gif');
    
    // Add format conversion if needed and not a GIF
    if (format && !isGif && !src.endsWith(`.${format}`)) {
      const lastDotIndex = src.lastIndexOf('.');
      if (lastDotIndex !== -1) {
        // Extract base path without extension
        const basePath = src.substring(0, lastDotIndex);
        optimizedUrl = `${basePath}.${format}`;
      }
    }
    
    // Add query parameters for dimensions and quality
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    if (format && !isGif) params.append('fmt', format);
    
    const queryString = params.toString();
    if (queryString) {
      optimizedUrl += `?${queryString}`;
    }
    
    return optimizedUrl;
  } catch (error) {
    console.error('Error optimizing image URL:', error);
    return src; // Return original source on error
  }
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