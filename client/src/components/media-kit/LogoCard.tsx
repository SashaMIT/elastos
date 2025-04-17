import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";
import { Logo } from "@/lib/media-kit-utils";

interface LogoCardProps {
  logo: Logo;
}

/**
 * Logo Card Component
 * 
 * Displays a single logo with preview and download options
 * 
 * @param {Object} props
 * @param {Object} props.logo - Logo data object
 * @returns {JSX.Element}
 */
export const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden border border-zinc-800 hover:border-[#F6921A] bg-zinc-900/50 backdrop-blur-sm">
        <CardHeader className="p-4">
          <CardTitle className="text-lg">{logo.name}</CardTitle>
          <CardDescription className="text-sm">{logo.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="aspect-[2/1] bg-black rounded-md overflow-hidden border border-white/5 flex items-center justify-center">
            <img
              src={logo.preview}
              alt={logo.name}
              className="max-h-[100px] w-auto object-contain"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={() => window.open(logo.downloadLink, '_blank')}
              className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm hover:bg-[rgba(246,146,26,0.25)]"
            >
              <span>Download Logo Kit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};