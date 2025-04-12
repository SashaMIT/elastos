import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
                <button 
                  onClick={() => downloadFont(file.path, file.path.split('/').pop() || file.name)}
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm"
                >
                  <span>Download</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};