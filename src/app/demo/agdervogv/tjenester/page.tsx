import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tjenester | Agder Varme og Vedlikehold',
  description: 'Salg, montering, service og reparasjon av varmepumper i Agder.',
  robots: 'noindex',
};

const services = [
  {
    title: 'Salg av varmepumpe',
    body: `Vi hjelper deg finne riktig luft-til-luft-varmepumpe for din bolig eller næringslokale. Vi tar hensyn til boligstørrelse, isolasjon og lokale klimaforhold i Agder når vi anbefaler modell og plassering. Alle pumper vi selger leveres fra ledende merker med god garanti og tilgjengelig ettermarkedsservice. Vi gir ærlig rådgivning -- ingen unødvendig mersalg.`,
  },
  {
    title: 'Montering og installasjon',
    body: `Montering utføres av sertifisert fagmann i henhold til gjeldende forskrifter og produsentens krav. Vi tar oss av alt fra plassering og boring til rørlegging og idriftsettelse. Etter installasjonen gjennomgår vi anlegget med deg og svarer på spørsmål. Arbeidet dokumenteres slik du har alt svart på hvitt.`,
  },
  {
    title: 'Service og vedlikehold',
    body: `Jevnlig service forlenger levetiden på varmepumpen og sikrer optimal ytelse. Vi tilbyr årlig eller halvårlig service som inkluderer rens av filtre, kontroll av kjølemiddeltrykk, sjekk av elektriske tilkoblinger og gjennomgang av hele anlegget. Du får skriftlig rapport etter hvert servicebesøk.`,
  },
  {
    title: 'Feilsøking og reparasjon',
    body: `Noe som ikke virker? Vi feilsøker alle merker og modeller, uansett alder. Vanlige problemer som isbrann på uteenhet, støy, pumpe som ikke starter eller dårlig varmeeffekt -- vi finner årsaken og reparerer. Vi bruker originaldeler der det er mulig og gir deg et tydelig pristilbud før arbeidet starter.`,
  },
  {
    title: 'Gratis befaring',
    body: `Usikker på om varmepumpe passer for deg, eller hvilken modell du trenger? Vi tilbyr gratis og uforpliktende befaring der Magnus kommer hjem til deg, vurderer boligen og gir deg et konkret tilbud. Ingen skjulte kostnader og ingen press. Befaringen er helt uten forpliktelser.`,
  },
  {
    title: 'Serviceavtale',
    body: `Med en fast serviceavtale slipper du å huske på vedlikehold selv. Vi avtaler tidspunkt for årlig service i god tid, prioriterer deg ved driftsstans og gir rabatt på reservedeler og timer. Serviceavtaler tilpasses ditt behov -- enten det er én pumpe i en leilighet eller flere anlegg på en eiendom.`,
  },
];

export default function TjenesterPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Tjenester</h1>
        <p className="text-[#6b7280] max-w-xl">
          Alt fra første befaring til fast serviceavtale. Alle oppdrag utføres av Magnus personlig --
          sertifisert fagmann med lokalkjennskap til Agder.
        </p>
      </div>

      <div className="rounded-lg overflow-hidden mb-10 h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        <img
          src="/demo/agdervogv/outdoor-unit.jpg"
          alt="Varmepumpe utedel"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="divide-y divide-[#e5e7eb]">
        {services.map((s) => (
          <div key={s.title} className="py-8">
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">{s.title}</h2>
            <p className="text-[#1a1a1a] mb-4">{s.body}</p>
            <a href="/demo/agdervogv#kontakt" className="text-sm text-[#c2410c] hover:underline">
              Ta kontakt &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
