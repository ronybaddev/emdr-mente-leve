import { useEffect, useRef } from "react";
import { Award, Users, Clock } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

const stats = [
  { icon: Award, value: 500, suffix: "+", label: "Pacientes atendidos" },
  { icon: Clock, value: 13, suffix: "+ anos", label: "De experiência clínica" },
  { icon: Users, value: 1, suffix: "", label: "Certificação Internacional EMDR" },
];

const values = [
  {
    title: "Escuta Sensível",
    description: "Cada sessão começa com presença total e acolhimento genuíno.",
  },
  {
    title: "Evidência Científica",
    description: "Abordagens reconhecidas pela OMS e baseadas em pesquisas atuais.",
  },
  {
    title: "Cuidado Integral",
    description: "Enxergamos o indivíduo em sua totalidade — corpo, mente e emoções.",
  },
];

export const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text block
      gsap.from(textRef.current, {
        x: -40,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: textRef.current, start: "top 75%" },
      });

      // Animated counters via intermediate object
      const statEls = statsRef.current?.querySelectorAll(".stat-value") ?? [];
      statEls.forEach((el, i) => {
        const stat = stats[i];
        if (stat.value === 1) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 75%" },
          onUpdate() {
            (el as HTMLElement).textContent = Math.round(counter.val) + stat.suffix;
          },
        });
      });

      // Stat cards stagger
      gsap.from(statsRef.current?.querySelectorAll(".stat-card") ?? [], {
        y: 30,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 75%" },
      });

      // Values
      ScrollTrigger.batch(
        valuesRef.current?.querySelectorAll(".value-card") ?? [],
        {
          onEnter: (els) =>
            gsap.from(els, {
              y: 30,
              autoAlpha: 0,
              stagger: 0.12,
              duration: 0.6,
              ease: "power2.out",
            }),
          start: "top 80%",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="quem-somos" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Quem <span className="text-secondary">Somos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprometidos com cuidado humanizado e resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          {/* Text */}
          <div
            ref={textRef}
            className="space-y-5 bg-card/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <h4 className="font-semibold text-foreground mb-1">{v.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
            <p className="text-foreground/70 leading-relaxed text-justify pt-2 border-t border-border/50">
              Nosso consultório oferece um ambiente acolhedor, seguro e confidencial,
              onde você pode se sentir à vontade para iniciar sua jornada de cura.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-card/90 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-md border border-border/50"
              >
                <stat.icon className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <div className="stat-value text-2xl font-bold text-foreground">
                    {stat.value === 1 ? "Certificada" : `${stat.value}${stat.suffix}`}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
