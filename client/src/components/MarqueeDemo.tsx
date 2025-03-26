import React from 'react';
import { Marquee } from "@/components/ui/marquee";

export function MarqueeDemo() {
  // Adjust the top offset based on screen width.
  const topOffset =
    typeof window !== "undefined" && window.innerWidth < 768 ? "-60px" : "-30px";

  // Define each logo with separate paths for light and dark modes.
  // Now the white-text versions (with "-w") will only be shown in dark mode.
  const items = [
    {
      name: "Alibaba",
      light: "/marque/Ali.png",
      dark: "/marque/Ali.png", // same logo for both modes if needed
    },
    {
      name: "Ant Financial",
      light: "/marque/Ant.png",   // light mode: colored logo
      dark: "/marque/Ant-w.png",   // dark mode: white-text logo
    },
    {
      name: "Binance",
      light: "/marque/Binance.png",
      dark: "/marque/Binance.png",
    },
    {
      name: "BitMain",
      light: "/marque/Bit.png",    // light mode: colored logo
      dark: "/marque/Bit-w.png",    // dark mode: white-text logo
    },
    {
      name: "OKex",
      light: "/marque/Ok.png",     // light mode: colored logo
      dark: "/marque/Ok-w.png",     // dark mode: white-text logo
    },
    {
      name: "Tencent",
      light: "/marque/Ten.png",    // light mode: colored logo
      dark: "/marque/Ten-w.png",    // dark mode: white-text logo
    },
    {
      name: "Via BTC",
      light: "/marque/Via.png",
      dark: "/marque/Via.png",
    },
    {
      name: "F2Pool",
      light: "/marque/f2.png",
      dark: "/marque/f2.png",
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
            {/* Light mode image (colored) */}
            <img
              src={item.light}
              alt={`${item.name} (Light)`}
              className="block dark:hidden"
              style={{
                width: item.name === "Via BTC" || item.name === "F2Pool" ? "105px" : "125px",
                height: item.name === "Via BTC" || item.name === "F2Pool" ? "105px" : "125px",
                objectFit: "contain",
              }}
            />
            {/* Dark mode image (white-text) */}
            <img
              src={item.dark}
              alt={`${item.name} (Dark)`}
              className="hidden dark:block"
              style={{
                width: item.name === "Via BTC" || item.name === "F2Pool" ? "105px" : "125px",
                height: item.name === "Via BTC" || item.name === "F2Pool" ? "105px" : "125px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}