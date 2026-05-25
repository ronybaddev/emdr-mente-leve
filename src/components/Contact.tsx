import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";

const WhatsappIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
);
import { Card, CardContent } from "@/components/ui/card";
import { gsap, ScrollTrigger } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "+55 11 97528-4635",
    link: "tel:+5511975284635",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: WhatsappIcon,
    title: "WhatsApp",
    content: "Clique para conversar",
    link: "https://wa.me/5511975284635?text=Olá! Gostaria de saber mais sobre a terapia EMDR.",
    color: "from-green-500/20 to-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@psicologiaemdr.com.br",
    link: "mailto:contato@psicologiaemdr.com.br",
    color: "from-secondary/20 to-secondary/10",
    iconColor: "text-secondary",
  },
];

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(
        cardsRef.current?.querySelectorAll(".contact-card") ?? [],
        {
          onEnter: (els) =>
            gsap.from(els, {
              y: 40,
              autoAlpha: 0,
              scale: 0.95,
              stagger: 0.12,
              duration: 0.7,
              ease: "back.out(1.2)",
            }),
          start: "top 80%",
        }
      );

      gsap.from(scheduleRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scheduleRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contato" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar. Escolha a melhor forma de nos contatar
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <Card className="border-none shadow-lg transition-all duration-300 bg-card/90 backdrop-blur-sm group h-full hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <a
                    href={info.link}
                    className="block"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{info.title}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors break-words text-sm">
                      {info.content}
                    </p>
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div ref={scheduleRef} className="mt-12 text-center">
          <div className="relative rounded-2xl p-8 max-w-2xl mx-auto border border-border bg-card/90 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-foreground">Horário de Atendimento</h3>
            <p className="text-muted-foreground">Segunda a Sexta: 8h às 20h</p>
            <p className="text-sm mt-3 text-muted-foreground/70 font-semibold">
              * Atendimentos mediante agendamento prévio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
