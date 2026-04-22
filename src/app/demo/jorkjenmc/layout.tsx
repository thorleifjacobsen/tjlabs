'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JorkjenLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/demo/jorkjenmc" className="flex items-center gap-3">
            <img
              src="/demo/jorkjenmc/logo.png"
              alt="Jorkjen MC"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '/demo/jorkjenmc', label: 'Hjem' },
              { href: '/demo/jorkjenmc/verksted', label: 'Verksted' },
              { href: '/demo/jorkjenmc/butikk', label: 'Butikk' },
              { href: '#kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-zinc-300 hover:text-green-400 transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:90549772"
              className="ml-4 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-4 py-2 rounded transition-colors"
            >
              Ring oss
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 flex flex-col gap-4">
            {[
              { href: '/demo/jorkjenmc', label: 'Hjem' },
              { href: '/demo/jorkjenmc/verksted', label: 'Verksted' },
              { href: '/demo/jorkjenmc/butikk', label: 'Butikk' },
              { href: '#kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-200 font-semibold uppercase tracking-wide text-sm hover:text-green-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:90549772"
              className="mt-2 bg-green-600 text-white text-sm font-bold px-4 py-3 rounded text-center"
            >
              Ring oss: 905 49 772
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-black text-zinc-400 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/demo/jorkjenmc/logo.png"
              alt="Jorkjen MC"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Godkjent motorsykkel- og mopedverksted i Arendal.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-3">Kontakt</h3>
            <ul className="text-sm space-y-1.5">
              <li>
                <a href="tel:90549772" className="hover:text-green-400 transition-colors">
                  Kenneth: 905 49 772
                </a>
              </li>
              <li>
                <a href="mailto:verksted@jorkjenmc.no" className="hover:text-green-400 transition-colors">
                  verksted@jorkjenmc.no
                </a>
              </li>
              <li>Frolandsveien 410, 4838 Arendal</li>
              <li>Org.nr: 999 100 899</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-3">Apningstider</h3>
            <ul className="text-sm space-y-1.5">
              <li className="text-yellow-400 font-medium">Sommerstengt uke 29-31</li>
              <li className="flex justify-between gap-4"><span>Tirsdag</span><span>09.00-16.00</span></li>
              <li className="flex justify-between gap-4"><span>Onsdag</span><span>10.00-14.30</span></li>
              <li className="flex justify-between gap-4"><span>Torsdag</span><span>09.00-17.00</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-6 border-t border-zinc-800 text-xs text-zinc-600 text-center">
          Jorkjen MC A/S &mdash; Godkjent av Statens Vegvesen
        </div>
      </footer>
    </div>
  );
}
