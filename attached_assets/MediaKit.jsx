import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import { LogoCard } from "./components/LogoCard";
import { ColorPaletteCard } from "./components/ColorPaletteCard";
import { FontCard } from "./components/FontCard";
import { AppPreviewCard } from "./components/AppPreviewCard";
import { logos, colorPalettes, fonts, appPreviews } from "./lib/media-kit-utils";

/**
 * Elastos Media Kit Component
 * 
 * This component can be integrated into any React application
 * to showcase the Elastos brand assets, colors, typography and app previews.
 * 
 * @param {Object} props 
 * @param {boolean} props.showHeader - Whether to show the Media Kit header
 * @param {boolean} props.showFooter - Whether to show the Media Kit footer
 * @param {string} props.className - Additional classes to apply to the root div
 * @returns {JSX.Element}
 */
export default function MediaKit({ 
  showHeader = true, 
  showFooter = true, 
  className = "",
}) {
  const [downloading, setDownloading] = useState(false);

  const downloadBrandingGuidelines = async () => {
    setDownloading(true);
    
    try {
      // Direct download of the branding guidelines
      const response = await fetch("/logo-assets/Brand-Guidelines-Elastos.zip");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "Brand-Guidelines-Elastos.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download branding guidelines:", error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-[#141414] text-white ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-28 w-96 h-96 rounded-full bg-[#F7921A]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 rounded-full bg-[#8BABFF]/10 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {showHeader && (
          <header className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#F7921A]">Elastos</span> Media Kit
            </motion.h1>
            <motion.p 
              className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Official brand assets, guidelines, and resources for the Elastos ecosystem.
              Use these assets to build consistent and recognizable Elastos-related content.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                onClick={downloadBrandingGuidelines}
                disabled={downloading}
                className="bg-[#F7921A] hover:bg-[#F7921A]/90 text-white"
              >
                <Download className="mr-2 h-5 w-5" />
                {downloading ? "Preparing Download..." : "Elastos Branding Guidelines"}
              </Button>
              <a 
                href="https://juniper-cost-88a.notion.site/1cd7b867328c804f8d5fe73b3f13d78c?v=1cd7b867328c8050a6af000cf4722377&pvs=4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#8BABFF] text-[#8BABFF] hover:bg-[#8BABFF]/10"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Preview Elastos Logo Kit
                </Button>
              </a>
            </motion.div>
          </header>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="logos" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-black/20 p-1">
              <TabsTrigger value="logos" className="flex-1 data-[state=active]:bg-[#F7921A] data-[state=active]:text-white">Logos</TabsTrigger>
              <TabsTrigger value="colors" className="flex-1 data-[state=active]:bg-[#F7921A] data-[state=active]:text-white">Colors</TabsTrigger>
              <TabsTrigger value="typography" className="flex-1 data-[state=active]:bg-[#F7921A] data-[state=active]:text-white">Typography</TabsTrigger>
            </TabsList>
            
            <TabsContent value="logos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {logos.map((logo) => (
                  <LogoCard key={logo.id} logo={logo} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="colors" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {colorPalettes.map((palette) => (
                  <ColorPaletteCard key={palette.id} palette={palette} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="typography" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fonts.map((font) => (
                  <FontCard key={font.id} font={font} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        {showFooter && (
          <motion.footer
            className="mt-20 pt-8 border-t border-zinc-800 text-center text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>© {new Date().getFullYear()} Elastos. All rights reserved.</p>
            <p className="mt-2">
              <a 
                href="https://juniper-cost-88a.notion.site/1cd7b867328c804f8d5fe73b3f13d78c?v=1cd7b867328c8050a6af000cf4722377&pvs=4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7921A] hover:underline"
              >
                Preview Elastos Logo Kit
              </a>
            </p>
          </motion.footer>
        )}
      </div>
    </div>
  );
}