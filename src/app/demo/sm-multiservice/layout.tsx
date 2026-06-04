import type { ReactNode } from 'react'
import Header from './Header'

export default function SMMultiserviceLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Header />
      <main>{children}</main>
      <footer style={{ backgroundColor: '#0f2d45' }} className="text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-bold text-lg mb-3">SM Multiservice AS</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              SM Multiservice AS utfører bryggbygging, tilbygg, baderoms-renovering og maritime tjenester med base i Eydehavn, Aust-Agder.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg mb-3">Kontakt</p>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Tlf: 400 57 058</p>
              <p>E-post: post@sm-multiservice.no</p>
              <p>Budalen 13, 4810 Eydehavn</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-3">Lenker</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#om-oss', label: 'Om oss' },
                { href: '#tjenester', label: 'Tjenester' },
                { href: '#prosjekter', label: 'Prosjekter' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-400 text-center">
            SM Multiservice AS | Org.nr. 989 888 846 | Eydehavn
            <span className="mx-3 opacity-30">|</span>
            <a href="https://tjlabs.no" className="opacity-40 hover:opacity-70 transition-opacity" style={{ color: 'inherit', textDecoration: 'none' }}>Levert av TJ Labs</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
