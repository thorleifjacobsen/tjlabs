export const metadata = {
  title: 'Kontakt oss - Kåre Eriksen AS',
  description: 'Ta kontakt med Kåre Eriksen AS. Industritoppen 23, 4848 Arendal. Tlf: 911 09 595. Vi svarer innen en virkedag.',
  robots: 'noindex',
};

export default function KontaktPage() {
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
            Ta kontakt
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            Kontakt oss
          </h1>
          <p className="text-slate-600 max-w-xl leading-relaxed">
            Har du spørsmål om et byggeprosjekt, eller vil du ha et tilbud? Fyll ut skjemaet eller ta direkte kontakt med oss.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="py-16 md:py-20 bg-white">
        <div
          className="mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10"
          style={{ maxWidth: '1100px' }}
        >
          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-slate-200 shadow-sm p-6" style={{ backgroundColor: '#f8fafc' }}>
              <h2 className="font-semibold text-lg mb-5" style={{ color: '#1e3a5f' }}>
                Kontaktinformasjon
              </h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#c8820a' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-700">Adresse</p>
                    <p className="text-slate-500">Industritoppen 23</p>
                    <p className="text-slate-500">4848 Arendal</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#c8820a' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-700">Telefon</p>
                    <a
                      href="tel:91109595"
                      className="transition-colors"
                      style={{ color: '#1e3a5f' }}
                    >
                      911 09 595
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#c8820a' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-700">E-post</p>
                    <a
                      href="mailto:post@keriksen.no"
                      className="transition-colors"
                      style={{ color: '#1e3a5f' }}
                    >
                      post@keriksen.no
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#c8820a' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-700">Åpningstider</p>
                    <p className="text-slate-500">Mandag til fredag</p>
                    <p className="text-slate-500">07:00 til 16:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#c8820a' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-700">Org.nr</p>
                    <p className="text-slate-500">980 149 099</p>
                  </div>
                </li>
              </ul>

              <div
                className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-3"
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: '#c8820a' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div>
                  <p className="text-xs font-semibold" style={{ color: '#1e3a5f' }}>Sentralt godkjent entreprenør</p>
                  <p className="text-xs text-slate-500">Mesterbedrift | Gyldig til 2028</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <h2 className="font-semibold text-lg mb-5" style={{ color: '#1e3a5f' }}>
              Send oss en melding
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="navn"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: '#374151' }}
                  >
                    Navn
                  </label>
                  <input
                    id="navn"
                    type="text"
                    placeholder="Ola Nordmann"
                    className="border border-slate-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 text-sm"
                    style={{ '--tw-ring-color': '#1e3a5f' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: '#374151' }}
                  >
                    Telefon
                  </label>
                  <input
                    id="telefon"
                    type="tel"
                    placeholder="900 00 000"
                    className="border border-slate-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 text-sm"
                    style={{ '--tw-ring-color': '#1e3a5f' } as React.CSSProperties}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="epost"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: '#374151' }}
                >
                  E-post
                </label>
                <input
                  id="epost"
                  type="email"
                  placeholder="ola@eksempel.no"
                  className="border border-slate-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 text-sm"
                  style={{ '--tw-ring-color': '#1e3a5f' } as React.CSSProperties}
                />
              </div>
              <div>
                <label
                  htmlFor="melding"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: '#374151' }}
                >
                  Melding
                </label>
                <textarea
                  id="melding"
                  rows={6}
                  placeholder="Beskriv prosjektet ditt, f.eks. type bygg, omfang og ønsket oppstartstidspunkt..."
                  className="border border-slate-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 text-sm resize-none"
                  style={{ '--tw-ring-color': '#1e3a5f' } as React.CSSProperties}
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md text-white font-semibold text-sm transition-colors"
                  style={{ backgroundColor: '#1e3a5f' }}
                >
                  Send henvendelse
                </button>
                <p className="text-xs text-slate-400 text-right">
                  Vi svarer vanligvis innen en virkedag.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
          <div
            className="rounded-lg bg-slate-200 flex items-center justify-center text-slate-400 text-sm"
            style={{ height: '300px' }}
          >
            Kart kommer
          </div>
        </div>
      </section>
    </>
  );
}
