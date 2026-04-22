'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/demo/ajjk', label: 'Hjem' },
  { href: '/demo/ajjk/treningsplan', label: 'Treningsplan' },
  { href: '/demo/ajjk/om-oss', label: 'Om oss' },
]

export default function NavClient() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/demo/ajjk" className="flex items-center gap-3 shrink-0">
          <img
            src="https://ajjk.no/wp-content/uploads/2022/09/AJJK-LOGO.jpg"
            alt="Arendal Jiu Jitsu Klubb"
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-base font-bold text-gray-900 tracking-wide"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              ARENDAL JIU JITSU
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c0392b] uppercase">
              Klubb
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-gray-700 hover:text-[#c0392b] transition-colors"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/demo/ajjk#kontakt"
            className="ml-2 px-5 py-2 bg-[#c0392b] text-white text-sm font-bold tracking-wide rounded hover:bg-[#a93226] transition-colors"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            KONTAKT
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-gray-700 font-semibold hover:text-[#c0392b] hover:bg-gray-50 rounded transition-colors"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/demo/ajjk#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-3 bg-[#c0392b] text-white font-bold text-center rounded hover:bg-[#a93226] transition-colors"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              KONTAKT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
