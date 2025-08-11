// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

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
        <footer 
      className="text-white py-12 px-4" 
      style={{ backgroundColor: '#215FFF' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columns 1, 2, 3: Links */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-bold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <Link href={link.href} className="text-white/80 hover:text-white text-sm">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Logo and Socials */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link href="/" className="relative h-10 w-32">
              <Image
                src="/images/white-logo.png"
                alt="Eka Care Logo"
                fill
                className="object-contain"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#" className="p-2 rounded-md footer-social-icon">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-md footer-social-icon">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-md footer-social-icon">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-md footer-social-icon">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>Copyright © 2025 eka.care</p>
        </div>
      </div>
    </footer>
  );
};