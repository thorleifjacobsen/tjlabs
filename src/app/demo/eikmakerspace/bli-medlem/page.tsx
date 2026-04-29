import Link from 'next/link'

export const metadata = { robots: 'noindex' }

const plans = [
  {
    id: 'ungdom',
    label: 'Ungdom',
    price: 100,
    note: 'Under 18 ar',
    highlight: false,
  },
  {
    id: 'voksen',
    label: 'Voksen',
    price: 250,
    note: '18 ar og eldre',
    highlight: true,
  },
  {
    id: 'familie-s',
    label: 'Familie',
    price: 350,
    note: '1 voksen + 2 barn',
    highlight: false,
  },
  {
    id: 'familie-l',
    label: 'Stor Familie',
    price: 400,
    note: '2 voksne + 2 barn',
    highlight: false,
  },
  {
    id: 'stoette',
    label: 'Stottemedlem',
    price: null,
    note: 'Selvvalt belop',
    highlight: false,
  },
]

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Eigen oppbevaringsboks',
    desc: 'Fa tilgang til din eigen store oppbevaringsboks pa verkstedet. Oppbevar prosjekta dine trygt mellom besok.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Forbruksmateriell',
    desc: 'Tilgang til delt forbruksmateriell som pussepapir, lim og anna. Del kostnadane, ikkje berre muligheitene.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Tilgang til alle maskinar',
    desc: 'Bruk laser, 3D-printerar, trearbeidsmaskinane og alt anna utstyr pa verkstedet. Nokre krev opplaering.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Del av eit fellesskap',
    desc: 'Moet andre skapere, del kunnskap og hjelp kvarandre. Delta pa aktivitetar og arrangement.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Booking av utstyr',
    desc: 'Reserver tidsluker pa populaert utstyr som laseren og 3D-printarane pa nettsida.',
  },
]

export default function BliMedlemPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 bg-[#0a0a0a] border-b border-white/10"
        style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-4">Bli del av verkstedet</div>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-white mb-5">Bli Medlem</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Fa tilgang til alt utstyr pa Eik Makerspace. Del kostnadane, ikkje berre muligheitene.
            Ingen er betalt her, alt driftas pa dugnad.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Pricing */}
        <div className="mb-16">
          <h2 className="font-mono text-2xl font-bold text-white mb-2">Pris per maned</h2>
          <p className="text-gray-400 text-sm mb-8">Betaling skjer via Vipps eller bankoverforsel.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-xl p-6 border transition-all ${
                  plan.highlight
                    ? 'bg-purple-950/30 border-purple-500/50'
                    : 'bg-[#161616] border-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-mono px-3 py-1 rounded-full">
                      Vanlegast
                    </span>
                  </div>
                )}
                <div className="font-mono text-3xl font-bold text-white mb-1">
                  {plan.price !== null ? (
                    <>
                      {plan.price}
                      <span className="text-base text-gray-400 font-normal"> kr/mnd</span>
                    </>
                  ) : (
                    <span className="text-xl">Valgfritt</span>
                  )}
                </div>
                <div className="font-semibold text-gray-200 mb-1">{plan.label}</div>
                <div className="text-sm text-gray-500">{plan.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="font-mono text-2xl font-bold text-white mb-8">Kva far du som medlem?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 bg-[#161616] border border-white/10 rounded-xl p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-800/40 flex items-center justify-center text-purple-400">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{b.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Non-members note */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 mb-16">
          <h3 className="font-mono font-semibold text-gray-200 mb-3">Kva med ikkje-medlemmar?</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Alle er velkomne til a opphalde seg i lokalet og sja kva vi driv med. Ikkje-medlemmar kan
            derimot <span className="text-white font-semibold">ikkje</span> bruke maskinane. Vil du prove deg
            fram eller er du usikker pa om dette er noko for deg? Stikk innom ein av dei aapne kveldane,
            prat med oss, og meld deg inn om det passar.
          </p>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #1a0a3a 0%, #0f1a2a 100%)', backgroundImage: 'radial-gradient(rgba(124,58,237,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white mb-4">
            Klar til a melde deg inn?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto leading-relaxed">
            Send oss ein e-post med kva type medlemsskap du vil ha, og kva du heiter. Vi ordnar resten.
          </p>
          <a
            href="mailto:eik-makerspace@outlook.com?subject=Nytt%20medlemsskap%20Eik%20Makerspace"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-mono font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send e-post for a bli medlem
          </a>
          <p className="mt-4 text-xs text-gray-600">
            eik-makerspace@outlook.com
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold text-white mb-8">Vanlige sporsmal</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kvar betaler eg?',
                a: 'Betaling skjer via Vipps eller bankoverforsel. Vi sender detaljar nar du melder deg inn.',
              },
              {
                q: 'Krev maskinane opplaering?',
                a: 'Nokre maskinar, som laseren, krev kort opplaering foer foerste bruk. Dette arrangerer vi pa dugnad.',
              },
              {
                q: 'Kan eg melde meg inn midt i manaden?',
                a: 'Ja, vi fakturerer fraa den datoen du melder deg inn.',
              },
              {
                q: 'Kva skjer om eg vil melde meg ut?',
                a: 'Du kan melde deg ut nar som helst. Send oss ein e-post, og vi avsluttar medlemsskapet ditt.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#161616] border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/demo/eikmakerspace/utstyr"
            className="text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors"
          >
            &larr; Se kva utstyr vi har
          </Link>
        </div>
      </div>
    </div>
  )
}
