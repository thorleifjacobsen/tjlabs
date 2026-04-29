import Image from 'next/image'
import Link from 'next/link'

export const metadata = { robots: 'noindex' }

type EquipItem = {
  name: string
  desc: string
  img?: string
  bookable?: boolean
}

type Category = {
  id: string
  label: string
  color: string
  items: EquipItem[]
}

const categories: Category[] = [
  {
    id: '3d',
    label: '3D Printing',
    color: 'text-purple-400 border-purple-800/50 bg-purple-950/20',
    items: [
      {
        name: 'Bambu Lab X1 Carbon',
        desc: 'Rask og presis filamentprinter. Egner seg til PLA, PETG, ABS og fleire materiale. Multifarge-kompatibel.',
        img: '/demo/eikmakerspace/eq1.jpg',
        bookable: true,
      },
      {
        name: 'Anycubic Photon M3 Max',
        desc: 'Stor resin-printer for hogoploysungsmodeller. Perfekt for miniatyrar, smykker og detaljerte figurar.',
        img: '/demo/eikmakerspace/eq2.jpg',
        bookable: true,
      },
      {
        name: 'Datamaskiner til 3D-modellering',
        desc: 'Fleire maskiner med programvare som Fusion 360, Blender, Bambu Studio og Chitubox installert.',
        bookable: false,
      },
    ],
  },
  {
    id: 'laser',
    label: 'Laser',
    color: 'text-amber-400 border-amber-800/50 bg-amber-950/20',
    items: [
      {
        name: '100w CO2 Laser',
        desc: 'Kutter og graverer i tre, leder, stoff, papir og fleire materiale. Stor arbeidsflate. Krev opplaering foer bruk.',
        img: '/demo/eikmakerspace/laser.jpg',
        bookable: true,
      },
    ],
  },
  {
    id: 'tre',
    label: 'Trearbeid',
    color: 'text-orange-400 border-orange-800/50 bg-orange-950/20',
    items: [
      {
        name: 'Bordsag',
        desc: 'Presisjonsaggregat for rette kapp og gjennomskjaering av bord.',
        img: '/demo/eikmakerspace/eq3.jpg',
      },
      {
        name: 'Bandsag',
        desc: 'For kurver, konturer og sagging av tjukkare materiale.',
        img: '/demo/eikmakerspace/eq4.jpg',
      },
      {
        name: 'Dreiebenk',
        desc: 'For dreiing av trea. Lag boller, bein og runde former.',
      },
      {
        name: 'Avretter og tykkelseshovl',
        desc: 'Faa plane og parallelle flater pa treplankane dine.',
      },
      {
        name: 'Valsepussemaskin',
        desc: 'Sliper store flater raskt og jamt.',
      },
      {
        name: 'Soylebormaskin',
        desc: 'For presise hol i rett vinkel.',
      },
      {
        name: 'Bandpussemaskin',
        desc: 'For forming og slipping av kantar og konturar.',
      },
      {
        name: 'Overhandsfresar',
        desc: 'Fresar profiler, not og falsar i tre.',
      },
      {
        name: 'Handverktoey',
        desc: 'Hamrar, sager, meislar, fil, skrutrekkjarar og meir.',
      },
    ],
  },
  {
    id: 'keramikk',
    label: 'Keramikk',
    color: 'text-rose-400 border-rose-800/50 bg-rose-950/20',
    items: [
      {
        name: 'Keramikkovn',
        desc: 'For brenann av keramikk og leirarbeid.',
        img: '/demo/eikmakerspace/eq5.jpg',
      },
      {
        name: 'Dreieskive',
        desc: 'Elektrisk dreieskive for pottemakeri.',
      },
      {
        name: 'Stopeformar',
        desc: 'Ulike former for slipstoyping.',
      },
    ],
  },
  {
    id: 'annet',
    label: 'Annet',
    color: 'text-teal-400 border-teal-800/50 bg-teal-950/20',
    items: [
      {
        name: 'Symaskin',
        desc: 'For tekstilarbeid og symprosjekt.',
      },
      {
        name: 'Silikonformar og epoxy resin',
        desc: 'Lag eigne formir og stoy i resin. Strope, lagg og pigment tilgjengeleg.',
      },
    ],
  },
]

function BookableBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-mono bg-green-950/60 border border-green-700/50 text-green-400 px-2 py-0.5 rounded-full">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
        <circle cx="4" cy="4" r="3" />
      </svg>
      Kan bookes
    </span>
  )
}

export default function UtstyrPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 bg-[#0a0a0a] border-b border-white/10"
        style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-3">Oversikt</div>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-white mb-4">Utstyr</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-6">
            Alt tilgjengeleg utstyr pa verkstedet. Medlemmar far tilgang til maskinane.
            Nokre maskinar krev opplaering foer foerste bruk.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demo/eikmakerspace/booking"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-mono font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book utstyr
            </Link>
            <Link
              href="/demo/eikmakerspace/bli-medlem"
              className="inline-flex items-center gap-2 border border-white/20 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 font-mono font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-start gap-3 bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <span className="text-amber-300 font-semibold">Berre for medlemmar:</span>
            <span className="text-gray-400 ml-1">
              Alle maskinar krev gyldig medlemsskap. Ikkje-medlemmar kan opphalde seg i lokalet, men ikkje bruke maskinane.
              Listene oppdaterast fortloppande.
            </span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
        {categories.map((cat) => (
          <div key={cat.id}>
            <div className="flex items-center gap-3 mb-6">
              <span className={`font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${cat.color}`}>
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group bg-[#161616] border border-white/10 hover:border-purple-500/30 rounded-xl overflow-hidden transition-all duration-300"
                >
                  {item.img ? (
                    <div className="relative h-44 bg-gray-800">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  ) : (
                    <div className="h-44 bg-gray-800 flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-white leading-snug text-sm">{item.name}</h3>
                      {item.bookable && <BookableBadge />}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    {item.bookable && (
                      <Link
                        href="/demo/eikmakerspace/booking"
                        className="mt-3 inline-block text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Book dette &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/10 bg-[#0a0a0a] py-16 px-4 sm:px-6 text-center">
        <h2 className="font-mono text-2xl font-bold text-white mb-3">Klar til a bruke utstyret?</h2>
        <p className="text-gray-400 mb-6">Meld deg inn og fa tilgang til alt verkstedet har a by pa.</p>
        <Link
          href="/demo/eikmakerspace/bli-medlem"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-mono font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Bli medlem
        </Link>
      </div>
    </div>
  )
}
