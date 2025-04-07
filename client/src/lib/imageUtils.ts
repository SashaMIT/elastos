
export const getImagePath = (src: string): string => {
  // If the path already includes a protocol or is absolute, return it as is
  if (src.startsWith('http') || src.startsWith('/')) {
    return src;
  }
  
  // Otherwise, ensure it's a relative path from the /images directory
  return `/images/${src}`;
};

export const getFallbackImage = (type?: string): string => {
  switch (type) {
    case 'profile':
      return '/images/placeholder-profile.jpg';
    case 'landscape':
      return '/images/placeholder-landscape.jpg';
    default:
      return '/images/placeholder-image.jpg';
  }
};

export const getAspectRatio = (format?: string): string => {
  switch (format) {
    case 'square':
      return 'aspect-square';
    case 'video':
      return 'aspect-video';
    case 'portrait':
      return 'aspect-[3/4]';
    case 'landscape':
      return 'aspect-[16/9]';
    default:
      return 'aspect-auto';
  }
};
