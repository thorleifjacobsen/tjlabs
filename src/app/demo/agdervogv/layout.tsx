'use client';

import { useState } from 'react';
import DemoWatermark from '@/components/DemoWatermark';

const BASE = '/demo/agdervogv';

const NAV = [
  { href: `${BASE}/tjenester`, label: 'Tjenester' },
  { href: `${BASE}/produkter`, label: 'Produkter' },
  { href: `${BASE}/om-oss`, label: 'Om oss' },
  { href: `${BASE}/kontakt`, label: 'Kontakt' },
];

export default function AgderVOGVLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-white antialiased"
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontSize: '16px',
        lineHeight: '1.7',
        color: '#1e293b',
      }}
    >
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href={BASE} className="flex-shrink-0">
            <img
              src="/demo/agdervogv/logo-text.png"
              alt="Agder Varme og Vedlikehold"
              className="h-10 w-auto"
            />
          </a>

          <div className="flex items-center gap-5">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#64748b]">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-[#1e293b] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Phone — always visible */}
            <a
              href="tel:97123554"
              className="font-bold text-[#ea580c] text-sm sm:text-base flex-shrink-0 hover:text-[#c2410c] transition-colors"
            >
              97&nbsp;12&nbsp;35&nbsp;54
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden p-1 text-[#1e293b]"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Lukk meny' : 'Åpne meny'}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-[#e2e8f0] bg-white">
            <nav className="max-w-[1100px] mx-auto px-4 py-2 flex flex-col">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-[#1e293b] border-b border-[#f1f5f9] last:border-0 hover:text-[#ea580c] transition-colors"
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
      <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] py-12">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

            {/* Company info */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <img src="/demo/agdervogv/logo.png" alt="" className="h-8 w-auto" />
              </div>
              <p className="font-bold text-sm text-[#1e293b] mb-1">Agder Varme og Vedlikehold</p>
              <p className="text-sm text-[#64748b]">Varmepumper i Vegårshei og omegn</p>
            </div>

            {/* Quick links */}
            <div>
              <p className="font-semibold text-sm text-[#1e293b] mb-3">Sider</p>
              <ul className="space-y-2">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-[#64748b] hover:text-[#1e293b] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold text-sm text-[#1e293b] mb-3">Kontakt</p>
              <ul className="space-y-2 text-sm text-[#64748b]">
                <li>
                  <a href="tel:97123554" className="font-semibold hover:text-[#1e293b] transition-colors">
                    97 12 35 54
                  </a>
                </li>
                <li>
                  <a href="mailto:hei@agdervogv.no" className="hover:text-[#1e293b] transition-colors">
                    hei@agdervogv.no
                  </a>
                </li>
                <li>Sagaveien 7, 4985 Vegårshei</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#64748b]">&copy; 2025 Agder Varme og Vedlikehold. Alle rettigheter forbeholdt.</p>
            <div className="flex items-center gap-4">
              <img src="/demo/agdervogv/isovator.jpg" alt="ISOVATOR sertifisert installatør" className="h-8 w-auto object-contain opacity-80" />
              <img src="/demo/agdervogv/novap.jpg" alt="NOVAP godkjent forhandler" className="h-8 w-auto object-contain opacity-80" />
            </div>
          </div>
        </div>
      </footer>

      <DemoWatermark />
    </div>
  );
}
