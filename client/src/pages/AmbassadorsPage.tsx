
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Award, Globe, Heart, Users, Star, Shield, Sparkles, Zap, ScrollText } from "lucide-react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function AmbassadorsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#171717] relative">
      <ScrollToTop />
      
      {/* Coming Soon Overlay - Reduced Blur Effect */}
      <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center">
        {/* Content being worked on (more visible in background) */}
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <div className="w-full h-full bg-[#171717]/20"></div>
        </div>
        
        <div className="bg-[#212121]/70 backdrop-blur-md p-12 md:p-14 rounded-2xl border border-[#5C8EFF]/30 max-w-2xl text-center relative overflow-hidden shadow-2xl">
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#212121]/90 via-[#212121]/80 to-[#212121]/60 z-0"></div>
          
          {/* Background glow effects - softer */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#F6921A]/10 blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#5C8EFF]/10 blur-[100px]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5C8EFF]/30 to-transparent"></div>
          
          <div className="relative mb-8">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#F6921A]/80 text-white text-xs px-4 py-1.5 rounded-full uppercase tracking-wider font-medium shadow-lg">Under Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[200] text-white mb-8 relative z-10">Ambassador Program</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F6921A] to-[#5C8EFF] mx-auto mb-10 opacity-80"></div>
          <p className="text-gray-100 text-xl mb-8 relative z-10 font-medium tracking-wide">Coming Soon</p>
          <p className="text-gray-200 mb-14 relative z-10 max-w-xl mx-auto">
            We're currently building our ambassador program to help spread the Elastos vision worldwide. 
            Check back soon for details on how to participate and make a difference in the Elastos ecosystem.
          </p>
          
          <a 
            href="/"
            className="inline-flex px-8 py-4 bg-[rgba(92,142,255,0.15)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-3 border border-[rgba(92,142,255,0.40)] hover:bg-[rgba(92,142,255,0.25)] hover:scale-105 relative z-10 group shadow-lg"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </a>
          
          {/* Enhanced animated elements */}
          <div className="absolute bottom-6 right-6 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#F6921A] rounded-full animate-ping opacity-70"></div>
            <div className="w-3 h-3 bg-[#F6921A]/30 rounded-full absolute blur-sm"></div>
          </div>
          
          {/* Additional subtle decoration */}
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#5C8EFF]/10 rounded-tl-3xl"></div>
        </div>
      </div>

      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full h-[500px] overflow-hidden -mt-16">
        <img 
          src="/images/Roadmap/Community crowd.png" 
          alt="Elastos Ambassador Program" 
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
                  Ambassador Program
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-md sm:text-base md:text-lg">
                  Join the Elastos community as an ambassador and help us build the decentralized internet of the future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-28 w-96 h-96 rounded-full bg-[#F6921A]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 -left-28 w-96 h-96 rounded-full bg-[#5C8EFF]/10 blur-[120px]"></div>
      </div>

      {/* About the Program Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-[200] mb-6 text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About the Program
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The Elastos Ambassador Program empowers passionate community members to advocate for the Elastos ecosystem, educate others about blockchain technology, and help drive adoption. Our ambassadors play a crucial role in growing our global community and spreading awareness about Elastos' vision for a decentralized internet.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Ambassador Benefits */}
      <section className="py-12 bg-gray-50 dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">
              Benefits of Becoming an Ambassador
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#F6921A]/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-[#F6921A]" />
              </div>
              <h3 className="text-xl font-[200] mb-3 text-black dark:text-white">Exclusive Access</h3>
              <p className="text-gray-600 dark:text-gray-400">Get early access to Elastos developments, events, and initiatives before they're publicly announced.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#F6921A]/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#F6921A]" />
              </div>
              <h3 className="text-xl font-[200] mb-3 text-black dark:text-white">Recognition</h3>
              <p className="text-gray-600 dark:text-gray-400">Receive official recognition as an Elastos Ambassador with a profile on our website and social media channels.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#F6921A]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#F6921A]" />
              </div>
              <h3 className="text-xl font-[200] mb-3 text-black dark:text-white">Network Expansion</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with like-minded individuals and expand your professional network in the blockchain space.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-xl font-[200] mb-3 text-black dark:text-white">Rewards & Incentives</h3>
              <p className="text-gray-600 dark:text-gray-400">Earn rewards for your contributions to the Elastos ecosystem and ambassador activities.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-xl font-[200] mb-3 text-black dark:text-white">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">Make a meaningful impact in shaping the future of the internet and helping build a more decentralized web.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mb-4">
                <ScrollText className="h-6 w-6 text-[#5C8EFF]" />
              </div>
              <h3 className="text-xl font-[200] mb-3 text-black dark:text-white">Learning Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">Access exclusive educational resources and training materials to deepen your knowledge of Elastos and blockchain technology.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Ambassador Roles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">
              Ambassador Roles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our ambassadors can contribute in multiple ways based on their skills and interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-[200] mb-4 text-black dark:text-white flex items-center">
                <Shield className="h-5 w-5 text-[#F6921A] mr-2" />
                Community Ambassador
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#F6921A] mt-1 mr-2 flex-shrink-0" />
                  <span>Grow and engage with the Elastos community across social platforms</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#F6921A] mt-1 mr-2 flex-shrink-0" />
                  <span>Organize and facilitate community meetups and events</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#F6921A] mt-1 mr-2 flex-shrink-0" />
                  <span>Create and share Elastos content on social media</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-[200] mb-4 text-black dark:text-white flex items-center">
                <Sparkles className="h-5 w-5 text-[#5C8EFF] mr-2" />
                Technical Ambassador
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#5C8EFF] mt-1 mr-2 flex-shrink-0" />
                  <span>Create technical tutorials and documentation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#5C8EFF] mt-1 mr-2 flex-shrink-0" />
                  <span>Support the development of the Elastos ecosystem</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#5C8EFF] mt-1 mr-2 flex-shrink-0" />
                  <span>Help onboard developers to build on Elastos</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-[200] mb-4 text-black dark:text-white flex items-center">
                <Heart className="h-5 w-5 text-[#F6921A] mr-2" />
                Content Ambassador
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#F6921A] mt-1 mr-2 flex-shrink-0" />
                  <span>Create blogs, articles, videos, and other content about Elastos</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#F6921A] mt-1 mr-2 flex-shrink-0" />
                  <span>Translate Elastos materials into different languages</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#F6921A] mt-1 mr-2 flex-shrink-0" />
                  <span>Host podcasts or interviews featuring Elastos team members and community</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-[200] mb-4 text-black dark:text-white flex items-center">
                <Globe className="h-5 w-5 text-[#5C8EFF] mr-2" />
                Regional Ambassador
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#5C8EFF] mt-1 mr-2 flex-shrink-0" />
                  <span>Represent Elastos in your local region or country</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#5C8EFF] mt-1 mr-2 flex-shrink-0" />
                  <span>Organize local events and meetups</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-[#5C8EFF] mt-1 mr-2 flex-shrink-0" />
                  <span>Build relationships with local blockchain communities and organizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-12 bg-gray-50 dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">
                How to Apply
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ready to become an Elastos Ambassador? Follow these steps to apply:
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F6921A]/10 flex items-center justify-center mr-4">
                  <span className="text-[#F6921A] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-[200] mb-2 text-black dark:text-white">Fill out the Application Form</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complete our online application form, telling us about yourself, your background, and why you want to become an Elastos Ambassador.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mr-4">
                  <span className="text-[#5C8EFF] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-[200] mb-2 text-black dark:text-white">Interview with the Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Selected applicants will be invited for a virtual interview with the Elastos community team to discuss your role and expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F6921A]/10 flex items-center justify-center mr-4">
                  <span className="text-[#F6921A] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-[200] mb-2 text-black dark:text-white">Complete Onboarding</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Successful candidates will undergo a comprehensive onboarding process to learn about Elastos technology, community guidelines, and ambassador responsibilities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5C8EFF]/10 flex items-center justify-center mr-4">
                  <span className="text-[#5C8EFF] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-[200] mb-2 text-black dark:text-white">Begin Your Ambassador Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start representing Elastos in your community, creating content, organizing events, and contributing to the ecosystem's growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://forms.gle/exampleElastosAmbassadorForm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-5 py-3 bg-[rgba(92,142,255,0.10)] text-[#5C8EFF] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(92,142,255,0.50)]"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-[200] mb-3 text-black dark:text-white">What is the time commitment for an Elastos Ambassador?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The time commitment is flexible and can vary based on your availability and role. We recommend dedicating at least 5-10 hours per week to ambassador activities for the best results.
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-[200] mb-3 text-black dark:text-white">Do I need to be a technical expert to become an ambassador?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, we welcome ambassadors with diverse backgrounds and skills. While technical knowledge is beneficial for some roles, it's not required for all ambassador positions. Your passion for the ecosystem and willingness to learn are more important.
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-[200] mb-3 text-black dark:text-white">What kind of support will I receive as an ambassador?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You'll receive comprehensive support including training materials, regular check-ins with the community team, access to ambassador-only channels, marketing resources, and assistance in organizing events or creating content.
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#212121] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-[200] mb-3 text-black dark:text-white">Is the ambassador program available worldwide?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, the Elastos Ambassador Program is global. We welcome applications from individuals around the world who are passionate about Elastos and want to contribute to the ecosystem's growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#5C8EFF]/5 to-[#F6921A]/5 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[200] mb-6 text-black dark:text-white">
              Join the Elastos Ambassador Program Today
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Be part of building the future of the decentralized internet. Apply now to become an Elastos Ambassador and help us create a more secure, private, and user-owned digital world.
            </p>
            <a 
              href="https://forms.gle/exampleElastosAmbassadorForm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-5 py-3 bg-[rgba(246,146,26,0.10)] text-[#F6921A] rounded-full font-medium transition-all items-center gap-2 border border-[rgba(246,146,26,0.50)] hover:bg-[rgba(246,146,26,0.15)]"
            >
              <span>Apply to the Program</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
