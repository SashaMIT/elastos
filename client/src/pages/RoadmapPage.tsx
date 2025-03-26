import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import { ImageZoom } from "@/components/ui/zoomable-image";
import { ForwardRoadmap } from "@/components/ui/forward-roadmap";

export default function RoadmapPage() {
  const timelineData = [
    {
      title: "2000-2006",
      content: (
        <div className="text-sm text-neutral-800 dark:text-neutral-200">
          <p className="mb-4"><strong>May 2000:</strong> Rong Chen returns to China and founds Kortide to develop the Elastos operating system.</p>
          <p className="mb-4"><strong>2003:</strong> The first-generation Elastos OS (Hexin) was completed, making Rong Chen the first in China to develop a homegrown operating system. This achievement gained high-level recognition, including a meeting with President Hu Jintao in 2003, and earned Rong a place among China's top software influencers that year.</p>
          <p className="mb-4"><strong>2006:</strong> Elastos 2.0 finished - a smartphone OS in C++.</p>
        </div>
      )
    },
    {
      title: "2009-2013",
      content: (
        <div className="text-sm text-neutral-800 dark:text-neutral-200">
          <p className="mb-4"><strong>2009:</strong> China Unicom adopts Elastos middleware.</p>
          <p className="mb-4"><strong>2013:</strong> Foxconn invests ¥200 million RMB (~$31M USD).</p>
        </div>
      )
    },
    {
      title: "2017-2018",
      content: (
        <div className="text-sm text-neutral-800 dark:text-neutral-200">
          <p className="mb-4"><strong>June 2017:</strong> Elastos Foundation established in Singapore as a new entity to drive the project's development with blockchain at its core.</p>
          <p className="mb-4"><strong>Dec 2017:</strong> First public blockchain launch - Elastos's blockchain went live, launching its main chain and the native token ELA.</p>
          <p className="mb-4"><strong>Jan 2018:</strong> ICO raises $94M USD to fund the ecosystem's growth.</p>
          <p className="mb-4"><strong>Mid 2018:</strong> Partnered with mining giant Bitmain to implement merged mining with Bitcoin, making it one of the most secure blockchains through this alliance.</p>
          <p className="mb-4"><strong>Aug 2018:</strong> Cyber Republic (CR) launched and Merged mining with Bitcoin begins.</p>
        </div>
      )
    },
    {
      title: "2019-2020: Infrastructure Growth",
      content: (
        <div className="text-sm text-neutral-800 dark:text-neutral-200">
          <p className="mb-4"><strong>2019:</strong> Launch of ESC sidechain and Elastos Hive</p>
          <p className="mb-4"><strong>2019:</strong> First Cyber Republic Council DAO elections</p>
          <p className="mb-4"><strong>2020:</strong> W3C-compliant DID Sidechain activation</p>
          <p className="mb-4"><strong>2020:</strong> Release of Elastos Essentials super wallet</p>
        </div>
      )
    },
    {
      title: "2021-2022: Advanced Features",
      content: (
        <div className="text-sm text-neutral-800 dark:text-neutral-200">
          <p className="mb-4"><strong>2021:</strong> Hive 2.0 launch with independent nodes</p>
          <p className="mb-4"><strong>2021:</strong> DID 2.0 with advanced features</p>
          <p className="mb-4"><strong>2021:</strong> Complete transition to community governance</p>
        </div>
      )
    },
    {
      title: "2023-Present: Innovation & Integration",
      content: (
        <div className="text-sm text-neutral-800 dark:text-neutral-200">
          <p className="mb-4"><strong>2023:</strong> Active Proxy Service for Elastos Carrier</p>
          <p className="mb-4"><strong>2023:</strong> Elacity launch for digital rights management</p>
          <p className="mb-4"><strong>2024:</strong> Bitcoin Elastos Layer-2 (BeL2) development</p>
          <p className="mb-4"><strong>2025:</strong> World Computer Iniative (WCI) kickstarted with ongoing development by distributed community</p>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <ForwardRoadmap />
      <div className="mt-20">
        <Timeline timelineData={timelineData} />
      </div>

      <div className="mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(16)].map((_, i) => (
            <ImageZoom
              key={i}
              src={`https://picsum.photos/400/300?random=${i}`}
              alt={`Placeholder ${i + 1}`}
              className="w-full h-[200px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}