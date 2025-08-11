// src/components/Integrations.tsx

import React from 'react';
import Image from 'next/image';

// --- DATA for the integration logos ---
// IMPORTANT: Replace these paths with your actual logo filenames!
const logos = [
  { name: 'Integration 1', src: '/images/integration-1.png' },
  { name: 'Integration 2', src: '/images/integration-2.png' },
  { name: 'Integration 3', src: '/images/integration-3.png' },
  { name: 'Eka Scribe', src: '/images/middle-logo.png' }, // The central, primary logo
  { name: 'Integration 5', src: '/images/integration-5.png' },
  { name: 'Integration 6', src: '/images/integration-6.png' },
  { name: 'Integration 7', src: '/images/integration-7.png' },
];

export const Integrations = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        {/* Text Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-neutral-900">
            Seamless Integration With Your Workflow
          </h2>
          <p className="text-lg mt-4 font-regular text-primary-500">
            Eka Scribe Is Compatible With Your Clinic&apos;s Tools & Platforms
          </p>
        </div>

        {/* --- RESPONSIVE VISUAL SECTION --- */}
        {/* Height is now smaller on mobile (h-48) and larger on desktop (md:h-64) */}
        <div className="relative flex justify-center items-center h-48 md:h-64">
          
          {/* Ripples are now hidden on mobile and appear on desktop */}
          <div className="absolute w-[300px] h-[150px] md:w-[600px] md:h-[300px] rounded-[30px] md:rounded-[60px] border border-neutral-200/80" />
          <div className="absolute w-[250px] h-[125px] md:w-[500px] md:h-[250px] rounded-[25px] md:rounded-[50px] border border-neutral-200/80" />
          <div className="absolute w-[200px] h-[100px] md:w-[400px] md:h-[200px] rounded-[20px] md:rounded-[40px] border border-neutral-200/80" />
          <div className="absolute w-[150px] h-[75px] md:w-[300px] md:h-[150px] rounded-[15px] md:rounded-[30px] border border-neutral-200/80" />
          
          {/* Logos are smaller on mobile */}
          <div className="relative z-10 flex items-center justify-center gap-2 md:gap-4">
            {logos.map((logo, index) => {
              const isCenter = index === 3;
              return (
                <div
                  key={logo.name}
                  className={`relative p-2 md:p-3 rounded-xl md:rounded-2xl bg-white shadow-lg flex items-center justify-center transition-all duration-300
                    ${isCenter ? 'w-14 h-14 md:w-20 md:h-20 border-2 border-neutral-800' : 'w-12 h-12 md:w-16 md:h-16'}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={isCenter ? 32 : 24} // Smaller images for mobile
                    height={isCenter ? 32 : 24}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};