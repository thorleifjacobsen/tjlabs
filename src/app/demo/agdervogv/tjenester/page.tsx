import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tjenester | Agder Varme og Vedlikehold',
  description:
    'Salg, montering, service og reparasjon av varmepumper i Vegårshei og omegn. Sertifisert fagmann.',
  robots: 'noindex',
};

const BASE = '/demo/agdervogv';

const services = [
  {
    title: 'Salg av varmepumpe',
    body: 'Vi hjelper deg finne riktig luft-til-luft-varmepumpe for din bolig. Vi tar hensyn til boligstørrelse, isolasjon og lokale klimaforhold når vi anbefaler modell og plassering. Alle pumper vi selger leveres fra ledende merker med god garanti. Vi gir ærlig rådgivning uten mersalg.',
    img: 'https://mee.no/wp-content/uploads/2024/12/Uwano1200x900pxl.jpg',
    imgAlt: 'Moderne innedel montert på vegg',
  },
  {
    title: 'Montering og installasjon',
    body: 'Montering utføres av sertifisert fagmann i henhold til gjeldende forskrifter og produsentens krav. Vi tar oss av alt fra plassering og boring til rørlegging og idriftsettelse. Etter installasjonen gjennomgår vi anlegget med deg. Arbeidet dokumenteres slik du har alt svart på hvitt.',
    img: 'https://mee.no/wp-content/uploads/2025/03/UWANO_Pure_interior.jpg',
    imgAlt: 'Varmepumpe i moderne stue',
  },
  {
    title: 'Service og vedlikehold',
    body: 'Jevnlig service forlenger levetiden og sikrer optimal ytelse. Vi tilbyr årlig eller halvårlig service med rens av filtre, kontroll av kjølemiddeltrykk, sjekk av elektriske tilkoblinger og gjennomgang av hele anlegget. Du får skriftlig rapport etter hvert servicebesøk.',
    img: '/demo/agdervogv/technician.jpg',
    imgAlt: 'Fagmann utfører service på varmepumpe',
  },
  {
    title: 'Feilsøking og reparasjon',
    body: 'Noe som ikke virker? Vi feilsøker alle merker og modeller uansett alder. Isbrann på uteenhet, støy, pumpe som ikke starter, dårlig varmeeffekt - vi finner årsaken og reparerer. Vi bruker originaldeler der det er mulig og gir tydelig pristilbud for arbeidet starter.',
    img: 'https://mee.no/wp-content/uploads/2024/02/AL_8908_toppbilde.jpg',
    imgAlt: 'Utedel på fasade',
  },
  {
    title: 'Gratis befaring',
    body: 'Usikker på om varmepumpe passer for deg, eller hvilken modell du trenger? Vi kommer hjem til deg, vurderer boligen og gir et konkret tilbud. Ingen skjulte kostnader og ingen press. Befaringen er helt uten forpliktelser.',
    img: 'https://mee.no/wp-content/uploads/2023/04/Gussuri_soverom.jpg',
    imgAlt: 'Soverom med varmepumpe',
  },
  {
    title: 'Serviceavtale',
    body: 'Med en fast serviceavtale slipper du å huske på vedlikehold selv. Vi avtaler tidspunkt for årlig service i god tid, prioriterer deg ved driftsstans og gir rabatt på reservedeler og timer. Tilpasses ditt behov enten det er en pumpe i en leilighet eller flere anlegg på en eiendom.',
    img: 'https://mee.no/wp-content/uploads/2024/09/BildeB2C-B2B1000x800pxl-scaled.jpg',
    imgAlt: 'Hus med varmepumpe',
  },
];

const faqs = [
  {
    q: 'Hva koster en varmepumpe med montering?',
    a: 'En komplett luft-til-luft-varmepumpe med montering koster vanligvis mellom 15 000 og 30 000 kroner, avhengig av modell og installasjonskompleksitet. Vi gir alltid fast pris etter befaring.',
  },
  {
    q: 'Hvor lang tid tar monteringen?',
    a: 'En standard montering tar vanligvis en arbeidsdag. Vi rigger opp både inne- og uteenhet, trekker rør og klargjør alt for bruk.',
  },
  {
    q: 'Trenger jeg tillatelse for å montere varmepumpe?',
    a: 'Luft-til-luft-varmepumper krever normalt ingen byggesøknad. Vi sørger for at installasjonen er i henhold til gjeldende forskrifter og produsentens krav, slik at garantien er i orden.',
  },
  {
    q: 'Hva er inkludert i en servicesjekk?',
    a: 'En service inkluderer rens av filtre og varmeveksler, kontroll av kjølemiddeltrykk, sjekk av elektriske tilkoblinger og funksjonsstest av hele anlegget. Du får skriftlig rapport.',
  },
  {
    q: 'Hvilke merker leverer og monterer dere?',
    a: 'Vi leverer og monterer fra Daikin, Mitsubishi Electric, Panasonic, Fujitsu og Samsung. Vi hjelper deg velge riktig modell basert på boligstørrelse, isolasjon og budsjett.',
  },
];

export default function TjenesterPage() {
  return (
    <>
      <style>{`
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] > summary .faq-chevron { transform: rotate(45deg); }
        .faq-chevron { transition: transform 0.2s ease; display: inline-block; }
      `}</style>

      {/* Hero */}
      <section className="relative flex items-center" style={{ minHeight: '300px' }}>
        <img
          src="https://mee.no/wp-content/uploads/2026/01/AL_8796.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 py-16">
          <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Tjenester</p>
          <h1 className="font-bold text-white leading-tight mb-3" style={{ fontSize: '2.5rem' }}>
            Hva vi tilbyr
          </h1>
          <p className="text-slate-300 max-w-xl">
            Alt fra første befaring til fast serviceavtale. Alle oppdrag utføres av sertifiserte fagmenn med
            lokalkjennskap til Vegårshei og omegn.
          </p>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {services.map((s, i) => {
              const imgLeft = i % 2 !== 0;
              return (
                <div key={s.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  <div
                    className={`rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100 ${imgLeft ? 'lg:order-1' : 'lg:order-2'}`}
                    style={{ height: '300px' }}
                  >
                    <img src={s.img} alt={s.imgAlt} className="w-full h-full object-cover" />
                  </div>
                  <div className={imgLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <h2 className="font-bold text-[#1e293b] mb-4" style={{ fontSize: '1.5rem' }}>{s.title}</h2>
                    <p className="text-[#64748b] leading-relaxed mb-6">{s.body}</p>
                    <a
                      href={`${BASE}/kontakt`}
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
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Spørsmål og svar</p>
            <h2 className="font-bold text-[#1e293b]" style={{ fontSize: '1.75rem' }}>Vanlige spørsmål</h2>
          </div>
          <div className="max-w-2xl space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="border border-[#e2e8f0] rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[#1e293b] text-sm">
                  <span>{item.q}</span>
                  <span className="faq-chevron text-[#ea580c] text-xl flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-[#64748b] leading-relaxed border-t border-[#e2e8f0]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ea580c] py-14">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>Klar for å komme i gang?</h2>
          <p className="text-orange-100 mb-6">Ring oss for gratis befaring.</p>
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
