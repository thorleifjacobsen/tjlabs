import type { Metadata } from 'next'
import { Oswald, Nunito } from 'next/font/google'
import NavClient from './NavClient'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Arendal Jiu Jitsu Klubb',
    template: '%s | AJJK',
  },
  description:
    'Best på selvforsvar siden 1980. Jiu Jitsu for alle aldre i Arendal – barn fra 7 år, voksne opp til 99.',
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export default function AJJKLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${oswald.variable} ${nunito.variable} min-h-screen bg-white`}
      style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
    >
      <NavClient />
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="https://ajjk.no/wp-content/uploads/2022/09/AJJK-LOGO.jpg"
              alt="AJJK Logo"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert opacity-80"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Best på selvforsvar siden 1980.
              <br />
              Jiu Jitsu for alle aldre i Arendal.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100057278507055"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/arendaljiujitsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3
              className="text-white font-bold text-lg mb-4 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Kontakt
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Gåselia 12, 4847 Arendal
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:90969119" className="hover:text-white transition-colors">909 69 119</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Geir Breimyr (Klubbleder)
              </li>
            </ul>
          </div>

          {/* Lenker */}
          <div>
            <h3
              className="text-white font-bold text-lg mb-4 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Lenker
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/demo/ajjk', label: 'Hjem' },
                { href: '/demo/ajjk/treningsplan', label: 'Treningsplan' },
                { href: '/demo/ajjk/om-oss', label: 'Om oss' },
                { href: '/demo/ajjk#kontakt', label: 'Kontakt' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <span>© 2025 Arendal Jiu Jitsu Klubb. Alle rettigheter forbeholdt.</span>
            <span>Stiftet 1980 · Gåselia 12, 4847 Arendal</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
