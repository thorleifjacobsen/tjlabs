import ContactForm from '../_components/ContactForm';
import { SITE } from '../_components/data';
import { MailIcon, PhoneIcon } from '../_components/icons';
import { PageHeader, Section, card } from '../_components/ui';

export const metadata = { title: 'Kontakt', robots: 'noindex' };

export default function KontaktPage() {
  return (
    <>
      <PageHeader title="Kontakt" intro="Fortell kort hva du trenger, så kommer vi tilbake med et tilbud." />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div className="lg:col-start-2 lg:row-start-1">
            <div className="flex flex-col gap-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 rounded-lg bg-[#0d9488] px-5 py-4 text-white transition-colors hover:bg-[#0f766e]"
              >
                <PhoneIcon className="h-6 w-6 shrink-0" />
                <span>
                  <span className="block text-sm text-teal-50">Ring oss</span>
                  <span className="block text-lg font-semibold">{SITE.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-lg border border-slate-300 bg-white px-5 py-4 text-slate-900 transition-colors hover:border-[#0d9488]"
              >
                <MailIcon className="h-6 w-6 shrink-0 text-[#0d9488]" />
                <span>
                  <span className="block text-sm text-slate-500">Send e-post</span>
                  <span className="block text-lg font-semibold">{SITE.email}</span>
                </span>
              </a>
            </div>
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
