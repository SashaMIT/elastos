
import React, { useState, useRef, useEffect } from "react";
import VideoPlayer from "@/components/ui/video-player";
import { Play } from "lucide-react";

const VideoPlayerDemo = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);
    
    // Start playing video automatically when it's loaded
    useEffect(() => {
        if (videoLoaded && videoRef.current) {
            // Wait a short time to ensure the component is fully mounted
            const timer = setTimeout(() => {
                const videoElement = document.querySelector('.video-player-container video');
                if (videoElement) {
                    videoElement.play().catch(e => console.log('Auto-play prevented:', e));
                }
            }, 100);
            
            return () => clearTimeout(timer);
        }
    }, [videoLoaded]);
    
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
                                Click to play video (35MB)
                            </span>
                        </div>
                    </div>
                ) : (
                    <div ref={videoRef} className="video-player-container">
                        <VideoPlayer 
                            src="/videos/Elastos_ The Modern Internet.mp4"
                            poster="/images/Elastosvideoimage.png"
                            preventLoop={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export { VideoPlayerDemo };
