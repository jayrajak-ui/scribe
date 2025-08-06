import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t py-12 px-4">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Freed Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Freed</h3>
          <p className="text-sm text-muted-foreground">
            548 Market Street, PMB 95301<br />
            San Francisco, CA 94104
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2025 Freed Inc.<br />
            Warning: Freed may cause happiness.
          </p>
        </div>

        {/* Security Column */}
        <div>
          <h4 className="font-semibold mb-4">Security</h4>
          <p className="text-sm text-muted-foreground">
            Our technology is HIPAA-compliant, uses industry best practices, and doesn&apos;t store patient recordings.
          </p>
        </div>

        {/* Helpful Links Column */}
        <div>
          <h4 className="font-semibold mb-4">Helpful Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact Sales</Link></li>
            <li><Link href="#" className="hover:text-primary">Security</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary">Resource Articles</Link></li>
            <li><Link href="#" className="hover:text-primary">FAQs</Link></li>
            <li><Link href="#" className="hover:text-primary">ICD10 Code Finder</Link></li>
            <li><Link href="#" className="hover:text-primary">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        <Link href="#" className="hover:text-primary mx-2">Platform Terms of Use</Link> |
        <Link href="#" className="hover:text-primary mx-2">Website Terms of Use</Link> |
        <Link href="#" className="hover:text-primary mx-2">Privacy Policy</Link>
      </div>
    </footer>
  );
};