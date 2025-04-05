
import React from 'react';
import { cn } from '@/lib/utils';

interface VerifyButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  color?: 'blue' | 'orange';
}

export function VerifyButton({ 
  className, 
  href, 
  children, 
  onClick, 
  color = 'blue' 
}: VerifyButtonProps) {
  // Set colors based on the color prop
  const colorClasses = color === 'blue' 
    ? "bg-[rgba(92,142,255,0.15)] border-[rgba(92,142,255,0.25)]" 
    : "bg-[rgba(246,146,26,0.15)] border-[rgba(246,146,26,0.25)]";
  
  const svgFill = color === 'blue' ? "#5C8EFF" : "#F6921A";
  
  const buttonClasses = cn(
    "inline-flex px-3 py-2 text-white rounded-full font-[200] transition-all items-center gap-1 border text-sm",
    colorClasses,
    className
  );

  const renderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
      <circle cx="17.333" cy="17" r="16.75" stroke={svgFill} strokeOpacity="0.25" strokeWidth="1.5"/>
      <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill={svgFill}/>
      <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke={svgFill} strokeOpacity="0.25" strokeWidth="1.5"/>
    </svg>
  );

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <span>{children || 'Verify'}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      <span>{children || 'Verify'}</span>
      {renderIcon()}
    </button>
  );
}
