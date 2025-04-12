import React from "react";

interface CardStatProps {
  title: string;
  value: string | number;
  description?: string;
}

export const CardStat: React.FC<CardStatProps> = ({ title, value, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
      )}
    </div>
  );
};