
import React, { useEffect, useRef } from 'react';
import createGlobe from "cobe";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let globe: ReturnType<typeof createGlobe>;

    const initGlobe = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      width = canvas.offsetWidth;
      canvas.width = width * 2;
      canvas.height = width * 2;

      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [],
        opacity: 0.9,
        onRender: (state) => {
          state.phi = phi;
          phi += 0.005;
        },
      });
    };

    // Wait for canvas to be mounted
    const timer = setTimeout(initGlobe, 100);

    return () => {
      clearTimeout(timer);
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{ width: '100%', height: '100%', contain: 'layout paint size' }}
    />
  );
};
