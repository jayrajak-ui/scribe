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
    // FIX #1: Changed section background to white
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Two stacked cards */}
          <div className="grid grid-rows-2 gap-8">
            <Card className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 flex flex-col">
              {/* Dummy Image Area */}
              <div className="flex-grow bg-neutral-200"></div>
              {/* FIX #2: Light Blue Footer */}
              <div className="bg-blue-100 text-neutral-800 p-6">
                <h4 className="text-lg font-semibold text-neutral-900">{productCards[0].footerTitle}</h4>
                <p className="text-sm text-neutral-600">{productCards[0].footerDescription}</p>
              </div>
            </Card>

            <Card className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 flex flex-col">
              {/* Dummy Image Area */}
              <div className="flex-grow bg-neutral-200"></div>
              {/* Light Blue Footer */}
              <div className="bg-blue-100 text-neutral-800 p-6">
                <h4 className="text-lg font-semibold text-neutral-900">{productCards[1].footerTitle}</h4>
                <p className="text-sm text-neutral-600">{productCards[1].footerDescription}</p>
              </div>
            </Card>
          </div>

          {/* Right Column: One tall card */}
          <Card className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 flex flex-col">
            {/* Dummy Image Area */}
            <div className="flex-grow bg-neutral-200"></div>
            {/* Light Blue Footer */}
            <div className="bg-blue-100 text-neutral-800 p-6">
              <h4 className="text-lg font-semibold text-neutral-900">{productCards[2].footerTitle}</h4>
              <p className="text-sm text-neutral-600">{productCards[2].footerDescription}</p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};