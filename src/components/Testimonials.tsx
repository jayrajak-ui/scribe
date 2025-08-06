import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Heather, MD",
    role: "Podiatrist",
    avatar: "https://github.com/shadcn.png", // Placeholder image
    comment: "It's really allowed me to be able to focus on the patient visit, rather than sitting with my back turned to the patient half the time while I'm typing into an EHR and potentially missing things that are pertinent to their appointment."
  },
  {
    name: "Vera, MD",
    role: "Addictions Physician",
    avatar: "https://github.com/shadcn.png",
    comment: "Freed gives me peace of mind knowing that every encounter is thoroughly documented to a level that I would never achieve on my own, even if I had lots of time."
  },
  {
    name: "Olusesan, MD",
    role: "Family Medicine",
    avatar: "https://github.com/shadcn.png",
    comment: "I have more time to spend doing other things I enjoy - getting home early, rather than staying late at the office trying to finish my charts or taking my charts home and doing them over the weekend."
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Loved by over 20,000 clinicians</h2>
        <p className="text-muted-foreground mt-2">(and their families)</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="text-left">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};