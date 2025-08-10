// src/components/ValueProposition.tsx

import React from 'react';

export const ValueProposition = () => {
  return (
    // We use a dark background to make the text stand out, similar to the design
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif leading-tight text-white">
          Save over <span className="text-primary-500">12 hours a week</span> with Eka Scribe
          <br />
          — cutting documentation time by <span className="text-primary-500">up to 80%</span>
        </h1>
      </div>
    </section>
  );
};