import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import JSZip from "jszip";
import { Font } from "@/lib/media-kit-utils";

interface FontCardProps {
  font: Font;
}

/**
 * Font Card Component
 * 
 * Displays font information and provides download options
 * 
 * @param {Object} props
 * @param {Object} props.font - Font asset data object
 * @returns {JSX.Element}
 */
export const FontCard: React.FC<FontCardProps> = ({ font }) => {
  const handleDownload = async (file: { name: string; path: string }) => {
    try {
      const response = await fetch(file.path);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${font.name}-${file.name}.woff2`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download font:", error);
    }
  };

  const downloadAllFonts = async () => {
    const zip = new JSZip();
    
    for (const fontFile of font.files) {
      try {
        const response = await fetch(fontFile.path);
        const blob = await response.blob();
        const fileName = fontFile.path.split('/').pop() || fontFile.name;
        zip.file(fileName, blob);
      } catch (error) {
        console.error(`Failed to add ${fontFile.path} to zip:`, error);
      }
    }
    
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const url = window.URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `elastos-${font.id}-fonts.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Zip generation failed:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden border border-zinc-800 hover:border-[#F6921A] bg-zinc-900/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>{font.name}</CardTitle>
          <CardDescription>{font.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-zinc-950 rounded-md p-6 mb-6 border border-zinc-800">
            <p className="text-4xl" style={{ fontFamily: 'PPTelegraf, sans-serif' }}>
              Elastos Brand Typography
            </p>
            <p className="text-xl mt-2" style={{ fontFamily: 'PPTelegraf, sans-serif', fontWeight: 'lighter' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p className="text-xl mt-1" style={{ fontFamily: 'PPTelegraf, sans-serif', fontWeight: 'lighter' }}>
              abcdefghijklmnopqrstuvwxyz
            </p>
            <p className="text-xl mt-1" style={{ fontFamily: 'PPTelegraf, sans-serif', fontWeight: 'lighter' }}>
              0123456789
            </p>
          </div>
          
          <div className="space-y-4">
            {font.files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-md border border-zinc-800">
                <div>
                  <p className="font-medium text-sm">{file.name}</p>
                  <p className="text-sm text-zinc-400">Weight: {file.weight}</p>
                </div>
                <button
                  onClick={() => handleDownload(file)}
                  className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm hover:bg-[rgba(246,146,26,0.25)]"
                >
                  <span>Download</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-zinc-800 pt-4">
          <button 
            onClick={downloadAllFonts}
            className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm hover:bg-[rgba(92,142,255,0.25)]"
          >
            <span>Download All Fonts</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
              <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
            </svg>
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};