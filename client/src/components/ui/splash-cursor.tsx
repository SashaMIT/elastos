
"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from "@/lib/utils";

export interface SplashCursorProps {
  className?: string;
}

export const SplashCursor: React.FC<SplashCursorProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, dx: 0, dy: 0, vx: 0, vy: 0, down: false });
  
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent
    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize pointer tracking
    const updatePointer = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      pointerRef.current.dx = x - pointerRef.current.x;
      pointerRef.current.dy = y - pointerRef.current.y;
      pointerRef.current.x = x;
      pointerRef.current.y = y;
      pointerRef.current.vx = pointerRef.current.dx * 0.1;
      pointerRef.current.vy = pointerRef.current.dy * 0.1;
    };

    canvas.addEventListener('mousemove', updatePointer);
    canvas.addEventListener('mousedown', () => {
      pointerRef.current.down = true;
    });
    canvas.addEventListener('mouseup', () => {
      pointerRef.current.down = false;
    });
    
    // Particles array
    const particles: {x: number, y: number, size: number, vx: number, vy: number, alpha: number, color: string}[] = [];
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new particles on movement
      if (Math.abs(pointerRef.current.dx) > 1 || Math.abs(pointerRef.current.dy) > 1) {
        const count = Math.floor(Math.sqrt(pointerRef.current.dx**2 + pointerRef.current.dy**2) / 2);
        for (let i = 0; i < count; i++) {
          const size = Math.random() * 10 + 5;
          const speedFactor = Math.random() * 0.5 + 0.2;
          particles.push({
            x: pointerRef.current.x,
            y: pointerRef.current.y,
            size,
            vx: pointerRef.current.vx * speedFactor + (Math.random() - 0.5) * 2,
            vy: pointerRef.current.vy * speedFactor + (Math.random() - 0.5) * 2,
            alpha: 0.7,
            color: `hsla(${Math.random() * 60 + 200}, 80%, 60%, 0.7)`
          });
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;
        p.size *= 0.97;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace('0.7', p.alpha.toString());
        ctx.fill();
        
        // Remove faded particles
        if (p.alpha <= 0.02 || p.size <= 0.5) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', updatePointer);
    };
  }, []);
  
  useEffect(() => {
    initCanvas();
  }, []);

  return (
    <div className={cn("absolute inset-0 z-50 pointer-events-none", className)}>
      <canvas ref={canvasRef} id="fluid" className="w-full h-full" />
    </div>
  );
};
