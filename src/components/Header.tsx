import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Make sure this import is here
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg" // This should be the path to your logo in the 'public' folder
            alt="Freed Logo"
            width={80}  // Adjust width as needed
            height={40} // Adjust height as needed
            priority     // Add this to load the logo faster
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-600">
          <Link href="#" className="hover:text-neutral-900">Product Suite</Link>
          <Link href="#" className="hover:text-neutral-900">Solutions</Link>
          <Link href="#" className="hover:text-neutral-900">Specialties</Link>
          <Link href="#" className="hover:text-neutral-900">Blog</Link>
          <Link href="#" className="hover:text-neutral-900">Pricing</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
  <Button variant="ghost">Log In</Button>
  <button
    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
    style={{
      backgroundColor: '#215FFF',
      color: '#ffffff'
    }}
  >
    Try for Free
  </button>
</div>

      </div>
    </header>
  );
};

// Make sure the file has a default export if it's a standalone component file
export default Header;