import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    clinicians: "1 Clinician",
    price: "$90",
    period: "/mo",
    features: ["7-day free trial", "Unlimited note generation"],
    buttonText: "Start Free Trial",
    variant: "default"
  },
  {
    clinicians: "2-9 Clinicians",
    price: "$84",
    period: "/mo",
    features: ["Team template library", "Unlimited note generation"],
    buttonText: "Start Free Trial",
    variant: "default"
  },
  {
    clinicians: "10+ Clinicians",
    price: "Custom pricing",
    period: "",
    features: ["License management", "Organization-wide BAA"],
    buttonText: "Contact Sales",
    variant: "secondary"
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <Card key={idx} className={tier.variant === 'default' ? 'border-primary' : ''}>
              <CardHeader>
                <CardDescription className="font-semibold">{tier.clinicians}</CardDescription>
                <CardTitle className="text-4xl font-bold flex items-baseline">
                  {tier.price}
                  {tier.period && <span className="text-xl font-normal text-muted-foreground">{tier.period}</span>}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-auto" variant={tier.variant === 'default' ? 'default' : 'outline'}>
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};