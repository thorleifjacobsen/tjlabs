'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function SteinmoenLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .steinmoen * { font-family: 'Space Grotesk', sans-serif; }
        .steinmoen { background: #0a0a0a; }
      `}</style>

      <div className="steinmoen min-h-screen text-[#f5f5f5]">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md">
          <Link href="/demo/steinmoen" className="flex items-center">
            <Image
              src="/demo/steinmoen/logo.svg"
              alt="Steinmoen"
              width={160}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/demo/steinmoen/tjenester" className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors duration-150">
              Tjenester
            </Link>
            <Link href="/demo/steinmoen/kataloger" className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors duration-150">
              Kataloger
            </Link>
            <a href="#kontakt" className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors duration-150">
              Kontakt
            </a>
            <a
              href="#kontakt"
              className="text-sm font-medium px-4 py-2 bg-[#e8e020] text-[#0a0a0a] hover:bg-white transition-colors duration-150"
            >
              Ta kontakt
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <span className={`block w-6 h-0.5 bg-[#f5f5f5] transition-all duration-150 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#f5f5f5] transition-all duration-150 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#f5f5f5] transition-all duration-150 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden">
            <Link href="/demo/steinmoen/tjenester" className="text-2xl text-[#f5f5f5]" onClick={() => setMenuOpen(false)}>
              Tjenester
            </Link>
            <Link href="/demo/steinmoen/kataloger" className="text-2xl text-[#f5f5f5]" onClick={() => setMenuOpen(false)}>
              Kataloger
            </Link>
            <a href="#kontakt" className="text-2xl text-[#f5f5f5]" onClick={() => setMenuOpen(false)}>
              Kontakt
            </a>
            <a
              href="#kontakt"
              className="text-lg font-medium px-6 py-3 bg-[#e8e020] text-[#0a0a0a]"
              onClick={() => setMenuOpen(false)}
            >
              Ta kontakt
            </a>
          </div>
        )}

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 md:px-10 pt-16 pb-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Logo + tagline */}
              <div>
                <Image
                  src="/demo/steinmoen/logo2.svg"
                  alt="Steinmoen"
                  width={140}
                  height={48}
                  className="h-10 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-sm text-[#888] leading-relaxed">
                  Din reklamepartner i Aust-Agder. Miljøfyrtårn-sertifisert.
                </p>
                <div className="mt-4">
                  <Image
                    src="/demo/steinmoen/miljofyrtarn.svg"
                    alt="Miljøfyrtårn"
                    width={60}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>

              {/* Addresses */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#888] uppercase tracking-widest mb-2">Grimstad</p>
                  <p className="text-sm text-[#f5f5f5]">Lillesandsveien 44 B</p>
                  <p className="text-sm text-[#f5f5f5]">4877 Grimstad</p>
                </div>
                <div>
                  <p className="text-xs text-[#888] uppercase tracking-widest mb-2">Arendal</p>
                  <p className="text-sm text-[#f5f5f5]">Industritoppen 23</p>
                  <p className="text-sm text-[#f5f5f5]">4848 Arendal</p>
                </div>
              </div>

              {/* Contact + Social */}
              <div>
                <p className="text-xs text-[#888] uppercase tracking-widest mb-3">Kontakt</p>
                <a href="mailto:post@steinmoen.no" className="block text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors mb-1">
                  post@steinmoen.no
                </a>
                <a href="tel:37043896" className="block text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors mb-6">
                  37 04 38 96
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/steinmoenas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/steinmoenas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888] hover:text-[#f5f5f5] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <p className="text-xs text-[#888]">
                &copy; {new Date().getFullYear()} Steinmoen AS. Alle rettigheter forbeholdt.
              </p>
              <p className="text-xs text-[#444]">Demo av TJ Labs</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
