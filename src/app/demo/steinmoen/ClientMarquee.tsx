'use client';

import { useRef, useEffect } from 'react';

const clients = [
  'Å Energi', 'Veidekke', 'Rema 1000', 'Skatteetaten', 'UIA',
  'Sørlandet Sykehus', 'XL Bygg', 'NYMO', 'J.B. Ugland',
  'EGDE Consulting', 'IndustriTRE', 'Vikingbad', 'Agder Karosseri',
  'Amundsen Bygg', 'Kuben', 'Fargeriket', 'Igland Garasjen', 'Autostrada',
];

const SPEED = 0.5;
const RESUME_DELAY = 2500;

export default function ClientMarquee() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const posRef   = useRef(0);
  const rafRef   = useRef<number | undefined>(undefined);
  const singleW  = useRef(0);
  const dragging = useRef(false);
  const dragged  = useRef(false);
  const startX   = useRef(0);
  const posStart = useRef(0);
  const resumeT  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const applyPos = () => {
    if (trackRef.current) trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };

  const wrapPos = () => {
    if (!singleW.current) return;
    while (posRef.current > 0)               posRef.current -= singleW.current;
    while (posRef.current < -singleW.current) posRef.current += singleW.current;
  };

  useEffect(() => {
    if (trackRef.current) singleW.current = trackRef.current.scrollWidth / 2;

    const tick = () => {
      if (!dragging.current && singleW.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -singleW.current) posRef.current += singleW.current;
        applyPos();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeT.current) clearTimeout(resumeT.current);
    };
  }, []);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const prevent = (e: TouchEvent) => { if (dragging.current) e.preventDefault(); };
    el.addEventListener('touchmove', prevent, { passive: false });
    return () => el.removeEventListener('touchmove', prevent);
  }, []);

  const onDragStart = (x: number) => {
    if (resumeT.current) clearTimeout(resumeT.current);
    dragging.current = true;
    dragged.current  = false;
    startX.current   = x;
    posStart.current = posRef.current;
  };

  const onDragMove = (x: number) => {
    if (!dragging.current) return;
    const delta = x - startX.current;
    if (Math.abs(delta) > 4) dragged.current = true;
    posRef.current = posStart.current + delta;
    wrapPos();
    applyPos();
  };

  const onDragEnd = () => {
    if (!dragging.current) return;
    if (resumeT.current) clearTimeout(resumeT.current);
    resumeT.current = setTimeout(() => { dragging.current = false; }, RESUME_DELAY);
  };

  return (
    <div
      ref={outerRef}
      className="bg-white border-t border-b border-[#e5e5e5]"
      style={{
        position: 'relative',
        height: '48px',
        overflow: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
    >
      {/* Centering wrapper — keeps track vertically centered without mixing transforms */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
        <div
          ref={trackRef}
          style={{ display: 'flex', alignItems: 'center', width: 'max-content', flexShrink: 0, willChange: 'transform' }}
        >
          {[...clients, ...clients].map((c, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
              <span className="text-sm text-[#444] whitespace-nowrap" style={{ padding: '0 28px' }}>{c}</span>
              <span style={{ width: '1px', height: '12px', background: '#ddd', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
