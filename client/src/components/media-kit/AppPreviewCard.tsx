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
import { appPreviews } from "@/lib/media-kit-utils";

type AppPreview = typeof appPreviews[number];

interface AppPreviewCardProps {
  preview: AppPreview;
}

/**
 * App Preview Card Component
 * 
 * Displays app preview images with download option
 * 
 * @param {AppPreviewCardProps} props
 * @returns {JSX.Element}
 */
export const AppPreviewCard: React.FC<AppPreviewCardProps> = ({ preview }) => {
  const downloadImage = async () => {
    try {
      const response = await fetch(preview.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `elastos-${preview.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-white/10 hover:border-[#F7921A]/50 dark:bg-[#1A1A1A]">
        <CardHeader>
          <CardTitle>{preview.name}</CardTitle>
          <CardDescription>{preview.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-black/20 rounded-md overflow-hidden border border-white/5 flex items-center justify-center p-3">
            <motion.img
              src={preview.image}
              alt={preview.name}
              className="max-h-full max-w-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-4">
          <Button 
            onClick={downloadImage}
            className="bg-[#F7921A] hover:bg-[#F7921A]/90 text-white"
          >
            <Download className="w-4 h-4 mr-2" /> Download Image
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};