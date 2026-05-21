import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | Agder Varme og Vedlikehold',
  description:
    'Ta kontakt med oss for gratis befaring eller spørsmål om varmepumpe. Ring 97 12 35 54.',
  robots: 'noindex',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center" style={{ minHeight: '260px' }}>
        <img
          src="https://mee.no/wp-content/uploads/2026/01/Maren-Erdvik-Kaiteki-Mitsubishi-Electric.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 py-14">
          <p className="text-[#ea580c] font-semibold text-xs uppercase tracking-wider mb-3">Kontakt</p>
          <h1 className="font-bold text-white leading-tight mb-3" style={{ fontSize: '2.5rem' }}>
            Ta kontakt med oss
          </h1>
          <p className="text-slate-300 max-w-md">
            Ring direkte, send en e-post eller fyll ut skjemaet. Vi svarer raskt.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 md:py-16 bg-[#f8fafc]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">

            {/* Contact info */}
            <div>
              {/* Person card */}
              <div className="flex items-center gap-4 rounded-lg border border-[#e2e8f0] bg-white p-4 mb-8 shadow-sm">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                  <img
                    src="/demo/agdervogv/kontakt-magnus.jpg"
                    alt="Magnus – din kontakt hos Agder Varme og Vedlikehold"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#ea580c] uppercase tracking-wider mb-0.5">Din kontakt</p>
                  <p className="font-bold text-[#1e293b] text-base">Magnus</p>
                  <p className="text-sm text-[#64748b] mb-2">Sertifisert fagmann</p>
                  <a
                    href="tel:97123554"
                    className="inline-flex items-center gap-1.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold px-3 py-1.5 rounded text-xs transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
                    </svg>
                    Ring 97 12 35 54
                  </a>
                </div>
              </div>

              <h2 className="font-bold text-[#1e293b] mb-6" style={{ fontSize: '1.5rem' }}>
                Kontaktinformasjon
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#ea580c] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">Telefon</p>
                    <a href="tel:97123554" className="text-2xl font-bold text-[#1e293b] hover:text-[#ea580c] transition-colors">
                      97 12 35 54
                    </a>
                    <p className="text-sm text-[#64748b] mt-0.5">Ring direkte for rask hjelp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg flex items-center justify-center text-[#ea580c] flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">E-post</p>
                    <a href="mailto:hei@agdervogv.no" className="font-semibold text-[#1e293b] hover:text-[#ea580c] transition-colors">
                      hei@agdervogv.no
                    </a>
                    <p className="text-sm text-[#64748b] mt-0.5">Svar innen en arbeidsdag</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg flex items-center justify-center text-[#ea580c] flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">Adresse</p>
                    <p className="font-semibold text-[#1e293b]">Sagaveien 7, 4985 Vegårshei</p>
                    <p className="text-sm text-[#64748b] mt-0.5">Betjener Vegårshei og omegn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg flex items-center justify-center text-[#ea580c] flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">Responstid</p>
                    <p className="font-semibold text-[#1e293b]">Vi svarer så fort vi har mulighet</p>
                    <p className="text-sm text-[#64748b] mt-0.5">Ingen ventetider, ingen køsystem</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-[#e2e8f0]" style={{ height: '200px' }}>
                <iframe
                  title="Kart – Sagaveien 7, Vegårshei"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.75%2C58.865%2C8.795%2C58.885&layer=mapnik&marker=58.8747%2C8.7697"
                  style={{ border: 0 }}
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=58.8747&mlon=8.7697#map=15/58.8747/8.7697"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#94a3b8] mt-1 hover:text-[#64748b] transition-colors"
              >
                Åpne i OpenStreetMap ↗
              </a>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6 sm:p-8">
              <h2 className="font-bold text-[#1e293b] text-xl mb-1">Send en melding</h2>
              <p className="text-sm text-[#64748b] mb-6">
                Fortell oss hva du trenger hjelp med, så kontakter vi deg.
              </p>

              <form action="/demo/agdervogv/kontakt" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Navn</label>
                    <input
                      type="text"
                      placeholder="Ola Nordmann"
                      className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      placeholder="900 00 000"
                      className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">E-post</label>
                  <input
                    type="email"
                    placeholder="din@epost.no"
                    className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Hva gjelder det?</label>
                  <select className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition bg-white">
                    <option value="">Velg tjeneste</option>
                    <option>Gratis befaring og tilbud</option>
                    <option>Salg av varmepumpe</option>
                    <option>Montering og installasjon</option>
                    <option>Service og vedlikehold</option>
                    <option>Feilsøking og reparasjon</option>
                    <option>Serviceavtale</option>
                    <option>Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5">Melding</label>
                  <textarea
                    rows={5}
                    placeholder="Beskriv hva du trenger hjelp med. Gjerne nevn boligstorelse og om du har varmepumpe fra for."
                    className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#1e293b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Send melding
                </button>

                <p className="text-xs text-[#64748b] text-center">
                  Vi ringer deg tilbake innen en arbeidsdag.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-[#1e293b] py-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white">Foretrekker du a ringe direkte?</p>
            <p className="text-slate-400 text-sm">Vi svarer så fort vi har mulighet.</p>
          </div>
          <a
            href="tel:97123554"
            className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-lg flex-shrink-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.82a16 16 0 006.08 6.08l1.17-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18v-.08z" />
            </svg>
            97 12 35 54
          </a>
        </div>
      </section>
    </>
  );
}
