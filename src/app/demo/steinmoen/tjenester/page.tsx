import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tjenester – Steinmoen',
  description: 'Alt innen reklame og profilering. Skilter, bildekor, helfoliering, profiltøy og mer.',
  robots: 'noindex',
};

const services = [
  {
    num: '01',
    name: 'Skilter',
    desc: 'Vi produserer og monterer alle typer skilt — fra enkle fasadeskilt til store LED-konstruksjoner. Vi tilbyr fasadeskilt, LED-skilt, utendørs reklameskilt, oppheng og bøyler. Alt designes og tilpasses din bedriftsprofil.',
    tags: ['Fasadeskilt', 'LED-skilt', 'Utendørs', 'Oppheng & bøyler'],
  },
  {
    num: '02',
    name: 'Bildekor',
    desc: 'Gjør kjøretøyet til en vandrende reklametavle. Vi trykker og monterer logoer, produktbilder og arbeidsmotiver direkte på bilen. Holdbar folie med profesjonell finish som varer i mange år.',
    tags: ['Logo', 'Produktbilder', 'Arbeidsbilder', 'Kjøretøy'],
    image: '/demo/steinmoen/project-agder.jpg',
  },
  {
    num: '03',
    name: 'Helfoliering',
    desc: 'Vil du endre bilens farge, gi den en matt finish eller profilere firmaet? Vi tilbyr helfoliering i et bredt spekter av farger og finish. Perfekt for firmaprofil eller beskyttelse av original lakk.',
    tags: ['Fargefolie', 'Matt finish', 'Firmaprofilering', 'Lakkbeskyttelse'],
    image: '/demo/steinmoen/project-yono.jpg',
  },
  {
    num: '04',
    name: 'Profiltøy',
    desc: 'Vi leverer profiltøy med trykk eller broderi fra ledende merkevarer. T-skjorter, jakker, capser, hettegensere — alt merkes med din logo for et helhetlig og profesjonelt uttrykk.',
    tags: ['T-skjorter', 'Jakker', 'Capser', 'Hettegensere', 'Broderi & trykk'],
  },
  {
    num: '05',
    name: 'Trykksaker',
    desc: 'Fra visittkort til store plakater — vi leverer trykksaker i høy kvalitet. Brosjyrer, flyers, kataloger, roll-ups og mye mer. Vi hjelper deg med design og produksjon fra start til slutt.',
    tags: ['Visittkort', 'Brosjyrer', 'Plakater', 'Kataloger', 'Roll-ups'],
    image: '/demo/steinmoen/project-egde.jpg',
  },
  {
    num: '06',
    name: 'Interiør',
    desc: 'Gjør lokalene dine unike med interiørdekor fra Steinmoen. Vi leverer veggdekor, frostet folie til glass og skillevegger, akustiske paneler og printet tapet i stort format.',
    tags: ['Veggdekor', 'Frostet folie', 'Akustikkpaneler', 'Printet tapet'],
  },
  {
    num: '07',
    name: 'Taktil markering',
    desc: 'Vi leverer løsninger for universell utforming — ledelinjer, taktile kart og varselfelt som hjelper synshemmede og orienterer alle brukere i bygg og offentlige rom. Tilpasset gjeldende krav og standarder.',
    tags: ['Ledelinjer', 'Varselfelt', 'Universell utforming', 'Offentlig sektor'],
  },
  {
    num: '08',
    name: 'Gave & Profilartikler',
    desc: 'Gi bort noe som huskes. Vi leverer giveaways, eksklusive firmagaver og profilartikler fra kjente merkevarer som Sagaform, Kosta Boda, Toppoint og mange flere. La oss hjelpe deg finne rett gave til rett anledning.',
    tags: ['Giveaways', 'Eksklusive gaver', 'Profilartikler', 'Merkevarer'],
  },
  {
    num: '09',
    name: 'Lakkbeskyttelse (PPF)',
    desc: 'Paint Protection Film (PPF) er en usynlig eller matt steinsprutfolie som beskytter bilens lakk mot steiner, riper og insekter. Filmen er selvrepararende og gir din bil lang levetid med originalt utseende.',
    tags: ['Steinsprutfolie', 'Selvrepararende', 'Usynlig PPF', 'Matt PPF'],
  },
  {
    num: '10',
    name: 'Solfilm',
    desc: 'Vi leverer og monterer solfilm for bil og bygg. Solfilm reduserer UV-stråling, holder temperaturen nede og gir økt personvern. Tilgjengelig i ulike styrker og nyanser, tilpasset ditt behov.',
    tags: ['UV-beskyttelse', 'Varmereduksjon', 'Personvern', 'Bil & bygg'],
    image: '/demo/steinmoen/project-veidekke.jpg',
  },
  {
    num: '11',
    name: 'Kataloger',
    desc: 'Vi har et bredt utvalg av kataloger innen profiltøy og gave- og profilartikler fra de ledende leverandørene. Bla gjennom katalogene digitalt eller ta kontakt for å bestille prøver og tilbud.',
    tags: ['Profiltøy', 'Gave & profilartikler', 'Digitale kataloger'],
  },
];

export default function TjenesterPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .tjenester-page * { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="tjenester-page bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
        {/* Page header */}
        <div className="pt-32 pb-16 px-6 md:px-10 border-b border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs text-[#888] uppercase tracking-[0.2em] mb-4">Hva vi gjør</p>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#f5f5f5] leading-[0.92] tracking-tight">
              Tjenester
            </h1>
          </div>
        </div>

        {/* Services list */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
          {services.map((s, i) => (
            <div key={s.num}>
              <div className="py-12 border-b border-[#1a1a1a] grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Number + name */}
                <div className="md:col-span-4">
                  <span className="text-xs text-[#444] tabular-nums block mb-3">{s.num}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-4">{s.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs text-[#888] border border-[#2a2a2a] px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-[#888] text-sm leading-relaxed">{s.desc}</p>
                </div>

                {/* Image (if available) */}
                <div className="md:col-span-4">
                  {s.image ? (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-800">
                      <Image src={s.image} alt={s.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-[#111111] border border-[#1a1a1a] flex items-center justify-center">
                      <span className="text-[#444] text-xs">Kontakt oss for mer info</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#111111] border-t border-[#1a1a1a] px-6 md:px-10 py-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f5] mb-2">Klar for et tilbud?</h3>
              <p className="text-[#888] text-sm">Ta kontakt med Mats, og vi finner den beste løsningen for din bedrift.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="/demo/steinmoen#kontakt"
                className="text-sm font-medium px-6 py-3 bg-[#e8e020] text-[#0a0a0a] hover:bg-white transition-colors"
              >
                Ta kontakt
              </a>
              <a
                href="tel:97799524"
                className="text-sm font-medium px-6 py-3 border border-[#2a2a2a] text-[#f5f5f5] hover:border-[#888] transition-colors"
              >
                Ring Mats
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
