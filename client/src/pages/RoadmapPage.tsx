
import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import { ImageZoom } from "@/components/ui/zoomable-image";
import { ForwardRoadmap } from "@/components/ui/forward-roadmap";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

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
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Elastos <span className="text-[#5C8EFF]">Roadmap</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
            Explore the Elastos roadmap—an evolving vision for the World Computer, driven by community governance, decentralized innovation, and a commitment to digital sovereignty.
          </p>
        </div>
      </div>
      
      <ForwardRoadmap />
      
      <div className="w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#5C8EFF]/10 to-[#F6921A]/10 rounded-xl p-8 border border-[#5C8EFF]/30 relative">
          {/* Background blur elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7921A]/10 blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="md:w-1/4 flex justify-center">
              <img 
                src="/images/Rong Chen.png" 
                alt="Rong Chen, Elastos Founder" 
                className="w-48 h-48 object-cover rounded-full border-4 border-[#5C8EFF]/30"
              />
            </div>
            <div className="md:w-3/4">
              <blockquote className="italic text-lg text-gray-200">
                <span className="text-4xl text-[#F7921A]">"</span>
                If there's a world computer, what's its operating system? The operating system is what ensures security and privacy. Elastos is primarily made up of Personal Cloud Compute (PC2) nodes run by self-sovereign individuals from their homes, rather than institutions. Web3 is about selling digital goods directly from people's homes — and Elastos serves as the operating system for this network, leveraging Bitcoin's trillion-dollar consensus to empower users with scalable, decentralized utilities.
                <span className="text-4xl text-[#F7921A]">"</span>
              </blockquote>
              <div className="mt-4 font-semibold text-[#5C8EFF]">
                Rong Chen, Elastos Founder
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
