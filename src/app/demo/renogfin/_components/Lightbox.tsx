'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CloseIcon } from './icons';

type Photo = { src: string; alt: string };

// Opens any element marked data-lb="<group>" data-src data-alt in a full-screen
// viewer. Photos sharing a group can be stepped through with arrows or swipes.
export default function Lightbox() {
  const [items, setItems] = useState<Photo[]>([]);
  const [index, setIndex] = useState(-1);
  const [moved, setMoved] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const open = index >= 0;

  const close = useCallback(() => setIndex(-1), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setMoved(true);
      setIndex((i) => (i + dir + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-lb]');
      if (!el) return;
      e.preventDefault();
      const group = [...document.querySelectorAll<HTMLElement>(`[data-lb="${el.dataset.lb}"]`)];
      setItems(group.map((g) => ({ src: g.dataset.src ?? '', alt: g.dataset.alt ?? '' })));
      setIndex(group.indexOf(el));
      setMoved(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  if (!open) return null;
  const photo = items[index];
  const many = items.length > 1;
  const navBtn =
    'absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt || 'Bilde'}
      className="fixed inset-0 z-[100] flex flex-col bg-slate-950"
      onClick={(e) => e.target === e.currentTarget && close()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null || !many) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-300">
        <span>{many ? `${index + 1} / ${items.length}` : ''}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Lukk"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          onClick={() => (many ? step(1) : close())}
          className={`max-h-full max-w-full select-none rounded object-contain ${many ? 'cursor-pointer' : ''}`}
        />
        {many && (
          <>
            <button type="button" onClick={() => step(-1)} aria-label="Forrige bilde" className={`${navBtn} left-4`}>
              <Chevron className="h-6 w-6 rotate-180" />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Neste bilde" className={`${navBtn} right-4`}>
              <Chevron className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {photo.alt && <p className="px-4 pb-3 text-center text-sm text-slate-300">{photo.alt}</p>}
      {many && !moved && (
        <p className="flex items-center justify-center gap-2 pb-6 text-sm font-medium text-white sm:hidden" aria-hidden="true">
          <Chevron className="rf-nudge-left h-4 w-4 rotate-180" />
          Sveip for flere bilder
          <Chevron className="rf-nudge-right h-4 w-4" />
        </p>
      )}
    </div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
