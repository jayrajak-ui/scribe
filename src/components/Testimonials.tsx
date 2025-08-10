// src/components/Testimonials.tsx

"use client"; // This component is now interactive, so we need this directive

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MessageSquareQuote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// --- NEW DATA STRUCTURE for multiple testimonials ---
const testimonialsData = [
  {
    name: "Dr. Neelesh Kapoor",
    title: "Senior Consultant Physician & Diabetologist, Noida, India",
    image: "/images/dr-kapoor-photo.png", // Your new image
    heading: "Eka Scribe has completely changed how I document my patient consultations — it's hands-free, accurate, and incredibly fast.",
    comment: "With Eka Scribe, I no longer need to type during consultations. The AI instantly converts voice into structured notes, summaries, and prescriptions. It saves me over 12 hours every week, cuts documentation time by 80%, and improves data accuracy — all while integrating seamlessly with my EMR. It's like having a silent, intelligent assistant who never misses a detail.",
  },
  {
    name: "Dr. Jane Doe", // Placeholder for a second testimonial
    title: "General Practitioner, San Francisco, USA",
    image: "/images/dr-jane-doe.png", // Add a placeholder image for this one too
    heading: "A game-changer for clinic efficiency and patient focus.",
    comment: "Adopting this AI scribe has allowed me to be more present with my patients. I can focus on them instead of the computer screen, which has improved the quality of care I provide. The time saved on documentation is a massive bonus.",
  },
];

export const Testimonials = () => {
  // State to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Real Impact Delivered by Eka Scribe</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Testimonial Text */}
          <div className="flex flex-col gap-6">
            <MessageSquareQuote className="w-12 h-12 text-primary-500" />
            
            <h3 className="text-2xl font-bold leading-tight">
              {currentTestimonial.heading}
            </h3>

            <p className="text-neutral-500 leading-relaxed">
              {currentTestimonial.comment}
            </p>

            <div className="mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-bold mt-4">{currentTestimonial.name}</p>
              <p className="text-sm text-neutral-500">{currentTestimonial.title}</p>
            </div>
            
            <div className="flex items-center gap-4 mt-4">
              <Button>Read full story <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrev}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNext}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor's Image */}
          <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
             <Image 
                src={currentTestimonial.image}
                alt={currentTestimonial.name} 
                fill
                className="rounded-2xl object-cover bg-slate-100"
              />
          </div>
        </div>
      </div>
    </section>
  );
};