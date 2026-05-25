import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/animations";
import { getLenis } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll(".cta-animate") ?? [], {
        y: 30,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
    <section ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border">
          <p className="cta-animate text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Dê o primeiro passo
          </p>
          <h2 className="cta-animate text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronta para iniciar sua jornada de cura?
          </h2>
          <p className="cta-animate text-muted-foreground mb-8 text-lg">
            Agende sua primeira consulta e descubra como a terapia EMDR pode transformar sua vida.
          </p>
          <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToAgendamento}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg text-lg px-8 py-6 group"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="https://wa.me/5511975284635?text=Olá! Gostaria de saber mais sobre a terapia EMDR."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-6 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors font-medium text-lg shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
