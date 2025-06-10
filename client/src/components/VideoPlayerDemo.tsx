
import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { WebPImage } from "@/components/ui/webp-image";

const VideoPlayerDemo = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const isMobile = useIsMobile();
    
    // Reset video state when switching between mobile and desktop
    useEffect(() => {
        setVideoLoaded(false);
    }, [isMobile]);
    
    return (
        <div className={`container mx-auto w-full ${isMobile ? 'px-4 video-player-mobile mt-16' : ''}`}>
            <div className={`w-full ${isMobile ? 'max-w-full mx-auto' : ''}`}>
                {!videoLoaded ? (
                    <div 
                        className="relative w-full rounded-xl overflow-hidden cursor-pointer shadow-lg border border-gray-800/20"
                        onClick={() => setVideoLoaded(true)}
                    >
                        <WebPImage 
                            src="/images/Elastosvideoimage.png" 
                            alt="Elastos Video Thumbnail" 
                            className="w-full rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                                <Play className={`${isMobile ? 'w-12 h-12' : 'w-12 h-12'} text-white`} />
                            </div>
                            <span className="absolute bottom-4 text-white font-medium">
                                Click to play
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-800/20">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/vaJ5Pguxd4M?autoplay=1&rel=0&loop=1&playlist=vaJ5Pguxd4M&start=6"
                            title="Elastos: The Modern Internet"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export { VideoPlayerDemo };
