import { SITE } from '../data';
import { HexTile } from '../hexagon';

export const metadata = {
  title: 'Om oss, NordicX',
  description:
    'NordicX finner og importerer kvalitetsutstyr til garasje og verksted, og selger det direkte til kunden uten mellomledd.',
  robots: 'noindex',
};

const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent('Henvendelse til NordicX')}`;

function ValueIcon({ type }: { type: 'batch' | 'contact' | 'price' }) {
  if (type === 'batch') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8L12 3 3 8m18 0v8l-9 5-9-5V8m18 0l-9 5-9-5" />
      </svg>
    );
  }
  if (type === 'contact') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41L11 22.99 1 13V3h10l9.59 9.59a2 2 0 010 2.82z" />
      <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function OmOssPage() {
  return (
    <>
      <section className="py-10 md:py-16" style={{ backgroundColor: 'var(--nx-concrete)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 1100 }}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em] block mb-3"
            style={{ color: 'var(--nx-accent)' }}
          >
            Om oss
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Kvalitetsutstyr, rett fra importøren
          </h1>
          <p className="max-w-prose leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
            NordicX finner og importerer utstyr til garasje og verksted, og
            selger det direkte til privatpersoner og små bedrifter.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div
          className="mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
          style={{ maxWidth: 1100 }}
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Hvordan vi jobber
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--nx-muted)' }}>
              Vi henter inn partier med utvalgt utstyr, som hexagon lyssystem,
              høytrykkspylerpakker og dieselvarmer, og selger dem direkte til
              kunden. Ingen mellomledd, ingen butikkjede, bare utstyret og en
              direkte linje til oss.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--nx-muted)' }}>
              Daniel tar seg av henvendelser og bestillinger personlig. Salget
              har foregått gjennom Facebook-siden vår så langt, og denne
              nettsiden samler hele utvalget på ett sted.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
              Hvert parti har en begrenset mengde av hvert produkt. Når et
              parti er utsolgt tar det typisk 2 til 4 uker før varen kan
              leveres på nytt, avhengig av produktet.
            </p>
          </div>
          <img
            src="/demo/nordicx/hexagon-garasje.jpg"
            alt="Hexagon LED-lyssystem montert i garasje"
            width={1560}
            height={1170}
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="py-10 md:py-16" style={{ backgroundColor: 'var(--nx-concrete)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 1100 }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: 'batch' as const,
                title: 'Utvalgte partier',
                desc: 'Vi importerer utstyret i partier og velger ut det vi selv mener holder mål.',
              },
              {
                icon: 'contact' as const,
                title: 'Direkte kontakt',
                desc: 'Du snakker med Daniel, ikke et kundesenter. Bestilling og spørsmål går rett til oss.',
              },
              {
                icon: 'price' as const,
                title: 'Priser inkl. mva',
                desc: 'Prisene inkluderer mva, og frakt der det er oppgitt på produktet.',
              },
            ].map((val) => (
              <div
                key={val.title}
                className="rounded-lg border shadow-sm p-6 bg-white flex flex-col gap-3"
                style={{ borderColor: 'var(--nx-line)' }}
              >
                <HexTile size={56}>
                  <ValueIcon type={val.icon} />
                </HexTile>
                <h3 className="font-semibold text-base">{val.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--nx-graphite)' }}>
        <div className="relative mx-auto px-5 text-center" style={{ maxWidth: 700 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
            Lurer du på noe?
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
            Send oss en e-post, så svarer Daniel deg personlig.
          </p>
          <a
            href={mailtoHref}
            className="inline-flex items-center px-8 py-3.5 rounded-md font-semibold text-sm transition-colors"
            style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
          >
            Send e-post
          </a>
        </div>
      </section>
    </>
  );
}
