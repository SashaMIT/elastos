
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface ImageData {
  src: string;
  alt: string;
  key: string;
}

export function CommunityImageGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: false, amount: 0.1 });

  // Community images - moved from LandingPage to this component
  const communityImages: ImageData[] = [
    { key: "1", src: "/images/Roadmap/Elastos Members.jpeg", alt: "Elastos Community Event" },
    { key: "2", src: "/images/Roadmap/Sash as speaker in Bitcoin2024.jpeg", alt: "Sash as speaker in Bitcoin2024" },
    { key: "3", src: "/images/Roadmap/Rong Chen and kevin Zhang hosted a meetup in London.jpeg", alt: "Elastos Community Gathering" },
    { key: "4", src: "/images/Community/Elastos Celebration.png", alt: "Elastos Celebration" },
    { key: "5", src: "/images/Community/FmIGJV0XkA4B7wA.jpeg", alt: "Elastos Community Gathering" },
    { key: "6", src: "/images/Roadmap/Elastos hosted a meetup in Hong Kong.jpeg", alt: "Elastos hosted a meetup in Hong Kong" },
    { key: "7", src: "/images/Community/EiJX5nNVoAEe9pX.jpeg", alt: "Elastos Community Event" },
    { key: "8", src: "/images/Roadmap/BeL2 booth in Bitcoin 2024.jpeg", alt: "BeL2 booth in Bitcoin 2024" },
    { key: "9", src: "/images/Community/E4b9vKPXIAYJ1s_.jpeg", alt: "Elastos Community Event" },
    { key: "10", src: "/images/Roadmap/Sunny Feng Han at Teamz Web Summit in Tokyo.jpeg", alt: "Sunny Feng Han at Teamz Web Summit in Tokyo" },
    { key: "11", src: "/images/Community/EdJmPJ-U4AAU8F7.jpeg", alt: "Elastos Community Gathering" },
    { key: "12", src: "/images/Community/Sunny Vitalik.jpeg", alt: "Sunny with Vitalik Buterin" },
    { key: "13", src: "/images/Community/Div4TBUWsAYmcEq.jpeg", alt: "Elastos Community Meetup" },
    { key: "14", src: "/images/Roadmap/Rong Chen and Kevin Zhang hosted a meetup in Barcelona.jpeg", alt: "Rong Chen and Kevin Zhang hosted a meetup in Barcelona" },
    { key: "15", src: "/images/Community/D35ZHIUUYAA2xKO.jpeg", alt: "Elastos Community Event" },
    { key: "20", src: "/images/Community/Ezbt41dUUAAjX4p.jpeg", alt: "Elastos Community Event" },
    { key: "21", src: "/images/Community/F6EWQCJXoAAfGlY.jpeg", alt: "Elastos Community Gathering" },
    { key: "22", src: "/images/Community/D35ZHIUUYAA2xKO.jpeg", alt: "Elastos Community Event" },
    { key: "23", src: "/images/Roadmap/Rong Pomp.png", alt: "Rong Chen with Pomp" },
    { key: "24", src: "/images/Community/Ecp2XbVUYAAlUeC.jpeg", alt: "Elastos Community Event" },
  ];

  // Chunk images into visible batches for progressive loading
  const chunkedImages = [];
  const chunkSize = 4;
  
  for (let i = 0; i < communityImages.length; i += chunkSize) {
    chunkedImages.push(communityImages.slice(i, i + chunkSize));
  }

  // Loading animation variants for staggered grid appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div ref={gridRef} className="container mx-auto px-4 mt-16 md:mt-0">
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-12 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {communityImages.map((image, index) => (
          <motion.div 
            key={image.key} 
            className="aspect-square" 
            variants={itemVariants}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full rounded-md object-cover"
              aspectRatio="aspect-square"
              width={300}
              height={300}
              format="webp"
              quality={75}
              blurEffect={true}
              loading={index < 4 ? "eager" : "lazy"}
              fallback="/images/placeholder-image.jpg"
              onError={(e) => {
                console.error(`Failed to load image: ${image.src}`);
                // Set a default placeholder on error
                e.currentTarget.src = "/images/placeholder-image.jpg";
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
