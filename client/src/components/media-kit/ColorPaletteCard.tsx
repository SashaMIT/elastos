import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";
import { ColorPalette } from "@/lib/media-kit-utils";

interface ColorPaletteCardProps {
  palette: ColorPalette;
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

/**
 * Color Palette Card Component
 * 
 * Displays a collection of colors from a palette
 * 
 * @param {Object} props
 * @param {Object} props.palette - Color palette data object
 * @returns {JSX.Element}
 */
export const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({ palette }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = async (hex: string, index: number) => {
    await copyToClipboard(hex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden border border-zinc-800 hover:border-[#F6921A] bg-zinc-900/50 backdrop-blur-sm">
        <CardHeader className="p-3">
          <CardTitle className="text-base">{palette.name}</CardTitle>
          <CardDescription className="text-xs">{palette.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {palette.colors.map((color, index) => (
              <div
                key={`${color.hex}-${index}`}
                className="group relative flex flex-col gap-1"
                onClick={() => handleCopy(color.hex, index)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="w-full aspect-square rounded-md border border-zinc-800 hover:border-[#F6921A] transition-colors"
                  style={{ 
                    backgroundColor: color.hex,
                    opacity: color.opacity ? parseFloat(color.opacity) / 100 : 1 
                  }}
                />
                <div className="flex flex-col">
                  <p className="font-medium text-[10px] truncate">{color.name}</p>
                  <p className="text-[10px] text-zinc-400 truncate">
                    {copiedIndex === index ? 'Copied!' : color.hex}
                  </p>
                  {color.rgb && (
                    <p className="text-[10px] text-zinc-500 truncate">{color.rgb}</p>
                  )}
                  {color.opacity && (
                    <p className="text-[10px] text-zinc-500 truncate">{color.opacity}</p>
                  )}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                  <span className="text-[10px] text-white font-medium">
                    Click to Copy
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};