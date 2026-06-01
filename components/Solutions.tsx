'use client';

import Image from 'next/image';
import { Sparkles, Heart, Wallet } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="w-full bg-white py-16 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative bg-[#F3FBF1] rounded-[30px] overflow-hidden min-h-[750px] sm:min-h-[700px] lg:min-h-[600px]">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-40 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 -right-40 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/cleaning_team.png"
              alt="Professional cleaner with cleaning supplies"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F3FBF1]/90 via-[#F3FBF1]/70 to-[#F3FBF1]/90" />
          </div>

          {/* Centered Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-10">
            {/* Main Heading */}
            <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-8 lg:mb-12 max-w-[800px]">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                Key Benefits of
              </span>
              <br />
              Our Cleaning Services
            </h2>

            {/* Description */}
            <p className="text-[#4a4a4a] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-[700px] mb-8 lg:mb-12">
              Experience the difference that professional cleaning can make for your business. Our skilled cleaners
              utilize the latest equipment and techniques to deliver superior results, adding value to your business
              while reducing long-term maintenance expenses.
            </p>

            {/* Benefits Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Enhanced Productivity',
                  description: 'Boost workplace efficiency',
                },
                {
                  icon: Heart,
                  title: 'Improved Health',
                  description: 'Safer work environment',
                },
                {
                  icon: Wallet,
                  title: 'Cost Savings',
                  description: 'Reduce maintenance costs',
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 mb-4">
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 stroke-[1.5] text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-[16px] lg:text-[18px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                    <p className="text-[14px] lg:text-[15px] text-[#4a4a4a]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
