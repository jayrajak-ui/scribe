// src/components/HowItWorks.tsx

"use client"; // This is crucial! It tells Next.js this is an interactive client component.

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils"; // We'll use the cn utility for conditional classes

// --- Data for the steps ---
const steps = [
  {
    title: "Record / Upload Consultation",
    description: "Use our in-app voice recorder or upload an audio file.",
  },
  {
    title: "Scribe AI Transcribes & Understands",
    description: "Eka Scribe instantly processes the recording into structured notes, prescriptions, and summaries.",
  },
  {
    title: "Instant Notes, Summaries & Prescriptions",
    description: "Quickly check your notes, make edits if needed, and save directly to your EMR.",
  },
];

export const HowItWorks = () => {
  // --- State Management ---
  // We use state to keep track of which step is currently active.
  const [activeStep, setActiveStep] = useState(0);

  // --- Effect for Animation ---
  // This useEffect hook sets up a timer that changes the active step every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3000); // Change step every 3 seconds (3000 milliseconds)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // The empty array [] means this effect runs only once when the component mounts

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="container mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-4xl font-bold font-serif mb-2">
          <span className="text-blue-400">Eka Scribe</span>
        </h2>
        <p className="text-xl text-neutral-300">
          From Voice to Documentation - in 3 simple steps!
        </p>
      </div>
      
      {/* Main Content Card */}
      <div className="container mx-auto mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: The Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div key={index} className="flex items-start gap-6">
                  {/* The number and connecting line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold transition-all duration-300",
                        isActive ? "bg-blue-500 text-white" : "bg-neutral-700 text-neutral-400"
                      )}
                    >
                      {index + 1}
                    </div>
                    {/* Hide the line for the last item */}
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-neutral-700 mt-2"></div>
                    )}
                  </div>
                  
                  {/* The text content */}
                  <div className="text-left">
                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        isActive ? "text-blue-400" : "text-white"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 mt-1">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: The Image */}
          <div className="hidden md:block">
            <Image
              src="/images/how-it-works-phones.png" // Your image file
              alt="How Eka Scribe works"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};