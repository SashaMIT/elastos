import React from "react";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-normal text-center mb-2 text-black dark:text-white">
      {title}
    </h2>
  );
};