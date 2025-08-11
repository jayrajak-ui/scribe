// src/components/Header.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { useScroll } from "@/lib/hooks/use-scroll";
import { cn } from "@/lib/utils";

export const Header = () => {
  const scrolled = useScroll(50);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      )}
    >
      <div className="container mx-auto flex h-16 justify-between items-center">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/images/blue-logo.png"
            alt="eka Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-600">
          <Link href="#" className="hover:text-neutral-900">Product Suite</Link>
          <Link href="#" className="hover:text-neutral-900">Solutions</Link>
          <Link href="#" className="hover:text-neutral-900">Specialties</Link>
          <Link href="#" className="hover:text-neutral-900">Blog</Link>
          <Link href="#" className="hover:text-neutral-900">Pricing</Link>
        </nav>

        {/* --- DESKTOP BUTTONS --- */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost">Log In</Button>
          {/* --- FIX: Using the forceful inline style method --- */}
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
            style={{ backgroundColor: '#215FFF', color: '#ffffff' }}
          >
            Try for Free
          </button>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="grid gap-4 py-6">
                <Link href="#" className="font-semibold py-2">Product Suite</Link>
                <Link href="#" className="font-semibold py-2">Solutions</Link>
                <Link href="#" className="font-semibold py-2">Specialties</Link>
                <Link href="#" className="font-semibold py-2">Blog</Link>
                <Link href="#" className="font-semibold py-2">Pricing</Link>
                <div className="border-t pt-4 grid gap-4">
                  <Button variant="ghost" className="w-full">Log In</Button>
                  {/* --- FIX: Using the forceful inline style method --- */}
                  <button
                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
                    style={{ backgroundColor: '#215FFF', color: '#ffffff' }}
                  >
                    Try for Free
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;