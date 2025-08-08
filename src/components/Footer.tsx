import React from 'react';
import Link from 'next/link';
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
    <footer className="bg-white text-black py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold">
              Freed
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#" className="p-2 bg-neutral-200 rounded-md hover:bg-neutral-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-neutral-200 rounded-md hover:bg-neutral-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-neutral-200 rounded-md hover:bg-neutral-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-neutral-200 rounded-md hover:bg-neutral-300">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Columns 2, 3, 4: Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-neutral-600 hover:text-black text-sm">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
          <p>Copyright © 2025 Freed Inc.</p>
        </div>
      </div>
    </footer>
  );
};