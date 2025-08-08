import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AccuracySection } from "@/components/AccuracySection";
import { DataSecurity } from "@/components/DataSecurity";
import { Pricing } from "@/components/Pricing";
import  Faq  from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      // src/app/page.tsx

      {/* New Hero Section */}
      <section 
        className="py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-serif leading-tight text-white">
                <span className="text-blue-300">AI-Powered</span> Clinical
                <br />
                Documentation
                <br />
                Platform for Doctors
              </h1>
              <p className="text-lg text-blue-100 mt-6 max-w-lg">
                Record or upload consultations. Get structured notes,
                prescriptions & clinical summaries instantly.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Book A Demo</Button>
                <Button size="lg" className="bg-white text-primary-500 hover:bg-neutral-200">Try For Free</Button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/images/hero-image.png"
                alt="AI-Powered Clinical Documentation Platform"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      <LogoMarquee />
      <Testimonials />
      <Features />
      <HowItWorks />
      <AccuracySection />
      <DataSecurity />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}