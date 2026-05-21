'use client'

import Image from 'next/image'
import { useState } from 'react'

const G = '#15803d'
const GD = '#166534'
const GL = '#f0fdf4'
const B = '#78350f'

const PHONE = '950 61 377'
const EMAIL = 'ijorgen@broadpark.no'
const ADDRESS = 'Vindheim 26, 4885 Grimstad'
const ORG = '984 338 333'

// ── Image with fallback ──────────────────────────────────────────────────────

function GardenImg({
  src,
  alt,
  fill,
  className,
  priority,
}: {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
}) {
  const [err, setErr] = useState(false)
  if (err) {
    return (
      <div className="w-full h-64 bg-green-50 flex items-center justify-center text-green-300 text-sm">
        Bilde kommer
      </div>
    )
  }
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        onError={() => setErr(true)}
      />
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={className}
      onError={() => setErr(true)}
    />
  )
}

// ── Icons ────────────────────────────────────────────────────────────────────

function IcoPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IcoMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IcoPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IcoMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IcoClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

// ── Service card data ────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Plenklipping og plenstell',
    desc: 'Her kan vi skrive litt om tjenesten for plenklipping, gjødsling og løpende vedlikehold av plenen gjennom sesongen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18" />
        <path d="M12 20V8" />
        <path d="M7 20c0-5 5-8 5-8s5 3 5 8" />
        <path d="M4 14c1-3 4-4 4-4" />
        <path d="M20 14c-1-3-4-4-4-4" />
      </svg>
    ),
  },
  {
    title: 'Beplantning og hagedesign',
    desc: 'Her kan vi skrive litt om beplantning, valg av planter og hva vi kan hjelpe til med når det gjelder hagedesign og planlegging.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'Beskjæring av hekk og busker',
    desc: 'Her kan vi skrive litt om beskjæring av hekk, busker og trær for et ryddig og velstelt uttrykk i hagen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Rydding og vedlikehold',
    desc: 'Her kan vi skrive litt om generelt hagevedlikehold, opprydding og løpende stell gjennom hele sesongen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
  },
  {
    title: 'Sesongarbeid (vår/høst)',
    desc: 'Her kan vi skrive litt om vår- og høstarbeid, inkludert klargjøring av hagen for ny sesong og vinterstell.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Her kan vi legge til flere tjenester',
    desc: 'Ta kontakt for å høre mer om hva vi kan hjelpe deg med.',
    placeholder: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
]

