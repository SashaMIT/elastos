
import React from "react";
import { cn } from "@/lib/utils";

interface HorizontalScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const HorizontalScroll = React.forwardRef<
  HTMLDivElement,
  HorizontalScrollProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full overflow-x-auto scrollbar-hide",
        className
      )}
      {...props}
    >
      <div className="inline-flex">{children}</div>
    </div>
  );
});

HorizontalScroll.displayName = "HorizontalScroll";
