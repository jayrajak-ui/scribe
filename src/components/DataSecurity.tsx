// src/components/DataSecurity.tsx

import React from 'react';
import Image from 'next/image';

// --- Data for the logos ---
const logos = [
  { name: 'NHA Approved', image: '/images/nha-logo.png' }, // Change these filenames!
  { name: 'FHIR Compliant', image: '/images/fhir-logo.png' },
  { name: 'ABDM Compliant', image: '/images/abdm-logo.png' },
  { name: 'AWS Secured', image: '/images/aws-logo.png' },
  { name: 'Google Partner', image: '/images/google-logo.png' },
];

export const DataSecurity = () => {
  return (
    // The main container needs to be relative to position the background image
    <section className="relative bg-gradient-to-b from-[#1E1B4B] to-neutral-900 text-white py-20 px-4 overflow-hidden">
      
      {/* Background Lock Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/lock-background.svg" // Your lock image
          alt="Secure lock background"
          width={800}
          height={800}
          className="w-auto h-full max-h-[80vh] object-contain opacity-20"
        />
      </div>

      {/* Content Container - needs to be relative and have a z-index to sit on top */}
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-serif">
          Your Health Data, Secured at Every Step
        </h2>
        <p className="text-lg text-slate-300 mt-4">
          Powering India&apos;s Health Ecosystem with Secure, Structured, and Compliant Data Infrastructure
        </p>

        {/* Logos Section */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 relative">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-sm text-slate-400">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};