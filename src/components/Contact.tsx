import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { Card, CardContent } from "@/components/ui/card";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { SITE } from "@/constants/site";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: SITE.contact.phoneDisplay,
    link: `tel:${SITE.contact.phone}`,
    ariaLabel: "Ligar para o consultório",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: WhatsappIcon,
    title: "WhatsApp",
    content: "Clique para conversar",
    link: `${SITE.whatsapp.base}?text=${encodeURIComponent(SITE.whatsapp.generalMessage)}`,
    ariaLabel: "Conversar via WhatsApp",
    color: "from-green-500/20 to-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: SITE.contact.email,
    link: `mailto:${SITE.contact.email}`,
    ariaLabel: `Enviar e-mail para ${SITE.contact.email}`,
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

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <Card className="border-none shadow-lg transition-all duration-300 bg-card/90 backdrop-blur-sm group h-full hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <a
                    href={info.link}
                    className="block"
                    aria-label={info.ariaLabel}
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
          <div className="relative rounded-2xl p-8 max-w-6xl mx-auto border border-border bg-card/90 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-foreground">Horário de Atendimento</h3>
            <p className="text-muted-foreground">{SITE.contact.hours}</p>
            <p className="text-sm mt-3 text-muted-foreground/70 font-semibold">
              * Atendimentos mediante agendamento prévio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
