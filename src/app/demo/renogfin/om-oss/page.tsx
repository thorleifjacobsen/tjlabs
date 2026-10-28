import SafeImg from '../_components/SafeImg';
import { SITE, TESTIMONIALS } from '../_components/data';
import { ClockIcon, PinIcon, ShieldIcon, TagIcon, UserIcon, SparkleIcon } from '../_components/icons';
import { CtaBand, IconBadge, PageHeader, Section, TestimonialMarquee, card } from '../_components/ui';

export const metadata = { title: 'Om oss', robots: 'noindex' };

const VALUES = [
  {
    title: 'Gjennomsiktige priser',
    text: 'Du vet hva du betaler for. Ingen skjulte kostnader og ingen overraskelser på fakturaen.',
    icon: <TagIcon className="h-5 w-5" />,
  },
  {
    title: 'Fast kontaktperson',
    text: 'Du får én person å forholde deg til, som kjenner lokalene og behovene dine.',
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    title: 'Enkel oppstart',
    text: 'Vi tar en befaring, lager en plan og setter i gang. Du trenger ikke tenke på resten.',
    icon: <ClockIcon className="h-5 w-5" />,
  },
  {
    title: 'Leverer hver gang',
    text: 'Faste rutiner og oppfølging gjør at kvaliteten holder seg, også over tid.',
    icon: <ShieldIcon className="h-5 w-5" />,
  },
];

export default function OmOssPage() {
  return (
    <>
      <PageHeader
        title="Om oss"
        intro="Ren & Fin AS er et lokalt renholdsselskap i Skedsmokorset. Vi gjør renhold enkelt for bedrifter, borettslag og private på Romerike."
      />

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Renhold gjort enkelt</h2>
            <p className="mt-4 leading-relaxed">
              For en bedrift handler suksess om mer enn tall og resultater. Et rent og ryddig arbeidsmiljø gir
              bedre trivsel for de ansatte og et godt førsteinntrykk for kundene.
            </p>
            <p className="mt-4 leading-relaxed">
              Hos Ren & Fin AS får du gjennomsiktige priser, en enkel oppstart og et team som leverer hver gang.
              Vi holder til i Skedsmokorset og kjenner området godt, så vi er aldri langt unna.
            </p>
          </div>
          <SafeImg
            src="https://placehold.co/800x600/e2e8f0/94a3b8?text=Renholdsteam+i+arbeid"
            alt="Renholdsteam i arbeid"
            className="aspect-[4/3] w-full rounded-lg"
          />
        </div>
      </Section>

      <Section alt>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Slik jobber vi</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className={`${card} p-6`}>
              <IconBadge>{v.icon}</IconBadge>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`${card} flex gap-4 p-6`}>
            <IconBadge>
              <PinIcon className="h-5 w-5" />
            </IconBadge>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Lokalt på Romerike</h2>
              <p className="mt-2 leading-relaxed">
                Vi dekker {SITE.area}, med base i {SITE.street}, {SITE.postal}.
              </p>
            </div>
          </div>
          <div className={`${card} flex gap-4 p-6`}>
            <IconBadge>
              <SparkleIcon className="h-5 w-5" />
            </IconBadge>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Fast avtale eller engangsjobb</h2>
              <p className="mt-2 leading-relaxed">
                Trenger du renhold hver dag, en gang i måneden eller bare én gang? Vi tilpasser oss deg.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dette sier kundene våre</h2>
        <div className="mt-8">
          <TestimonialMarquee items={TESTIMONIALS} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
