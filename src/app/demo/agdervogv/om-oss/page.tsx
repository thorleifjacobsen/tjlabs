import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss | Agder Varme og Vedlikehold',
  description: 'Lokal varmepumpeekspert i Agder. Magnus er sertifisert fagmann fra Vegårshei.',
  robots: 'noindex',
};

export default function OmOssPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-12">

      {/* ── Story ── */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start mb-12">
        <div className="rounded-lg overflow-hidden h-72 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          <img
            src="/demo/agdervogv/technician.jpg"
            alt="Magnus, fagmann hos Agder Varme og Vedlikehold"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            Om Magnus og Agder Varme og Vedlikehold
          </h1>
          <div className="space-y-4 text-[#1a1a1a] mb-6">
            <p>
              Magnus (37) er grunnleggeren bak Agder Varme og Vedlikehold. Han er utdannet fagmann og
              har bodd og jobbet i Agder hele livet. Da han så at det manglet en lokal aktør som
              spesialiserte seg på varmepumper i området, bestemte han seg for å gjøre noe med det.
            </p>
            <p>
              I dag tilbyr Magnus alt fra gratis befaring og rådgiving til sertifisert montering og
              fast serviceordning. Alle oppdrag utføres av Magnus personlig. Du slipper å forholde
              deg til et anonymt firma eller en tilfeldig tekniker.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#c2410c] pl-4 text-[#6b7280] italic mb-6">
            "Det er ingen andre her i området som driver med dette, derfor startet jeg."
          </blockquote>

          <ul className="text-sm text-[#6b7280] space-y-1.5">
            <li>Sertifisert varmepumpeinstallatør</li>
            <li>Etablert i Vegårshei, Aust-Agder</li>
            <li>Betjener hele Agder-regionen</li>
            <li>Alle merker og modeller</li>
          </ul>
        </div>
      </div>

      {/* ── Values ── */}
      <div className="border-t border-[#e5e7eb] pt-10 mb-12">
        <h2 className="text-base font-bold text-[#1a1a1a] mb-5">Verdier</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Lokal',
              text: 'Vi kjenner klimaet og forholdene i Agder. Det gir bedre råd og mer presise løsninger enn en tilreisende montør.',
            },
            {
              title: 'Ærlig',
              text: 'Vi selger det du faktisk trenger. Klare priser, ingen skjulte kostnader, og ingen salg du ikke har bedt om.',
            },
            {
              title: 'Faglig stolthet',
              text: 'Vi tar oss tid til å gjøre jobben ordentlig, første gang. Dokumentert arbeid og skriftlig rapport etter hvert besøk.',
            },
          ].map((v) => (
            <div key={v.title} className="border border-[#e5e7eb] rounded-lg p-5 bg-white">
              <p className="font-semibold text-sm text-[#1a1a1a] mb-1">{v.title}</p>
              <p className="text-sm text-[#6b7280] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact CTA ── */}
      <div className="border-t border-[#e5e7eb] pt-10">
        <h2 className="text-base font-bold text-[#1a1a1a] mb-2">Ta kontakt</h2>
        <p className="text-[#6b7280] mb-4">
          Ring Magnus direkte for befaring eller spørsmål. Gratis og uforpliktende.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:97123554"
            className="bg-[#c2410c] hover:bg-[#b03a0b] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
          >
            Ring 97 12 35 54
          </a>
          <a
            href="mailto:hei@agdervogv.no"
            className="border border-[#e5e7eb] hover:bg-[#f9fafb] text-[#1a1a1a] px-5 py-2.5 rounded text-sm font-semibold transition-colors"
          >
            hei@agdervogv.no
          </a>
        </div>
      </div>
    </div>
  );
}
