import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agder Varme og Vedlikehold',
  description: 'Salg, montering og service av varmepumper i Agder. Ring Magnus: 97 12 35 54.',
  robots: 'noindex',
};

const services = [
  {
    title: 'Salg av varmepumpe',
    desc: 'Vi hjelper deg velge riktig modell for ditt hjem.',
  },
  {
    title: 'Montering',
    desc: 'Faglig korrekt installasjon utført av sertifisert montør.',
  },
  {
    title: 'Service og vedlikehold',
    desc: 'Årlig service, filterrens og ytelseskontroll.',
  },
  {
    title: 'Feilsøking og reparasjon',
    desc: 'Vi reparerer alle merker og modeller.',
  },
  {
    title: 'Gratis befaring',
    desc: 'Vi kommer hjem til deg og vurderer behovet uten kostnad.',
  },
  {
    title: 'Serviceavtale',
    desc: 'Fast avtale for planlagt vedlikehold og prioritert respons.',
  },
];

export default function FrontPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-[#e5e7eb] py-12">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#1a1a1a] leading-snug mb-1">
                Varmepumpe -- salg, montering og service
              </h1>
              <p className="text-[#c2410c] text-sm font-medium mb-4">Vegårshei og omegn, Aust-Agder</p>
              <p className="text-[#1a1a1a] mb-6">
                Magnus er din lokale varmepumpeekspert i Agder. Vi tilbyr salg av luft-til-luft-pumper,
                sertifisert montering og fast serviceordning -- for privatboliger og næringsbygg.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:97123554"
                  className="bg-[#c2410c] hover:bg-[#b03a0b] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
                >
                  Ring 97 12 35 54
                </a>
                <a
                  href="#kontakt"
                  className="border border-[#e5e7eb] hover:bg-[#f9fafb] text-[#1a1a1a] px-5 py-2.5 rounded text-sm font-semibold transition-colors"
                >
                  Bestill befaring
                </a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-64">
              <img
                src="/demo/agdervogv/hero.jpg"
                alt="Varmepumpe på fasade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-[#f9fafb] border-b border-[#e5e7eb] py-3">
        <p className="text-center text-sm text-[#6b7280]">
          Sertifisert fagmann &nbsp;&middot;&nbsp; Alle merker og modeller &nbsp;&middot;&nbsp; Gratis befaring &nbsp;&middot;&nbsp; Rask respons
        </p>
      </section>

      {/* ── Services overview ── */}
      <section className="border-b border-[#e5e7eb] py-12">
        <div className="max-w-[960px] mx-auto px-4">
          <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">Hva vi gjør</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-[#e5e7eb] rounded-lg p-4 bg-white">
                <p className="font-semibold text-sm text-[#1a1a1a] mb-1">{s.title}</p>
                <p className="text-sm text-[#6b7280]">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5">
            <a href="/demo/agdervogv/tjenester" className="text-sm text-[#c2410c] hover:underline">
              Se alle tjenester &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="border-b border-[#e5e7eb] py-12">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="rounded-lg overflow-hidden h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              <img
                src="/demo/agdervogv/technician.jpg"
                alt="Magnus"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">Om Magnus</h2>
              <p className="text-[#1a1a1a] mb-4">
                Magnus (37) er en sertifisert fagmann fra Vegårshei. Han startet Agder Varme og Vedlikehold
                etter å ha sett at det manglet en lokal aktør som spesialiserte seg på varmepumper i Agder.
                I dag tar han seg av alt fra befaring og salg til montering og service -- selv.
              </p>
              <blockquote className="border-l-2 border-[#c2410c] pl-4 text-[#6b7280] text-sm italic mb-4">
                "Det er ingen andre her i området som driver med dette, derfor startet jeg."
              </blockquote>
              <a href="/demo/agdervogv/om-oss" className="text-sm text-[#c2410c] hover:underline">
                Les mer om oss &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="kontakt" className="py-12">
        <div className="max-w-[960px] mx-auto px-4">
          <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">Ta kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[#1a1a1a] mb-0.5">Telefon</p>
                <a href="tel:97123554" className="text-[#c2410c] font-bold text-xl">
                  97 12 35 54
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a1a] mb-0.5">E-post</p>
                <a href="mailto:hei@agdervogv.no" className="text-[#c2410c] hover:underline">
                  hei@agdervogv.no
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a1a] mb-0.5">Adresse</p>
                <p className="text-[#6b7280]">Sagaveien 7, 4985 Vegårshei</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a1a] mb-0.5">Betjener</p>
                <p className="text-[#6b7280]">Agder og omegn</p>
              </div>
            </div>

            {/* Form */}
            <form action="#kontakt" className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#1a1a1a] mb-1">Navn</label>
                <input
                  type="text"
                  placeholder="Ditt navn"
                  className="w-full border border-[#e5e7eb] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#c2410c] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a1a1a] mb-1">Telefon</label>
                <input
                  type="tel"
                  placeholder="900 00 000"
                  className="w-full border border-[#e5e7eb] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#c2410c] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a1a1a] mb-1">Melding</label>
                <textarea
                  rows={3}
                  placeholder="Hva kan vi hjelpe deg med?"
                  className="w-full border border-[#e5e7eb] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#c2410c] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#c2410c] hover:bg-[#b03a0b] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
