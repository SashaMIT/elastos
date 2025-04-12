import { preloadImage } from './imageUtils';

/**
 * Utility function to preload components or assets
 */
export const preloadComponent = (importFn: () => Promise<any>) => {
  // Start loading the component in the background
  const promise = importFn();
  return () => promise;
};

/**
 * Utility function to preload routes based on user navigation patterns
 */
export const preloadRoute = (route: string) => {
  // Map routes to their respective import functions
  const routeMap: Record<string, () => Promise<any>> = {
    '/': () => import('../pages/LandingPage'),
    '/security': () => import('../pages/SecurityPage'),
    '/buy-ela': () => import('../pages/BuyElaPage'),
    // Add other routes as needed
  };

  // If the route exists in our map, preload it
  if (routeMap[route]) {
    preloadComponent(routeMap[route]);
  }

  // Preload key images based on route
  const routeImages: Record<string, string[]> = {
    '/': ['/images/Elastosbanner.jpg', '/images/Hero image.png', '/images/Elastos Vision World Computer.png'],
    '/vision-page': ['/images/Elastos Vision World Computer.png', '/images/Rong Chen.png', '/images/Sunny.jpeg'],
    '/security': ['/images/Security.png'],
    // Add more routes and their key images as needed
  };

  if (routeImages[route]) {
    routeImages[route].forEach(imgSrc => {
      preloadImage(imgSrc);
    });
  }
};


export const preloadCriticalImages = () => {
  const criticalImages = [
    '/images/Elastosbanner.jpg',
    '/images/Elastos Logo Light - 1.png',
    '/images/Elastos Logo Dark - 1.png',
    '/images/placeholder-image.jpg'
  ];

  criticalImages.forEach(src => {
    preloadImage(src);
  });
};