'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JorkjenLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f8f7f4' }}>
      <header className="sticky top-0 z-50 bg-[#111] border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-5 flex items-center justify-between h-16">
          <Link href="/demo/jorkjenmc" className="flex items-center gap-3">
            <img
              src="/demo/jorkjenmc/logo.png"
              alt="Jorkjen MC"
              className="h-9 w-auto object-contain"
            />
            <span className="text-white font-semibold text-sm hidden sm:block">
              Jorkjen MC A/S
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {[
              { href: '/demo/jorkjenmc', label: 'Hjem' },
              { href: '/demo/jorkjenmc/verksted', label: 'Verksted' },
              { href: '/demo/jorkjenmc/vinterlagring', label: 'Vinterlagring' },
              { href: '/demo/jorkjenmc/butikk', label: 'Butikk' },
              { href: '/demo/jorkjenmc#kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:90549772"
              className="ml-2 flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              905 49 772
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 px-5 py-5 flex flex-col gap-5">
            {[
              { href: '/demo/jorkjenmc', label: 'Hjem' },
              { href: '/demo/jorkjenmc/verksted', label: 'Verksted' },
              { href: '/demo/jorkjenmc/vinterlagring', label: 'Vinterlagring' },
              { href: '/demo/jorkjenmc/butikk', label: 'Butikk' },
              { href: '/demo/jorkjenmc#kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 text-base hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:90549772"
              className="mt-1 bg-green-700 text-white font-bold px-4 py-4 text-lg text-center"
            >
              Ring Kenneth: 905 49 772
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#111] text-zinc-400 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <img src="/demo/jorkjenmc/logo.png" alt="Jorkjen MC" className="h-10 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-zinc-500">
              Godkjent motorsykkel- og mopedverksted.<br />Frolandsveien 410, 4838 Arendal.
            </p>
          </div>

          <div>
            <h3 className="text-zinc-200 font-semibold text-sm mb-4">Kontakt</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="tel:90549772" className="text-zinc-300 hover:text-white transition-colors font-medium">
                  Kenneth: 905 49 772
                </a>
              </li>
              <li>
                <a href="mailto:verksted@jorkjenmc.no" className="hover:text-white transition-colors">
                  verksted@jorkjenmc.no
                </a>
              </li>
              <li>Org.nr: 999 100 899</li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-200 font-semibold text-sm mb-4">Åpningstider</h3>
            <ul className="text-sm space-y-2">
              <li className="text-yellow-500">Sommerstengt uke 29-31</li>
              <li className="flex justify-between"><span>Tirsdag</span><span>09.00-16.00</span></li>
              <li className="flex justify-between"><span>Onsdag</span><span>10.00-14.30</span></li>
              <li className="flex justify-between"><span>Torsdag</span><span>09.00-17.00</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 pt-6 border-t border-zinc-800 text-xs text-zinc-600 flex flex-col sm:flex-row justify-between gap-2">
          <span>Jorkjen MC A/S</span>
          <span>Godkjent av Statens Vegvesen</span>
        </div>
      </footer>
    </div>
  );
}
