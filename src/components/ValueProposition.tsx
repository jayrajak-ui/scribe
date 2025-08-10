// src/components/ValueProposition.tsx

import React from 'react';

export const ValueProposition = () => {
  return (
    // FIX #1: Changed background to white
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        {/* FIX #2: Changed text color to black (text-neutral-900) */}
        <h1 className="text-4xl md:text-5xl font-serif leading-tight text-neutral-900">
          Save over <span className="text-primary-500">12 hours a week</span> with Eka Scribe
          <br />
          — cutting documentation time by <span className="text-primary-500">up to 80%</span>
        </h1>
      </div>
    </section>
  );
};