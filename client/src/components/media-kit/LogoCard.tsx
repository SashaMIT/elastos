
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

interface LogoProps {
  logo: {
    id: string;
    name: string;
    description: string;
    preview: string;
    downloadLink?: string;
    variants: Record<string, Record<string, string>>;
  };
}

export const LogoCard = ({ logo }: LogoProps) => {
  const handleDownload = async () => {
    if (logo.downloadLink) {
      try {
        const response = await fetch(logo.downloadLink);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // Extract the filename from the downloadLink
        const filename = logo.downloadLink.split('/').pop() || 'logo-kit.zip';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        console.error("Download failed:", error);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border border-zinc-800 hover:border-[#F6921A] bg-zinc-900/50 backdrop-blur-sm">
        <CardHeader className="pb-0">
          <CardTitle>{logo.name}</CardTitle>
          <CardDescription>{logo.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="aspect-video bg-zinc-950 flex items-center justify-center p-6 rounded-md mb-4 border border-zinc-800">
            <motion.img
              src={logo.preview}
              alt={logo.name}
              className="max-h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-zinc-800 pt-4">
          <button 
            onClick={handleDownload}
            className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm"
          >
            <span>Download Logo Kit</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
              <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
              <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
              <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
            </svg>
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
