
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-800 bg-zinc-900/60 text-white shadow-sm",
        className
      )}
      {...props}
    />
  );
};

export const CardHeader = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
};

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
};

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn("text-sm text-zinc-400", className)}
      {...props}
    />
  );
};

export const CardContent = ({ className, ...props }: CardProps) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
};

export const CardFooter = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
};