const WHY_US = [
  {
    title: 'Lokal kunnskap',
    desc: 'Her kan vi skrive om lokal kjennskap til Grimstad-området, lokale klimatiske forhold og god tilgjengelighet for kundene.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Erfaren fagmann',
    desc: 'Her kan vi skrive om lang erfaring siden 2002 og faglig kompetanse innen hagearbeid, beplantning og vedlikehold.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Her kan vi skrive fordel 3',
    desc: 'Her kan vi skrive om en tredje fordel som gjør Jørgensens Hageservice til et godt valg for din hage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HageservicePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          <a href="#" className="font-bold text-base sm:text-lg shrink-0" style={{ color: GD }}>
            Jørgensens Hageservice
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-gray-600">
            <a href="#tjenester" className="hover:text-green-700 transition-colors">Tjenester</a>
            <a href="#om-oss" className="hover:text-green-700 transition-colors">Om oss</a>
            <a href="#kontakt" className="hover:text-green-700 transition-colors">Kontakt</a>
          </nav>

          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors shrink-0"
            style={{ backgroundColor: G }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = GD)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = G)}
          >
            <IcoPhone />
            Ring oss: {PHONE}
          </a>

          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Meny"
          >
            {menuOpen ? <IcoClose /> : <IcoMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
            {(['Tjenester', 'Om oss', 'Kontakt'] as const).map((label, i) => (
              <a
                key={i}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                className="block py-2.5 text-sm text-gray-700 hover:text-green-700 border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: G }}
            >
              <IcoPhone />
              Ring oss: {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <GardenImg
            src="/demo/hageservice/hero.jpg"
            alt="Frodig hage med blomster"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(21,128,61,0.78) 0%, rgba(22,101,52,0.82) 100%)' }} />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-2xl mx-auto py-24">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Etablert 2002 &middot; Grimstad
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
            Jørgensens<br />Hageservice
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Her kan vi skrive en kort og fengende beskrivelse av hva vi tilbyr og hvilke områder vi dekker.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#tjenester"
              className="px-7 py-3.5 rounded-lg font-semibold text-sm bg-white hover:bg-gray-50 transition-colors"
              style={{ color: G }}
            >
              Se tjenester
            </a>
            <a
              href="#kontakt"
              className="px-7 py-3.5 rounded-lg font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Ta kontakt
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce" aria-hidden>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="tjenester" className="py-20 px-4 sm:px-6" style={{ backgroundColor: GL }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G }}>
              Tjenester
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3 text-gray-900">
              Tjenester vi tilbyr
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Her kan vi skrive en kort ingress om tjenesteomfanget til Jørgensens Hageservice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 bg-white shadow-sm transition-shadow hover:shadow-md ${
                  s.placeholder
                    ? 'border-2 border-dashed border-green-200'
                    : 'border border-gray-100'
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: s.placeholder ? '#dcfce7' : GL, color: s.placeholder ? '#86efac' : G }}
                >
                  {s.icon}
                </div>
                <h3 className={`font-semibold mb-2 ${s.placeholder ? 'text-gray-400' : 'text-gray-900'}`}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="om-oss" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G }}>
                Om oss
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-5 text-gray-900">
                Inge Jørgensen og Jørgensens Hageservice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Her kan vi skrive litt om Inge og bedriften, erfaring siden 2002, lokalkunnskap i Grimstad-området, og hva som gjør oss til et godt valg for din hage.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Her kan vi skrive mer om tjenestetilbudet, kundefokus og det lille ekstra som skiller Jørgensens Hageservice fra andre aktører i regionen.
              </p>

              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: GL, color: GD }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Etablert 2002
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: '#fef9f0', color: B }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  1-4 ansatte
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: GL, color: GD }}
                >
                  <IcoPin />
                  Grimstad-området
                </div>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <GardenImg
                src="/demo/hageservice/garden.jpg"
                alt="Hage og plantestell"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: '#f8faf8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G }}>
              Hvorfor velge oss
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900">
              Det lille ekstra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {WHY_US.map((w, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: GL, color: G }}
                >
                  {w.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEASONAL CTA ── */}
      <section
        className="py-16 px-4 sm:px-6 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${G} 0%, ${GD} 100%)` }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Klar for vårsesongen?
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Her kan vi skrive litt om sesongaktuelt tilbud eller en oppfordring til å ta kontakt tidlig i sesongen for å sikre plass.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center px-7 py-3.5 rounded-lg font-semibold text-sm bg-white hover:bg-gray-50 transition-colors"
            style={{ color: G }}
          >
            Ta kontakt
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: G }}>
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900">
              Ta kontakt med oss
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact info */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Her kan vi skrive en kort tekst som oppfordrer besøkende til å ringe eller sende en melding.
              </p>

              {[
                { icon: <IcoPhone />, label: 'Telefon', value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
                { icon: <IcoMail />, label: 'E-post', value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: <IcoPin />, label: 'Adresse', value: ADDRESS, href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: GL, color: G }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-semibold text-gray-900 hover:text-green-700 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual contact form */}
            <div className="rounded-2xl border border-gray-100 p-6 sm:p-8" style={{ backgroundColor: '#fafafa' }}>
              <h3 className="font-semibold text-gray-900 mb-6">Send oss en melding</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {['Fornavn', 'Etternavn'].map((label, i) => (
                    <div key={i}>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
                      <input
                        type="text"
                        placeholder={i === 0 ? 'Ola' : 'Nordmann'}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                        style={{ ['--tw-ring-color' as string]: G + '33' }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">E-post</label>
                  <input
                    type="email"
                    placeholder="ola@eksempel.no"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Melding</label>
                  <textarea
                    rows={4}
                    placeholder="Her kan vi skrive litt om hva du ønsker hjelp med..."
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90 cursor-not-allowed"
                  style={{ backgroundColor: G }}
                  disabled
                >
                  Send melding
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Dette er en demo. Skjemaet er ikke aktivert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-4 sm:px-6 border-t border-gray-100" style={{ backgroundColor: '#f9faf9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8">
            <div>
              <p className="font-bold text-gray-900 mb-2" style={{ color: GD }}>
                Jørgensens Hageservice
              </p>
              <address className="not-italic text-sm text-gray-500 leading-relaxed">
                {ADDRESS}
              </address>
            </div>
            <div className="text-sm text-gray-500 space-y-1.5">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-green-700 transition-colors"
              >
                <IcoPhone /> {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-green-700 transition-colors break-all"
              >
                <IcoMail /> {EMAIL}
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>Org.nr.: {ORG}</p>
              <p className="mt-1">Enkeltpersonforetak</p>
              <p className="mt-1">NACE: 81.300</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-xs text-gray-400 text-center">
            &copy; 2025 Jørgensens Hageservice &middot; Vindheim 26, 4885 Grimstad
          </div>
        </div>
      </footer>

    </div>
  )
}
