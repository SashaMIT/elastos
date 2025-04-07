import React from 'react';

export const ForwardRoadmap = () => {
  const milestones = [
    {
      year: '2024',
      quarter: 'Q1-Q2 2025',
      items: [
        {
          title: 'Elastos 2.0 Launch with BeL2 Arbiter Launch',
          details: 'Bitcoin Elastos Layer 2 Arbiter nodes to support Native Bitcoin DeFi with ELA staking'
        },
        {
          title: 'Ecosystem dApps',
          details: 'Launch of Elacity v3 Marketplace for digital asset trading in audio and video markets'
        },
        {
          title: 'World Computer Support',
          details: 'Integrating Login and DePin connectivity'
        }
      ]
    },
    {
      year: '2025',
      quarter: 'Q3-Q4 2025',
      items: [
        {
          title: 'Cross-Chain Bridge',
          details: 'Improved interoperability with major blockchain networks'
        },
        {
          title: 'Developer Tools Expansion',
          details: 'New SDKs and comprehensive documentation for developers'
        },
        {
          title: 'ESC Protocol Upgrade',
          details: 'Enhanced throughput and reduced transaction costs'
        }
      ]
    },
    {
      year: '2026',
      quarter: '2026',
      items: [
        {
          title: 'Web3 OS Integration',
          details: 'Full integration of decentralized operating system features'
        },
        {
          title: 'Global Adoption Push',
          details: 'Strategic partnerships and mainstream integration initiatives'
        },
        {
          title: 'Enterprise Solutions',
          details: 'Specialized features for business and institutional users'
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-transparent font-sans md:px-1 relative">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-[200]">
          Forward Roadmap
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-8 relative">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex-1 relative">
              <div className="bg-gradient-to-br from-[#8BABFF]/10 to-[#8BABFF]/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#8BABFF]/20 relative overflow-visible">
                {/* Background blur elements */}
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8BABFF]/10 blur-[100px]"></div>

                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#F6921A] to-[#95B5FF] shadow-md z-20" />
                <div className="text-center mb-6 relative z-10">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8BABFF] to-[#8BABFF]/70 bg-clip-text text-transparent font-[200]">
                    {milestone.quarter}
                  </h3>
                </div>
                <div className="space-y-6 relative z-10">
                  {milestone.items.map((item, idx) => (
                    <div key={idx} className="relative">
                      <h4 className="font-[200] text-lg mb-2 text-[#8BABFF]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-[200]">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};