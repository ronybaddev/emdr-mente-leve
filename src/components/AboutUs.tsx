import { Award, Users, Clock } from "lucide-react";

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
      </div>
    </section>
  );
};
