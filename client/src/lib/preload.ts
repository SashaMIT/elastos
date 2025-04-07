
/**
 * Preloads critical images to improve initial page load experience
 */

export const preloadCriticalImages = () => {
  const criticalImages = [
    '/images/Elastosbanner.jpg',
    '/images/Essentials.png',
    '/images/Rong Chen.png',
    '/images/placeholder-image.jpg',
    '/images/Elastos Logo Light - 1.png',
    '/images/Elastos Logo Dark - 1.png',
  ];

  const preloadImage = (src: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  };

  criticalImages.forEach(preloadImage);
};

export const preloadResources = () => {
  // Preload critical images
  preloadCriticalImages();
};
