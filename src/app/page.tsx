
import { ShieldCheck, CircleCheck } from "lucide-react"; // Import icons
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AccuracySection } from "@/components/AccuracySection";
import { DataSecurity } from "@/components/DataSecurity";
import { Pricing } from "@/components/Pricing";
import  Faq  from "@/components/Faq";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
            {/* New Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-serif leading-tight">
              <span className="text-primary-500">AI-Powered</span> Clinical
              <br />
              Documentation
              <br />
              Platform for Doctors
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-lg">
              Record or upload consultations. Get structured notes,
              prescriptions & clinical summaries instantly.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button variant="outline" size="lg">Book A Demo</Button>
              <Button size="lg" className="btn-primary-custom">Try For Free</Button>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-sm h-auto aspect-square bg-neutral-200 rounded-2xl">
              {/* This is the gray placeholder box */}
            </div>
          </div>

        </div>
      </section>
      <LogoMarquee /> {/* 2. Add the component here */}
      <Testimonials />
      <Features />
      <HowItWorks />
      <AccuracySection />
      <DataSecurity />
      <Pricing />
      <Faq />

    </main>
  );
}