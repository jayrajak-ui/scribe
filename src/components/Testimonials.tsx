// src/components/Testimonials.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageSquareQuote } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- UPDATED DATA STRUCTURE ---
const testimonialsData = [
  {
    name: "Dr Arvind Kinger",
    title: "ENT Specialist",
    image: "/images/dr-kapoor-photo.png", // Your new image
    heading: "Dr Arvind boosted his clinic efficiency & patient delight",
    comment: "Very nice app. It has made things very smooth in my clinic. The patients are also very happy to have the prescription and regular reminders on their mobile.",
  },
  {
    name: "Dr. Neelesh Kapoor", // Using previous data as a second slide
    title: "Senior Consultant Physician & Diabetologist, Noida, India",
    image: "/images/dr-kapoor-photo.png", 
    heading: "Eka Scribe has completely changed how I document my patient consultations.",
    comment: "It saves me over 12 hours every week, cuts documentation time by 80%, and improves data accuracy — all while integrating seamlessly with my EMR.",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
             <Image 
                src={currentTestimonial.image}
                alt={currentTestimonial.name} 
                fill
                className="rounded-2xl object-cover bg-slate-200"
              />
          </div>

          {/* Right Column: Testimonial Text and Controls */}
          <div className="flex flex-col gap-6 text-left">
            <div className="p-3 bg-blue-100 rounded-full w-fit">
              <MessageSquareQuote className="w-6 h-6 text-primary-500" />
            </div>
            
            <h3 className="text-3xl font-bold font-serif leading-tight text-neutral-800">
              {currentTestimonial.heading}
            </h3>

            <p className="text-neutral-500 text-lg leading-relaxed">
              &quot;{currentTestimonial.comment}&quot;
            </p>

            <div className="mt-4">
              <p className="font-bold text-lg text-neutral-900">{currentTestimonial.name}</p>
              <p className="text-sm text-neutral-500">{currentTestimonial.title}</p>
            </div>
            
            {/* Progress Bar Indicators */}
            <div className="flex gap-2 mt-4">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    currentIndex === index ? "w-12 bg-primary-500" : "w-6 bg-neutral-300"
                  )}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};