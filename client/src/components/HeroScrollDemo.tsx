
import React from "react";
import { WebPImage } from "@/components/ui/webp-image";

export function HeroScrollDemo() {
  return (
    <div className="mt-0">
      <div className="max-w-5xl mx-auto">
        <div className="border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
          <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-">
            <WebPImage
              src="/images/ElastOS 1.png"
              alt="ElastOS"
              className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
