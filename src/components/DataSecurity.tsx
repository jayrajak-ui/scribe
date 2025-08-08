import React from 'react';
import { Button } from './ui/button';
import { ShieldCheck } from 'lucide-react';

export const DataSecurity = () => {
  return (
    <section className="bg-primary-700 text-white py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <ShieldCheck className="h-16 w-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-serif">
          Your data is secure.
        </h2>
        <p className="text-lg text-slate-300 mt-4">
          We safeguard your data with industry-leading security measures. Our
          platform is fully compliant with HIPAA regulations and certified for SOC 2,
          ensuring your information is protected at all times.
        </p>
        <div className="mt-8">
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};