import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { SITE } from "@/constants/site";

const footerLinks = SITE.nav;

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const smoothScroll = useSmoothScroll();

  const scrollToSection = (href: string) => smoothScroll(href);

  return (
    <footer
      ref={footerRef}
      className="relative py-10 border-t border-border/20 bg-background/50 backdrop-blur-md rounded-t-3xl"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-primary mb-2">{SITE.name}</div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Transformando vidas através da terapia EMDR com cuidado humanizado e evidência científica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-foreground/60">
              <p>{SITE.contact.phoneDisplay}</p>
              <p>{SITE.contact.email}</p>
              <p>{SITE.contact.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-base text-foreground/50">
          <span>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</span>
          <span>{SITE.psychologist.crp} · Psicóloga responsável: {SITE.psychologist.name}</span>
        </div>

        {/* Zord Tech credit */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.instagram.com/zord.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-foreground/60 hover:text-foreground/60 transition-colors duration-300"
          >
            Evoluído por{" "}
            <span className="font-semibold text-base text-black group-hover:text-primary transition-colors duration-300">
              Zord Tech
            </span>
            {/* Instagram mini icon */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg> */}
          </a>
        </div>
      </div>
    </footer>
  );
};
