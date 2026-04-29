import Image from 'next/image'
import Link from 'next/link'

export const metadata = { robots: 'noindex' }

const equipmentHighlights = [
  {
    img: '/demo/eikmakerspace/eq1.jpg',
    label: '3D Printing',
    name: 'Bambu Lab X1 Carbon',
    tag: 'Filament',
    tagColor: 'bg-purple-900/60 text-purple-300',
  },
  {
    img: '/demo/eikmakerspace/eq2.jpg',
    label: '3D Printing',
    name: 'Anycubic Photon M3 Max',
    tag: 'Resin',
    tagColor: 'bg-teal-900/60 text-teal-300',
  },
  {
    img: '/demo/eikmakerspace/laser.jpg',
    label: 'Laser',
    name: '100w CO2 Laser',
    tag: 'Gravering og kutting',
    tagColor: 'bg-amber-900/60 text-amber-300',
  },
  {
    img: '/demo/eikmakerspace/eq3.jpg',
    label: 'Trearbeid',
    name: 'Bordsag, båndsag, dreiebenk',
    tag: 'Verksted',
    tagColor: 'bg-orange-900/60 text-orange-300',
  },
  {
    img: '/demo/eikmakerspace/eq4.jpg',
    label: 'Keramikk',
    name: 'Ovn, dreieskive, støpeformer',
    tag: 'Keramikk',
    tagColor: 'bg-rose-900/60 text-rose-300',
  },
]

const activities = [
  {
    img: '/demo/eikmakerspace/laser.jpg',
    title: 'Laser gravering aktivitet',
    date: 'Tirsdag 6. mai, 17:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Laer deg lasergravereren. Vi lager noe kult saman.',
  },
  {
    img: '/demo/eikmakerspace/printing3d.jpg',
    title: '3D printing aktivitet',
    date: 'Torsdag 8. mai, 17:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Fra modell til ferdig objekt. Bambu Lab X1 Carbon i bruk.',
  },
  {
    img: '/demo/eikmakerspace/eq2.jpg',
    title: 'Miniatyr maling og resin 3D printing',
    date: 'Fredag 9. mai, 16:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Skriv ut og mal miniatyrar med resin-printeren.',
  },
]

