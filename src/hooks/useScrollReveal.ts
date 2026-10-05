import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook that triggers Intersection Observer on elements with `.reveal` class.
 * Adds `.visible` when they scroll into view.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * Hook that returns a ref. Once the element is visible, triggers count-up.
 */
export function useCountUp(
  target: number,
  duration = 2000,
  active = false
): number {
  const count = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      count.current = Math.floor(eased * target);
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, active]);

  return count.current;
}

/**
 * Smooth scroll to a section by ID.
 */
export function smoothScrollTo(id: string): void {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Hook for smooth navbar link clicks.
 */
export function useSmoothScroll() {
  return useCallback((href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  }, []);
}
