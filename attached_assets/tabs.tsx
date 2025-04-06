import React from "react";
import { cn } from "../../utils";

interface TabsProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn("flex border-b border-gray-200", className)}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
            activeTab === index
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          )}
          onClick={() => onChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  activeTab: number;
}

export function TabPanel({ children, index, activeTab }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={activeTab !== index}
      className={cn(
        "py-4",
        activeTab === index ? "animate-fadeIn" : "hidden"
      )}
    >
      {children}
    </div>
  );
}