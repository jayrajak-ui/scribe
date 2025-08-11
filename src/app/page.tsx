import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ShieldCheck, CircleCheck } from "lucide-react";
import { LogoMarquee } from "@/components/LogoMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProposition } from "@/components/ValueProposition";
import { ProductShowcase } from "@/components/ProductShowcase";
import { AccuracySection } from "@/components/AccuracySection";
import { Integrations } from "@/components/Integrations";
import { DataSecurity } from "@/components/DataSecurity";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section 
        className="py-20 pb-70 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-serif leading-tight text-white">
                <span/>Your AI Assistant
                <br />
                for Affortless Clinical
                <br />
                Documentation
              </h1>
              <p className="text-lg text-blue-100 mt-6 max-w-lg">
                Record or upload consultations. Get structured notes,
                prescriptions & clinical summaries instantly.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button variant="outline" size="xlg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Log In</Button>
                <Button size="xlg" className="bg-white text-primary-500 hover:bg-neutral-200">Try For Free</Button>
              </div>
              {/* --- THIS IS THE NEW BADGES SECTION --- */}
              <div className="mt-8 flex justify-start items-center gap-6">
                <div className="flex items-center gap-2 text-blue-100">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-semibold text-sm">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <CircleCheck className="h-5 w-5" />
                  <span className="font-semibold text-sm">SOC 2</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <Image
                src="/images/hero-image.png"
                alt="AI-Powered Clinical Documentation Platform"
                width={400}
                height={400}
                className="rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      <LogoMarquee />
      <HowItWorks />
      <ValueProposition />
      <ProductShowcase />
      <AccuracySection />
      <Integrations />
      <DataSecurity />
      <Faq />
      <Footer />
    </main>
  );
}