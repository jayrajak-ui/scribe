// src/components/DataSecurity.tsx

import React from 'react';
import Image from 'next/image';

const logos = [
  { name: 'NHA Approved', image: '/images/nha-logo.png' },
  { name: 'FHIR Compliant', image: '/images/fhir-logo.png' },
  { name: 'ABDM Compliant', image: '/images/abdm-logo.png' },
  { name: 'AWS Secured', image: '/images/aws-logo.png' },
  { name: 'Google Partner', image: '/images/google-logo.png' },
];

export const DataSecurity = () => {
  return (
    // FIX #1: Make the section 'relative' to position the background image inside it
    <section className="relative bg-primary-700 text-white py-32 px-4 overflow-hidden">
      
      {/* FIX #2: Add the background lock image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/lock.png" // Path to your lock image
          alt="Secure lock background icon"
          width={800} // Use a large width/height for quality
          height={800}
          className="w-auto h-full max-h-[80vh] object-contain opacity-10" // Opacity makes it subtle
        />
      </div>

      {/* FIX #3: Add 'relative z-10' to the content to ensure it sits ON TOP of the image */}
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-serif">
          Your Health Data, Secured at Every Step
        </h2>
        <p className="text-lg text-slate-300 mt-4">
          Powering India&apos;s Health Ecosystem with Secure, Structured, and Compliant Data Infrastructure
        </p>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 relative grayscale invert brightness-0">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
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