'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/demo/eikmakerspace', label: 'Hjem' },
  { href: '/demo/eikmakerspace/utstyr', label: 'Utstyr' },
  { href: '/demo/eikmakerspace#aktiviteter', label: 'Aktiviteter' },
  { href: '/demo/eikmakerspace/bli-medlem', label: 'Bli Medlem' },
  { href: '/demo/eikmakerspace/booking', label: 'Booking' },
]

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/demo/eikmakerspace" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-purple-950 flex-shrink-0">
            <Image
              src="/demo/eikmakerspace/logo.jpg"
              alt="Eik Makerspace"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-mono font-bold text-white group-hover:text-purple-400 transition-colors text-sm sm:text-base tracking-wide">
            Eik Makerspace
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-gray-300 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1">
            <a
              href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors p-2"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://discord.com/invite/yzr8cpxE7c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors p-2"
              aria-label="Discord"
            >
              <DiscordIcon />
            </a>
            <a
              href="https://www.instagram.com/eikmakerspacearendal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors p-2"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white flex flex-col justify-center gap-1.5 w-10 h-10"
            aria-label="Meny"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#111] border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-gray-300 hover:text-purple-400 transition-colors py-3 border-b border-white/5 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 px-4 py-4 border-t border-white/5">
            <a href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://discord.com/invite/yzr8cpxE7c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <DiscordIcon />
            </a>
            <a href="https://www.instagram.com/eikmakerspacearendal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
