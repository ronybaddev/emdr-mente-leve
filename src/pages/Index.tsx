import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutEMDR } from "@/components/AboutEMDR";
import { AboutUs } from "@/components/AboutUs";
import { Scheduling } from "@/components/Scheduling";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Watermark } from "@/components/Watermark";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutEMDR />
        <AboutUs />
        <Scheduling />
        <Contact />
      </main>
      <Footer />
      <Watermark />
    </div>
  );
};

export default Index;
