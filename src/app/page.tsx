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
      {/* Original Hero Section */}
       <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-serif leading-tight">
              <span className="text-primary-500">Your AI</span> Assistant
              <br />
              for Effortless Clinical
              <br />
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-lg">
              Record or upload consultations. Get structured notes,
              prescriptions & clinical summaries instantly.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button variant="outline" size="lg">Log In</Button>
              <Button variant="ghost" size="lg">Try For Free</Button>
            </div>
          </div>

                    {/* Right Column: Image */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/images/hero-image.png" // This path points to public/images/hero-image.png
              alt="AI-Powered Clinical Documentation Platform"
              width={500}
              height={500}
              className="rounded-2xl"
            />
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