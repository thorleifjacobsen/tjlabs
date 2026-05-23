'use client';

import { useState } from 'react';

export default function BFAutoHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div
        className="mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
        style={{ maxWidth: '1100px' }}
      >
        <a href="/demo/bf-auto" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-slate-900 tracking-tight">BF Auto</span>
          <span className="text-xs text-slate-500 font-normal">Ditt nærverksted i Arendal</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#tjenester" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Tjenester
          </a>
          <a href="#om-oss" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Om oss
          </a>
          <a href="#kontakt" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Kontakt
          </a>
          <a
            href="tel:37024456"
            className="bg-[#b91c1c] hover:bg-[#991b1b] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            37 02 44 56
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Åpne meny"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          <a
            href="#tjenester"
            className="text-sm font-medium text-slate-700 py-2.5 border-b border-slate-100"
            onClick={() => setOpen(false)}
          >
            Tjenester
          </a>
          <a
            href="#om-oss"
            className="text-sm font-medium text-slate-700 py-2.5 border-b border-slate-100"
            onClick={() => setOpen(false)}
          >
            Om oss
          </a>
          <a
            href="#kontakt"
            className="text-sm font-medium text-slate-700 py-2.5 border-b border-slate-100"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>
          <a
            href="tel:37024456"
            className="mt-3 bg-[#b91c1c] text-white text-sm font-semibold px-4 py-3 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Ring oss: 37 02 44 56
          </a>
        </div>
      )}
    </header>
  );
}
