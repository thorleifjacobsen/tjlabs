import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollToTop from '../ScrollToTop';

export const metadata: Metadata = {
  title: 'Tjenester – Steinmoen',
  description: 'Alt innen reklame og profilering. Skilter, bildekor, helfoliering, profiltøy og mer.',
  robots: 'noindex',
};

type Service = {
  num: string;
  name: string;
  slug: string;
  desc: string;
  tags: string[];
  image?: string;
};

const services: Service[] = [
  {
    num: '01', name: 'Skilter', slug: 'skilter',
    desc: 'Fasadeskilt, LED-konstruksjoner og alt imellom. Vi produserer og monterer, og tilpasser alt til din profil.',
    tags: ['Fasadeskilt', 'LED-skilt', 'Utendørs', 'Oppheng & bøyler'],
  },
  {
    num: '02', name: 'Bildekor', slug: 'bildekor',
    desc: 'Logo, produktbilder og arbeidsbilder montert direkte på kjøretøyet. Varig folie og ren finish.',
    tags: ['Logo', 'Produktbilder', 'Arbeidsbilder', 'Kjøretøy'],
    image: '/demo/steinmoen/project-agder.jpg',
  },
  {
    num: '03', name: 'Helfoliering', slug: 'helfoliering',
    desc: 'Bytt farge, gå matt eller wrap for firmaet. Vi folder i alle farger og finisher.',
    tags: ['Fargefolie', 'Matt finish', 'Firmaprofilering', 'Lakkbeskyttelse'],
    image: '/demo/steinmoen/project-yono.jpg',
  },
  {
    num: '04', name: 'Profiltøy', slug: 'profiltoy',
    desc: 'T-skjorter, jakker, capser og hettegensere med ditt logo. Trykk eller broderi fra merkevarer vi kjenner godt.',
    tags: ['T-skjorter', 'Jakker', 'Capser', 'Hettegensere', 'Broderi & trykk'],
  },
  {
    num: '05', name: 'Trykksaker', slug: 'trykksaker',
    desc: 'Visittkort, brosjyrer, plakater og roll-ups. Vi hjelper med design, trykk og levering.',
    tags: ['Visittkort', 'Brosjyrer', 'Plakater', 'Kataloger', 'Roll-ups'],
    image: '/demo/steinmoen/project-egde.jpg',
  },
  {
    num: '06', name: 'Interiør', slug: 'interior',
    desc: 'Veggdekor, frostet folie på glass, akustikk og printet tapet. Identitet inne, ikke bare ute.',
    tags: ['Veggdekor', 'Frostet folie', 'Akustikkpaneler', 'Printet tapet'],
  },
  {
    num: '07', name: 'Taktil markering', slug: 'taktil',
    desc: 'Ledelinjer, taktile kart og varselfelt etter gjeldende krav. Vi vet hva som trengs og ordner det.',
    tags: ['Ledelinjer', 'Varselfelt', 'Universell utforming', 'Offentlig sektor'],
  },
  {
    num: '08', name: 'Gave & Profilartikler', slug: 'gave',
    desc: 'Giveaways og firmagaver fra Sagaform, Kosta Boda, Toppoint og flere. Noe å huske oss på.',
    tags: ['Giveaways', 'Firmagaver', 'Profilartikler', 'Merkevarer'],
  },
  {
    num: '09', name: 'Lakkbeskyttelse (PPF)', slug: 'ppf',
    desc: 'Usynlig eller matt folie som beskytter lakken mot steiner, riper og insekter. Reparerer seg selv.',
    tags: ['Steinsprutfolie', 'Selvrepararende', 'Usynlig PPF', 'Matt PPF'],
  },
  {
    num: '10', name: 'Solfilm', slug: 'solfilm',
    desc: 'Solfilm for bil og bygg. Kutter UV-stråling, demper varme og gir mer privatliv.',
    tags: ['UV-beskyttelse', 'Varmereduksjon', 'Personvern', 'Bil & bygg'],
    image: '/demo/steinmoen/project-veidekke.jpg',
  },
  {
    num: '11', name: 'Kataloger', slug: 'kataloger',
    desc: 'Bla gjennom katalogene våre digitalt. Ta kontakt for prøver, priser og bestilling med ditt logo.',
    tags: ['Profiltøy', 'Gave & profilartikler', 'Digitale kataloger'],
  },
];

export default function TjenesterPage() {
  return (
    <>
      {/* Page heading */}
      <div className="bg-white border-b border-[#e5e5e5] pt-28 pb-0 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto pb-10">
          <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-4">Hva vi gjør</p>
          <h1 className="font-black text-[#111] leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Tjenester
          </h1>
        </div>

        {/* Quick-nav overview */}
        <nav className="max-w-[1200px] mx-auto border-t border-[#e5e5e5] py-4">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-3">Hopp til</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="text-sm text-[#666] hover:text-[#1a4fd6] transition-colors duration-150 flex items-baseline gap-1.5"
              >
                <span className="text-[10px] text-[#1a4fd6] tabular-nums">{s.num}</span>
                {s.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Services list */}
      <div className="bg-white">
        {services.map((s, i) => (
          <div
            key={s.slug}
            id={s.slug}
            className={`border-b border-[#e5e5e5] ${i % 2 === 1 ? 'bg-[#f5f4f0]' : 'bg-white'}`}
            style={{ scrollMarginTop: '80px' }}
          >
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Number + title + tags */}
                <div className="md:col-span-4">
                  <span className="text-xs font-medium text-[#1a4fd6] tabular-nums block mb-3">{s.num}</span>
                  <h2 className="text-2xl md:text-3xl font-black text-[#111] mb-5">{s.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs text-[#666] px-2 py-1" style={{ border: '1px solid #ddd' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-4 flex items-start">
                  <p className="text-[#666] text-sm" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                </div>

                {/* Image */}
                <div className="md:col-span-4">
                  {s.image ? (
                    <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center" style={{ aspectRatio: '4/3', background: '#f0f0ee' }}>
                      <span className="text-xs text-[#bbb]">Kontakt oss for mer info</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#0f1f3d] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Klar for et tilbud?</h3>
            <p className="text-white/50 text-sm">Ring, skriv eller stikk innom. Vi ordner resten.</p>
          </div>
          <div className="flex gap-4">
            <a href="/demo/steinmoen/kontakt#kontakt-form" className="px-6 py-3 bg-[#1a4fd6] text-white text-sm font-semibold hover:bg-[#1f60ff] transition-colors">
              Ta kontakt
            </a>
            <a href="tel:37043896" className="px-6 py-3 text-white text-sm font-semibold hover:bg-white/10 transition-colors" style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}>
              Ring oss
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
}
