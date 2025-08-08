import React from 'react';
import { Button } from './ui/button';

const steps = [
  {
    step: 1,
    title: "RRecord the consultation",
    description: "Securely capture any in-person or virtual patient visit.",
    image: "/step1.png" // We'll use placeholder images
  },
  {
    step: 2,
    title: "Let AI do the work",
    description: "Eka Scribe instantly processes the recording into structured notes, prescriptions, and summaries.",
    image: "/step2.png"
  },
  {
    step: 3,
    title: "Review & finalize",
    description: "Quickly check your notes, make edits if needed, and save directly to your EMR.",
    image: "/step3.png"
  }
];

export const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif">
          Simplicity at every step
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Works seamlessly on any device
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center">
              {/* Placeholder for the image */}
              <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
                <span className="text-slate-500">Image for Step {step.step}</span>
              </div>
              <h3 className="text-2xl font-semibold">
                {step.step}. {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <Button size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};