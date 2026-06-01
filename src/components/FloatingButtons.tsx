import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "@/lib/animations";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { SITE } from "@/constants/site";


export const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);
  const backTopRef = useRef<HTMLButtonElement>(null);
  const waRef = useRef<HTMLAnchorElement>(null);

  // Detecta scroll — compatível com Lenis (que despacha eventos nativos de scroll)
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // verificação inicial
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação GSAP ao mostrar/ocultar
  useEffect(() => {
    const els = [waRef.current, backTopRef.current].filter(Boolean);
    if (els.length === 0) return;
    gsap.to(els, {
      autoAlpha: visible ? 1 : 0,
      y: visible ? 0 : 20,
      scale: visible ? 1 : 0.85,
      duration: 0.4,
      ease: visible ? "back.out(1.4)" : "power2.in",
      stagger: 0.07,
      overwrite: true,
    });
  }, [visible]);

  const smoothScroll = useSmoothScroll();
  const scrollToTop = () => smoothScroll("top", { duration: 1.4 });

  return (
    <div
      className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col gap-3 items-center"
      aria-label="Ações rápidas"
    >
      {/* ── WhatsApp ── */}
      <a
        ref={waRef}
        href={`${SITE.whatsapp.base}?text=${encodeURIComponent(SITE.whatsapp.generalMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        style={{ opacity: 0, visibility: "hidden" }}
        className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba58] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        {/* Pulse ring — desktop only */}
        <span className="hidden md:block absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        <WhatsappIcon className="w-7 h-7 relative z-10" />

        {/* Tooltip — desktop only */}
        <span className="hidden md:flex absolute right-full mr-3 items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 pointer-events-none select-none shadow-lg">
          Falar no WhatsApp
          {/* seta */}
          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-gray-900/90" />
        </span>
      </a>

      {/* ── Back to Top ── */}
      <button
        ref={backTopRef}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        style={{ opacity: 0, visibility: "hidden" }}
        className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

        {/* Tooltip — desktop only */}
        <span className="hidden md:flex absolute right-full mr-3 items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 pointer-events-none select-none shadow-lg">
          Voltar ao topo
          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-gray-900/90" />
        </span>
      </button>
    </div>
  );
};
