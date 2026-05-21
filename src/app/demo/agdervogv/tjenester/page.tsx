import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tjenester | Agder Varme og Vedlikehold',
  description:
    'Salg, montering, service og reparasjon av varmepumper i Vegarsshei og omegn. Sertifisert fagmann.',
  robots: 'noindex',
};

const BASE = '/demo/agdervogv';

const services = [
  {
    title: 'Salg av varmepumpe',
    body: 'Vi hjelper deg finne riktig luft-til-luft-varmepumpe for din bolig eller naeringslokal. Vi tar hensyn til boligstorrelse, isolasjon og lokale klimaforhold nar vi anbefaler modell og plassering. Alle pumper vi selger leveres fra ledende merker med god garanti og tilgjengelig ettermarkedsservice. Vi gir aerlig radgiving - ingen unodvendig mersalg.',
    img: '/demo/agdervogv/outdoor-unit.jpg',
    imgAlt: 'Utedel pa fasade',
  },
  {
    title: 'Montering og installasjon',
    body: 'Montering utfores av sertifisert fagmann i henhold til gjeldende forskrifter og produsentens krav. Vi tar oss av alt fra plassering og boring til rorlegging og idriftsettelse. Etter installasjonen gjennomgar vi anlegget med deg og svarer pa sporsmal. Arbeidet dokumenteres slik du har alt svart pa hvitt.',
    img: '/demo/agdervogv/indoor-unit.jpg',
    imgAlt: 'Indreenhet montert pa vegg',
  },
  {
    title: 'Service og vedlikehold',
    body: 'Jevnlig service forlenger levetiden pa varmepumpen og sikrer optimal ytelse. Vi tilbyr arlig eller halvarilig service som inkluderer rens av filtre, kontroll av kjolemiddeltrykk, sjekk av elektriske tilkoblinger og gjennomgang av hele anlegget. Du far skriftlig rapport etter hvert servicebesok.',
    img: '/demo/agdervogv/technician.jpg',
    imgAlt: 'Fagmann utforer service',
  },
  {
    title: 'Feilsoking og reparasjon',
    body: 'Noe som ikke virker? Vi feilsoker alle merker og modeller, uansett alder. Vanlige problemer som isbrann pa uteenhet, stoy, pumpe som ikke starter eller darlig varmeeffekt - vi finner arsaken og reparerer. Vi bruker originaldeler der det er mulig og gir deg et tydelig pristilbud for arbeidet starter.',
    img: '/demo/agdervogv/outdoor-unit.jpg',
    imgAlt: 'Utedel som inspiseres',
  },
  {
    title: 'Gratis befaring',
    body: 'Usikker pa om varmepumpe passer for deg, eller hvilken modell du trenger? Vi tilbyr gratis og uforpliktende befaring der Magnus kommer hjem til deg, vurderer boligen og gir deg et konkret tilbud. Ingen skjulte kostnader og ingen press. Befaringen er helt uten forpliktelser.',
    img: '/demo/agdervogv/cozy-home.jpg',
    imgAlt: 'Koselig hjem',
  },
  {
    title: 'Serviceavtale',
    body: 'Med en fast serviceavtale slipper du a huske pa vedlikehold selv. Vi avtaler tidspunkt for arlig service i god tid, prioriterer deg ved driftsstans og gir rabatt pa reservedeler og timer. Serviceavtaler tilpasses ditt behov - enten det er en pumpe i en leilighet eller flere anlegg pa en eiendom.',
    img: '/demo/agdervogv/indoor-unit.jpg',
    imgAlt: 'Indreenhet i stue',
  },
];

export default function TjenesterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}>
        <img
          src="/demo/agdervogv/indoor-unit.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 py-16">
          <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">
            Tjenester
          </p>
          <h1 className="font-bold text-white leading-tight mb-3" style={{ fontSize: '2.5rem' }}>
            Hva vi tilbyr
          </h1>
          <p className="text-slate-300 max-w-xl">
            Alt fra forste befaring til fast serviceavtale. Alle oppdrag utfores av Magnus personlig,
            sertifisert fagmann med lokalkjennskap til Vegarsshei og omegn.
          </p>
        </div>
      </section>

      {/* Services - alternating layout */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="space-y-16">
          {services.map((s, i) => {
            const imageLeft = i % 2 !== 0;
            return (
              <div
                key={s.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                {/* Image */}
                <div
                  className={`rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100 ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                  style={{ height: '300px' }}
                >
                  <img
                    src={s.img}
                    alt={s.imgAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 className="font-bold text-[#1e293b] mb-4" style={{ fontSize: '1.5rem' }}>
                    {s.title}
                  </h2>
                  <p className="text-[#64748b] leading-relaxed mb-6">{s.body}</p>
                  <a
                    href={`${BASE}#kontakt`}
                    className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Ta kontakt
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#ea580c] py-14">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>
            Klar for a komme i gang?
          </h2>
          <p className="text-orange-100 mb-6">Ring Magnus direkte for gratis befaring.</p>
          <a
            href="tel:97123554"
            className="inline-flex items-center gap-2.5 bg-white text-[#ea580c] font-bold px-7 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
            </svg>
            Ring 97 12 35 54
          </a>
          <p className="text-orange-200 text-sm mt-3">Gratis og uforpliktende</p>
        </div>
      </section>
    </>
  );
}
