'use client'

import Image from 'next/image'
import { useState } from 'react'

const ACCENT = '#c9a96e'
const BROWN = '#2c1a0e'
const CREAM = '#faf7f2'

/* ── tiny helpers ── */
function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
      style={{ backgroundColor: color + '22', color }}
    >
      {label}
    </span>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px" style={{ backgroundColor: ACCENT + '44' }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill={ACCENT}>
        <circle cx="7" cy="7" r="3" />
        <circle cx="1" cy="7" r="1.2" />
        <circle cx="13" cy="7" r="1.2" />
      </svg>
      <div className="flex-1 h-px" style={{ backgroundColor: ACCENT + '44' }} />
    </div>
  )
}

/* ── product data ── */
const products = [
  {
    id: 1,
    name: 'Bio Bio Valley',
    roast: 'Lysbrent',
    roastColor: '#7cb9a8',
    notes: ['Aprikos', 'Jasmin', 'Lys syre'],
    price250: 149,
    price1kg: 499,
    image: '/demo/mortenskaffe/beans.jpg',
  },
  {
    id: 2,
    name: 'Atacama Espresso',
    roast: 'Mellombrent',
    roastColor: ACCENT,
    notes: ['Mørk sjokolade', 'Karamell', 'Nøtter'],
    price250: 139,
    price1kg: 469,
    image: '/demo/mortenskaffe/cup.jpg',
  },
  {
    id: 3,
    name: 'Patagonia Blend',
    roast: 'Mørk',
    roastColor: '#8b5e3c',
    notes: ['Røkt eik', 'Tørket frukt', 'Fyldig'],
    price250: 129,
    price1kg: 449,
    image: '/demo/mortenskaffe/roast.jpg',
  },
]

/* ── fallback image ── */
function ImgFallback({ className }: { className?: string }) {
  return (
    <div
      className={`w-full h-64 bg-stone-200 flex items-center justify-center text-stone-400 text-sm ${className ?? ''}`}
    >
      Bilde kommer
    </div>
  )
}

function CoffeeImage({
  src,
  alt,
  className,
  fill,
  sizes,
}: {
  src: string
  alt: string
  className?: string
  fill?: boolean
  sizes?: string
}) {
  const [err, setErr] = useState(false)
  if (err) return <ImgFallback className={className} />
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? '100vw'}
        className={className}
        onError={() => setErr(true)}
      />
    )
  }
  return (
    <div className="relative w-full h-64">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? '(max-width: 768px) 100vw, 33vw'}
        className={`object-cover ${className ?? ''}`}
        onError={() => setErr(true)}
      />
    </div>
  )
}

