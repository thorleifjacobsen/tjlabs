export const metadata = {
  title: 'Prosjekter - Kåre Eriksen AS',
  description: 'Se noen av prosjektene Kåre Eriksen AS har gjennomført. Brannstasjon, næringsbygg, boliger og mer.',
  robots: 'noindex',
};

const BASE = '/demo/kare-eriksen';

const projects = [
  {
    img: '/demo/kare-eriksen/project1.jpg',
    alt: 'Brannstasjon Vegårshei',
    tag: 'Totalentreprise',
    title: 'Brannstasjon, Vegårshei',
    desc: 'Da var brannstasjonen på Vegårshei overlevert og i drift. Jobb vi har gjort i samarbeid med ERE Entreprenør.',
    year: '2020',
  },
  {
    img: '/demo/kare-eriksen/project2.jpg',
    alt: 'Kontor- og lagerbygg, Arendals Fossekompani ASA',
    tag: 'Næringsbygg',
    title: 'Kontor- og lagerbygg, Arendals Fossekompani ASA',
    desc: 'Nytt kontor- og lagerbygg for Arendals Fossekompani ASA. Profesjonell utførelse med høye krav til kvalitet og fremdrift.',
    year: '2014',
  },
  {
    img: '/demo/kare-eriksen/project3.jpg',
    alt: 'Boligprosjekt Arendal',
    tag: 'Tilbygg og renovering',
    title: 'Boligprosjekt, Arendal',
    desc: 'Tilbygg og innvendig renovering av enebolig i Arendal. Utvidet boligarealet med stue og nytt bad, levert på tid og innenfor budsjett.',
    year: '',
  },
];

export default function ProsjekterPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-14 md:py-20 border-b border-slate-100"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: '#c8820a' }}
          >
            Referanser
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Våre prosjekter
          </h1>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Her er et utvalg av prosjekter vi har gjennomført for private, næringsliv og det offentlige i Arendal-regionen. Ta kontakt om du vil vite mer om noen av dem.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-white flex flex-col"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full object-cover"
                  style={{ height: '220px' }}
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#c8820a' }}
                    >
                      {p.tag}
                    </span>
                    {p.year && (
                      <span className="text-xs text-slate-400">{p.year}</span>
                    )}
                  </div>
                  <h2 className="font-semibold text-base mb-2" style={{ color: '#1e3a5f' }}>
                    {p.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="mx-auto px-4 sm:px-6 text-center" style={{ maxWidth: '700px' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Har du et byggeprosjekt?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Ta kontakt for en uforpliktende prat. Vi hjelper deg fra idé til ferdig bygg.
          </p>
          <a
            href="tel:91109595"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-white font-semibold text-sm"
            style={{ color: '#1e3a5f' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
              />
            </svg>
            Ring oss: 911 09 595
          </a>
          <p className="mt-4">
            <a href={`${BASE}/kontakt`} className="text-sm text-slate-300 underline underline-offset-2">
              Eller send oss en melding
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
