'use client';

import { useRef, useEffect } from 'react';

const catalogs = [
  { name: 'Clique 2025', img: '/demo/steinmoen/cat-clique.jpg', url: 'https://viewer.joomag.com/clique-2025-v2/0442190001629794174?short&' },
  { name: 'Tenson SS25', img: '/demo/steinmoen/cat-tenson.jpg', url: 'https://viewer.joomag.com/tenson-corporate-ss25-v1/0362334001729855822/p1?short=' },
  { name: 'Craft Corporate', img: '/demo/steinmoen/cat-craft.jpg', url: 'https://viewer.joomag.com/craft-corporate-ss25-v1/0176495001503902632?short&' },
  { name: 'Cutter & Buck', img: '/demo/steinmoen/cat-cutter.jpg', url: 'https://viewer.joomag.com/cutter-buck-ss25-v1/0085178001503903293/p8?short=' },
  { name: 'James Harvest', img: '/demo/steinmoen/cat-harvest.jpg', url: 'https://viewer.joomag.com/james-harvest-2025-v1/0159605001485421952?short&' },
  { name: 'Printer 2025', img: '/demo/steinmoen/cat-printer.jpg', url: 'https://viewer.joomag.com/printer-2025-v2/0328643001548236454?short&' },
  { name: 'Sagaform SS25', img: '/demo/steinmoen/cat-sagaform.jpg', url: 'https://viewer.joomag.com/sagaform-ss25-v2/0603110001597914465?short&' },
  { name: 'Toppoint 2024', img: '/demo/steinmoen/cat-toppoint.jpg', url: 'https://viewer.joomag.com/toppoint-2024-v3/0723093001485426873?short&' },
  { name: 'Kosta Boda', img: '/demo/steinmoen/cat-kosta.jpg', url: 'https://viewer.joomag.com/kosta-boda-ss25-v1/0777468001487153531?short&' },
  { name: 'Cottover 2025', img: '/demo/steinmoen/cat-cottover.jpg', url: 'https://viewer.joomag.com/cottover-co-2025-v1/0858695001548839005?short&' },
  { name: 'Bergans 2025', img: '/demo/steinmoen/cat-bergans.png', url: 'https://heyzine.com/flip-book/2b739414cc.html' },
];

const SPEED = 0.45;        // px per frame — ~27 px/s at 60 fps
const RESUME_DELAY = 2500; // ms before auto-scroll resumes after last touch/drag

export default function CatalogMarquee() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // All mutable state in refs so RAF closure stays fresh
  const posRef     = useRef(0);
  const rafRef     = useRef<number | undefined>(undefined);
  const singleW    = useRef(0);
  const dragging   = useRef(false);
  const dragged    = useRef(false); // did the pointer actually move?
  const startX     = useRef(0);
  const posStart   = useRef(0);
  const resumeT    = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  /* ── helpers ─────────────────────────────────────────── */

  const applyPos = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
  };

  const wrapPos = () => {
    if (!singleW.current) return;
    while (posRef.current > 0)              posRef.current -= singleW.current;
    while (posRef.current < -singleW.current) posRef.current += singleW.current;
  };

  /* ── main RAF loop ────────────────────────────────────── */

  useEffect(() => {
    // Measure the single-set width after first render
    if (trackRef.current) {
      singleW.current = trackRef.current.scrollWidth / 2;
    }

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

  /* ── native touchmove listener (non-passive → allows preventDefault) ── */

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const prevent = (e: TouchEvent) => { if (dragging.current) e.preventDefault(); };
    el.addEventListener('touchmove', prevent, { passive: false });
    return () => el.removeEventListener('touchmove', prevent);
  }, []);

  /* ── drag / touch handlers ────────────────────────────── */

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
    // Keep paused, resume auto-scroll after delay
    if (resumeT.current) clearTimeout(resumeT.current);
    resumeT.current = setTimeout(() => { dragging.current = false; }, RESUME_DELAY);
  };

  /* ── render ───────────────────────────────────────────── */

  return (
    <div
      ref={outerRef}
      className="overflow-hidden py-2"
      style={{ cursor: 'grab', userSelect: 'none', WebkitUserSelect: 'none' }}
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', width: 'max-content', willChange: 'transform' }}
      >
        {[...catalogs, ...catalogs].map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            onClick={(e) => { if (dragged.current) e.preventDefault(); }}
            style={{
              display: 'inline-block',
              margin: '0 10px',
              background: '#fff',
              flexShrink: 0,
              width: '148px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
              transition: 'box-shadow 150ms, transform 150ms',
              verticalAlign: 'top',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.13)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.08)';
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
            }}
          >
            <img
              src={c.img}
              alt={c.name}
              draggable={false}
              style={{ width: '148px', height: '192px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '10px 12px 12px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#111', marginBottom: '4px', lineHeight: 1.3 }}>
                {c.name}
              </p>
              <p style={{ fontSize: '11px', color: '#1a4fd6' }}>Se katalog &rarr;</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
