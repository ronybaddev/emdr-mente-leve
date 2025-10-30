import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 99999-9999",
    link: "tel:+5511999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@psicologiaemdr.com.br",
    link: "mailto:contato@psicologiaemdr.com.br",
  },
  {
    icon: MapPin,
    title: "Localização",
    content: "São Paulo, SP",
    link: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar. Escolha a melhor forma de nos contatar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <a 
                  href={info.link}
                  className="block"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{info.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    {info.content}
                  </p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Horário de Atendimento</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Segunda a Sexta: 8h às 20h</p>
              <p>Sábados: 9h às 14h</p>
              <p className="text-sm mt-4 text-muted-foreground/80">
                * Atendimentos mediante agendamento prévio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
