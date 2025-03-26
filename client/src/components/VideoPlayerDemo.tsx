
import VideoPlayer from "@/components/ui/video-player";

const VideoPlayerDemo = () => {
    return (
        <div className="container mx-auto mt-12 w-full">
            <div className="w-full">
                <VideoPlayer src="/videos/Elastos_ The Modern Internet.mp4"/>
            </div>
        </div>
    );
}

export { VideoPlayerDemo };
