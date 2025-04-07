
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
    '/vision': () => import('../pages/VisionPage'),
    '/buy-ela': () => import('../pages/BuyElaPage'),
    // Add other routes as needed
  };

  // If the route exists in our map, preload it
  if (routeMap[route]) {
    preloadComponent(routeMap[route]);
  }
};
