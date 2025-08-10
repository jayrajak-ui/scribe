// src/components/ProductShowcase.tsx

import React from 'react';
import { Card } from "@/components/ui/card"; // Only need Card

// --- Data for the Product Cards ---
const productCards = [
  {
    id: 1,
    footerTitle: "Multilingual Voice Capture",
    footerDescription: "Translate and transcribe across Indian languages.",
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
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Two stacked cards */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <Card className="relative overflow-hidden rounded-2xl bg-neutral-200 p-0 border-none min-h-[250px]">
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-blue-100 text-neutral-800 p-6 rounded-b-2xl">
                <h4 className="text-lg font-semibold text-neutral-900">{productCards[0].footerTitle}</h4>
                <p className="text-sm text-neutral-600">{productCards[0].footerDescription}</p>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="relative overflow-hidden rounded-2xl bg-neutral-200 p-0 border-none min-h-[250px]">
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-blue-100 text-neutral-800 p-6 rounded-b-2xl">
                <h4 className="text-lg font-semibold text-neutral-900">{productCards[1].footerTitle}</h4>
                <p className="text-sm text-neutral-600">{productCards[1].footerDescription}</p>
              </div>
            </Card>
          </div>

          {/* Right Column: One tall card */}
          <Card className="relative overflow-hidden rounded-2xl bg-neutral-200 p-0 border-none min-h-[532px]">
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-blue-100 text-neutral-800 p-6 rounded-b-2xl">
              <h4 className="text-lg font-semibold text-neutral-900">{productCards[2].footerTitle}</h4>
              <p className="text-sm text-neutral-600">{productCards[2].footerDescription}</p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};