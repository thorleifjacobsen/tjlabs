'use client'

import { useState } from 'react'

const NAV_LINKS = [
  { href: '#om-oss', label: 'Om oss' },
  { href: '#tjenester', label: 'Tjenester' },
  { href: '#prosjekter', label: 'Prosjekter' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-bold text-lg" style={{ color: '#1a4f7a' }}>SM Multiservice</span>
          <span className="text-xs text-slate-500">Brygger og maritime tjenester</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:40057058"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1a4f7a' }}
          >
            Ring oss: 400 57 058
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:40057058"
            className="px-3 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: '#1a4f7a' }}
          >
            400 57 058
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Meny"
            className="p-2 text-slate-600 rounded-md hover:bg-slate-100"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-1">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
