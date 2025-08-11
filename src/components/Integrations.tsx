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
          <p className="mt-4 text-2xl font-semibold text-primary-500">
            Eka Scribe Is Compatible With Your Clinic&apos;s Tools & Platforms
          </p>
        </div>

        {/* Visual Section with Ripples and Logos */}
        <div className="relative flex justify-center items-center h-64">
          
          {/* Background Ripples - stacked divs with increasing size */}
          <div className="absolute w-[600px] h-[300px] rounded-[60px] border border-neutral-200/80" />
          <div className="absolute w-[500px] h-[250px] rounded-[50px] border border-neutral-200/80" />
          <div className="absolute w-[400px] h-[200px] rounded-[40px] border border-neutral-200/80" />
          <div className="absolute w-[300px] h-[150px] rounded-[30px] border border-neutral-200/80" />
          
          {/* Logos Container - sits on top of the ripples */}
          <div className="relative z-10 flex items-center justify-center gap-4">
            {logos.map((logo, index) => {
              const isCenter = index === 3; // The 4th logo (index 3) is the center one
              return (
                <div
                  key={logo.name}
                  className={`relative p-3 rounded-2xl bg-white shadow-lg flex items-center justify-center transition-all duration-300
                    ${isCenter ? 'w-20 h-20 border-2 border-primary-500' : 'w-16 h-16'}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={isCenter ? 48 : 32}
                    height={isCenter ? 48 : 32}
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