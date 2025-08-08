import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // We are back to using the Shadcn button

export const Header = () => {
  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Freed
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
      backgroundColor: '#6b5ce0',
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