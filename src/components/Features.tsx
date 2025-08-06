import React from 'react';
import { Users, Microscope, Zap } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Real humans, real fast",
    description: "Live, clinician-focused support ensures white-glove service for your team - so you're never alone."
  },
  {
    icon: <Microscope className="h-10 w-10 text-primary" />,
    title: "Clinical-grade accuracy",
    description: "Purpose-built for any specialty visit, across 14+ languages, with leading-edge AI technology."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Best-in-class innovation",
    description: "Notes that learn from your edits. AI that adapts to your style and an expanding set of AI features to ease your workflow."
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Purpose-built AI scribe, not just a side project
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Generic EHR add-ons treat documentation as an after-thought. Freed is singularly focused on building tools for your charting workflow.
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