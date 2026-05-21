import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produkter | Agder Varme og Vedlikehold',
  description:
    'Varmepumper fra Daikin, Mitsubishi Electric, Panasonic, Fujitsu og Samsung. Ring for tilbud.',
  robots: 'noindex',
};

const BASE = '/demo/agdervogv';

const brands = [
  {
    name: 'Daikin',
    tagline: 'Markedsleder i Europa',
    desc: 'Japansk kvalitet og ingeniorkunst. Kjent for hoy energieffektivitet, lang levetid og et bredt utvalg modeller for alle boligstørrelser. Et trygt valg.',
  },
  {
    name: 'Mitsubishi Electric',
    tagline: 'Utmerket kaldtklima-ytelse',
    desc: 'Svart palitelige pumper med god varmeytelse i kaldt klima. Populaer i norske hjem og kjent for stilig design og intuitiv betjening.',
  },
  {
    name: 'Panasonic',
    tagline: 'Stille og effektiv drift',
    desc: 'God effekt og lav støynivået. Spesielt sterk på oppvarming ved lave utetemperaturer, noe som gjør den velegnet for innlandet.',
  },
  {
    name: 'Fujitsu',
    tagline: 'Driftsikker hele vinteren',
    desc: 'Effektive og palitelige pumper med god varmeytelse gjennom hele vintersesongen. Kjent for robust konstruksjon og lang levetid.',
  },
  {
    name: 'Samsung',
    tagline: 'Smart styring og moderne design',
    desc: 'Moderne design med smart styring via app. Egner seg godt for hus der man ønsker integrert klimakontroll og fjernbetjening.',
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
    desc: 'Noen plasseringer er mer krevende enn andre. Magnus vurderer dette på befaring og gir deg ærlig råd.',
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
            Vi leverer og monterer varmepumper fra de beste produsentene. Vi hjelper deg velge
            riktig modell basert på din bolig, ditt budsjett og lokale forhold i Vegårshei og omegn.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((b) => (
              <div
                key={b.name}
                className="rounded-lg border border-slate-200 shadow-sm bg-white overflow-hidden"
              >
                {/* Brand header */}
                <div className="bg-[#f8fafc] border-b border-[#e2e8f0] px-5 py-4">
                  <p className="font-bold text-[#1e293b] text-lg">{b.name}</p>
                  <p className="text-[#ea580c] text-xs font-semibold">{b.tagline}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-[#64748b] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-[#fff7ed] border border-orange-200 p-5">
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
              Kjopsguide
            </p>
            <h2 className="font-bold text-[#1e293b] leading-tight mb-3" style={{ fontSize: '1.75rem' }}>
              Hva pavirker valget?
            </h2>
            <p className="text-[#64748b] max-w-xl">
              Det er flere faktorer som avgjør hvilken modell som er best for deg. Magnus
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
              Fa pris på riktig pumpe
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
