// src/components/Header.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { useScroll } from "@/lib/hooks/use-scroll"; // 1. Import the hook
import { cn } from "@/lib/utils"; // 2. Import the cn utility

export const Header = () => {
  // 3. Use the hook in your component
  const scrolled = useScroll(50);

  return (
    // 4. Replace the old header tag with this new one
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          // When the hero has a dark/colored background, make the header transparent
          // If your hero has a white background, you might change this to "bg-white"
          : "bg-white/0"
      )}
    >
      {/* 5. Add a fixed height to the container for better layout stability */}
      <div className="container mx-auto flex h-16 justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/blue-logo.png"
            alt="eka Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* --- DESKTOP NAVIGATION (Hidden on mobile) --- */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-600">
          <Link href="#" className="hover:text-neutral-900">Product Suite</Link>
          <Link href="#" className="hover:text-neutral-900">Solutions</Link>
          <Link href="#" className="hover:text-neutral-900">Specialties</Link>
          <Link href="#" className="hover:text-neutral-900">Blog</Link>
          <Link href="#" className="hover:text-neutral-900">Pricing</Link>
        </nav>

        {/* --- DESKTOP BUTTONS (Hidden on mobile) --- */}
        <div className="hidden md:flex items-center gap-2">
          {/* Using a standard Shadcn button for consistency */}
          <Button variant="ghost">Log In</Button>
          <Button>Try for Free</Button>
        </div>

        {/* --- MOBILE MENU (Visible ONLY on mobile) --- */}
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
                  <Button className="w-full">Try for Free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};