import React from "react";
import { cn } from "../../lib/media-kit-utils";

/**
 * Card Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-800 bg-zinc-900/60 text-white shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Header Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Header content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const CardHeader = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Title Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Title content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

/**
 * Card Description Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Description content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const CardDescription = ({ className, children, ...props }) => {
  return (
    <p
      className={cn("text-sm text-zinc-400", className)}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Card Content Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

/**
 * Card Footer Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Footer content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const CardFooter = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};