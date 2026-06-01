import { getLenis } from "@/lib/animations";

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
}

/**
 * Returns a scroll function that uses Lenis smooth scroll when available,
 * falling back to native scrollIntoView.
 *
 * @example
 * const scrollTo = useSmoothScroll();
 * scrollTo("#agendamento");
 * scrollTo("#agendamento", { offset: -80, duration: 1.5 });
 */
export function useSmoothScroll() {
  return (selector: string, options?: SmoothScrollOptions) => {
    const { offset = -64, duration = 1.2 } = options ?? {};
    const lenis = getLenis();

    if (selector === "top") {
      if (lenis) lenis.scrollTo(0, { duration });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(selector);
    if (!el) return;

    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset, duration });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
}
