"use client";

import { useState, useEffect, useCallback } from "react";

type Image = { src: string; label: string };

export function GalleryLightbox({ images }: { images: Image[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);

  const prev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, prev, next]);

  return (
    <>
      {/* Masonry gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-4 overflow-hidden rounded-xl shadow-sm cursor-pointer group relative"
            onClick={() => setActive(i)}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-end">
              <span className="text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {img.label}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors z-10"
            onClick={close}
            aria-label="Lukk"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {active + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-2 sm:left-6 text-white hover:text-orange-400 transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Forrige"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full mx-10 sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].label}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/80 text-center mt-3 text-sm">{images[active].label}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-2 sm:right-6 text-white hover:text-orange-400 transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Neste"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
