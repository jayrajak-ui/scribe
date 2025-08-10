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
    question: "What is Eka Scribe?",
    answer: "Eka Scribe is an AI-powered medical scribe that records doctor-patient conversations and auto-generates summaries, clinical notes, prescriptions, and structured EMR entries — directly into the Eka.care platform."
  },
  {
    question: "Is Eka Scribe HIPAA-Compliant?",
    answer: "Yes. Eka Scribe is built with strict adherence to HIPAA guidelines, ensuring that all patient data remains secure, encrypted, and accessible only to authorized medical professionals. Your conversations and records are stored and processed with the highest level of privacy protection."
  },
  {
    question: "Can I Use Eka Scribe During In-Person or Teleconsultations?",
    answer: "Absolutely. Eka Scribe works seamlessly for both in-clinic consultations and telemedicine sessions. Whether you’re face-to-face with a patient or speaking over a video call, Eka Scribe can capture and document the interaction without disrupting your workflow."
  },
  {
    question: "How Much Time Can Eka Scribe Actually Save Me?",
    answer: "On average, doctors save up to 2 to 3 hours per day by reducing manual note-taking and prescription writing. This means more time for patient care, fewer after-hours documentation sessions, and less administrative fatigue."
  },
  // Adding two more placeholders to match the design's 6 questions
  {
    question: "Does Eka Scribe Support Multiple Specialties?",
    answer: "Yes. Eka Scribe is designed to adapt to various medical specialties, from general practice to cardiology, pediatrics, dermatology, and more — ensuring accurate, specialty-specific notes and prescriptions."
  },
  {
    question: "Can Eka Scribe Integrate With My Existing EMR System?",
    answer: "Yes. Eka Scribe can integrate not only with the Eka.care platform but also with other EHR and EMR systems. Structured notes, prescriptions, and patient data can be transferred seamlessly, ensuring smooth compatibility with your existing workflow."
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