import React from 'react';
import { Marquee } from "@/components/ui/marquee";

export function MarqueeDemo() {
  // Adjust the top offset based on screen width.
  const topOffset =
    typeof window !== "undefined" && window.innerWidth < 768 ? "-60px" : "-30px";

  // Simplified to only use dark mode images
  const items = [
    {
      name: "Alibaba",
      image: "/marque/Ali.png",
    },
    {
      name: "Ant Financial",
      image: "/marque/Ant-w.png",
    },
    {
      name: "Binance",
      image: "/marque/Binance.png",
    },
    {
      name: "BitMain",
      image: "/marque/Bit-w.png",
    },
    {
      name: "OKex",
      image: "/marque/Ok-w.png",
    },
    {
      name: "Tencent",
      image: "/marque/Ten-w.png",
    },
    {
      name: "Via BTC",
      image: "/marque/Via.png",
    },
    {
      name: "F2Pool",
      image: "/marque/f2.png",
    },
  ];

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
              fetchpriority="low"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}