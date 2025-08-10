// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

// Using your original footer data
const footerLinks = [
  { title: "Products", links: [ { text: "For Doctors", href: "#" }, { text: "For patients", href: "#" }, { text: "GMB For Doctors", href: "#" }, { text: "EMR For Neurologist", href: "#" } ] },
  { title: "Privacy", links: [ { text: "Terms & Conditions", href: "#" }, { text: "Privacy policy", href: "#" }, { text: "Google API Disclosure", href: "#" }, { text: "Security", href: "#" } ] },
  { title: "About", links: [ { text: "Home", href: "#" }, { text: "Team", href: "#" }, { text: "Eka Stories", href: "#" }, { text: "Careers", href: "#" } ] }
];

export const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col gap-4">
            <Link href="/" className="relative h-10 w-32">
              <Image
                src="/logo.svg" // Ensure you have a WHITE logo named logo.svg in /public
                alt="Eka Care Logo"
                fill
                className="object-contain"
              />
            </Link> 
            <p className="text-sm text-primary-200">Prioritize Health</p>
            <div className="flex items-center gap-2">
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

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-bold mb-4 text-white">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-primary-200 hover:text-white text-sm">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-400 text-center text-sm text-primary-200">
          <p>Copyright © 2025 eka.care</p>
        </div>
      </div>
    </footer>
  );
};