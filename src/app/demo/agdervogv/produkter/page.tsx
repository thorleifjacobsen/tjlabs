import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produkter | Agder Varme og Vedlikehold',
  description:
    'Varmepumper fra Mitsubishi Electric, Panasonic, Toshiba og Daikin. Ring for tilbud.',
  robots: 'noindex',
};

const BASE = '/demo/agdervogv';

const brands = [
  {
    name: 'Mitsubishi Electric',
    tagline: 'Utmerket ytelse i kaldt klima',
    desc: 'Pålitelige pumper med god varmeytelse også ved lave utetemperaturer. Populær i norske hjem og kjent for stilig design og intuitiv betjening.',
    logo: `${BASE}/mitsubishi-electric.svg`,
  },
  {
    name: 'Panasonic',
    tagline: 'Stille og effektiv drift',
    desc: 'God effekt og lavt støynivå. Spesielt sterk på oppvarming ved lave utetemperaturer, noe som gjør den velegnet for innlandet.',
    logo: `${BASE}/panasonic.svg`,
  },
  {
    name: 'Toshiba',
    tagline: 'Driftsikker hele vinteren',
    desc: 'Effektive og pålitelige pumper med god varmeytelse gjennom hele vintersesongen. Kjent for robust konstruksjon og lang levetid.',
    logo: `${BASE}/toshiba.svg`,
  },
  {
    name: 'Daikin',
    tagline: 'Markedsleder i Europa',
    desc: 'Japansk kvalitet og ingeniørkunst. Kjent for høy energieffektivitet, lang levetid og et bredt utvalg modeller for alle boligstørrelser.',
    logo: `${BASE}/daikin.svg`,
  },
];

const guideItems = [
  {
    step: '1',
    title: 'Boligens størrelse',
    desc: 'Antall kvadratmeter og etasjer avgjør hvilken kapasitet du trenger. Vi hjelper deg beregne riktig dimensjon.',
  },
  {
    step: '2',
    title: 'Isolasjonsstandard',
    desc: 'Et godt isolert hus trenger en mindre pumpe. Et eldre hus kan trenge en større modell for å holde varmen.',
  },
  {
    step: '3',
    title: 'Budsjett',
    desc: 'Prisene varierer mellom modeller og merker. Vi finner det beste alternativet innenfor ditt budsjett.',
  },
  {
    step: '4',
    title: 'Plassering og fasade',
    desc: 'Noen plasseringer er mer krevende enn andre. Vi vurderer dette på befaring og gir deg ærlig råd.',
  },
];

export default function ProdukterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f8fafc] border-b border-[#e2e8f0] py-10 md:py-16">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
            Produkter
          </p>
          <h1 className="font-bold text-[#1e293b] leading-tight mb-4" style={{ fontSize: '2.5rem' }}>
            Ledende merker
          </h1>
          <p className="text-[#64748b] max-w-xl">
            Vi leverer og monterer varmepumper fra fire utvalgte produsenter. Vi hjelper deg velge
            riktig modell basert på din bolig, ditt budsjett og lokale forhold i Vegårshei og omegn.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {brands.map((b) => (
              <div
                key={b.name}
                className="rounded-lg border border-slate-200 shadow-sm bg-white overflow-hidden"
              >
                {/* Brand header with logo */}
                <div className="bg-[#f8fafc] border-b border-[#e2e8f0] px-5 py-5 flex items-center gap-4">
                  <div className="w-28 flex-shrink-0 flex items-center">
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1e293b] text-base leading-tight">{b.name}</p>
                    <p className="text-[#ea580c] text-xs font-semibold mt-0.5">{b.tagline}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-[#64748b] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service other brands note */}
          <div className="mt-6 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] p-5 flex gap-3 items-start">
            <svg className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <p className="font-semibold text-[#1e293b] mb-0.5">Vi servicer alle merker</p>
              <p className="text-sm text-[#64748b]">
                Har du allerede en varmepumpe av et annet merke? Vi utfører service, feilsøking og
                reparasjon på alle modeller og merker, uansett alder.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-[#fff7ed] border border-orange-200 p-5">
            <p className="font-semibold text-[#1e293b] mb-1">Priser varierer etter modell</p>
            <p className="text-sm text-[#64748b]">
              Vi gir aldri generelle priser fordi riktig modell og pris avhenger av din bolig.
              Kontakt oss for et uforpliktende tilbud etter befaring.
            </p>
          </div>
        </div>
      </section>

      {/* Buying guide */}
      <section className="py-10 md:py-16 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
              Kjøpsguide
            </p>
            <h2 className="font-bold text-[#1e293b] leading-tight mb-3" style={{ fontSize: '1.75rem' }}>
              Hva påvirker valget?
            </h2>
            <p className="text-[#64748b] max-w-xl">
              Det er flere faktorer som avgjør hvilken modell som er best for deg. Vi
              går gjennom alle disse på befaring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {guideItems.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="w-9 h-9 rounded-full bg-[#ea580c] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1e293b] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="rounded-lg bg-[#ea580c] p-8 sm:p-10 text-center">
            <h2 className="font-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>
              Få pris på riktig pumpe
            </h2>
            <p className="text-orange-100 mb-6 max-w-md mx-auto">
              Ring oss for gratis befaring. Vi finner den beste løsningen for din bolig og ditt budsjett.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:97123554"
                className="inline-flex items-center gap-2.5 bg-white text-[#ea580c] font-bold px-7 py-4 rounded-lg hover:bg-orange-50 transition-colors text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
                </svg>
                Ring 97 12 35 54
              </a>
              <a
                href={`${BASE}/kontakt`}
                className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-semibold px-6 py-4 rounded-lg transition-colors text-base"
              >
                Send melding
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
