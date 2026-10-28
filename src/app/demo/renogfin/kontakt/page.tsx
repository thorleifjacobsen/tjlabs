import ContactForm from '../_components/ContactForm';
import { SITE } from '../_components/data';
import { PageHeader, Section, card } from '../_components/ui';

export const metadata = { title: 'Kontakt', robots: 'noindex' };

export default function KontaktPage() {
  return (
    <>
      <PageHeader title="Kontakt" intro="Fortell kort hva du trenger, så kommer vi tilbake med et tilbud." />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div className="lg:col-start-2 lg:row-start-1">
            <dl className="space-y-5">
              <div>
                <dt className="text-sm text-slate-500">Telefon</dt>
                <dd>
                  <a href={SITE.phoneHref} className="text-lg font-semibold text-slate-900 hover:text-[#0d9488]">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">E-post</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-slate-900 hover:text-[#0d9488]">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Adresse</dt>
                <dd className="text-lg font-semibold text-slate-900">
                  {SITE.street}
                  <br />
                  {SITE.postal}
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-slate-600 lg:hidden">Eller bruk skjemaet nedenfor.</p>
          </div>

          <div className={`${card} p-6 md:p-8 lg:col-start-1 lg:row-start-1`}>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
