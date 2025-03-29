
import React from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface UseCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  longDescription: string;
}

export const UseCaseModal: React.FC<UseCaseModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  longDescription,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <Card className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="sticky top-0 flex justify-between items-center bg-white dark:bg-[#171717] p-6 border-b border-gray-200 dark:border-gray-800 z-10">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: formatDescription(longDescription) }} />
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://elastos.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm justify-center sm:justify-start"
            >
              <span>Build</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.5"/>
                <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.5" strokeWidth="0.025"/>
              </svg>
            </a>
            <a 
              href="https://www.cyberrepublic.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm justify-center sm:justify-start"
            >
              <span>Funding</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to format description with emoji and sections
function formatDescription(text: string): string {
  // Convert line breaks to paragraph tags
  let formatted = text.replace(/\n\n/g, '</p><p>');
  
  // Format sections with emojis
  formatted = formatted.replace(/💡 What You Can Build:/g, '<h3 class="text-lg font-semibold mt-6 mb-3">💡 What You Can Build:</h3>');
  formatted = formatted.replace(/🔧 Tech Used:/g, '<h3 class="text-lg font-semibold mt-6 mb-3">🔧 Tech Used:</h3>');
  
  // Format lists
  formatted = formatted.replace(/- /g, '<li class="ml-5 list-disc mb-2">');
  formatted = formatted.replace(/\n(?=<li)/g, '</li>\n');
  formatted = formatted.replace(/<li.*?>\n/g, '<ul class="my-3">\n$&');
  formatted = formatted.replace(/(?<=<\/li>)\n(?!\s*<li)/g, '\n</ul>');
  
  // Wrap in paragraph if not already
  if (!formatted.startsWith('<p>')) {
    formatted = '<p>' + formatted;
  }
  if (!formatted.endsWith('</p>')) {
    formatted += '</p>';
  }
  
  return formatted;
}
