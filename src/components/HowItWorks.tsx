// src/components/HowItWorks.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const steps = [
  { title: "Record / Upload Consultation", description: "Use our in-app voice recorder or upload an audio file." },
  { title: "Scribe AI Transcribes & Understands", description: "Eka Scribe instantly processes the recording into structured notes, prescriptions, and summaries." },
  { title: "Instant Notes, Summaries & Prescriptions", description: "Quickly check your notes, make edits if needed, and save directly to your EMR." },
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
    <section className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold font-serif mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Eka Scribe
        </h2>
        <p className="text-xl text-neutral-600">
          From Voice to Documentation - in 3 simple steps!
        </p>
      </div>
      
      <div className="relative overflow-hidden max-w-5xl mx-auto mt-12 bg-white border border-neutral-200 rounded-3xl min-h-[500px] grid grid-cols-1 md:grid-cols-2">
        
        <div className="flex flex-col gap-8 p-8 md:p-12 z-10">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              // --- FIX #1: Added conditional 'how-it-works-active-step' class ---
              <div key={index} className={cn("flex items-start gap-6", isActive && "how-it-works-active-step")}>
                <div className="flex flex-col items-center">
                  {/* --- FIX #2: Added 'step-number' class --- */}
                  <div className="step-number flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold transition-all duration-300 bg-neutral-100 text-neutral-500 border border-neutral-200">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    // --- FIX #3: Added 'step-line' class ---
                    <div className="step-line w-0.5 h-16 mt-2 transition-colors duration-300 bg-neutral-200"></div>
                  )}
                </div>
                <div className="text-left">
                  {/* --- FIX #4: Added 'step-title' class --- */}
                  <h3 className="step-title text-xl font-bold transition-colors duration-300 text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 mt-1">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-full md:w-1/2 hidden md:block">
           <Image
              src="/images/how-it-works-phones.png"
              alt="How Eka Scribe works"
              fill
              className="object-cover"
            />
        </div>
      </div>
    </section>
  );
};