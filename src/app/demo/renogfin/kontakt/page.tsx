import ContactForm from '../_components/ContactForm';
import { SITE } from '../_components/data';
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from '../_components/icons';
import { IconBadge, PageHeader, Section, card } from '../_components/ui';

export const metadata = { title: 'Kontakt', robots: 'noindex' };

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Kontakt oss"
        intro="Fortell oss hva du trenger, så får du et tilbud tilpasset deg. Du kan også ringe eller sende oss en e-post."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div className={`${card} p-6 md:p-8`}>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Få et tilbud</h2>
            <ContactForm />
          </div>

          <aside className="space-y-4">
            <a href={SITE.phoneHref} className={`${card} flex gap-4 p-5 hover:border-[#0d9488]`}>
              <IconBadge>
                <PhoneIcon className="h-5 w-5" />
              </IconBadge>
              <div>
                <div className="text-sm text-slate-500">Telefon</div>
                <div className="font-semibold text-slate-900">{SITE.phoneDisplay}</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className={`${card} flex gap-4 p-5 hover:border-[#0d9488]`}>
              <IconBadge>
                <MailIcon className="h-5 w-5" />
              </IconBadge>
              <div>
                <div className="text-sm text-slate-500">E-post</div>
                <div className="font-semibold text-slate-900">{SITE.email}</div>
              </div>
            </a>
            <div className={`${card} flex gap-4 p-5`}>
              <IconBadge>
                <PinIcon className="h-5 w-5" />
              </IconBadge>
              <div>
                <div className="text-sm text-slate-500">Adresse</div>
                <div className="font-semibold text-slate-900">
                  {SITE.street}, {SITE.postal}
                </div>
                <div className="mt-1 text-sm">Vi jobber i {SITE.area}.</div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#0d9488] hover:text-[#0d9488]"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#0d9488] hover:text-[#0d9488]"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
