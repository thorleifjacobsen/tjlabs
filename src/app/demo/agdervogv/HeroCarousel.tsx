'use client';

import { useState, useEffect, useCallback } from 'react';

const BASE = '/demo/agdervogv';

const slides = [
  {
    img: `${BASE}/hero-vinter.jpg`,
    heading: 'Vinterkos starter med\nriktig temperatur',
    sub: 'Med riktig varmepumpe holder du huset lunt gjennom hele vinteren – selv når det er bittert kaldt ute.',
  },
  {
    img: `${BASE}/hero-kaffe.jpg`,
    heading: 'Når kulda kommer,\nholder vi varmen.',
    sub: 'Med en varmepumpe levert og montert av Agder Varme og Vedlikehold er det aldri for varmt eller for kaldt.',
  },
  {
    img: `${BASE}/hero-sommer.jpg`,
    heading: 'Sommer ute.\nKomfort inne.',
    sub: 'Varmepumpen kjøler like godt som den varmer. Én investering – komfort hele året.',
  },
];

function IconPhone() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
    </svg>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setTimeout(next, 6000);
    return () => clearTimeout(t);
  }, [current, next]);

  const s = slides[current];
  const lines = s.heading.split('\n');

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '72vh' }}>
      {slides.map((sl, i) => (
        <img
          key={sl.img}
          src={sl.img}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-[#0f172a]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 via-[#0f172a]/40 to-transparent" />

      <div
        className="relative max-w-[1100px] mx-auto px-4 sm:px-6 py-24 w-full transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <p className="text-[#ea580c] font-semibold text-sm uppercase tracking-wider mb-4">
          Vegårshei og omegn
        </p>
        <h1
          className="font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', maxWidth: '600px' }}
        >
          {lines.map((line, i) => (
            <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
          ))}
        </h1>
        <p className="text-slate-300 text-lg mb-8" style={{ maxWidth: '480px' }}>
          {s.sub}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:97123554"
            className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
          >
            <IconPhone />
            Ring 97 12 35 54
          </a>
          <a
            href={`${BASE}/kontakt`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors backdrop-blur-sm"
          >
            Bestill gratis befaring
          </a>
        </div>
      </div>

      {/* Desktop: side arrows */}
      <button
        onClick={prev}
        aria-label="Forrige bilde"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Neste bilde"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom controls: prev + dots + next on mobile, dots only on desktop */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Forrige bilde"
          className="sm:hidden w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Gå til bilde ${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{ background: i === current ? '#ea580c' : 'rgba(255,255,255,0.5)' }}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Neste bilde"
          className="sm:hidden w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
