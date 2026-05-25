import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/animations";
import { getLenis } from "@/lib/animations";
import { ChevronDown, ShieldCheck } from "lucide-react";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

      tl.from(badgeRef.current, { y: 20, autoAlpha: 0, duration: 0.5 })
        .from(line1Ref.current, { y: 60, autoAlpha: 0, duration: 0.8 }, "<0.15")
        .from(line2Ref.current, { y: 60, autoAlpha: 0, duration: 0.8 }, "<0.1")
        .from(paraRef.current, { y: 20, autoAlpha: 0, duration: 0.6 }, "<0.25")
        .from(ctasRef.current, { y: 20, autoAlpha: 0, duration: 0.5 }, "<0.2")
        .from(statsRef.current, { y: 15, autoAlpha: 0, duration: 0.5 }, "<0.15")
        .from(scrollRef.current, { autoAlpha: 0, duration: 0.4 }, "<0.3");

      // Scroll indicator pulse
      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
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

  const scrollToEMDR = () => {
    const lenis = getLenis();
    const el = document.querySelector("#o-que-e");
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.2 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 py-20 relative z-20 text-center">

        {/* H1 split lines */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          <span ref={line1Ref} className="block">Transforme sua vida</span>
          <span ref={line2Ref} className="block mt-2 text-primary">com Psicologia EMDR</span>
        </h1>

        <p ref={paraRef} className="text-xl md:text-2xl mb-8 max-w-6xl mx-auto text-foreground/80">
          Uma abordagem terapêutica eficaz para superar traumas e alcançar o bem-estar emocional
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToAgendamento}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
          >
            Agende sua Consulta
          </Button>
          <button
            onClick={scrollToEMDR}
            className="text-foreground/70 hover:text-primary underline underline-offset-4 transition-colors text-base"
          >
            Saiba mais sobre EMDR
          </button>
        </div>

        {/* Social proof mini stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-foreground/60">
          <span><strong className="text-foreground">13 anos</strong> de experiência</span>
          <span className="hidden sm:block">·</span>
          <span><strong className="text-foreground">Certificada</strong> em EMDR Internacional</span>
          <span className="hidden sm:block">·</span>
          <span><strong className="text-foreground">PUC-SP</strong> Terapia Familiar</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/40">
        <span className="text-xs tracking-widest uppercase">Role para baixo</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};
