
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface UseCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  useCase: {
    title: string;
    modalContent: string;
  };
}

export const UseCaseModal: React.FC<UseCaseModalProps> = ({
  isOpen,
  onClose,
  useCase
}) => {
  if (!useCase) return null;

  // Function to parse and format the modal content
  const formatModalContent = (content: string) => {
    // Split content by lines
    const lines = content.split('\n');
    let formatted = [];
    let currentSection = null;
    
    // Process each line
    for (const line of lines) {
      // Title line is the first non-empty line
      if (line.trim() && formatted.length === 0) {
        formatted.push(
          <h2 key="title" className="text-2xl font-bold mb-4 text-black dark:text-white">{line.trim()}</h2>
        );
        continue;
      }
      
      // Subtitle is the second non-empty line
      if (line.trim() && formatted.length === 1) {
        formatted.push(
          <p key="subtitle" className="text-lg mb-6 text-gray-800 dark:text-gray-200 font-medium italic">{line.trim()}</p>
        );
        continue;
      }
      
      // Section headers typically start with 'What You Can Build:'
      if (line.includes('What You Can Build:')) {
        currentSection = 'what-you-can-build';
        formatted.push(
          <h3 key={currentSection} className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">What You Can Build</h3>
        );
        continue;
      }
      
      // Section headers for Elastos Stack
      if (line.includes('Elastos Stack:')) {
        currentSection = 'elastos-stack';
        formatted.push(
          <h3 key={currentSection} className="text-xl font-semibold mt-8 mb-4 text-black dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">Elastos Stack</h3>
        );
        continue;
      }
      
      // List items start with a dash or bullet point
      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        const content = line.trim().substring(1).trim();
        formatted.push(
          <li key={`item-${formatted.length}`} className="mb-2 text-gray-700 dark:text-gray-300">{content}</li>
        );
        continue;
      }
      
      // Regular paragraphs
      if (line.trim() && !line.includes('What You Can Build:') && !line.includes('Elastos Stack:')) {
        formatted.push(
          <p key={`p-${formatted.length}`} className="mb-4 text-gray-700 dark:text-gray-300">{line.trim()}</p>
        );
      }
    }
    
    return formatted;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">{useCase.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-2 pb-4">
            {formatModalContent(useCase.modalContent)}
          </div>
        </ScrollArea>
        <Card className="bg-[#f8f9fa] dark:bg-[#1a1a1a] border-gray-200 dark:border-gray-800 mt-4">
          <CardContent className="p-4 flex justify-between">
            <div>
              <a 
                href="https://elastos.dev/sdk/welcome/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
              >
                <span>Build</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                  <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                  <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.5" strokeWidth="0.025"/>
                </svg>
              </a>
            </div>
            <div>
              <a 
                href="https://elastos.info/cvfund/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-1 border border-[rgba(92,142,255,0.50)] text-sm"
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
      </DialogContent>
    </Dialog>
  );
};
