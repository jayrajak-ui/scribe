// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    // FIX #1: Added blue background and white text
    <footer className="bg-primary-500 text-white border-t py-12 px-4">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Freed Column */}
        <div>
          {/* FIX #2: Made heading text brighter */}
          <h3 className="font-bold text-lg mb-4 text-white">Freed</h3> 
          {/* FIX #3: Made paragraph text lighter for better contrast */}
          <p className="text-sm text-primary-200">
            548 Market Street, PMB 95301<br />
            San Francisco, CA 94104
          </p>
          <p className="text-xs text-primary-300 mt-4">
            © 2025 Freed Inc.<br />
            Warning: Freed may cause happiness.
          </p>
        </div>

        {/* Security Column */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Security</h4>
          <p className="text-sm text-primary-200">
            Our technology is HIPAA-compliant, uses industry best practices, and doesn&apos;t store patient recordings.
          </p>
        </div>

        {/* Helpful Links Column */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Helpful Links</h4>
          <ul className="space-y-2 text-sm text-primary-200">
            <li><Link href="#" className="hover:text-white">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Sales</Link></li>
            <li><Link href="#" className="hover:text-white">Security</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-2 text-sm text-primary-200">
            <li><Link href="#" className="hover:text-white">Resource Articles</Link></li>
            <li><Link href="#" className="hover:text-white">FAQs</Link></li>
            <li><Link href="#" className="hover:text-white">ICD10 Code Finder</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-primary-400 text-center text-sm text-primary-200">
        <Link href="#" className="hover:text-white mx-2">Platform Terms of Use</Link> |
        <Link href="#" className="hover:text-white mx-2">Website Terms of Use</Link> |
        <Link href="#" className="hover:text-white mx-2">Privacy Policy</Link>
      </div>
    </footer>
  );
};