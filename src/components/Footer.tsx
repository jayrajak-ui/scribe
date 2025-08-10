// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

// Data for the link columns
const footerLinks = [
  {
    title: "Products",
    links: [
      { text: "For Doctors", href: "#" },
      { text: "For patients", href: "#" },
      { text: "GMB For Doctors", href: "#" },
      { text: "EMR For Neurologist", href: "#" },
    ]
  },
  {
    title: "Privacy",
    links: [
      { text: "Terms & Conditions", href: "#" },
      { text: "Privacy policy", href: "#" },
      { text: "Google API Disclosure", href: "#" },
      { text: "Security", href: "#" },
    ]
  },
  {
    title: "About",
    links: [
      { text: "Home", href: "#" },
      { text: "Team", href: "#" },
      { text: "Eka Stories", href: "#" },
      { text: "Careers", href: "#" },
    ]
  }
];

export const Footer = () => {
  return (
    // FIX #1: Change background to primary blue, text to white
    <footer className="bg-primary-500 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="relative h-10 w-32">
              <Image
                // FIX #2: Assuming you have a WHITE version of your logo in /public
                src="/logo.svg" // Update this if your white logo is named differently (e.g., /white-logo.png)
                alt="Eka Care Logo"
                fill
                className="object-contain"
              />
            </Link> 
            <p className="text-sm text-primary-200">Prioritize Health</p> {/* FIX #3: Lighter text for tagline */}
            <div className="flex items-center gap-2">
              {/* FIX #4: Social icons background and hover colors */}
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800 text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800 text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800 text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800 text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Columns 2, 3, 4: Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              {/* FIX #5: Headings for link columns */}
              <h4 className="font-bold mb-4 text-white">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.text}>
                    {/* FIX #6: Link text color and hover */}
                    <Link href={link.href} className="text-primary-200 hover:text-white text-sm">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Section */}
        {/* FIX #7: Copyright section text and border */}
        <div className="mt-12 pt-8 border-t border-primary-400 text-center text-sm text-primary-200">
          <p>Copyright © 2025 eka.care</p>
        </div>
      </div>
    </footer>
  );
};