/* ════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function MortensKaffePage() {
  const [activeSize, setActiveSize] = useState<Record<number, '250g' | '1kg'>>({
    1: '250g',
    2: '250g',
    3: '250g',
  })
  const [menuOpen, setMenuOpen] = useState(false)

  const setSize = (id: number, size: '250g' | '1kg') =>
    setActiveSize((prev) => ({ ...prev, [id]: size }))

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: CREAM + 'f0',
          backdropFilter: 'blur(12px)',
          borderColor: ACCENT + '33',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Wordmark */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: '"Lora", "Georgia", serif',
              color: BROWN,
              letterSpacing: '-0.01em',
            }}
          >
            Morten&apos;s Kaffe
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: BROWN + 'cc' }}>
            {['Kaffe', 'Om oss', 'Abonnement', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="hover:opacity-100 transition-opacity"
                style={{ opacity: 0.7 }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kaffe"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: BROWN, color: CREAM }}
            >
              Bestill
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meny"
              style={{ color: BROWN }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" />
                    <line x1="18" y1="4" x2="4" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="19" y2="6" />
                    <line x1="3" y1="11" x2="19" y2="11" />
                    <line x1="3" y1="16" x2="19" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium"
            style={{ borderColor: ACCENT + '33', backgroundColor: CREAM }}
          >
            {['Kaffe', 'Om oss', 'Abonnement', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: BROWN }}
              >
                {item}
              </a>
            ))}
            <a
              href="#kaffe"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center items-center px-5 py-2.5 rounded-full text-sm font-semibold mt-1"
              style={{ backgroundColor: BROWN, color: CREAM }}
            >
              Bestill
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <CoffeeImage src="/demo/mortenskaffe/hero.jpg" alt="Kaffebønner fra Chile" fill className="object-cover" sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(44,26,14,0.65) 0%, rgba(44,26,14,0.45) 50%, rgba(44,26,14,0.75) 100%)' }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto" style={{ color: CREAM }}>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-6 opacity-80"
            style={{ color: ACCENT }}
          >
            Spesialkaffe fra Chile
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: '"Lora", "Georgia", serif', letterSpacing: '-0.02em' }}
          >
            Kaffe fra hjerte
            <br />
            av Chile
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 opacity-85 max-w-xl mx-auto">
            Håndplukket fra familiedrevne gårder i Bio Bio Valley.
            Ristet i Arendal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kaffe"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: BROWN }}
            >
              Se våre kaffer
            </a>
            <a
              href="#om-oss"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold border transition-all hover:bg-white/10"
              style={{ borderColor: CREAM + '66', color: CREAM }}
            >
              Les historien
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" style={{ color: CREAM }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <circle cx="8" cy="7" r="2" fill="currentColor" stroke="none">
              <animate attributeName="cy" values="7;15;7" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="kaffe" className="py-24 px-4" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>
              Direkte fra kilden
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
            >
              Våre kaffer
            </h2>
            <p className="text-base opacity-60 max-w-md mx-auto" style={{ color: BROWN }}>
              Tre kurer som viser hva Bio Bio Valley er i stand til
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ boxShadow: '0 4px 24px rgba(44,26,14,0.08)' }}
              >
                <div className="relative h-60 overflow-hidden">
                  <CoffeeImage
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge label={p.roast} color={p.roastColor} />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
                  >
                    {p.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.notes.map((note) => (
                      <span
                        key={note}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ borderColor: ACCENT + '44', color: BROWN + 'aa', backgroundColor: ACCENT + '11' }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <Divider />

                  {/* Size picker */}
                  <div className="flex gap-2 mb-5">
                    {(['250g', '1kg'] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSize(p.id, sz)}
                        className="flex-1 py-2 rounded-lg text-sm font-semibold border transition-all"
                        style={{
                          backgroundColor: activeSize[p.id] === sz ? BROWN : 'transparent',
                          color: activeSize[p.id] === sz ? CREAM : BROWN,
                          borderColor: activeSize[p.id] === sz ? BROWN : ACCENT + '55',
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: BROWN, fontFamily: '"Lora", "Georgia", serif' }}
                    >
                      {activeSize[p.id] === '250g' ? p.price250 : p.price1kg} kr
                    </span>
                    <button
                      className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                      style={{ backgroundColor: ACCENT, color: BROWN }}
                    >
                      Bestill
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="om-oss" className="py-24 px-4" style={{ backgroundColor: '#f2ede5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(44,26,14,0.14)' }}>
              <div className="relative h-80 sm:h-[480px]">
                <CoffeeImage
                  src="/demo/mortenskaffe/farm.jpg"
                  alt="Kaffegård i Chile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4 text-sm"
                style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.85), transparent)', color: CREAM + 'cc' }}
              >
                Bio Bio Valley, Chile
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>
                Historien bak koppen
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
              >
                Fra Chile til
                <br />
                Arendal
              </h2>

              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: BROWN + 'bb' }}>
                <p>
                  I 2019 reiste Morten Haugen til Chile for første gang. I Bio Bio Valley fant han noe han ikke
                  hadde forventet: kaffebønner av en kvalitet han knapt hadde smakt.
                </p>
                <p>
                  Etter måneder med reising mellom gårder, lange samtaler over bord fulle av prøvekjøringer og
                  handtrykk med familier som har dyrket kaffe i generasjoner, kom Morten hjem med to kofferter
                  og en idé.
                </p>
                <p>
                  I dag importerer Morten direkte fra de samme familiene. Ingen mellomledd. Bønnene ristet
                  lokalt i Arendal innen uker etter høst.
                </p>
              </div>

              <blockquote
                className="border-l-4 pl-6 py-1 mb-10 text-xl font-medium italic"
                style={{
                  borderColor: ACCENT,
                  color: BROWN,
                  fontFamily: '"Lora", "Georgia", serif',
                }}
              >
                &ldquo;God kaffe starter med gode relasjoner&rdquo;
                <footer className="mt-2 text-sm not-italic font-normal opacity-60">
                  Morten Haugen, grunnlegger
                </footer>
              </blockquote>

              <div className="flex flex-wrap gap-6">
                {[
                  { n: '5', label: 'Familiegårder' },
                  { n: '3', label: 'Kaffekurer' },
                  { n: '2019', label: 'Grunnlagt' },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <div
                      className="text-3xl font-bold"
                      style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
                    >
                      {n}
                    </div>
                    <div className="text-xs font-semibold tracking-wider uppercase mt-0.5 opacity-50" style={{ color: BROWN }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBSCRIPTION ── */}
      <section id="abonnement" className="py-24 px-4" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>
              Aldri tom for kaffe
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
            >
              Kaffe-abonnement
            </h2>
            <p className="text-base opacity-60 max-w-sm mx-auto" style={{ color: BROWN }}>
              Fersk kaffe levert hjem til deg, rett etter risting
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Plan 1 */}
            <div
              className="bg-white rounded-2xl p-8 flex flex-col"
              style={{ boxShadow: '0 4px 24px rgba(44,26,14,0.07)' }}
            >
              <div className="text-sm font-semibold tracking-wider uppercase mb-2 opacity-50" style={{ color: BROWN }}>
                Annenhver uke
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
                >
                  119
                </span>
                <span className="text-lg pb-1 opacity-60" style={{ color: BROWN }}>kr</span>
              </div>
              <div className="text-xs opacity-50 mb-6" style={{ color: BROWN }}>250g per levering</div>
              <ul className="space-y-3 text-sm mb-8 flex-1" style={{ color: BROWN + 'bb' }}>
                {['250g nyristet kaffe', 'Gratis frakt', 'Pause eller stopp når du vil', 'Bytt kur fritt'].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={ACCENT + '33'} />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
                style={{ borderColor: BROWN + '44', color: BROWN }}
              >
                Velg abonnement
              </button>
            </div>

            {/* Plan 2 — Most popular */}
            <div
              className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
              style={{ backgroundColor: BROWN, color: CREAM }}
            >
              <div
                className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: ACCENT, color: BROWN }}
              >
                Mest populær
              </div>
              <div className="text-sm font-semibold tracking-wider uppercase mb-2 opacity-50">
                Månedlig
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: '"Lora", "Georgia", serif' }}
                >
                  199
                </span>
                <span className="text-lg pb-1 opacity-60">kr</span>
              </div>
              <div className="text-xs opacity-50 mb-6">500g per levering</div>
              <ul className="space-y-3 text-sm mb-8 flex-1 opacity-85">
                {['500g nyristet kaffe', 'Gratis frakt alltid', 'Pause eller stopp når du vil', 'Bytt kur fritt', 'Nyhetsbrev fra Morten'].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={ACCENT + '55'} />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: ACCENT, color: BROWN }}
              >
                Velg abonnement
              </button>
            </div>
          </div>

          <p className="text-center text-sm mt-8 opacity-40" style={{ color: BROWN }}>
            Ingen binding. Pause eller avslutt naar du vil.
          </p>
        </div>
      </section>

      {/* ── ORIGIN ── */}
      <section className="py-24 px-4" style={{ backgroundColor: '#f2ede5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text first on mobile */}
            <div className="order-2 lg:order-1">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>
                Opprinnelse
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
              >
                Fra Chile
                <br />
                til Arendal
              </h2>

              {/* Chile flag accent */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex rounded overflow-hidden w-10 h-7 border" style={{ borderColor: ACCENT + '44' }}>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1 bg-white" />
                    <div className="flex-1" style={{ backgroundColor: '#D52B1E' }} />
                  </div>
                  <div className="w-4" style={{ backgroundColor: '#0039A6' }} />
                </div>
                <span className="text-sm font-semibold opacity-60" style={{ color: BROWN }}>Bio Bio Valley, Chile</span>
              </div>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: BROWN + 'bb' }}>
                <p>
                  Bio Bio Valley ligger syd for Santiago, mellom Andes og kysten. Klimaet er ideelt for
                  arabica-kaffe: tørre somre, kjølige netter og rik vulkansk jord.
                </p>
                <p>
                  Her er kaffe et familieprosjekt. Gårder som har vært i drift i tre generasjoner leverer
                  bønner av en konsistens og kvalitet som er sjelden i verden.
                </p>
                <p>
                  Fra innhøsting til risting i Arendal tar det sjelden mer enn to måneder. Det er freskhet
                  du kan smake.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(44,26,14,0.14)' }}>
              <div className="relative h-80 sm:h-[440px]">
                <CoffeeImage
                  src="/demo/mortenskaffe/bag.jpg"
                  alt="Kaffepakke fra Morten's Kaffe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="kontakt" className="py-24 px-4" style={{ backgroundColor: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>
              Kom i kontakt
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Lora", "Georgia", serif', color: BROWN }}
            >
              Send oss en melding
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm" style={{ color: BROWN + 'aa' }}>
              <a
                href="mailto:post@mortenskaffe.no"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: BROWN }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
                post@mortenskaffe.no
              </a>
              <a
                href="tel:90012345"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: BROWN }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.95 3.4 2 2 0 0 1 3.93 1.22h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z" />
                </svg>
                900 12 345
              </a>
            </div>
          </div>

          <form
            className="bg-white rounded-2xl p-8 space-y-5"
            style={{ boxShadow: '0 4px 24px rgba(44,26,14,0.07)' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase mb-2 opacity-50" style={{ color: BROWN }}>
                  Navn
                </label>
                <input
                  type="text"
                  placeholder="Ditt navn"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                  style={{
                    borderColor: ACCENT + '44',
                    backgroundColor: CREAM,
                    color: BROWN,
                  }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase mb-2 opacity-50" style={{ color: BROWN }}>
                  E-post
                </label>
                <input
                  type="email"
                  placeholder="din@epost.no"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    borderColor: ACCENT + '44',
                    backgroundColor: CREAM,
                    color: BROWN,
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase mb-2 opacity-50" style={{ color: BROWN }}>
                Melding
              </label>
              <textarea
                rows={4}
                placeholder="Hva lurer du på?"
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
                style={{
                  borderColor: ACCENT + '44',
                  backgroundColor: CREAM,
                  color: BROWN,
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: BROWN, color: CREAM }}
            >
              Send melding
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-16 px-4 border-t"
        style={{ backgroundColor: BROWN, borderColor: ACCENT + '33', color: CREAM }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            <div>
              <div
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: '"Lora", "Georgia", serif', letterSpacing: '-0.01em' }}
              >
                Morten&apos;s Kaffe
              </div>
              <p className="text-sm opacity-50 leading-relaxed">
                Direkte fra Chile til din kopp
              </p>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 opacity-40">Kontakt</div>
              <div className="space-y-2 text-sm opacity-70">
                <div>post@mortenskaffe.no</div>
                <div>900 12 345</div>
                <div>Arendal, Norge</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-4 opacity-40">Sosiale medier</div>
              <a
                href="https://instagram.com/mortenskaffe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @mortenskaffe
              </a>
            </div>
          </div>

          <div className="border-t flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-xs opacity-30" style={{ borderColor: CREAM + '22' }}>
            <span>&copy; 2025 Morten&apos;s Kaffe &mdash; Arendal</span>
            <span className="italic">Demo-side. Ikke et reelt firma.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
