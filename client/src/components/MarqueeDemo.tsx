import React, { useState, useEffect } from 'react';
import { Marquee } from "@/components/ui/marquee";

// Import all images that will be used
import AliImage from "../../public/images/Ali.png";
import BinanceImage from "../../public/images/Binance.png";
import BitmainImage from "../../public/images/Bitmain.png";
import OKMinerImage from "../../public/images/OKMINER.png";
import TencentImage from "../../public/images/Ten-w.png";
import ViaImage from "../../public/images/Via.png";
import F2Image from "../../public/images/f2.png";

interface ImageLoadStatus {
  [key: string]: boolean | undefined;
}

export function MarqueeDemo() {
  // Adjust the top offset based on screen width.
  const topOffset =
    typeof window !== "undefined" && window.innerWidth < 768 ? "-60px" : "-30px";

  // Include all the original images as requested
  const miners = [
    { name: "Alibaba", imagePath: "/images/Ali.png" },
    { name: "Binance", imagePath: "/images/Binance.png" },
    { name: "BitMain", imagePath: "/images/Bitmain.png" },
    { name: "OKex", imagePath: "/images/OKMINER.png" },
    { name: "Tencent", imagePath: "/images/Ten-w.png" },
    { name: "Via BTC", imagePath: "/images/Via.png" },
    { name: "F2Pool", imagePath: "/images/f2.png" },
  ];

  // Track loaded status for each image
  const [loadedImages, setLoadedImages] = useState<ImageLoadStatus>({});

  // Preload images to confirm they exist
  useEffect(() => {
    miners.forEach(miner => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [miner.name]: true
        }));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${miner.imagePath}`);
        setLoadedImages(prev => ({
          ...prev,
          [miner.name]: false
        }));
      };
      img.src = miner.imagePath;
    });
  }, []);

  return (
    <div style={{ position: "relative", top: topOffset }}>
      <Marquee className="py-0">
        {miners.map((miner, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            style={{ margin: "0 40px", flexShrink: 0 }}
          >
            {loadedImages[miner.name] === true ? (
              <img
                src={miner.imagePath}
                alt={`${miner.name} Logo`}
                style={{
                  width: miner.name === "Via BTC" || miner.name === "F2Pool" ? "105px" : "125px",
                  height: miner.name === "Via BTC" || miner.name === "F2Pool" ? "105px" : "125px",
                  objectFit: "contain",
                }}
                loading="eager"
              />
            ) : (
              <div 
                style={{
                  width: miner.name === "Via BTC" || miner.name === "F2Pool" ? "105px" : "125px", 
                  height: miner.name === "Via BTC" || miner.name === "F2Pool" ? "105px" : "125px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px",
                  textAlign: "center",
                  fontSize: "14px"
                }}
              >
                {miner.name}
              </div>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}