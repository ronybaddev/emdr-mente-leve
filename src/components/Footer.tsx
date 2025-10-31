import heroImage from "@/assets/hero-image.jpg";

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border overflow-hidden">
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
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary">
            Psicologia EMDR
          </div>
          <p className="text-muted-foreground">
            Transformando vidas através da terapia EMDR
          </p>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Psicologia EMDR. Todos os direitos reservados.
          </div>
          <p className="text-xs text-muted-foreground">
            CRP: 108802 - Psicóloga responsável
          </p>
        </div>
      </div>
    </footer>
  );
};
