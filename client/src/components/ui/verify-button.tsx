import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface VerifyButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function VerifyButton({ className, href, children, onClick }: VerifyButtonProps) {
  const buttonClasses = cn(
    "text-sm font-medium bg-transparent text-[#5C8EFF] px-4 py-2 rounded-full border border-[#5C8EFF] hover:bg-[#5C8EFF]/10 transition-colors inline-flex items-center gap-2",
    className
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
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      <span>{children || 'Verify'}</span>
    </button>
  );
}