import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import { ImageZoom } from "@/components/ui/zoomable-image";
import { ForwardRoadmap } from "@/components/ui/forward-roadmap";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";

export default function RoadmapPage() {
  const timelineData = [
    {
      title: "2000-2006",
      content: (
        <div className="text-base text-neutral-800 dark:text-neutral-200 font-[200]">
          <p className="mb-4"><strong>May 2000:</strong> Rong Chen returns to China and founds Kortide to develop the Elastos OS.</p>
          <p className="mb-4"><strong>2003:</strong> The first-generation Elastos OS (Hexin) was completed, making Rong Chen the first in China to develop a homegrown operating system. This achievement gained high-level recognition, including a meeting with President Hu Jintao in 2003, and earned Rong a place among China's top software influencers that year.</p>
          <p className="mb-4"><strong>2006:</strong> Elastos 2.0 finished - a smartphone OS in C++.</p>
        </div>
      )
    },
    {
      title: "2009-2013",
      content: (
        <div className="text-base text-neutral-800 dark:text-neutral-200 font-[200]">
          <p className="mb-4"><strong>2009:</strong> China Unicom adopts Elastos middleware.</p>
          <p className="mb-4"><strong>2013:</strong> Foxconn invests ¥200 million RMB (~$31M USD).</p>
        </div>
      )
    },
    {
      title: "2017-2018",
      content: (
        <div className="text-base text-neutral-800 dark:text-neutral-200 font-[200]">
          <p className="mb-4"><strong>June 2017:</strong> Elastos Foundation established in Singapore as a new entity to drive the project's development with blockchain at its core.</p>
          <p className="mb-4"><strong>Dec 2017:</strong> First public blockchain launch - Elastos's blockchain went live, launching its main chain and the native token ELA.</p>
          <p className="mb-4"><strong>Jan 2018:</strong> ICO raises $60M USD to fund the ecosystem's growth.</p>
          <p className="mb-4"><strong>Mid 2018:</strong> Partnered with mining giant Bitmain to implement merged mining with Bitcoin, making it one of the most secure blockchains through this alliance.</p>
          <p className="mb-4"><strong>Aug 2018:</strong> Elastos Mainchain launched and Merged mining with Bitcoin begins.</p>
        </div>
      )
    },
    {
      title: "2019-2020: Infrastructure Growth",
      content: (
        <div className="text-base text-neutral-800 dark:text-neutral-200 font-[200]">
          <p className="mb-4"><strong>2019:</strong> Launch of ESC sidechain for EVM smartcontracts and Elastos Hive</p>
          <p className="mb-4"><strong>2019:</strong> First Elastos DAO Council elections</p>
          <p className="mb-4"><strong>2020:</strong> W3C-compliant DID Sidechain activation</p>
          <p className="mb-4"><strong>2020:</strong> Release of Elastos Essentials super wallet</p>
        </div>
      )
    },
    {
      title: "2021-2022: Advanced Features",
      content: (
        <div className="text-base text-neutral-800 dark:text-neutral-200 font-[200]">
          <p className="mb-4"><strong>2021:</strong> Hive 2.0 launch with independent nodes</p>
          <p className="mb-4"><strong>2021:</strong> DID 2.0 with advanced features</p>
        </div>
      )
    },
    {
      title: "2023-Present: Innovation & Integration",
      content: (
        <div className="text-base text-neutral-800 dark:text-neutral-200 font-[200]">
          <p className="mb-4"><strong>2023:</strong> Active Proxy Service for Elastos Carrier DePin networking</p>
          <p className="mb-4"><strong>2023:</strong> Elacity launch for digital rights management v1 marketplace</p>
          <p className="mb-4"><strong>2024:</strong> Bitcoin Elastos Layer-2 (BeL2) development</p>
          <p className="mb-4"><strong>2025:</strong> World Computer Iniative (WCI) kickstarted with ongoing development by distributed community</p>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full font-[200]">
      {/* Full-width hero image with gradient overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Community crowd.png" 
          alt="Elastos Roadmap" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

        {/* Hero content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-6">
                  Elastos Roadmap
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200] mb-6">
                  Explore the Elastos roadmap—an evolving vision for the World Computer, driven by community governance, decentralized innovation, and a commitment to digital sovereignty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-0 pb-8 bg-[#171717]">
        <div className="-mt-20 relative z-10">
          <ForwardRoadmap />
        </div>

        <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#5C8EFF]/10 to-[#5C8EFF]/5 rounded-xl p-8 border border-[#5C8EFF]/30 relative w-full max-w-7xl mx-auto overflow-hidden">
              {/* Background blur elements */}
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>

              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="md:w-1/4 flex justify-center">
                  <img 
                    src="/images/Rong Chen.png" 
                    alt="Rong Chen, Elastos Founder" 
                    className="w-48 h-48 object-cover rounded-full border-4 border-[#5C8EFF]/30"
                  />
                </div>
                <div className="md:w-3/4 relative">
                  {/* Orb effect contained within the blockquote section */}
                  <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-40 h-40 rounded-full bg-[#5C8EFF]/10 blur-[40px] animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/3 w-24 h-24 rounded-full bg-[#5C8EFF]/5 blur-[30px] animate-pulse" style={{ animationDelay: "0.5s" }}></div>

                  <blockquote className="italic text-lg text-gray-200 font-[200] relative z-10">
                    <span className="text-4xl text-[#5C8EFF]">"</span>
                    I left Microsoft because I believed we needed to go deeper—down to the metal—not build on abstractions like C#. I wanted to design a true networked OS, not just software for a single machine. When I discovered blockchain, it felt like the missing piece. It gave us decentralized trust—something we couldn't build ourselves. Combine that with a peer-to-peer infrastructure, virtual machines, and a self-sovereign identity system, and you don't just get apps—you get an unstoppable, autonomous internet. This isn't just innovation. It's a new foundation.
                    <span className="text-4xl text-[#5C8EFF]">"</span>
                  </blockquote>
                  <div className="mt-4 font-semibold text-[#5C8EFF] font-[200] relative z-10">
                    Rong Chen, Elastos Founder
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="mt-20">
          <Timeline timelineData={timelineData} />
        </div>

        <div className="mt-20 mb-20 font-[200]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ImageZoom
              key="1"
              src="/images/Roadmap/Elastos Project Early Days 2017.jpeg"
              alt="Elastos Project Early Days 2017"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="2"
              src="/images/Roadmap/Elastos 1 Year.jpeg"
              alt="Elastos 1 Year"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="3"
              src="/images/Roadmap/Rong Chen Early Elastos days.jpeg"
              alt="Rong Chen Early Elastos days"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="4"
              src="/images/Roadmap/Elastos Members.jpeg"
              alt="Elastos Members"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="5"
              src="/images/Roadmap/Rong Chen, founder of Elastos, speaking at a tech event (circa 2017–2018) 2.jpeg"
              alt="Rong Chen speaking at a tech event"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="6"
              src="/images/Roadmap/Elastos hosted a meetup in Hong Kong.jpeg"
              alt="Elastos hosted a meetup in Hong Kong"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="7"
              src="/images/Roadmap/Rong Chen and Kevin Zhang hosted a meetup in Barcelona.jpeg"
              alt="Rong Chen and Kevin Zhang hosted a meetup in Barcelona"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="8"
              src="/images/Roadmap/Rong Chen and kevin Zhang hosted a meetup in London.jpeg"
              alt="Rong Chen and kevin Zhang hosted a meetup in London"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="9"
              src="/images/Roadmap/Elastos in Couinstore event.jpeg"
              alt="Elastos in Couinstore event"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="10"
              src="/images/Roadmap/Cyber Republic DAO meetup.jpeg"
              alt="Elastos DAO meetup"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="11"
              src="/images/Roadmap/Rong Pomp.png"
              alt="Rong Pomp"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="12"
              src="/images/Roadmap/Sunny Feng Han at Teamz Web Summit in Tokyo.jpeg"
              alt="Sunny Feng Han at Teamz Web Summit in Tokyo"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="13"
              src="/images/Roadmap/Sunny Feng Han in DACA event.jpg"
              alt="Sunny Feng Han in DACA event"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="14"
              src="/images/Roadmap/The Node Effect event Singapore.jpeg"
              alt="The Node Effect event Singapore"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="15"
              src="/images/Roadmap/BeL2 booth in Bitcoin 2024.jpeg"
              alt="BeL2 booth in Bitcoin 2024"
              className="w-full h-[200px] object-cover"
            />
            <ImageZoom
              key="16"
              src="/images/Roadmap/Sash as speaker in Bitcoin2024.jpeg"
              alt="Sash as speaker in Bitcoin2024"
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>

        {/* LogoCarouselDemo Section */}
        <div className="mt-10 font-[200]">
          <LogoCarouselDemo />
        </div>

        {/* Footer */}
        <StackedCircularFooter />
      </div>
    </div>
  );
}