const prices = [
  { type: 'Ungdom', price: '100', suffix: '/mnd' },
  { type: 'Voksen', price: '250', suffix: '/mnd' },
  { type: 'Familie', price: '350', suffix: '/mnd', note: '1 voksen + 2 barn' },
  { type: 'Stor Familie', price: '400', suffix: '/mnd', note: '2 voksne + 2 barn' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px, 56px 56px, 56px 56px',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-purple-950/20 blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-32">
          <div className="mx-auto mb-8 w-24 h-24 relative rounded-2xl overflow-hidden ring-2 ring-purple-500/30 bg-gray-900">
            <Image
              src="/demo/eikmakerspace/logo.jpg"
              alt="Eik Makerspace"
              fill
              className="object-cover"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Eydehavn, Arendal
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Eik Makerspace
          </h1>

          <p className="text-xl sm:text-2xl text-amber-400 font-mono mb-5 font-medium">
            Et skaperverksted for alle
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Lag, laer og utforsk i vart delte verksted pa Eydehavn. Frivilligdrevet og aaent for alle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo/eikmakerspace/bli-medlem"
              className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Bli medlem
            </Link>
            <Link
              href="/demo/eikmakerspace/utstyr"
              className="border border-purple-500/50 text-purple-300 hover:bg-purple-950/40 font-mono font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Se utstyr
            </Link>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section className="bg-[#0f0f0f] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-4">Om oss</div>
              <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Laget av og for skapere
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Eik Makerspace er eit frivilligdrive skaperverksted i Eydehavn. Ingen er betalt. Vi deler
                  kostnadane til utstyr og lokale gjennom medlemsskap, og alle stiller opp pa dugnad.
                </p>
                <p>
                  Her er det plass til a laere, utvikle, utforske, mestre og mislykkas. Alle er velkomne
                  uansett bakgrunn eller erfaring, det einaste du treng er nysgjerrighet.
                </p>
                <p>
                  Vi held til i kjellaren til Eydehavn Kuben Frivillighetssentral, og er opne for alle
                  interesserte.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#161616] border border-white/10 rounded-xl p-4">
                  <div className="text-purple-400 font-mono text-xs uppercase tracking-wider mb-2">Adresse</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Nesgata 13<br />
                    4810 Eydehavn
                  </p>
                </div>
                <div className="bg-[#161616] border border-white/10 rounded-xl p-4">
                  <div className="text-purple-400 font-mono text-xs uppercase tracking-wider mb-2">Apent</div>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>Tirsdag <span className="text-gray-400">17 - 19</span></p>
                    <p>Torsdag <span className="text-gray-400">17 - 19</span></p>
                    <p>Fredag <span className="text-gray-400">16 - 19</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative rounded-xl overflow-hidden bg-gray-800 h-56">
                <Image
                  src="/demo/eikmakerspace/interior1.jpg"
                  alt="Verksted interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-800 h-40">
                <Image
                  src="/demo/eikmakerspace/interior2.jpg"
                  alt="Verksted interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-800 h-40">
                <Image
                  src="/demo/eikmakerspace/interior3.jpg"
                  alt="Verksted interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utstyr highlights */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a0a0a]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">Utstyr</div>
              <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white leading-tight">
                Kva vi har
              </h2>
            </div>
            <Link
              href="/demo/eikmakerspace/utstyr"
              className="text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors border border-purple-800/50 hover:border-purple-600/50 px-4 py-2 rounded-lg self-start sm:self-auto"
            >
              Se alt utstyr
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {equipmentHighlights.map((eq) => (
              <div
                key={eq.name}
                className="group bg-[#161616] border border-white/10 hover:border-purple-500/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 bg-gray-800">
                  <Image
                    src={eq.img}
                    alt={eq.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${eq.tagColor}`}>
                      {eq.label}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-white font-semibold leading-snug mb-1">{eq.name}</p>
                  <p className="text-xs text-gray-500 font-mono">{eq.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktiviteter */}
      <section id="aktiviteter" className="py-20 px-4 sm:px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">Kalender</div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
            Kommende aktiviteter
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => (
              <div
                key={act.title}
                className="group bg-[#161616] border border-white/10 hover:border-purple-500/40 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-44 bg-gray-800">
                  <Image
                    src={act.img}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-mono bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded-full">
                      Gjentakende
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 leading-snug">{act.title}</h3>
                  <p className="text-xs text-gray-400 mb-1">{act.date}</p>
                  <p className="text-xs text-gray-500 mb-3">{act.location}</p>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{act.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">Flere datoer</span>
                    <button className="text-xs font-mono text-purple-400 hover:text-purple-300 border border-purple-800/50 hover:border-purple-600/50 px-3 py-1.5 rounded-lg transition-colors">
                      Detaljer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">Fellesskap</div>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">
              Bli med i vart fellesskap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="https://discord.com/invite/yzr8cpxE7c"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1333] border border-purple-800/40 hover:border-purple-500/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#5865F2">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </div>
              <h3 className="font-mono font-bold text-white mb-2">Discord</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Chat med andre medlemmar, still sporsmal og hold deg oppdatert.
              </p>
              <span className="text-xs font-mono text-purple-400 group-hover:text-purple-300 transition-colors">
                Bli med pa Discord &rarr;
              </span>
            </a>

            <a
              href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0f1a2e] border border-blue-800/40 hover:border-blue-500/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1877F2]/20 flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <h3 className="font-mono font-bold text-white mb-2">Facebook</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Foljg oss pa Facebook for nyheter, bilete og kommande arrangement.
              </p>
              <span className="text-xs font-mono text-blue-400 group-hover:text-blue-300 transition-colors">
                Besok Facebook-sida &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Bli Medlem teaser */}
      <section
        className="py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0a3a 0%, #0f0f0f 50%, #0a1a1a 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-amber-400 font-mono text-xs tracking-widest uppercase mb-4">Medlemsskap</div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4">
            Fra 100 kr per maned
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Fa tilgang til alt utstyr, eiga oppbevaringsboks og forbruksmateriell. Del kostnadane, ikkje berre muligheitene.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {prices.map((p) => (
              <div key={p.type} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="font-mono text-2xl font-bold text-white mb-1">
                  {p.price}
                  <span className="text-sm text-gray-400">{p.suffix}</span>
                </div>
                <div className="text-xs font-mono text-gray-400">{p.type}</div>
                {p.note && <div className="text-xs text-gray-600 mt-1">{p.note}</div>}
              </div>
            ))}
          </div>

          <Link
            href="/demo/eikmakerspace/bli-medlem"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-mono font-semibold px-10 py-3.5 rounded-lg transition-colors text-base"
          >
            Les mer og bli medlem
          </Link>
        </div>
      </section>
    </>
  )
}
