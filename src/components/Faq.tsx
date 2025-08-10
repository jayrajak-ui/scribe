// src/components/Faq.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- YOUR ORIGINAL QUESTIONS AND ANSWERS ---
const faqItems = [
  {
    question: "Can I cancel at anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of the current billing cycle."
  },
  {
    question: "My team has credits. How do we use them?",
    answer: "Team credits can be applied during the checkout process. Contact our support team for any assistance."
  },
  {
    question: "How does Acme's pricing work?",
    answer: "Our pricing is flexible and scales with your needs. We offer various plans to suit individuals and teams of all sizes."
  },
  {
    question: "How secure is Acme?",
    answer: "We prioritize your security with industry-leading measures, including end-to-end encryption and regular security audits."
  },
  // Adding two more placeholders to match the design's 6 questions
  {
    question: "What integrations do you support?",
    answer: "We support a wide range of integrations with popular EMR and EHR systems. Please visit our integrations page for a full list."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! All of our plans come with a 7-day free trial so you can experience the full power of our platform before committing."
  }
];

export const Faq = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Title */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-neutral-800 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-neutral-500">
              Find Answers to Your Most Common Questions Here
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  value={`item-${index}`} 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-neutral-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};