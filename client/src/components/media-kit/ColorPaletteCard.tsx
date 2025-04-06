
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/Card";

interface ColorPaletteProps {
  palette: {
    id: string;
    name: string;
    description?: string;
    colors: {
      name: string;
      hex: string;
    }[];
  };
}

export const ColorPaletteCard = ({ palette }: ColorPaletteProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border border-zinc-800 hover:border-[#F6921A] bg-zinc-900/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>{palette.name}</CardTitle>
          <CardDescription>Official Elastos brand colors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex flex-col space-y-2">
              {palette.colors.map((color, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-2 rounded-md bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
                  onClick={() => copyToClipboard(color.hex, index)}
                >
                  <div 
                    className="w-8 h-8 rounded-md mr-3 flex-shrink-0" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{color.name}</p>
                    <p className="text-xs text-white/70">{color.hex}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/50" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
