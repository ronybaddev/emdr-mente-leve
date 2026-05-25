import { useEffect, useRef } from "react";
import { Brain, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { getLenis } from "@/lib/animations";

const features = [
  {
    icon: Brain,
    title: "Baseado em Neurociência",
    description: "Método cientificamente comprovado que trabalha com os processos naturais do cérebro",
  },
  {
    icon: Heart,
    title: "Tratamento Eficaz",
    description: "Resultados comprovados no tratamento de traumas, ansiedade e fobias",
  },
  {
    icon: Sparkles,
    title: "Transformação Profunda",
    description: "Promove mudanças duradouras e significativas na sua vida emocional",
  },
];

const steps = [
  {
    number: "01",
    title: "O Processo",
    text: "Durante a sessão de EMDR, você será guiado pelo seu terapeuta a recordar lembranças específicas enquanto realiza movimentos bilaterais. Este processo ajuda o cérebro a reprocessar memórias difíceis de forma mais adaptativa.",
  },
  {
    number: "02",
    title: "Reconhecimento Mundial",
    text: "A terapia EMDR é reconhecida pela OMS como um dos tratamentos mais eficazes para Transtorno de Estresse Pós-Traumático (TEPT) e diversos outros transtornos emocionais.",
  },
  {
    number: "03",
    title: "Origem e Desenvolvimento",
    text: "Desenvolvido por Francine Shapiro nos anos 1980. O paciente foca em uma memória traumática enquanto recebe estímulos bilaterais (visuais, auditivos ou táteis), ajudando o cérebro a desbloquear e reprocessar essa memória.",
  },
  {
    number: "04",
    title: "Indicações",
    text: "Além do TEPT, é indicado para ansiedade, depressão, luto, fobias, dor crônica e outros transtornos emocionais. O objetivo é reduzir o sofrimento emocional e promover alívio psicológico duradouro.",
  },
];

export const AboutEMDR = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const stepLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger
      gsap.from(cardsRef.current?.querySelectorAll(".emdr-card") ?? [], {
        y: 50,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      });

      // Stepper line grows on scroll
      gsap.fromTo(
        stepLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // Step items
      ScrollTrigger.batch(
        stepsRef.current?.querySelectorAll(".step-item") ?? [],
        {
          onEnter: (els) =>
            gsap.from(els, {
              x: -40,
              autoAlpha: 0,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
            }),
          start: "top 80%",
        }
      );

      // CTA
      gsap.from(ctaRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAgendamento = () => {
    const lenis = getLenis();
    const el = document.querySelector("#agendamento");
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.2 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="o-que-e" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O que é <span className="text-primary">EMDR</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            EMDR (Eye Movement Desensitization and Reprocessing) é uma abordagem psicoterapêutica
            que ajuda pessoas a se recuperarem de traumas através de movimentos oculares bilaterais
            e técnicas de processamento cognitivo.
          </p>
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="emdr-card">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card h-full group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* How it works stepper */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-10 text-card-foreground">Como funciona?</h3>

          <div className="relative" ref={stepsRef}>
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block">
              <div
                ref={stepLineRef}
                className="absolute inset-0 bg-primary origin-top"
                style={{ scaleY: 0 }}
              />
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="step-item flex gap-6 md:pl-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-sm z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-2 pb-4 border-b border-border/50 last:border-0">
                    <h4 className="font-semibold text-card-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-justify leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Pronto para dar o primeiro passo?</p>
            <button
              onClick={scrollToAgendamento}
              className="text-primary font-semibold hover:underline underline-offset-4 transition-colors"
            >
              Agende sua sessão de EMDR →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
