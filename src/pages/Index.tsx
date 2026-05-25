import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Psychologists } from "@/components/Psychologists";
import { AboutEMDR } from "@/components/AboutEMDR";
import { AboutUs } from "@/components/AboutUs";
import { Scheduling } from "@/components/Scheduling";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import heroImage from "@/assets/hero-image.jpg";
import heroImageMobile from "@/assets/hero-image-mobile.jpg";
import { initLenis, destroyLenis } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    const lenis = initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-[-2] hidden md:block"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="fixed inset-0 z-[-2] block md:hidden"
        style={{
          backgroundImage: `url(${heroImageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-background/80 z-[-1]" />
      <ScrollProgressBar />
      <FloatingButtons />

      <Header />
      <main className="relative z-0">
        <Hero />
        <AboutEMDR />
        <Psychologists />
        <AboutUs />
        <Scheduling />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
