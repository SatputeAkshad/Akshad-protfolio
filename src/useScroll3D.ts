import { useEffect } from 'react';

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/**
 * Drives every scroll-linked 3D effect with one rAF-throttled loop:
 *  - `--sy` on <html>: scroll position (backdrop parallax, holo rim hue).
 *  - `--pin` / `--pout` on each [data-depth]: 0→1 while the element enters
 *    from below / leaves above the viewport. CSS turns these into transforms.
 *  - `--cover` on each [data-stack] card: how far the next card has slid over it.
 * Also sets `--mx` / `--my` on the glass panel under the pointer for the specular highlight.
 * With reduced motion, nothing is written and everything stays flat.
 */
export function useScroll3D() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const depth = Array.from(document.querySelectorAll<HTMLElement>('[data-depth]'));
    const stack = Array.from(document.querySelectorAll<HTMLElement>('[data-stack]'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      root.style.setProperty('--sy', String(Math.round(window.scrollY)));

      for (const el of depth) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue; // far off-screen: skip work
        // p: 1 just below the viewport, 0 when centred, -1 just above.
        const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        el.style.setProperty('--pin', clamp((p - 0.12) / 0.7).toFixed(3));
        el.style.setProperty('--pout', clamp((-p - 0.35) / 0.65).toFixed(3));
      }

      stack.forEach((el, i) => {
        const next = stack[i + 1];
        let cover = 0;
        if (next) {
          const stickTop = parseFloat(getComputedStyle(next).top) || 0;
          const nextTop = next.getBoundingClientRect().top;
          cover = clamp((vh - nextTop) / Math.max(1, vh - stickTop));
        }
        el.style.setProperty('--cover', cover.toFixed(3));
      });
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    const onPointer = (e: PointerEvent) => {
      const glass = (e.target as Element | null)?.closest?.('.glass') as HTMLElement | null;
      if (!glass) return;
      const r = glass.getBoundingClientRect();
      glass.style.setProperty('--mx', `${e.clientX - r.left}px`);
      glass.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('pointermove', onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('pointermove', onPointer);
    };
  }, []);
}
