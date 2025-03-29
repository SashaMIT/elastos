
import React from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface UseCase {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  modalContent: string;
}

interface UseCaseModalProps {
  useCase: UseCase | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UseCaseModal: React.FC<UseCaseModalProps> = ({ useCase, isOpen, onClose }) => {
  if (!useCase) return null;

  // Helper function to parse emoji from content
  const getEmojiFromContent = (content: string): string => {
    const emojiMatch = content.match(/^([\p{Emoji}])/u);
    return emojiMatch ? emojiMatch[0] : "🔍";
  };

  // Helper function to parse title from content
  const getTitleFromContent = (content: string): string => {
    const lines = content.split('\n');
    if (lines.length > 0) {
      // Remove emoji if present
      return lines[0].replace(/^[\p{Emoji}]\s*/u, '').trim();
    }
    return useCase.title;
  };

  // Helper function to parse sections from content
  const parseSections = (content: string): {title: string, body: string}[] => {
    const sections: {title: string, body: string}[] = [];
    const lines = content.split('\n');
    
    let currentTitle = "";
    let currentBody = "";
    
    lines.forEach((line, index) => {
      // Skip the first line as it's the main title
      if (index === 0) return;
      
      // If line is empty, skip
      if (!line.trim()) return;
      
      // Check if this is a section title (has emoji at start)
      if (line.match(/^[\p{Emoji}]/u)) {
        // If we already have content, push it
        if (currentTitle) {
          sections.push({ title: currentTitle, body: currentBody.trim() });
          currentBody = "";
        }
        currentTitle = line.trim();
      } else {
        // This is content for the current section
        currentBody += line + "\n";
      }
    });
    
    // Add the last section
    if (currentTitle) {
      sections.push({ title: currentTitle, body: currentBody.trim() });
    }
    
    return sections;
  };
  
  const emoji = getEmojiFromContent(useCase.modalContent);
  const title = getTitleFromContent(useCase.modalContent);
  const sections = parseSections(useCase.modalContent);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? "visible" : "invisible"}`}>
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
      
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95">
        {/* Header with image */}
        <div className="relative h-40 overflow-hidden">
          <img 
            src={useCase.image} 
            alt={useCase.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
          >
            <X size={18} />
          </button>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 mb-2 bg-[#5C8EFF]/20 border border-[#5C8EFF]/30 text-white rounded-full text-xs font-medium">
              {useCase.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <span className="text-4xl mr-3">{emoji}</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300">
              {useCase.description}
            </p>
          </div>
          
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  {section.body.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/30">
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all flex items-center gap-1 border border-[rgba(246,146,26,0.50)] text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
