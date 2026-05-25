import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { gsap } from "@/lib/animations";
import { getLenis } from "@/lib/animations";

const menuItems = [
  { label: "O que é EMDR", href: "#o-que-e" },
  { label: "Psicóloga", href: "#psicologos" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setSheetOpen(false);
    // Pequeno delay para o Sheet fechar antes do scroll
    setTimeout(() => {
      const lenis = getLenis();
      const el = document.querySelector(href);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, { y: 0 });

    const updateActiveSection = () => {
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const el = document.querySelector(menuItems[i].href);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) {
          setActiveSection(menuItems[i].href);
          return;
        }
      }
      setActiveSection("");
    };

    const handleLenisScroll = ({ scroll, direction }: { scroll: number; direction: number }) => {
      if (window.innerWidth < 768) {
        updateActiveSection();
        return;
      }
      if (scroll < 80) {
        gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out", overwrite: true });
      } else if (direction === 1) {
        gsap.to(header, { y: -80, duration: 0.3, ease: "power2.in", overwrite: true });
      } else if (direction === -1) {
        gsap.to(header, { y: 0, duration: 0.4, ease: "power2.out", overwrite: true });
      }
      updateActiveSection();
    };

    // Fallback para scroll nativo
    const handleNativeScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      if (delta !== 0) {
        handleLenisScroll({ scroll: currentY, direction: delta > 0 ? 1 : -1 });
      }
      lastScrollY.current = currentY;
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        gsap.killTweensOf(header);
        gsap.set(header, { y: 0 });
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const timeout = setTimeout(() => {
      const lenis = getLenis();
      if (lenis) {
        lenis.on("scroll", handleLenisScroll);
        cleanupRef.current = () => lenis.off("scroll", handleLenisScroll);
      } else {
        window.addEventListener("scroll", handleNativeScroll, { passive: true });
        cleanupRef.current = () =>
          window.removeEventListener("scroll", handleNativeScroll);
      }
      if (window.innerWidth < 768) {
        gsap.set(header, { y: 0 });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      cleanupRef.current?.();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/20 shadow-sm rounded-b-3xl"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const lenis = getLenis();
            if (lenis) lenis.scrollTo(0, { duration: 1.2 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold text-primary shrink-0"
        >
          Psicologia EMDR
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection("#agendamento")}
            size="sm"
            className="ml-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Agendar
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-accent"
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 bg-card flex flex-col">
            <SheetHeader className="mb-2">
              <SheetTitle className="text-primary text-left">Psicologia EMDR</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 flex-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    activeSection === item.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA mobile */}
            <div className="pt-4 pb-2 border-t border-border/40 space-y-3">
              <Button
                onClick={() => scrollToSection("#agendamento")}
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
              >
                Agendar Consulta
              </Button>
              <a
                href="https://wa.me/5511975284635?text=Olá! Gostaria de saber mais sobre a terapia EMDR."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSheetOpen(false)}
                className="flex items-center justify-center w-full py-2 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
