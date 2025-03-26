import React from 'react';
import { Marquee } from "@/components/ui/marquee";

export function MarqueeDemo2() {
  const exchanges = [
    { logo: "/images/BitGet.png", name: "BitGet", url: "https://www.bitget.com/" },
    { logo: "/images/Coinbase.png", name: "Coinbase", url: "https://www.coinbase.com/" },
    { logo: "/images/Crypto.png", name: "Crypto.com", url: "https://crypto.com/" },
    { logo: "/images/Gateio.png", name: "Gate.io", url: "https://www.gate.io/" },
    { logo: "/images/Huobi.png", name: "Huobi", url: "https://www.huobi.com/" },
    { logo: "/images/Kucoin.png", name: "KuCoin", url: "https://www.kucoin.com/" },
    { logo: "/images/Uniswap.png", name: "Uniswap", url: "https://uniswap.org/" },
  ];

  return (
    <div>
      <div className="text-center font-bold text-4xl -mb-8">Trade ELA</div>
      <Marquee className="py-0" speed={40}>
        {exchanges.map((exchange, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            style={{
              margin: "0 40px",
              flexShrink: 0,
            }}
          >
            <a
              href={exchange.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={exchange.logo}
                alt={`${exchange.name} Logo`}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
}