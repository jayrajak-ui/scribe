import React from 'react';
import { Users, Microscope, Zap } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Human-centric support",
    description: "Live, doctor-focused assistance to ensure smooth adoption—so you’re never left figuring things out alone."
  },
  {
    icon: <Microscope className="h-10 w-10 text-primary" />,
    title: "Clinical-grade precision",
    description: "Optimized for multiple specialties, across 14+ Indian and global languages, powered by advanced AI to capture every medical detail accurately."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Continuous innovation",
    description: "Learns from your workflow, adapts to your style, and keeps adding smarter features to make your practice faster and stress-free."
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif">
          Purpose-built AI medical scribe, not just an add-on
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Unlike generic tools, Eka Scribe is designed exclusively for doctors—streamlining consultations, documentation, and prescriptions with unmatched efficiency.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};