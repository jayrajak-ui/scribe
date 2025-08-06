import { Button } from "@/components/ui/button"; // Import the button
import { ShieldCheck, CircleCheck } from "lucide-react"; // Import icons
import { LogoMarquee } from "@/components/LogoMarquee";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AccuracySection } from "@/components/AccuracySection";
import { DataSecurity } from "@/components/DataSecurity";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-serif">
          Let's take charting off <br /> your to-do list
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
          Purpose-built AI medical scribe delivering note accuracy, effortless workflow, and real-human support. Not all scribes are created equal, explore why Freed is best-in-class.
        </p>
        <div className="mt-8">
          <button
  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8"
  style={{
    backgroundColor: '#6b5ce0',
    color: '#ffffff'
  }}
>
  Try for Free
</button>
          <p className="text-sm text-muted-foreground mt-2">No credit card needed</p>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-6">
           <div className="flex items-center gap-2">
             <ShieldCheck className="h-5 w-5 text-muted-foreground" />
             <span className="font-semibold">HIPAA Compliant</span>
           </div>
           <div className="flex items-center gap-2">
             <CircleCheck className="h-5 w-5 text-muted-foreground" />
             <span className="font-semibold">SOC 2</span>
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
      <Footer />

    </main>
  );
}