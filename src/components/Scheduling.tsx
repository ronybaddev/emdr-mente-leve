import { useState, useRef, useEffect } from "react";
import { Calendar, Clock, User, Loader2 } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { SITE } from "@/constants/site";

const benefits = [
  {
    icon: Calendar,
    color: "text-primary",
    title: "Horários Flexíveis",
    description: "Manhãs, tardes e alguns horários noturnos para atender sua rotina.",
  },
  {
    icon: Clock,
    color: "text-secondary",
    title: "Sessões Personalizadas",
    description: "Cada sessão é planejada de acordo com suas necessidades específicas.",
  },
  {
    icon: User,
    color: "text-primary",
    title: "Atendimento Humanizado",
    description: "Ambiente acolhedor e respeitoso onde você se sente seguro para crescer.",
  },
];

export const Scheduling = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(
        benefitsRef.current?.querySelectorAll(".scheduling-benefit") ?? [],
        {
          onEnter: (els) =>
            gsap.from(els, {
              x: -40,
              autoAlpha: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
            }),
          start: "top 80%",
        }
      );

      gsap.from(formRef.current, {
        x: 60,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ronybaddev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nome: formData.name,
          Telefone: formData.phone,
          Data_Preferencial: formData.date || "Não informada",
          Mensagem: formData.message || "Nenhuma mensagem",
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar formulário");

      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve para confirmar seu agendamento.",
      });

      setFormData({ name: "", phone: "", date: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="agendamento" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Agende sua <span className="text-primary">Consulta</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dê o primeiro passo para sua transformação. Preencha o formulário e entraremos em contato
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <div ref={benefitsRef} className="space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="scheduling-benefit">
                <Card className="border-none shadow-lg bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <b.icon className={`w-8 h-8 ${b.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">{b.title}</h3>
                      <p className="text-muted-foreground">{b.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`${SITE.whatsapp.base}?text=${encodeURIComponent(SITE.whatsapp.schedulingMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta pelo WhatsApp"
              className="scheduling-benefit flex items-center gap-3 bg-green-500/80 border border-green-500/30 text-white hover:bg-green-500 transition-colors transition-duration-300 rounded-xl p-4 font-semibold"
            >
              <WhatsappIcon className="w-6 h-6 flex-shrink-0" />
              Prefere pelo WhatsApp? Clique aqui →
            </a>
          </div>

          {/* Form */}
          <div ref={formRef}>
            <Card className="border-none shadow-xl bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-card-foreground">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-card-foreground">Data Preferencial</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-card-foreground">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      disabled={isSubmitting}
                      className="mt-2 bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Agendamento"
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Respondemos em até 24h · Dados protegidos
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
