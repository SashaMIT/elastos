
import React, { useState } from "react";
import { Play } from "lucide-react";

const VideoPlayerDemo = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    
    return (
        <div className="container mx-auto mt-12 w-full">
            <div className="w-full">
                {!videoLoaded ? (
                    <div 
                        className="relative w-full rounded-xl overflow-hidden cursor-pointer"
                        onClick={() => setVideoLoaded(true)}
                    >
                        <img 
                            src="/images/Elastosvideoimage.png" 
                            alt="Elastos Video Thumbnail" 
                            className="w-full rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                                <Play className="w-12 h-12 text-white" />
                            </div>
                            <span className="absolute bottom-4 text-white font-medium">
                            
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="w-full aspect-video rounded-xl overflow-hidden">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/vaJ5Pguxd4M?autoplay=1&rel=0"
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
}

export { VideoPlayerDemo };
