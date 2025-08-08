import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Star, Check } from 'lucide-react';

const checklistItems = [
  "Medical terms and prescription names are correctly transcribed, even the tricky ones.",
  "All the important info is captured, background conversations aren&apos;t.",
  "Notes are automatically organized into clinical format, so they&apos;re EHR-ready."
];

export const AccuracySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Testimonial */}
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="Erica Dorn, NP" />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl italic text-muted-foreground">
              &quot;With Eka Scribe, I no longer need to type during consultations. The AI instantly converts voice into structured notes, summaries, and prescriptions. It saves me over 12 hours every week, cuts documentation time by 80%, and improves data accuracy — all while integrating seamlessly with my EMR.&quot;
            </blockquote>
            <p className="mt-4 font-semibold">- Dr. Neelesh Kapoor</p>
          </div>

          {/* Right Column: Checklist */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Built for, and with, clinicians like you</h2>
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};