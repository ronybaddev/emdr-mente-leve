import { Award, Users, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  {
    icon: Award,
    value: "Certificação",
    label: "Internacional EMDR",
  },
  {
    icon: Users,
    value: "500+",
    label: "Pacientes atendidos",
  },
  {
    icon: Clock,
    value: "10+ anos",
    label: "De experiência",
  },
];

export const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Quem <span className="text-secondary">Somos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos uma equipe de profissionais dedicados ao seu bem-estar emocional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              Nossa equipe é formada por psicólogos especializados e certificados em EMDR, 
              comprometidos em oferecer um atendimento humanizado e de excelência.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Acreditamos no poder transformador da terapia EMDR e trabalhamos com dedicação 
              para ajudar cada pessoa a superar seus desafios emocionais e alcançar uma vida 
              mais plena e equilibrada.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nosso consultório oferece um ambiente acolhedor, seguro e confidencial, onde 
              você pode se sentir à vontade para compartilhar suas experiências e iniciar 
              sua jornada de cura.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Nossos <span className="text-secondary">Psicólogos</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <Avatar className="w-32 h-32 flex-shrink-0 border-4 border-primary/20">
                  <AvatarImage src="" alt="Patrícia - Psicóloga Clínica" />
                  <AvatarFallback className="text-3xl bg-primary/10 text-primary">P</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-1">Patrícia:</h4>
                    <p className="text-lg text-primary font-semibold">Psicóloga Clínica - Crp:000-000</p>
                    <p className="text-base text-secondary font-medium">Especialista em Terapia Familiar e EMDR</p>
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
      </div>
    </section>
  );
};
