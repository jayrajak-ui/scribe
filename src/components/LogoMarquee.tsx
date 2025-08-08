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
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto">
        <Marquee pauseOnHover className="[--duration:60s]">
          {partners.map((partner) => (
            // --- NEW CARD STYLING ---
            // This is the card that contains the logo and name.
                        <div 
              key={partner.name} 
              // We've removed the card styles and now just control the size and spacing
              className="relative w-40 h-16 mx-8"
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