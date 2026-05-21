import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss | Agder Varme og Vedlikehold',
  description:
    'Lokal varmepumpeekspert i Vegårshei og omegn. Sertifisert, ærlig og faglig stolt.',
  robots: 'noindex',
};

const BASE = '/demo/agdervogv';

const certifications = [
  'ISOVATOR sertifisert varmepumpeinstallatør',
  'NOVAP godkjent forhandler',
  'Følger gjeldende HMS-krav',
  'Skriftlig dokumentasjon etter hvert oppdrag',
];

const serviceArea = [
  'Vegårshei',
  'Tvedestrand',
  'Gjerstad',
  'Risør',
  'Froland',
  'Omegn etter avtale',
];

const values = [
  {
    title: 'Lokal',
    desc: 'Vi kjenner klimaet og forholdene i Vegårshei og omegn. Det gir bedre råd og mer presise løsninger enn en tilreisende montør.',
  },
  {
    title: 'Ærlig',
    desc: 'Vi selger det du faktisk trenger. Klare priser, ingen skjulte kostnader, og ingen salg du ikke har bedt om.',
  },
  {
    title: 'Faglig stolthet',
    desc: 'Vi tar oss tid til å gjøre jobben ordentlig, første gang. Dokumentert arbeid og skriftlig rapport etter hvert besøk.',
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Page intro */}
      <section className="py-10 md:py-16 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Om oss</p>
          <h1 className="font-bold text-[#1e293b] leading-tight mb-4" style={{ fontSize: '2.5rem' }}>
            Agder Varme og Vedlikehold
          </h1>
          <p className="text-[#64748b] max-w-xl">
            Din lokale ekspert på varmepumper og vaktmestertjenester i Vegårshei og omegn. Vi er etablert her, vi jobber her,
            og vi kjenner forholdene bedre enn noen tilreisende montør kan.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Photo */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-64 sm:h-80 lg:h-auto lg:min-h-[420px]">
              <img
                src="/demo/agdervogv/technician.jpg"
                alt="Fagmann hos Agder Varme og Vedlikehold"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text */}
            <div className="pt-2">
              <h2 className="font-bold text-[#1e293b] mb-5" style={{ fontSize: '1.5rem' }}>
                Hvorfor vi startet
              </h2>

              <div className="space-y-4 text-[#64748b] mb-6">
                <p>
                  Agder Varme og Vedlikehold ble etablert i Vegårshei fordi det rett og slett manglet
                  en lokal aktør som spesialiserte seg på varmepumper i regionen. Tilreisende selgere
                  kjenner ikke husene, klimaet eller forholdene her.
                </p>
                <p>
                  Vi gjør det annerledes. Vi er lokale, vi rykker raskt ut, og vi stiller oss ansvarlig
                  for arbeidet vi utfører. Kundene våre er naboene våre.
                </p>
                <p>
                  I dag tilbyr vi alt fra gratis befaring og rådgivning til sertifisert montering,
                  service og faste serviceavtaler for privatpersoner og næringsbygg. Vi tar også
                  på oss vaktmesteroppdrag, fra enklere reparasjoner til sesongbasert vedlikehold
                  av eiendommen din.
                </p>
              </div>

              <blockquote className="border-l-4 border-[#ea580c] pl-4 mb-7">
                <p className="font-semibold text-[#1e293b] italic leading-snug mb-2">
                  "Det er ingen andre her i området som driver med dette, derfor startet vi."
                </p>
                <footer className="text-sm text-[#64748b]">Magnus Wedø, daglig leder</footer>
              </blockquote>

              {/* Certifications */}
              <div className="mb-6">
                <p className="font-semibold text-sm text-[#1e293b] mb-3">Sertifiseringer og godkjenninger</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <img
                    src="/demo/agdervogv/isovator.jpg"
                    alt="ISOVATOR sertifisert installatør"
                    className="h-12 w-auto object-contain"
                  />
                  <img
                    src="/demo/agdervogv/novap.jpg"
                    alt="NOVAP godkjent forhandler"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <ul className="space-y-2">
                  {certifications.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-[#64748b]">
                      <svg className="w-4 h-4 text-[#ea580c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service area */}
              <div>
                <p className="font-semibold text-sm text-[#1e293b] mb-3">Betjener</p>
                <div className="flex flex-wrap gap-2">
                  {serviceArea.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-full text-xs font-medium text-[#64748b]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 md:py-16 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Verdier</p>
            <h2 className="font-bold text-[#1e293b] leading-tight" style={{ fontSize: '1.75rem' }}>
              Slik jobber vi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-2">{v.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="rounded-lg bg-[#1e293b] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '1.5rem' }}>
                Ta kontakt med oss
              </h2>
              <p className="text-slate-400">Ring direkte for befaring eller spørsmål. Gratis og uforpliktende.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="tel:97123554"
                className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
                </svg>
                97 12 35 54
              </a>
              <a
                href={`${BASE}/kontakt`}
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
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
