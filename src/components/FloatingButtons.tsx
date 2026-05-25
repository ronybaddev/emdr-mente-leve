import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "@/lib/animations";
import { getLenis } from "@/lib/animations";

const WhatsappIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col gap-3 items-center"
      aria-label="Ações rápidas"
    >
      {/* ── WhatsApp ── */}
      <a
        ref={waRef}
        href="https://wa.me/5511975284635?text=Olá! Gostaria de saber mais sobre a terapia EMDR."
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
