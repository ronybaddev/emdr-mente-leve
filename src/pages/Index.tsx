import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Psychologists } from "@/components/Psychologists";
import { AboutEMDR } from "@/components/AboutEMDR";
import { AboutUs } from "@/components/AboutUs";
import { Scheduling } from "@/components/Scheduling";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import heroImageMobile from "@/assets/hero-image-mobile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Desktop Background */}
      <div 
        className="fixed inset-0 z-[-2] hidden md:block"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Mobile Background */}
      <div 
        className="fixed inset-0 z-[-2] block md:hidden"
        style={{
          backgroundImage: `url(${heroImageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="fixed inset-0 bg-background/80 z-[-1]" />
      
      <Header />
      <main className="relative z-0">
        <Hero />
        <Psychologists />
        <AboutEMDR />
        <AboutUs />
        <Scheduling />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
