
import React from "react";
import { Dots_v2 } from "./spinner";

interface CenteredSpinnerProps {
  className?: string;
}

export const CenteredSpinner: React.FC<CenteredSpinnerProps> = ({ className }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className={`text-primary ${className}`}>
        <Dots_v2 />
      </div>
    </div>
  );
};
