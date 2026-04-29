import Link from 'next/link'

export const metadata = { robots: 'noindex' }

const plans = [
  { id: 'ungdom', label: 'Ungdom', price: 100, note: 'Under 18 ar', highlight: false },
  { id: 'voksen', label: 'Voksen', price: 250, note: '18 ar og eldre', highlight: true },
  { id: 'familie-s', label: 'Familie', price: 350, note: '1 voksen + 2 barn', highlight: false },
  { id: 'familie-l', label: 'Stor Familie', price: 400, note: '2 voksne + 2 barn', highlight: false },
  { id: 'stoette', label: 'Stottemedlem', price: null, note: 'Selvvalt belop', highlight: false },
]

const benefits = [
  {
    title: 'Eigen oppbevaringsboks',
    desc: 'Tilgang til din eigen store oppbevaringsboks pa verkstedet. Oppbevar prosjekta trygt mellom besok.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: 'Forbruksmateriell',
    desc: 'Tilgang til delt forbruksmateriell som pussepapir, lim og anna. Del kostnadane, ikkje berre muligheitene.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Tilgang til alle maskinar',
    desc: 'Bruk laser, 3D-printerar, trearbeidsmaskinane og alt anna utstyr. Nokre maskinar krev ei kort opplaering.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Del av eit fellesskap',
    desc: 'Meet andre skapere, del kunnskap og hjelp kvarandre. Delta pa aktivitetar og arrangement.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Online booking av utstyr',
    desc: 'Reserver tidsluker pa laseren og 3D-printarane via nettsida. Slipp kø og planlegg prosjekta dine.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
]

export default function BliMedlemPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-4">Bli del av verkstedet</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Bli Medlem</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Faa tilgang til alt utstyr pa Eik Makerspace. Del kostnadane, ikkje berre muligheitene.
            Ingen er betalt her, alt driftas paa dugnad.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Pris per maned</h2>
          <p className="text-gray-500 text-sm mb-7">Betaling via Vipps eller bankoverforsel.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 border transition-all ${
                  plan.highlight
                    ? 'border-green-300 bg-green-50 shadow'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-5">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Mest valgt
                    </span>
                  </div>
                )}
                <div className="text-3xl font-bold text-gray-900 mb-1 tabular-nums">
                  {plan.price !== null ? (
                    <>
                      {plan.price}
                      <span className="text-base font-normal text-gray-400"> kr/mnd</span>
                    </>
                  ) : (
                    <span className="text-2xl">Valgfritt</span>
                  )}
                </div>
                <div className="font-semibold text-gray-700 text-sm">{plan.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{plan.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-7">Kva faar du som medlem?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Non-members note */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">Kva med ikkje-medlemmar?</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Alle er velkomne til aa opphalde seg i lokalet og sja kva vi held paa med.
            Ikkje-medlemmar kan derimot <strong className="text-gray-700">ikkje</strong> bruke maskinane.
            Vil du prove deg fram? Stikk innom ein av dei aapne kveldane og meld deg inn om det passar.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-green-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Klar til aa melde deg inn?
          </h2>
          <p className="text-green-100 mb-7 max-w-md mx-auto text-[15px] leading-relaxed">
            Send oss ein e-post med kva type medlemsskap du vil ha og kva du heiter. Vi ordnar resten.
          </p>
          <a
            href="mailto:eik-makerspace@outlook.com?subject=Nytt%20medlemsskap%20Eik%20Makerspace"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-7 py-3 rounded-xl text-sm shadow hover:bg-green-50 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send e-post
          </a>
          <p className="mt-3 text-green-200 text-xs">eik-makerspace@outlook.com</p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">Vanlige sporsmal</h2>
          <div className="space-y-3">
            {[
              { q: 'Kvar betaler eg?', a: 'Betaling via Vipps eller bankoverforsel. Vi sender detaljar nar du melder deg inn.' },
              { q: 'Krev maskinane opplaering?', a: 'Nokre maskinar, som laseren, krev ei kort opplaering foer foerste bruk. Dette arrangerer vi paa dugnad.' },
              { q: 'Kan eg melde meg inn midt i manaden?', a: 'Ja, vi fakturerer fraa den datoen du melder deg inn.' },
              { q: 'Kva skjer om eg vil melde meg ut?', a: 'Send oss ein e-post, og vi avsluttar medlemsskapet ditt naar som helst.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/demo/eikmakerspace/utstyr" className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors">
            &larr; Sjaa kva utstyr vi har
          </Link>
        </div>
      </div>
    </div>
  )
}
