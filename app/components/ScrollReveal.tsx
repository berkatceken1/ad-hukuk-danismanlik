"use client";

import { useEffect, useRef } from "react";

/** Enhance server-rendered images; content stays visible without JavaScript. */
export default function ScrollReveal() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = marker.current?.closest(".home-page");
    if (!root || !("IntersectionObserver" in window)) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = root.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    const reset = () => {
      targets.forEach((target) => target.removeAttribute("data-reveal-state"));
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.setAttribute("data-reveal-state", "visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const setup = () => {
      observer.disconnect();
      reset();
      if (motion.matches) return;

      targets.forEach((target) => {
        // Never delay the initial viewport or content restored by navigation.
        if (target.getBoundingClientRect().top < window.innerHeight) return;
        target.setAttribute("data-reveal-state", "pending");
        observer.observe(target);
      });
    };
    const revealFocused = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-scroll-reveal]");
      if (!target) return;
      target.removeAttribute("data-reveal-state");
      observer.unobserve(target);
    };

    setup();
    motion.addEventListener("change", setup);
    root.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", setup);
      root.removeEventListener("focusin", revealFocused);
      reset();
    };
  }, []);

  return <span ref={marker} hidden aria-hidden="true" />;
}
