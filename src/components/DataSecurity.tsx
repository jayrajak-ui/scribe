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
    // FIX: Using a standard dark background color for reliability
    <section className="bg-slate-900 text-slate-200 py-32 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">
          Your Health Data, Secured at Every Step
        </h2>
        <p className="text-lg text-slate-300 mt-4">
          Powering India&apos;s Health Ecosystem with Secure, Structured, and Compliant Data Infrastructure
        </p>

        {/* Logos Section */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="h-20 w-20 relative grayscale invert brightness-0">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain" // Use modern syntax
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