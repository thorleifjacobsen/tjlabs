'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/demo/eikmakerspace', label: 'Hjem', exact: true, anchor: false },
  { href: '/demo/eikmakerspace/utstyr', label: 'Utstyr', exact: false, anchor: false },
  { href: '/demo/eikmakerspace#aktiviteter', label: 'Aktiviteter', exact: false, anchor: true },
  { href: '/demo/eikmakerspace/bli-medlem', label: 'Bli Medlem', exact: false, anchor: false },
  { href: '/demo/eikmakerspace/booking', label: 'Booking', exact: false, anchor: false },
]

function FbIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
function DcIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function isActive(link: (typeof navLinks)[0]): boolean {
    if (link.anchor) return false
    if (link.exact) return pathname === link.href
    return pathname.startsWith(link.href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-6">
        {/* Logo + name */}
        <Link href="/demo/eikmakerspace" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-green-50 flex-shrink-0 shadow-sm">
            <Image src="/demo/eikmakerspace/logo.jpg" alt="Eik Makerspace" fill className="object-cover" />
          </div>
          <span className="font-semibold text-gray-900 text-sm sm:text-[15px] group-hover:text-green-700 transition-colors">
            Eik Makerspace
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all border-b-2 ${
                isActive(link)
                  ? 'text-green-700 font-semibold border-green-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
          <a href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Facebook">
            <FbIcon />
          </a>
          <a href="https://discord.com/invite/yzr8cpxE7c" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Discord">
            <DcIcon />
          </a>
          <a href="https://www.instagram.com/eikmakerspacearendal/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Instagram">
            <IgIcon />
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 flex flex-col justify-center gap-[5px]"
          aria-label="Meny"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-[1100px] mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 text-sm rounded-lg transition-colors ${
                  isActive(link)
                    ? 'text-green-700 font-semibold bg-green-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 px-7 py-3 border-t border-gray-100">
            <a href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors"><FbIcon /></a>
            <a href="https://discord.com/invite/yzr8cpxE7c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors"><DcIcon /></a>
            <a href="https://www.instagram.com/eikmakerspacearendal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors"><IgIcon /></a>
          </div>
        </div>
      )}
    </header>
  )
}
