import { SITE, products, formatPrice } from './data';
import { HexagonPatternBg, HexTile } from './hexagon';

export const metadata = {
  title: 'NordicX, garasje og verksted utstyr',
  description:
    'NordicX importerer og selger hexagon lyssystem, høytrykkspylerpakker og dieselvarmer direkte til private og bedrifter i Norge. Priser inkl. mva.',
  robots: 'noindex',
};

const BASE = SITE.base;
const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent('Henvendelse til NordicX')}`;

const hexagonLight = products.find((p) => p.id === 'hexagon-lys')!;
const otherProducts = products.filter((p) => p.id !== 'hexagon-lys');

function TrustIcon({ type }: { type: 'truck' | 'tag' | 'mail' | 'box' }) {
  if (type === 'truck') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v9H3V7zM14 10h4l3 3v3h-7v-6zM6.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    );
  }
  if (type === 'tag') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41L11 22.99 1 13V3h10l9.59 9.59a2 2 0 010 2.82z" />
        <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === 'mail') {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8L12 3 3 8m18 0v8l-9 5-9-5V8m18 0l-9 5-9-5" />
    </svg>
  );
}

export default function ForsidePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--nx-graphite)' }}
      >
        <img
          src="/demo/nordicx/hexagon-garasje.jpg"
          alt="Hexagon LED-lyssystem montert i garasje"
          width={1560}
          height={1170}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--nx-graphite) 25%, rgba(23,24,28,0.55) 60%, transparent 100%)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '5%',
            left: '10%',
            width: 640,
            height: 640,
            background:
              'radial-gradient(circle, var(--nx-glow) 0%, transparent 65%)',
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        />
        <HexagonPatternBg />
        <div
          className="relative mx-auto px-5 py-16 md:py-28"
          style={{ maxWidth: 1100 }}
        >
          <div style={{ maxWidth: 620 }}>
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em] block mb-4"
              style={{ color: 'var(--nx-accent)' }}
            >
              Garasje og verksted
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-5">
              Lys opp garasjen. Utstyr verkstedet.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'var(--nx-glow)' }}>
              Hexagon LED-lyssystem er flaggskipet vårt, et modulært lys som
              løfter hele rommet. NordicX henter inn partier med kvalitetsutstyr
              og selger det direkte til deg, uten mellomledd. Alle priser
              inkluderer mva.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={`${BASE}/produkter`}
                className="inline-flex items-center justify-center px-7 py-3 rounded-md font-semibold text-sm transition-colors"
                style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
              >
                Se produkter
              </a>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center px-7 py-3 rounded-md font-semibold text-sm border transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}
              >
                Send e-post
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm" style={{ color: 'var(--nx-muted)' }}>
              <span>Levering 2 til 4 uker</span>
              <span>Priser inkl. mva</span>
              <span>Bestilling på e-post</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b" style={{ borderColor: 'var(--nx-line)' }}>
        <div
          className="mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ maxWidth: 1100 }}
        >
          {[
            { icon: 'truck' as const, label: 'Levering 2 til 4 uker' },
            { icon: 'tag' as const, label: 'Priser inkl. mva' },
            { icon: 'mail' as const, label: 'Bestilling på e-post' },
            { icon: 'box' as const, label: 'Begrenset lager per parti' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-3">
              <HexTile size={56}>
                <TrustIcon type={item.icon} />
              </HexTile>
              <span className="text-sm font-medium" style={{ color: 'var(--nx-ink)' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship: hexagon lights */}
      <section className="py-10 md:py-16 bg-white">
        <div
          className="mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
          style={{ maxWidth: 1100 }}
        >
          <img
            src={hexagonLight.image.src}
            alt={hexagonLight.image.alt}
            width={hexagonLight.image.width}
            height={hexagonLight.image.height}
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em] block mb-3"
              style={{ color: 'var(--nx-accent)' }}
            >
              Flaggskip
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              Hexagon lyssystem
            </h2>
            <p className="max-w-prose leading-relaxed mb-2" style={{ color: 'var(--nx-muted)' }}>
              Modulært LED-lyssystem for garasje, verksted, bilpleie,
              frisørsalong, treningsrom eller kontor. Størrelse på oppsettet er
              4,84 x 2,44 meter.
            </p>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--nx-accent)' }}>
              Nytt parti på lager, kampanjepris
            </p>
            <div className="rounded-lg border overflow-hidden mb-6" style={{ borderColor: 'var(--nx-line)' }}>
              {(hexagonLight.variants as { name: string; price: number }[]).map((v, i) => (
                <div
                  key={v.name}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--nx-line)',
                    backgroundColor: 'var(--nx-concrete)',
                  }}
                >
                  <span>{v.name}</span>
                  <span className="font-semibold" style={{ color: 'var(--nx-accent)' }}>
                    {formatPrice(v.price)}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={`${BASE}/produkter#hexagon-lys`}
              className="inline-flex items-center px-6 py-3 rounded-md font-semibold text-sm transition-colors"
              style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
            >
              Se alle varianter
            </a>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="py-10 md:py-16 bg-white border-t" style={{ borderColor: 'var(--nx-line)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 1100 }}>
          <div className="mb-8">
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em] block mb-3"
              style={{ color: 'var(--nx-accent)' }}
            >
              Mer utstyr
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Høytrykkspylere og dieselvarmer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <a
                key={p.id}
                href={`${BASE}/produkter#${p.slug}`}
                className="rounded-lg border shadow-sm overflow-hidden bg-white flex flex-col transition-all hover:shadow-md"
                style={{ borderColor: 'var(--nx-line)' }}
              >
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ height: 200 }}
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-base mb-1">{p.name}</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--nx-muted)' }}>
                    {p.tagline}
                  </p>
                  {p.specs[0] && (
                    <p className="text-xs mb-4" style={{ color: 'var(--nx-muted)' }}>
                      {p.specs[0].label}: {p.specs[0].value}
                    </p>
                  )}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold" style={{ color: 'var(--nx-accent)' }}>
                      {formatPrice(('price' in p.variants ? p.variants.price : 0))}
                    </span>
                    <span className="text-sm font-medium">Se detaljer</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Slik bestiller du */}
      <section className="py-10 md:py-16" style={{ backgroundColor: 'var(--nx-concrete)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 1100 }}>
          <div className="text-center mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em] block mb-3"
              style={{ color: 'var(--nx-accent)' }}
            >
              Bestilling
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Slik bestiller du
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '1', text: 'Send e-post med hva du ønsker' },
              { n: '2', text: 'Få bekreftelse og pris' },
              { n: '3', text: 'Varen settes av fra partiet' },
              { n: '4', text: 'Levering på 2 til 4 uker' },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center gap-3">
                <HexTile size={64}>
                  <span className="text-lg font-semibold">{step.n}</span>
                </HexTile>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--nx-ink)' }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA band */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ backgroundColor: 'var(--nx-graphite)' }}
      >
        <HexagonPatternBg />
        <div className="relative mx-auto px-5 text-center" style={{ maxWidth: 700 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
            Klar til å utstyre garasjen?
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
            Send oss en e-post med hva du trenger, så svarer vi med
            bekreftelse og pris.
          </p>
          <a
            href={mailtoHref}
            className="inline-flex items-center px-8 py-3.5 rounded-md font-semibold text-sm transition-colors"
            style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
          >
            Send e-post til {SITE.contactPerson}
          </a>
        </div>
      </section>
    </>
  );
}
