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
} from "./ui/card";
import { Button } from "./ui/button";
import JSZip from "jszip";

/**
 * Font Card Component
 * 
 * Displays font information and provides download options
 * 
 * @param {Object} props
 * @param {Object} props.font - Font asset data object
 * @returns {JSX.Element}
 */
export const FontCard = ({ font }) => {
  const downloadFont = async (path, name) => {
    try {
      const response = await fetch(path);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
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
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border border-zinc-800 hover:border-[#F7921A] bg-zinc-900/50 backdrop-blur-sm">
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
          
          <div className="space-y-3">
            {font.files.map((file, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-zinc-900 rounded-md border border-zinc-800 hover:bg-zinc-800 transition-colors"
              >
                <div>
                  <p className="font-medium text-white">{file.name}</p>
                  <p className="text-sm text-white/70">Weight: {file.weight}</p>
                </div>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => downloadFont(file.path, file.path.split('/').pop() || file.name)}
                  className="border-[#8BABFF] text-[#8BABFF] hover:bg-[#8BABFF]/10"
                >
                  <Download className="w-4 h-4 mr-1" /> Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-zinc-800 pt-4">
          <Button 
            onClick={downloadAllFonts}
            className="bg-[#F7921A] hover:bg-[#F7921A]/90 text-white"
          >
            <Download className="w-4 h-4 mr-2" /> Download All Fonts
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};