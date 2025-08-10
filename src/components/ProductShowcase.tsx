// src/components/ProductShowcase.tsx

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"; // Using Card and CardContent from Shadcn

// --- Data for the Product Cards ---
const productCards = [
  {
    id: 1,
    title: "Sales meeting @Today",
    image: "/images/dummy-card-1.png", // Dummy image for now, replace later
    contentSnippet: "Welcome everyone to our Q2 pipeline review. Great to see all the regional teams today! Our goals for today's session are to review current opportunities, discuss strategies for key accounts, and align on Q2 targets. Let's get started with our pipeline overview. James, can I pass it to you to share the latest dashboard? Sure thing. Just a moment while I get the screen share ready. Alright, let's go ahead and dive into some exciting ?",
    footerTitle: "Multilingual Voice Capture",
    footerDescription: "Translate and transcribe across Indian languages."
  },
  {
    id: 2,
    title: "Sales meeting @Today", // Re-using content for dummy purposes
    image: "/images/dummy-card-2.png", // Dummy image for now
    contentSnippet: "Welcome everyone to our Q2 pipeline review. Great to see all the regional teams today! Our goals for today's session are to review current opportunities, discuss strategies for key accounts, and align on Q2 targets. Let's get started with our pipeline overview. James, can I pass it to you to share the latest dashboard? Sure thing. Just a moment while I get the screen share ready. Alright, let's go ahead and dive into some exciting ?",
    footerTitle: "AI-powered Notes in Seconds",
    footerDescription: "From voice to structured clinical notes — automatically."
  },
  {
    id: 3,
    title: "Sales meeting @Today", // Re-using content for dummy purposes
    image: "/images/dummy-card-3.png", // Dummy image for now
    contentSnippet: "Welcome everyone to our Q2 pipeline review. Great to see all the regional teams today! Our goals for today's session are to review current opportunities, discuss strategies for key accounts, and align on Q2 targets. Let's get started with our pipeline overview. James, can I pass it to you to share the latest dashboard? Sure thing. Just a moment while I get the screen share ready. Alright, let's go ahead and dive into some exciting ?",
    footerTitle: "One Click Save to Your EMR",
    footerDescription: "One click to push summary, Rx, vitals, and more into EMR."
  },
  {
    id: 4,
    title: "Sales meeting @Today", // Re-using content for dummy purposes
    image: "/images/dummy-card-4.png", // Dummy image for now
    contentSnippet: "Welcome everyone to our Q2 pipeline review. Great to see all the regional teams today! Our goals for today's session are to review current opportunities, discuss strategies for key accounts, and align on Q2 targets. Let's get started with our pipeline overview. James, can I pass it to you to share the latest dashboard? Sure thing. Just a moment while I get the screen share ready. Alright, let's go ahead and dive into some exciting ?",
    footerTitle: "Customizable Documentation",
    footerDescription: "Adapt notes to your preference, specialty, and EMR requirements." // Placeholder, adjust as needed
  }
];

export const ProductShowcase = () => {
  return (
    <section className="bg-black py-20 px-4"> {/* Using black background as in the example */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCards.map((card) => (
            <Card key={card.id} className="relative overflow-hidden rounded-xl bg-white text-black">
              {/* Top Image Area */}
              <div className="relative h-48 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Main Card Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-600 line-clamp-4">
                  {card.contentSnippet}
                </p>
              </CardContent>

              {/* Blue Footer Section */}
              <div className="bg-primary-500 text-white p-6 pt-4">
                <h4 className="text-lg font-semibold">{card.footerTitle}</h4>
                <p className="text-sm text-primary-100">{card.footerDescription}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};