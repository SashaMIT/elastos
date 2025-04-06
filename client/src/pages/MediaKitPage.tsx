
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
                  Elastos Media Kit
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
                  Official brand assets, guidelines, and resources for the Elastos ecosystem.
                  Use these assets to build consistent and recognizable Elastos-related content.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button 
                  onClick={downloadBrandingGuidelines}
                  disabled={downloading}
                  className="inline-flex px-3 py-2 bg-[rgba(246,146,26,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(246,146,26,0.25)] text-sm disabled:opacity-50"
                >
                  <Download className="h-5 w-5" />
                  <span>{downloading ? "Preparing Download..." : "Elastos Branding Guidelines"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#F6921A"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#F6921A" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
                </button>
                <a 
                  href="https://juniper-cost-88a.notion.site/1cd7b867328c804f8d5fe73b3f13d78c?v=1cd7b867328c8050a6af000cf4722377&pvs=4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 bg-[rgba(92,142,255,0.15)] text-white rounded-full font-[200] transition-all items-center gap-2 border border-[rgba(92,142,255,0.25)] text-sm"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Preview Elastos Logo Kit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 34" fill="none">
                    <circle cx="17.333" cy="17" r="16.75" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                    <path d="M17.3338 22.9405L23.2741 17.0002L17.3338 11.0598L16.4162 11.9774L20.7628 16.324H10.8622V17.6763H20.7628L16.4162 22.0229L17.3338 22.9405Z" fill="#5C8EFF"/>
                    <path d="M20.7628 17.6638H10.8747V16.3365H20.7628H20.7929L20.7716 16.3152L16.4338 11.9774L17.3338 11.0775L23.2564 17.0002L17.3338 22.9228L16.4338 22.0229L20.7716 17.6851L20.7929 17.6638H20.7628Z" stroke="#5C8EFF" strokeOpacity="0.25" strokeWidth="1.5"/>
                  </svg>
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
      
      <div className="container mx-auto px-4 pt-0 pb-16 relative z-10">
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
