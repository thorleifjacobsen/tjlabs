'use client';

// To re-enable this demo, remove the redirect import and the useEffect below.
import { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import DemoWatermark from '@/components/DemoWatermark';

export default function SteinmoenLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.location.replace('https://tjlabs.no');
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .sm-root, .sm-root * { font-family: 'Space Grotesk', sans-serif; }
        .sm-root { background: #fff; color: #111; }
      `}</style>

      <div className="sm-root min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e5e5]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
            <Link href="/demo/steinmoen">
              <img src="/demo/steinmoen/logo.svg" alt="Steinmoen" style={{ height: '32px', width: 'auto' }} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/demo/steinmoen" className="text-sm text-[#666] hover:text-[#111] transition-colors duration-150">
                Forside
              </Link>
              <Link href="/demo/steinmoen/tjenester" className="text-sm text-[#666] hover:text-[#111] transition-colors duration-150">
                Tjenester
              </Link>
              <Link href="/demo/steinmoen/kataloger" className="text-sm text-[#666] hover:text-[#111] transition-colors duration-150">
                Kataloger
              </Link>
              <Link href="/demo/steinmoen/kontakt" className="text-sm text-[#666] hover:text-[#111] transition-colors duration-150">
                Kontakt
              </Link>
              <a
                href="/demo/steinmoen/kontakt#kontakt-form"
                className="text-sm font-medium px-4 py-2 text-[#111] hover:bg-[#111] hover:text-white transition-colors duration-150"
                style={{ border: '1.5px solid #111' }}
              >
                Ta kontakt
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meny"
            >
              <span className={`block w-6 bg-[#111] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ height: '1.5px' }} />
              <span className={`block w-6 bg-[#111] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ height: '1.5px' }} />
              <span className={`block w-6 bg-[#111] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ height: '1.5px' }} />
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
            <Link href="/demo/steinmoen" className="text-2xl font-semibold text-[#111]" onClick={() => setMenuOpen(false)}>Forside</Link>
            <Link href="/demo/steinmoen/tjenester" className="text-2xl font-semibold text-[#111]" onClick={() => setMenuOpen(false)}>Tjenester</Link>
            <Link href="/demo/steinmoen/kataloger" className="text-2xl font-semibold text-[#111]" onClick={() => setMenuOpen(false)}>Kataloger</Link>
            <Link href="/demo/steinmoen/kontakt" className="text-2xl font-semibold text-[#111]" onClick={() => setMenuOpen(false)}>Kontakt</Link>
            <a
              href="/demo/steinmoen/kontakt#kontakt-form"
              className="text-base font-medium px-6 py-3 text-[#111]"
              style={{ border: '1.5px solid #111' }}
              onClick={() => setMenuOpen(false)}
            >
              Ta kontakt
            </a>
          </div>
        )}

        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t border-[#e5e5e5] px-6 md:px-10 pt-12 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div>
                <img src="/demo/steinmoen/logo2.svg" alt="Steinmoen" style={{ height: '40px', width: 'auto', marginBottom: '16px' }} />
                <p className="text-sm text-[#666] leading-relaxed mb-4">Din reklamepartner i Aust-Agder.</p>
                <img src="/demo/steinmoen/miljofyrtarn.svg" alt="Miljøfyrtårn" style={{ height: '48px', width: 'auto' }} />
              </div>

              <div>
                <p className="text-xs text-[#999] uppercase tracking-widest mb-4">Navigasjon</p>
                <div className="space-y-2">
                  <Link href="/demo/steinmoen" className="block text-sm text-[#666] hover:text-[#111] transition-colors">Forside</Link>
                  <Link href="/demo/steinmoen/tjenester" className="block text-sm text-[#666] hover:text-[#111] transition-colors">Tjenester</Link>
                  <Link href="/demo/steinmoen/kataloger" className="block text-sm text-[#666] hover:text-[#111] transition-colors">Kataloger</Link>
                  <Link href="/demo/steinmoen/kontakt" className="block text-sm text-[#666] hover:text-[#111] transition-colors">Kontakt</Link>
                </div>
              </div>

              <div>
                <p className="text-xs text-[#999] uppercase tracking-widest mb-4">Kontakt</p>
                <p className="text-sm text-[#666] mb-1">Lillesandsveien 44 B, 4877 Grimstad</p>
                <p className="text-sm text-[#666] mb-3">Industritoppen 23, 4848 Arendal</p>
                <a href="mailto:post@steinmoen.no" className="block text-sm text-[#111] hover:text-[#1a4fd6] transition-colors mb-1">post@steinmoen.no</a>
                <a href="tel:37043896" className="block text-sm text-[#111] hover:text-[#1a4fd6] transition-colors mb-4">37 04 38 96</a>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/steinmoenas" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666] hover:text-[#111] transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/steinmoenas/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666] hover:text-[#111] transition-colors">Instagram</a>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e5e5e5] pt-6">
              <p className="text-xs text-[#999]">&copy; {new Date().getFullYear()} Steinmoen AS. Alle rettigheter forbeholdt.</p>
            </div>
          </div>
        </footer>
      </div>

      <DemoWatermark />
    </>
  );
}
