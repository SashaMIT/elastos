import React, { useState, useEffect } from "react";
import FaqComponent from "@/components/FaqComponent";
import { CenteredSpinner } from "@/components/ui/centered-spinner";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { SEO } from "@/components/SEO"; // Import SEO as a named export
import StructuredData from "@/components/StructuredData"; // Assuming StructuredData component exists


const FaqPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 500ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <CenteredSpinner />}
      <div className="relative w-full">
        {/* Full-width hero image with gradient overlay */}
        <div className="relative w-full h-[350px] overflow-hidden -mt-20">
          <img 
            src="/images/Roadmap/Elastos hosted a meetup in Hong Kong.jpeg" 
            alt="Elastos FAQ" 
            className="w-full h-full object-cover opacity-100"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#171717]/80 to-[#171717]"></div>

          {/* Hero content overlay */}
          <div className="absolute inset-0 flex items-center justify-center mt-20">
            <div className="container mx-auto px-4">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4 pt-16">
                  <h1 className="text-4xl sm:text-4xl md:text-5xl font-[200] text-white mb-3">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg font-[200]">
                    Find answers to common questions about Elastos technology, ecosystem, and the World Computer vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-0 pb-8 bg-[#171717]">
          <div className="w-full max-w-7xl mx-auto px-4 py-0 md:px-8 lg:px-16 xl:px-52 2xl:px-52 mt-0">
            <SEO 
              title="Elastos FAQ | Frequently Asked Questions"
              description="Find answers to the most common questions about Elastos technology, token economics, governance, and ecosystem."
              keywords="Elastos FAQ, Elastos questions, ELA token, Cyber Republic, blockchain FAQ"
              ogImage="/images/Elastosbanner.jpg"
              canonicalUrl="/faq"
            />
            <StructuredData 
              type="FAQPage" 
              data={{
                mainEntity: [
                  {
                    "@type": "Question",
                    "name": "What is Elastos?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Elastos is a Web3 infrastructure project building a secure, decentralized internet where users own their data and digital assets."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is Elastos secured?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Elastos is secured through merged mining with Bitcoin, giving it access to Bitcoin's hashpower."
                    }
                  }
                ]
              }}
            />
            <FaqComponent />
          </div>

          {/* LogoCarouselDemo Section */}
          <div className="mt-10">
            <LogoCarouselDemo />
          </div>

          {/* Footer */}
          <StackedCircularFooter />
        </div>
      </div>
    </>
  );
};

export default FaqPage;