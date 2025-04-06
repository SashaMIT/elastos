import React from "react";
import { cn } from "../../lib/media-kit-utils";

/**
 * Button Component
 * 
 * A customizable button component with various variants and sizes
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Button style variant
 * @param {string} props.size - Button size
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element}
 */
export const Button = ({
  children,
  className,
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  ...props
}) => {
  // Define base styles
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Size variants
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md text-sm",
    lg: "h-11 px-8 rounded-md text-lg",
    icon: "h-10 w-10",
  };
  
  // Style variants
  const variantClasses = {
    default: "bg-[#F7921A] text-white hover:bg-[#F7921A]/90",
    destructive: "bg-red-500 text-white hover:bg-red-500/90",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-[#F7921A]",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};