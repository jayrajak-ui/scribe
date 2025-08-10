// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

// Adjusted data structure
const footerColumns = [
  {
    title: "Products",
    links: [
      { text: "For Doctors", href: "#" },
      { text: "For Patients", href: "#" },
      { text: "GMB For Doctors", href: "#" },
    ]
  },
  {
    title: "Specialties",
    links: [
      { text: "EMR for Neurologists", href: "#" },
      { text: "EMR for Dentists", href: "#" },
      { text: "EMR for Pediatricians", href: "#" },
    ]
  },
  {
    title: "About",
    links: [
      { text: "Home", href: "#" },
      { text: "Team", href: "#" },
      { text: "Careers", href: "#" },
    ]
  },
  {
    title: "Privacy & Security",
    links: [
      { text: "Terms and Conditions", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Security", href: "#" },
    ]
  },
];

export const Footer = () => {
  return (
    // Main footer container with blue background
    <footer className="bg-primary-500 text-white py-12 px-4">
      <div className="container mx-auto">
        
        {/* Top Section: Links and Logo */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Links Container */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="font-bold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <Link href={link.href} className="text-primary-100 hover:text-white text-sm">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Logo Container */}
          <div className="flex-shrink-0">
            <Link href="/" className="relative block h-10 w-32">
              <Image
                src="/logo.svg" // Make sure you have a white logo named logo.svg in your /public folder
                alt="Eka Care Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="mt-12 pt-8 border-t border-primary-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-200 order-2 md:order-1">
            © 2025 Eka.care
          </p>
          <div className="flex items-center gap-3 order-1 md:order-2">
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-primary-700 rounded-md hover:bg-primary-800">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};