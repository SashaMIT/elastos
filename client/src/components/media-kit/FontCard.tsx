
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

interface FontProps {
  font: {
    id: string;
    name: string;
    description: string;
    files: {
      name: string;
      weight: string;
      path: string;
    }[];
  };
}

export const FontCard = ({ font }: FontProps) => {
  const downloadFont = async (path: string, name: string) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
            <p className="text-xl mt-2" style={{ fontFamily: 'PPTelegraf, sans-serif', fontWeight: 200 }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p className="text-xl mt-1" style={{ fontFamily: 'PPTelegraf, sans-serif', fontWeight: 200 }}>
              abcdefghijklmnopqrstuvwxyz
            </p>
            <p className="text-xl mt-1" style={{ fontFamily: 'PPTelegraf, sans-serif', fontWeight: 200 }}>
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
                  className="border-[#5C8EFF] text-[#5C8EFF] hover:bg-[#5C8EFF]/10"
                >
                  <Download className="w-4 h-4 mr-1" /> Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
