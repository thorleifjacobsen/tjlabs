import { SITE } from '../data';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Kontakt, NordicX',
  description:
    'Ta kontakt med NordicX på e-post for bestilling eller spørsmål om hexagon lyssystem, høytrykkspylerpakker eller dieselvarmer.',
  robots: 'noindex',
};

const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent('Henvendelse til NordicX')}`;

export default function KontaktPage() {
  return (
    <>
      <section className="py-10 md:py-16" style={{ backgroundColor: 'var(--nx-concrete)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: 1100 }}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em] block mb-3"
            style={{ color: 'var(--nx-accent)' }}
          >
            Kontakt
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Ta kontakt
          </h1>
          <p className="max-w-prose leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
            Bestilling og alle henvendelser går på e-post. Skriv gjerne hva du
            lurer på, så svarer Daniel deg direkte.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div
          className="mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10"
          style={{ maxWidth: 1100 }}
        >
          <div
            className="rounded-lg border p-6 md:p-8"
            style={{ borderColor: 'var(--nx-line)', backgroundColor: 'var(--nx-concrete)' }}
          >
            <h2 className="font-semibold text-lg mb-6">Kontaktinformasjon</h2>
            <ul className="space-y-6 text-sm">
              <li>
                <p className="font-medium mb-1">E-post</p>
                <a
                  href={mailtoHref}
                  className="text-xl font-semibold"
                  style={{ color: 'var(--nx-accent)' }}
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="font-medium mb-1">Facebook</p>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                  style={{ color: 'var(--nx-ink)' }}
                >
                  NordicX på Facebook
                </a>
              </li>
              <li>
                <p className="font-medium mb-1">Svartid</p>
                <p style={{ color: 'var(--nx-muted)' }}>
                  Vi svarer normalt på e-post innen kort tid.
                </p>
              </li>
              <li>
                <p className="font-medium mb-1">Levering</p>
                <p style={{ color: 'var(--nx-muted)' }}>
                  2 til 4 uker avhengig av produkt, avtales ved bestilling.
                </p>
              </li>
              <li className="pt-2 border-t" style={{ borderColor: 'var(--nx-line)' }}>
                <p style={{ color: 'var(--nx-muted)' }}>
                  Bestilling og alle henvendelser håndteres på e-post.
                </p>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
