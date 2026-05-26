'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/nav';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 16);
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          <Image src="/logo.svg" alt="TJLabs" width={32} height={32} className="rounded-lg" />
          <span className="font-display text-lg font-semibold text-[var(--color-text)] tracking-tight">
            TJLabs
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/kontakt"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)] transition-all duration-200"
          >
            Ta kontakt
          </a>
          <button
            className="md:hidden p-1.5 text-[var(--color-text-secondary)] rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle meny"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--color-bg)]/95 backdrop-blur-xl border-b border-[var(--color-border)] px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[var(--color-primary)] font-semibold text-sm"
              >
                Ta kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
