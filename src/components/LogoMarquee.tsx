// src/components/LogoMarquee.tsx

import React from 'react';
import Image from 'next/image';
import { Marquee } from "@/components/magicui/marquee";

// --- NEW DATA STRUCTURE ---
// We now use an array of objects to store both the logo image and the partner's name.
// IMPORTANT: Update the 'name' for each partner to match your actual partner names.
const partners = [
  { name: 'Fulton County Health Center', logo: '/images/logo-1.webp' },
  { name: 'Great Lakes', logo: '/images/logo-2.webp' },
  { name: 'Prima Care', logo: '/images/logo-3.webp' },
  { name: 'Privia', logo: '/images/logo-4.webp' },
  { name: 'Solarishealth', logo: '/images/logo-5.webp' },
  { name: 'The Urology Group', logo: '/images/logo-6.webp' },
];

export const LogoMarquee = () => {
  return (
    // The section now has a light gray background
    <section className="bg-slate-50 py-12">
      {/* --- THIS IS THE NEW TITLE SECTION --- */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-800">
          Trusted by Clinics and Hospitals Across India
        </h2>
      </div>

      {/* The Marquee is now outside the container to be full-width, if desired */}
      {/* For this version, I'll keep it inside the container as per your original code */}
      <div className="container mx-auto">
        <Marquee pauseOnHover className="[--duration:60s]">
          {partners.map((partner) => (
            // --- NEW CARD STYLING ---
            // This is the card that contains the logo and name.
                        <div 
              key={partner.name} 
              // Increased width from w-40 to w-48 and height from h-16 to h-24
              className="relative w-56 h-28 mx-8"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};