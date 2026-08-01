import { SITE, products, formatPrice, Product } from '../data';
import { HexagonBullet } from '../hexagon';

export const metadata = {
  title: 'Produkter, NordicX',
  description:
    'Hexagon lyssystem, høytrykkspylerpakker og dieselvarmer NDH-16 fra NordicX. Importeres i partier og selges direkte, priser inkl. mva.',
  robots: 'noindex',
};

const BASE = SITE.base;

function mailtoFor(productName: string) {
  const subject = encodeURIComponent(`Bestilling: ${productName}`);
  return `mailto:${SITE.email}?subject=${subject}`;
}

function ProductBlock({ product, reverse }: { product: Product; reverse: boolean }) {
  const isVariantList = Array.isArray(product.variants);

  return (
    <section
      id={product.slug}
      className="py-10 md:py-16 border-t"
      style={{ borderColor: 'var(--nx-line)' }}
    >
      <div
        className="mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start"
        style={{ maxWidth: 1100 }}
      >
        <div className={reverse ? 'md:order-last' : ''}>
          <img
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
        </div>

        <div>
          {product.badge && (
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded mb-4"
              style={{
                color: 'var(--nx-accent)',
                backgroundColor: 'rgba(242,101,34,0.1)',
              }}
            >
              {product.badge}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            {product.name}
          </h2>
          <p className="max-w-prose leading-relaxed mb-6" style={{ color: 'var(--nx-muted)' }}>
            {product.description}
          </p>

          {product.includes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Dette er inkludert</h3>
              <ul className="space-y-2">
                {product.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1">
                      <HexagonBullet />
                    </span>
                    <span style={{ color: 'var(--nx-ink)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.specs.length > 0 && (
            <div
              className="rounded-lg border overflow-hidden mb-6"
              style={{ borderColor: 'var(--nx-line)' }}
            >
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between px-4 py-2.5 text-sm"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--nx-line)',
                    backgroundColor: 'var(--nx-concrete)',
                  }}
                >
                  <span style={{ color: 'var(--nx-muted)' }}>{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {isVariantList ? (
            <div
              className="rounded-lg border overflow-hidden mb-6"
              style={{ borderColor: 'var(--nx-line)' }}
            >
              {(product.variants as { name: string; price: number }[]).map((v, i) => (
                <div
                  key={v.name}
                  className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--nx-line)',
                    backgroundColor: 'var(--nx-concrete)',
                  }}
                >
                  <span>{v.name}</span>
                  <span className="font-semibold flex-shrink-0" style={{ color: 'var(--nx-accent)' }}>
                    {formatPrice(v.price)}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          {isVariantList && (
            <p className="text-xs mb-6" style={{ color: 'var(--nx-muted)' }}>
              Alle priser over inkluderer frakt og mva.
            </p>
          )}

          {!isVariantList && (
            <p className="text-2xl font-semibold mb-6" style={{ color: 'var(--nx-accent)' }}>
              {formatPrice((product.variants as { price: number }).price)}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={mailtoFor(product.name)}
              className="inline-flex items-center px-6 py-3 rounded-md font-semibold text-sm transition-colors"
              style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
            >
              Bestill {product.name}
            </a>
            <span
              className="inline-flex items-center px-3 py-1.5 rounded text-xs font-medium"
              style={{ backgroundColor: 'var(--nx-concrete)', color: 'var(--nx-muted)' }}
            >
              {product.deliveryNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProdukterPage() {
  return (
    <>
      <section className="py-10 md:py-16" style={{ backgroundColor: 'var(--nx-concrete)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 1100 }}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em] block mb-3"
            style={{ color: 'var(--nx-accent)' }}
          >
            Produkter
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Utstyr til garasje og verksted
          </h1>
          <p className="max-w-prose leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
            NordicX henter inn partier med utstyr og selger det direkte til
            deg. Lageret er begrenset per parti, og når et parti er utsolgt tar
            det gjerne noen uker før neste kommer inn. Alle priser er inkl.
            mva.
          </p>
        </div>
      </section>

      {products.map((product, i) => (
        <ProductBlock key={product.id} product={product} reverse={i % 2 === 1} />
      ))}

      <section className="py-10 md:py-16 border-t" style={{ borderColor: 'var(--nx-line)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 800 }}>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
            Kommende partier
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: 'var(--nx-muted)' }}>
            NordicX henter inn nye partier med jevne mellomrom. Er det noe
            spesielt du ser etter, send oss en e-post, så gir vi deg beskjed
            når det kommer inn.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent('Beskjed om nytt parti')}`}
            className="inline-flex items-center px-6 py-3 rounded-md font-semibold text-sm transition-colors"
            style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
          >
            Send e-post om nye partier
          </a>
        </div>
      </section>
    </>
  );
}
