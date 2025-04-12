import React from "react";

interface FeatureSectionProps {
  iconName: string;
  title: string;
  description: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ iconName, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 mb-6">
        <img src={`/icons/${iconName}.svg`} alt={title} className="w-full h-full" />
      </div>
      <h3 className="text-xl md:text-2xl font-normal text-black dark:text-white mb-3">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};