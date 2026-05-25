import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { gsap, ScrollTrigger } from "@/lib/animations";
import fotoAvatar from "@/assets/imgsite.jpeg";

const credentials = [
  "CRP 108802",
  "13 anos de exp.",
  "EMDR Certificada",
  "PUC-SP Terapia Familiar",
];

export const Psychologists = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(avatarRef.current, {
        scale: 0.7,
        autoAlpha: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(headerRef.current, {
        x: 30,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      gsap.from(badgesRef.current?.children ?? [], {
        y: 10,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      ScrollTrigger.batch(
        parasRef.current?.querySelectorAll(".psychologist-para") ?? [],
        {
          onEnter: (els) =>
            gsap.from(els, {
              y: 24,
              autoAlpha: 0,
              stagger: 0.15,
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
    <section ref={sectionRef} id="psicologos" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Conheça a <span className="text-secondary">Psicóloga</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-8 md:p-12 shadow-lg border border-border bg-card/90 backdrop-blur-sm overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:items-start items-center">
              {/* Avatar */}
              <div ref={avatarRef} className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-auto">
                <Avatar className="w-48 h-48 border-4 border-primary/30 shadow-xl">
                  <AvatarImage src={fotoAvatar} alt="Patrícia Rios de Miranda - Psicóloga Clínica" />
                  <AvatarFallback className="text-4xl bg-primary/10 text-primary">PRM</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1 space-y-4">
                {/* Header info */}
                <div ref={headerRef} className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-foreground mb-1">Patrícia Rios de Miranda</h4>
                  <p className="text-lg text-primary font-semibold">Psicóloga Clínica</p>
                  <p className="text-base text-secondary font-medium">Especialista em Terapia Familiar e EMDR</p>
                </div>

                {/* Credential badges */}
                <div ref={badgesRef} className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {credentials.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Bio paragraphs */}
                <div ref={parasRef} className="space-y-3 text-foreground/80 leading-relaxed">
                  <p className="psychologist-para text-justify">
                    Sou psicóloga formada pela Faculdade de Ciências de Guarulhos (2011), com mais de 13 anos de experiência na área da saúde mental. Atuo no SUS há mais de uma década, onde construí uma base sólida e humana para minha prática clínica, além de atender em consultório particular. Em 2016, concluí minha pós-graduação em Terapia Familiar e de Casal pela PUC-SP, ampliando minha visão sistêmica do ser humano.
                  </p>
                  <p className="psychologist-para text-justify">
                    Acredito na importância de enxergar o indivíduo em sua totalidade — corpo, alma e espírito — e meu propósito é promover alívio emocional e qualidade de vida. Em 2023, me especializei em Terapia EMDR, abordagem que me encantou por sua eficácia em promover mudanças profundas por meio de estímulos bilaterais, indo além da fala tradicional.
                  </p>
                  <p className="psychologist-para text-justify">
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
