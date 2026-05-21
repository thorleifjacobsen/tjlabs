'use client';

import { useState } from 'react';
import DemoWatermark from '@/components/DemoWatermark';

const BASE = '/demo/agdervogv';

const NAV = [
  { href: `${BASE}/tjenester`, label: 'Tjenester' },
  { href: `${BASE}/produkter`, label: 'Produkter' },
  { href: `${BASE}/om-oss`, label: 'Om oss' },
  { href: `${BASE}#kontakt`, label: 'Kontakt' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-white text-[#1a1a1a] antialiased"
      style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: '15px', lineHeight: '1.6' }}
    >
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[960px] mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <a href={BASE} className="font-bold text-[#1a1a1a] text-[15px] flex-shrink-0">
            Agder Varme og Vedlikehold
          </a>

          <div className="flex items-center gap-5">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-[#6b7280]">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-[#1a1a1a] transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Phone — always visible */}
            <a href="tel:97123554" className="text-[#c2410c] font-bold text-sm flex-shrink-0">
              97&nbsp;12&nbsp;35&nbsp;54
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden p-1 text-[#1a1a1a]"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Lukk meny' : 'Åpne meny'}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-[#e5e7eb] bg-white">
            <nav className="max-w-[960px] mx-auto px-4 py-2 flex flex-col">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-[#1a1a1a] border-b border-[#f3f4f6] last:border-0 hover:text-[#c2410c] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e5e7eb] mt-16 py-10 bg-white">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Agder Varme og Vedlikehold</p>
              <p className="text-[#6b7280] text-sm">Varmepumper og vaktmestertjenester</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#1a1a1a] mb-3">Sider</p>
              <ul className="space-y-2 text-sm text-[#6b7280]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-[#1a1a1a] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#1a1a1a] mb-3">Kontakt</p>
              <ul className="space-y-2 text-sm text-[#6b7280]">
                <li><a href="tel:97123554" className="hover:text-[#1a1a1a] transition-colors">97 12 35 54</a></li>
                <li><a href="mailto:hei@agdervogv.no" className="hover:text-[#1a1a1a] transition-colors">hei@agdervogv.no</a></li>
                <li>Sagaveien 7, 4985 Vegårshei</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e5e7eb] pt-6 text-xs text-[#6b7280]">
            &copy; 2025 Agder Varme og Vedlikehold
          </div>
        </div>
      </footer>

      <DemoWatermark />
    </div>
  );
}
