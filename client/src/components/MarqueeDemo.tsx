import React from 'react';

interface MarqueeDemoProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const MarqueeDemo: React.FC<MarqueeDemoProps> = ({ images }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: '200px', height: '100px', objectFit: 'contain' }}
            loading="lazy"
            fetchPriority="low"
          />
        ))}
      </div>
    </div>
  );
};