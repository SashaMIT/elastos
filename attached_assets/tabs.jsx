import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "../../lib/media-kit-utils";

// Create a context for tabs
const TabsContext = createContext({
  selectedValue: '',
  setSelectedValue: () => {},
});

/**
 * Tabs Component
 * 
 * Container for a tabbed interface
 * 
 * @param {Object} props
 * @param {string} props.defaultValue - Default selected tab value
 * @param {React.ReactNode} props.children - Tab components
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const Tabs = ({ defaultValue, children, className, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedValue, setSelectedValue }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

/**
 * Tabs List Component
 * 
 * Container for tab triggers
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Tab trigger components
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const TabsList = ({ children, className, ...props }) => {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-zinc-800 p-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Tab Trigger Component
 * 
 * Clickable tab button
 * 
 * @param {Object} props
 * @param {string} props.value - Value of this tab
 * @param {React.ReactNode} props.children - Tab content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const TabsTrigger = ({ value, children, className, ...props }) => {
  const { selectedValue, setSelectedValue } = useContext(TabsContext);
  const isActive = selectedValue === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setSelectedValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-[#F7921A] text-white shadow-sm" : "text-zinc-400 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Tab Content Component
 * 
 * Content displayed when tab is active
 * 
 * @param {Object} props
 * @param {string} props.value - Value of this tab content
 * @param {React.ReactNode} props.children - Content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const TabsContent = ({ value, children, className, ...props }) => {
  const { selectedValue } = useContext(TabsContext);
  const isActive = selectedValue === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};