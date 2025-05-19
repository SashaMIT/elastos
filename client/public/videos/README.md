# Hero Background Video

To fix the YouTube video bot detection issue in the hero section, please follow these steps:

1. Download the hero video from the original YouTube source (https://www.youtube.com/embed/PEtrJlSQB3w) or create a new background video.

2. Convert the video to MP4 format with optimized web settings (use a tool like HandBrake or FFmpeg).

3. Save the converted video as `elastos-hero-bg.mp4` in this folder.

4. Uncomment the video section in `client/src/pages/LandingPage.tsx` to enable the self-hosted video player.

## Recommended Video Specifications

- Format: MP4 (H.264)
- Resolution: 1920x1080 or HD resolution that matches your needs
- Duration: 10-30 seconds (loop it if needed)
- Size: Aim for under 5MB for fast loading
- Quality: Medium to high, balanced for web performance

## Alternative Solutions

If you prefer not to self-host the video, consider:

1. Using a more reliable video hosting service like Vimeo
2. Creating an animated background with CSS/JS
3. Using a series of images with a fade transition effect

The current implementation falls back to the static hero image until the video is added. 