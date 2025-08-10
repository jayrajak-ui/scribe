// src/components/ProductShowcase.tsx

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

// --- Data for the Product Cards ---
const productCards = [
  {
    id: 1,
    footerTitle: "Multilingual Voice Capture",
    footerDescription: "Translate and transcribe across Indian languages.",
    // The tall card will be the last one, so we just need 3 items for the left column
  },
  {
    id: 2,
    footerTitle: "One Click Save to Your EMR",
    footerDescription: "One click to push summary, Rx, vitals, and more into EMR.",
  },
  {
    id: 3,
    footerTitle: "AI-powered Notes in Seconds",
    footerDescription: "From voice to structured clinical notes — automatically.",
  }
];

export const ProductShowcase = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        
        {/* --- NEW MASONRY GRID LAYOUT --- */}
        {/* This grid has 2 columns. The left column is another grid with 2 rows. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Two stacked cards */}
          <div className="grid grid-rows-2 gap-8">
            <Card className="relative overflow-hidden rounded-2xl bg-neutral-800 flex flex-col">
              {/* Dummy Image Area */}
              <div className="flex-grow bg-neutral-700"></div>
              {/* Blue Footer */}
              <div className="bg-primary-500/80 backdrop-blur-sm text-white p-6">
                <h4 className="text-lg font-semibold">{productCards[0].footerTitle}</h4>
                <p className="text-sm text-primary-100">{productCards[0].footerDescription}</p>
              </div>
            </Card>

            <Card className="relative overflow-hidden rounded-2xl bg-neutral-800 flex flex-col">
              {/* Dummy Image Area */}
              <div className="flex-grow bg-neutral-700"></div>
              {/* Blue Footer */}
              <div className="bg-primary-500/80 backdrop-blur-sm text-white p-6">
                <h4 className="text-lg font-semibold">{productCards[1].footerTitle}</h4>
                <p className="text-sm text-primary-100">{productCards[1].footerDescription}</p>
              </div>
            </Card>
          </div>

          {/* Right Column: One tall card */}
          <Card className="relative overflow-hidden rounded-2xl bg-neutral-800 flex flex-col">
            {/* Dummy Image Area */}
            <div className="flex-grow bg-neutral-700"></div>
            {/* Blue Footer */}
            <div className="bg-primary-500/80 backdrop-blur-sm text-white p-6">
              <h4 className="text-lg font-semibold">{productCards[2].footerTitle}</h4>
              <p className="text-sm text-primary-100">{productCards[2].footerDescription}</p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};