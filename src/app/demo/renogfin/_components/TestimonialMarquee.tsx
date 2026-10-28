'use client';

import { useEffect, useRef } from 'react';
import { TestimonialCard } from './ui';

type Item = { name: string; quote: string };

const SPEED = 0.035; // px per ms
const RESUME_DELAY = 2500;

// Auto-scrolling row that can also be dragged, swiped or stepped with buttons.
// The list is rendered three times and the scroll position is kept inside the
// middle copy, so it loops endlessly in both directions.
export default function TestimonialMarquee({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const dragging = useRef(false);
  const resumeAt = useRef(0);
  const drag = useRef({ x: 0, left: 0, moved: false });

  const pauseFor = (ms = RESUME_DELAY) => {
    resumeAt.current = performance.now() + ms;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const setWidth = () => el.scrollWidth / 3;
    el.scrollLeft = setWidth();
    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const dt = Math.min(t - last, 64);
      last = t;
      const w = setWidth();
      const idle = !hovering.current && !dragging.current && t > resumeAt.current;
      if (!reduce && idle) {
        pos += dt * SPEED;
        el.scrollLeft = pos;
      } else {
        pos = el.scrollLeft;
      }
      if (pos < w) pos += w;
      else if (pos >= 2 * w) pos -= w;
      if (Math.abs(el.scrollLeft - pos) >= w / 2) el.scrollLeft = pos;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('li');
    pauseFor(4000);
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 340) + 24), behavior: 'smooth' });
  };

  return (
    <div>
      <div className="relative -mx-4 md:mx-0">
        <div
          ref={ref}
          className="rf-marquee-scroll cursor-grab overflow-x-auto px-4 active:cursor-grabbing md:px-0"
          onPointerEnter={(e) => {
            if (e.pointerType === 'mouse') hovering.current = true;
          }}
          onPointerLeave={() => {
            hovering.current = false;
          }}
          onTouchStart={() => pauseFor(60_000)}
          onTouchEnd={() => pauseFor()}
          onPointerDown={(e) => {
            if (e.pointerType !== 'mouse' || !ref.current) return;
            dragging.current = true;
            drag.current = { x: e.clientX, left: ref.current.scrollLeft, moved: false };
            ref.current.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!dragging.current || !ref.current) return;
            const dx = e.clientX - drag.current.x;
            if (Math.abs(dx) > 3) drag.current.moved = true;
            ref.current.scrollLeft = drag.current.left - dx;
          }}
          onPointerUp={() => {
            dragging.current = false;
            pauseFor();
          }}
          onDragStart={(e) => e.preventDefault()}
        >
          <ul className="flex w-max select-none items-center gap-6 py-1">
            {[...items, ...items, ...items].map((t, i) => (
              <li
                key={i}
                aria-hidden={i < items.length || i >= items.length * 2}
                className="w-[300px] shrink-0 sm:w-[340px]"
              >
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#f8fafc] to-transparent md:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#f8fafc] to-transparent md:w-12" />
      </div>
      <div className="mt-6 flex justify-end gap-2">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => step(dir)}
            aria-label={dir === -1 ? 'Forrige omtale' : 'Neste omtale'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-[#0d9488] hover:text-[#0d9488]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-5 w-5 ${dir === -1 ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
