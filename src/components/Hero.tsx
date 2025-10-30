import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToAgendamento = () => {
    const element = document.querySelector("#agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 z-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
          Transforme sua vida com
          <span className="block mt-2 text-primary">Psicologia EMDR</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground/90 animate-fade-in">
          Uma abordagem terapêutica eficaz para superar traumas e alcançar o bem-estar emocional
        </p>
        <Button 
          onClick={scrollToAgendamento}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 animate-fade-in"
        >
          Agende sua Consulta
        </Button>
      </div>
    </section>
  );
};
