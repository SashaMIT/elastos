
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
  isOpen: boolean;
  useCase: UseCase | null;
  onClose: () => void;
}

const formatDescription = (content: string) => {
  if (!content) return "";

  // Parse emojis, headers, bullet points
  const formattedContent = content
    .split('\n\n')
    .map(paragraph => {
      // Handle bullet points
      if (paragraph.includes('💡 What You Can Build:')) {
        const [header, ...rest] = paragraph.split('\n');
        return `<h3 class="font-semibold mb-2">${header}</h3><ul class="list-disc pl-5 space-y-1 mb-4">${rest.map(item => 
          item.trim() && `<li>${item.trim()}</li>`
        ).join('')}</ul>`;
      }
      
      // Handle Tech Used section
      else if (paragraph.includes('🔧 Tech Used:')) {
        return `<div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-md mt-4"><p class="font-semibold">${paragraph.replace(':', ':</p><p>')}</p></div>`;
      }
      
      // Handle headers with emojis
      else if (paragraph.match(/^[🔐📊🎨🗣📡💸🛡️🗳🎓📺🗄📦].+/)) {
        const lines = paragraph.split('\n');
        const header = lines[0];
        const subtitle = lines[1] || '';
        const rest = lines.slice(2).join('\n');
        
        return `<h2 class="text-xl font-bold mb-1">${header}</h2>
                <p class="text-lg text-blue-600 dark:text-blue-400 mb-3">${subtitle}</p>
                <p>${rest}</p>`;
      }
      
      // Regular paragraphs
      return `<p class="mb-4">${paragraph}</p>`;
    })
    .join('');

  return formattedContent;
};

export const UseCaseModal: React.FC<UseCaseModalProps> = ({
  isOpen,
  useCase,
  onClose
}) => {
  if (!isOpen || !useCase) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <Card className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="sticky top-0 flex justify-between items-center bg-white dark:bg-[#171717] p-6 border-b border-gray-200 dark:border-gray-800 z-10">
          <h2 className="text-2xl font-bold">{useCase.title}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <CardContent className="p-6">
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: formatDescription(useCase.modalContent) }} />
          
          {useCase.link !== "#" && (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              <a 
                href={useCase.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Learn more on {new URL(useCase.link).hostname.replace('www.', '')}
                <span className="inline-block transform rotate-45">↗</span>
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
