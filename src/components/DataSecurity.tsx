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
    // --- THIS IS THE FIX ---
    <section 
      className="relative text-white py-16 px-4 overflow-hidden"
      style={{ backgroundColor: '#1A4CCC' }} // Applying the color directly
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/lock.png"
          alt="Secure lock background icon"
          width={800}
          height={800}
          className="w-auto h-full max-h-[80vh] object-contain opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold font-serif">
          Your Health Data, Secured at Every Step
        </h2>
        <p className="text-lg text-slate-300 mt-4">
          Powering India&apos;s Health Ecosystem with Secure, Structured, and Compliant Data Infrastructure
        </p>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="h-32 w-32 relative grayscale invert brightness-0">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};