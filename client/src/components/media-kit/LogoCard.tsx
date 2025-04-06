
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
          <Button 
            size="sm" 
            onClick={handleDownload}
            className="bg-[#F6921A] hover:bg-[#F6921A]/90 text-white"
          >
            <Download className="w-4 h-4 mr-1" /> Download Logo Kit
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
