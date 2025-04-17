import React from 'react';
import { Marquee } from "@/components/ui/marquee";

// Import all images that will be used
import AliImage from "../../public/images/Ali.png";
import BinanceImage from "../../public/images/Binance.png";
import BitmainImage from "../../public/images/Bitmain.png";
import OKMinerImage from "../../public/images/OKMINER.png";
import TencentImage from "../../public/images/Ten-w.png";
import ViaImage from "../../public/images/Via.png";
import F2Image from "../../public/images/f2.png";

export function MarqueeDemo() {
  // Adjust the top offset based on screen width.
  const topOffset =
    typeof window !== "undefined" && window.innerWidth < 768 ? "-60px" : "-30px";

  // Use public directory images with consistent paths
  const items = [
    {
      name: "Alibaba",
      image: "/Ali.png",
    },
    {
      name: "Binance",
      image: "/Binance.png",
    },
    {
      name: "BitMain",
      image: "/Bitmain.png",
    },
    {
      name: "OKex",
      image: "/OKMINER.png",
    },
    {
      name: "Tencent",
      image: "/Ten-w.png",
    },
    {
      name: "Via BTC",
      image: "/Via.png",
    },
    {
      name: "F2Pool",
      image: "/f2.png",
    },
  ];

  // Log the image URLs in development to help debug
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('MarqueeDemo image paths:', items.map(item => item.image));
    }
  }, []);

  return (
    <div style={{ position: "relative", top: topOffset }}>
      <Marquee className="py-0">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            style={{ margin: "0 40px", flexShrink: 0 }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: item.name === "Via BTC" || item.name === "F2Pool" ? "105px" : "125px",
                height: item.name === "Via BTC" || item.name === "F2Pool" ? "105px" : "125px",
                objectFit: "contain",
              }}
              loading="lazy"
              fetchPriority="low"
              onError={(e) => {
                console.error(`Failed to load image: ${item.image}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}