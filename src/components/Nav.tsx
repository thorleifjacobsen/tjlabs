'use client';

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
        scrolled ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl' : ''
      }`}
    >
      <nav className="max-w-xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="font-display font-semibold text-[var(--color-text)] text-sm hover:opacity-70 transition-opacity"
        >
          TJLabs
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[var(--color-text-muted)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle meny"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 pb-5">
          <ul className="flex flex-col gap-4 pt-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
