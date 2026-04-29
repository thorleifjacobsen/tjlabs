import Image from 'next/image'
import Link from 'next/link'

export const metadata = { robots: 'noindex' }

type EquipItem = {
  name: string
  desc: string
  img?: string
  bookable?: boolean
}

const categories: { id: string; label: string; items: EquipItem[] }[] = [
  {
    id: '3d',
    label: '3D Printing',
    items: [
      {
        name: 'Bambu Lab X1 Carbon',
        desc: 'Rask og presis filamentprinter. Støtter PLA, PETG, ABS og flere materialer. Multifarge-kompatibel.',
        bookable: true,
      },
      {
        name: 'Anycubic Photon M3 Max',
        desc: 'Stor resin-printer for høyoppløsningsmodeller. Perfekt for miniatyrer, smykker og detaljerte figurer.',
        img: '/demo/eikmakerspace/eq5.jpg',
        bookable: true,
      },
      {
        name: 'Datamaskiner til 3D-modellering',
        desc: 'Flere maskiner med Fusion 360, Blender, Bambu Studio og Chitubox installert.',
      },
    ],
  },
  {
    id: 'laser',
    label: 'Laser',
    items: [
      {
        name: '100w CO2 Laser',
        desc: 'Kutter og graverer i tre, lær, stoff, papir og flere materialer. Stor arbeidsflate. Krever opplæring før bruk.',
        img: '/demo/eikmakerspace/eq1.jpg',
        bookable: true,
      },
    ],
  },
  {
    id: 'tre',
    label: 'Trearbeid',
    items: [
      {
        name: 'Bordsag',
        desc: 'Presisjonsaggregat for rette kapp og gjennomskjæring av bord.',
        img: '/demo/eikmakerspace/eq4.jpg',
      },
      {
        name: 'Bandsag',
        desc: 'For kurver, konturer og saging av tykkere materialer.',
      },
      { name: 'Dreiebenk', desc: 'Lag boller, bein og runde former i tre.' },
      { name: 'Avretter og tykkelseshøvl', desc: 'Få plane og parallelle flater på treplanker.', img: '/demo/eikmakerspace/eq2.jpg' },
      { name: 'Valsepussemaskin', desc: 'Sliper store flater raskt og jevnt.' },
      { name: 'Søylebormaskin', desc: 'For presise hull i rett vinkel.' },
      { name: 'Bandpussemaskin', desc: 'For forming og slipping av kanter og konturer.', img: '/demo/eikmakerspace/eq3.jpg' },
      { name: 'Overhandsfreser', desc: 'Fresing av profiler, not og falser i tre.' },
      { name: 'Håndverktøy', desc: 'Hammere, sager, meisler, fil, skrutrekkere og mer.' },
    ],
  },
  {
    id: 'keramikk',
    label: 'Keramikk',
    items: [
      { name: 'Keramikkovn', desc: 'For brenning av keramikk og leirarbeid.' },
      { name: 'Dreieskive', desc: 'Elektrisk dreieskive for pottemakeri.' },
      { name: 'Støpeformer', desc: 'Ulike former for slipestøping.' },
    ],
  },
  {
    id: 'annet',
    label: 'Annet',
    items: [
      { name: 'Symaskin', desc: 'For tekstilarbeid og symprosjekter.' },
      { name: 'Silikonformer og epoxy resin', desc: 'Lag egne former og støp i resin. Strips, lim og pigment tilgjengelig.' },
    ],
  },
]

function PlaceholderImg({ label }: { label: string }) {
  return (
    <div className="w-full h-44 bg-gray-100 flex flex-col items-center justify-center gap-2">
      <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  )
}

export default function UtstyrPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-4">Oversikt</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Utstyr</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-6">
            Alt tilgjengelig utstyr på verkstedet. Bare medlemmer kan bruke maskinene.
            Listene oppdateres fortløpende.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demo/eikmakerspace/booking"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book utstyr
            </Link>
            <Link
              href="/demo/eikmakerspace/bli-medlem"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-sm"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </div>

      {/* Notice */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-5">
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span className="text-amber-800">
            Alle maskiner krever gyldig medlemskap. Ikke-medlemmer kan oppholde seg i lokalet, men <strong>ikke</strong> bruke maskinene.
          </span>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-20 space-y-14">
        {categories.map((cat) => (
          <div key={cat.id}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg font-semibold text-gray-900">{cat.label}</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-shadow duration-200"
                >
                  {item.img ? (
                    <div className="relative h-44 bg-gray-100">
                      <Image src={item.img} alt={item.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <PlaceholderImg label={item.name} />
                  )}

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug">{item.name}</h3>
                      {item.bookable && (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded-full">
                          <svg width="6" height="6" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="3" /></svg>
                          Kan bookes
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                    {item.bookable && (
                      <Link href="/demo/eikmakerspace/booking" className="text-xs font-semibold text-green-700 hover:text-green-800 transition-colors">
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
      <div className="border-t border-gray-200 bg-gray-50 py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Klar til å bruke utstyret?</h2>
        <p className="text-gray-500 mb-6">Meld deg inn og få tilgang til alt verkstedet har å by på.</p>
        <Link href="/demo/eikmakerspace/bli-medlem" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm shadow-sm">
          Bli medlem
        </Link>
      </div>
    </div>
  )
}
