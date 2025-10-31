import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import fotoAvatar from "@/assets/imgsite.jpeg";
import heroImage from "@/assets/hero-image.jpg";

export const Psychologists = () => {
  return (
    <section id="psicologos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Nossos <span className="text-secondary">Psicólogos</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-8 md:p-12 shadow-lg border border-border overflow-hidden">
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
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-20">
              <Avatar className="w-32 h-32 flex-shrink-0 border-4 border-primary/20">
                <AvatarImage src={fotoAvatar} alt="Patrícia - Psicóloga Clínica" />
                <AvatarFallback className="text-3xl bg-primary/10 text-primary">PRM</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-1">Patrícia Rios de Miranda</h4>
                  <p className="text-lg text-primary font-semibold">Psicóloga Clínica - Crp:108802</p>
                  <p className="text-lg text-secondary font-semibold">Especialista em Terapia Familiar e EMDR</p>
                </div>
                
                <div className="space-y-3 text-foreground/90 leading-relaxed">
                  <p>
                    Sou psicóloga formada pela Faculdade de Ciências de Guarulhos (2011), com mais de 13 anos de experiência na área da saúde mental. Atuo no SUS há mais de uma década, onde construí uma base sólida e humana para minha prática clínica, além de atender em consultório particular. Em 2016, concluí minha pós-graduação em Terapia Familiar e de Casal pela PUC-SP, ampliando minha visão sistêmica do ser humano.
                  </p>
                  <p>
                    Acredito na importância de enxergar o indivíduo em sua totalidade — corpo, alma e espírito — e meu propósito é promover alívio emocional e qualidade de vida. Em 2023, me especializei em Terapia EMDR, abordagem que me encantou por sua eficácia em promover mudanças profundas por meio de estímulos bilaterais, indo além da fala tradicional.
                  </p>
                  <p>
                    Meu trabalho é guiado pela escuta sensível, pelo acolhimento e pela busca constante de aprimoramento para oferecer o melhor cuidado possível a quem me procura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
