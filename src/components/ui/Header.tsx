import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button'; // Shadcn button

export const Header = () => {
  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Freed
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#" className="text-gray-600 hover:text-black">Features</Link>
          <Link href="#" className="text-gray-600 hover:text-black">How it Works</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Specialties</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Blog</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Pricing</Link>
          <Link href="#" className="text-gray-600 hover:text-black">For Groups</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost">Log In</Button>
          <Button>Try for Free</Button>
        </div>
      </div>
    </header>
  );
};