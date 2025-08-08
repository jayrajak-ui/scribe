// src/components/HowItWorks.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

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
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="container mx-auto text-center">
        {/* --- FIX #1: GRADIENT TITLE --- */}
        <h2 className="text-4xl font-bold font-serif mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Eka Scribe
        </h2>
        {/* --- FIX #2: SUBTITLE COLOR --- */}
        <p className="text-xl text-neutral-200">
          From Voice to Documentation - in 3 simple steps!
        </p>
      </div>
      
      {/* --- FIX #3: CARD BACKGROUND --- */}
      <div className="container mx-auto mt-12 bg-gray-900/50 border border-neutral-700 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold transition-all duration-300",
                        // --- FIX #4: ACTIVE STATE COLORS ---
                        isActive ? "bg-primary-500 text-white" : "bg-neutral-800 text-neutral-500 border border-neutral-700"
                      )}
                    >
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      // --- FIX #5: CONNECTOR LINE STYLING ---
                      <div className={cn(
                        "w-0.5 h-16 mt-2 transition-colors duration-300",
                         isActive ? "bg-primary-500" : "bg-neutral-800"
                      )}></div>
                    )}
                  </div>
                  
                  <div className="text-left">
                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        // --- FIX #6: ACTIVE TEXT COLOR ---
                        isActive ? "text-primary-400" : "text-neutral-400"
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

          <div className="hidden md:block">
            <Image
              src="/images/how-it-works-phones.png"
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