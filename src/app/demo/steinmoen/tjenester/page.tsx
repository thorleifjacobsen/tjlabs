import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tjenester – Steinmoen',
  description: 'Alt innen reklame og profilering. Skilter, bildekor, helfoliering, profiltøy og mer.',
  robots: 'noindex',
};

type Service = {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  image?: string;
};

const services: Service[] = [
  {
    num: '01',
    name: 'Skilter',
    desc: 'Vi produserer og monterer alle typer skilt, fra enkle fasadeskilt til store LED-konstruksjoner. Alt designes og tilpasses din bedriftsprofil.',
    tags: ['Fasadeskilt', 'LED-skilt', 'Utendørs', 'Oppheng & bøyler'],
  },
  {
    num: '02',
    name: 'Bildekor',
    desc: 'Gjør kjøretøyet til en vandrende reklametavle. Vi trykker og monterer logoer, produktbilder og arbeidsmotiver direkte på bilen. Holdbar folie med profesjonell finish.',
    tags: ['Logo', 'Produktbilder', 'Arbeidsbilder', 'Kjøretøy'],
    image: '/demo/steinmoen/project-agder.jpg',
  },
  {
    num: '03',
    name: 'Helfoliering',
    desc: 'Vil du endre bilens farge, gi den en matt finish eller profilere firmaet? Vi tilbyr helfoliering i et bredt spekter av farger og finish.',
    tags: ['Fargefolie', 'Matt finish', 'Firmaprofilering', 'Lakkbeskyttelse'],
    image: '/demo/steinmoen/project-yono.jpg',
  },
  {
    num: '04',
    name: 'Profiltøy',
    desc: 'Vi leverer profiltøy med trykk eller broderi fra ledende merkevarer. T-skjorter, jakker, capser, hettegensere, alt merkes med din logo.',
    tags: ['T-skjorter', 'Jakker', 'Capser', 'Hettegensere', 'Broderi & trykk'],
  },
  {
    num: '05',
    name: 'Trykksaker',
    desc: 'Fra visittkort til store plakater. Vi leverer trykksaker i høy kvalitet og hjelper deg med design og produksjon fra start til slutt.',
    tags: ['Visittkort', 'Brosjyrer', 'Plakater', 'Kataloger', 'Roll-ups'],
    image: '/demo/steinmoen/project-egde.jpg',
  },
  {
    num: '06',
    name: 'Interiør',
    desc: 'Gjør lokalene dine unike med interiørdekor fra Steinmoen. Vi leverer veggdekor, frostet folie til glass, akustiske paneler og printet tapet.',
    tags: ['Veggdekor', 'Frostet folie', 'Akustikkpaneler', 'Printet tapet'],
  },
  {
    num: '07',
    name: 'Taktil markering',
    desc: 'Vi leverer løsninger for universell utforming med ledelinjer, taktile kart og varselfelt. Tilpasset gjeldende krav og standarder.',
    tags: ['Ledelinjer', 'Varselfelt', 'Universell utforming', 'Offentlig sektor'],
  },
  {
    num: '08',
    name: 'Gave & Profilartikler',
    desc: 'Vi leverer giveaways, eksklusive firmagaver og profilartikler fra kjente merkevarer som Sagaform, Kosta Boda og Toppoint.',
    tags: ['Giveaways', 'Eksklusive gaver', 'Profilartikler', 'Merkevarer'],
  },
  {
    num: '09',
    name: 'Lakkbeskyttelse (PPF)',
    desc: 'Paint Protection Film (PPF) er en usynlig eller matt steinsprutfolie som beskytter bilens lakk mot steiner, riper og insekter. Selvrepararende.',
    tags: ['Steinsprutfolie', 'Selvrepararende', 'Usynlig PPF', 'Matt PPF'],
  },
  {
    num: '10',
    name: 'Solfilm',
    desc: 'Vi leverer og monterer solfilm for bil og bygg. Solfilm reduserer UV-stråling, holder temperaturen nede og gir økt personvern.',
    tags: ['UV-beskyttelse', 'Varmereduksjon', 'Personvern', 'Bil & bygg'],
    image: '/demo/steinmoen/project-veidekke.jpg',
  },
  {
    num: '11',
    name: 'Kataloger',
    desc: 'Vi har et bredt utvalg av kataloger innen profiltøy og gave- og profilartikler. Bla gjennom digitalt eller ta kontakt for prøver og tilbud.',
    tags: ['Profiltøy', 'Gave & profilartikler', 'Digitale kataloger'],
  },
];

export default function TjenesterPage() {
  return (
    <>
      {/* Page heading */}
      <div className="bg-white border-b border-[#e5e5e5] pt-28 pb-12 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-4">Hva vi gjør</p>
          <h1 className="font-black text-[#111] leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Tjenester
          </h1>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`border-b border-[#e5e5e5] ${i % 2 === 1 ? 'bg-[#f5f4f0]' : 'bg-white'}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Number + title */}
                <div className="md:col-span-4">
                  <span className="text-xs font-medium text-[#1a4fd6] tabular-nums block mb-3">{s.num}</span>
                  <h2 className="text-2xl md:text-3xl font-black text-[#111] mb-5">{s.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[#666] px-2 py-1"
                        style={{ border: '1px solid #ddd' }}
                      >
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
                    <div
                      className="flex items-center justify-center"
                      style={{ aspectRatio: '4/3', background: '#f0f0ee' }}
                    >
                      <span className="text-xs text-[#aaa]">Kontakt oss for mer info</span>
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
            <p className="text-white/50 text-sm">Ta kontakt med oss, og vi finner den beste løsningen for din bedrift.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/demo/steinmoen/kontakt"
              className="px-6 py-3 bg-[#1a4fd6] text-white text-sm font-semibold hover:bg-[#1f60ff] transition-colors"
            >
              Ta kontakt
            </Link>
            <a
              href="tel:37043896"
              className="px-6 py-3 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              Ring oss
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
