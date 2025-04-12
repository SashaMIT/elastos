import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

// Define features outside component to avoid recreation on renders
const features = [
  {
    title: "Feature 1",
    description: "Description for feature 1",
    image: "/path/to/image1.jpg"
  },
  {
    title: "Feature 2",
    description: "Description for feature 2",
    image: "/path/to/image2.jpg"
  },
  {
    title: "Feature 3",
    description: "Description for feature 3",
    image: "/path/to/image3.jpg"
  }
];

export function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % features.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + features.length) % features.length);
    setProgress(0);
  };

  return (
    <div className="container mx-auto relative">
      <div className="relative w-full h-96">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-center justify-center p-6 h-full">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-center">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full"
      >
        ←
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full"
      >
        →
      </button>
      
      <div className="mt-4">
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  );
}