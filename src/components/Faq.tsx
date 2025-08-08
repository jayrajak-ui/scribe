import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Eka Scribe?",
    answer:
      "Eka Scribe is an AI-powered medical scribe that records doctor-patient conversations and auto-generates summaries, clinical notes, prescriptions, and structured EMR entries — directly into the Eka.care platform.",
  },
  {
    question: "Is Eka Scribe HIPAA-Compliant?",
    answer:
      "Yes. Eka Scribe is built with strict adherence to HIPAA guidelines, ensuring that all patient data remains secure, encrypted, and accessible only to authorized medical professionals. Your conversations and records are stored and processed with the highest level of privacy protection.",
  },
  {
    question: "Can I Use Eka Scribe During In-Person or Teleconsultations?",
    answer:
      "Absolutely. Eka Scribe works seamlessly for both in-clinic consultations and telemedicine sessions. Whether you’re face-to-face with a patient or speaking over a video call, Eka Scribe can capture and document the interaction without disrupting your workflow.",
  },
  {
    question: "How Much Time Can Eka Scribe Actually Save Me?",
    answer:
      "On average, doctors save up to 2 to 3 hours per day by reducing manual note-taking and prescription writing. This means more time for patient care, fewer after-hours documentation sessions, and less administrative fatigue.",
  },
  {
    question: "Does Eka Scribe Support Multiple Specialties?",
    answer:
      "Yes. Eka Scribe is designed to adapt to various medical specialties, from general practice to cardiology, pediatrics, dermatology, and more — ensuring accurate, specialty-specific notes and prescriptions.",
  },
  {
    question: "Can Eka Scribe Integrate With My Existing EMR System?",
    answer:
      "Yes. Eka Scribe can integrate not only with the Eka.care platform but also with other EHR and EMR systems. Structured notes, prescriptions, and patient data can be transferred seamlessly, ensuring smooth compatibility with your existing workflow.",
  },
];

export default function CenterAlignedWithActiveBackgroundGray() {
  return (
    <>
      <div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Your questions, answered
          </h2>
          <p className="mt-1 text-muted-foreground">
            Answers to the most frequently asked questions.
          </p>
        </div>
        {/* End Title */}

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
