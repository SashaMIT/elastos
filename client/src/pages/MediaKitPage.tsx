
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogoCard } from "@/components/media-kit/LogoCard";
import { ColorPaletteCard } from "@/components/media-kit/ColorPaletteCard";
import { FontCard } from "@/components/media-kit/FontCard";
import { logos, colorPalettes, fonts } from "@/lib/media-kit-utils";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export function MediaKitPage() {
  const [downloading, setDownloading] = useState(false);

  const downloadBrandingGuidelines = async () => {
    setDownloading(true);
    
    try {
      // Direct download of the branding guidelines
      const response = await fetch("/logo-assets/Elastos-Brand-Guidelines.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "Elastos-Brand-Guidelines.pdf";
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
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Community crowd.png" 
          alt="Elastos Media Kit" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>
        
        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-6">
                  <span className="text-[#F6921A]">Elastos</span> Media Kit
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
                  Official brand assets, guidelines, and resources for the Elastos ecosystem.
                  Use these assets to build consistent and recognizable Elastos-related content.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button 
                  size="lg" 
                  onClick={downloadBrandingGuidelines}
                  disabled={downloading}
                  className="bg-[#F6921A] hover:bg-[#F6921A]/90 text-white"
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
                    className="border-[#5C8EFF] text-[#5C8EFF] hover:bg-[#5C8EFF]/10"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Preview Elastos Logo Kit
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-28 w-96 h-96 rounded-full bg-[#F6921A]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 rounded-full bg-[#5C8EFF]/10 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-2 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="logos" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-black/20 p-1">
              <TabsTrigger value="logos" className="data-[state=active]:bg-[#F6921A]">Logos</TabsTrigger>
              <TabsTrigger value="colors" className="data-[state=active]:bg-[#F6921A]">Colors</TabsTrigger>
              <TabsTrigger value="typography" className="data-[state=active]:bg-[#F6921A]">Typography</TabsTrigger>
            </TabsList>
            
            <TabsContent value="logos" className="space-y-8">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl">
                  {logos.map((logo) => (
                    <LogoCard key={logo.id} logo={logo} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="colors" className="space-y-8">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                  {colorPalettes.map((palette) => (
                    <ColorPaletteCard key={palette.id} palette={palette} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="typography" className="space-y-8">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                  {fonts.map((font) => (
                    <FontCard key={font.id} font={font} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <div className="mt-20">
          <StackedCircularFooter />
        </div>
      </div>
    </div>
  );
}
