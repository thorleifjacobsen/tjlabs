import TestimonialMarquee from '../_components/TestimonialMarquee';
import SafeImg from '../_components/SafeImg';
import { SITE, TESTIMONIALS } from '../_components/data';
import { ClockIcon, ShieldIcon, TagIcon, UserIcon } from '../_components/icons';
import { AreasSection, CtaBand, IconBadge, PageHeader, Section, card } from '../_components/ui';

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
        intro="Ren & Fin AS er et profesjonelt vaskebyrå i Oslo og Viken. Vi tilbyr pålitelig og effektiv rengjøring for både bedrifter og private."
      />

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Renhold gjort enkelt</h2>
            <p className="mt-4 leading-relaxed">
              Vi jobber i {SITE.area}, og leverer renholdstjenester som holder høy kvalitet hver gang.
            </p>
            <p className="mt-4 leading-relaxed">
              For en bedrift handler suksess om mer enn tall og resultater. Et rent og ryddig arbeidsmiljø gir
              bedre trivsel for de ansatte og et godt førsteinntrykk for kundene.
            </p>
            <p className="mt-4 leading-relaxed">
              Hos Ren & Fin AS får du gjennomsiktige priser, en enkel oppstart og et team som leverer hver gang.
              Vi har base i Skedsmokorset, med et stabilt team som er klart til å ta inn nye kunder og oppdrag med en gang.
            </p>
          </div>
          <SafeImg
            src="/demo/renogfin/team-kjokken.jpg"
            alt="Renholder i Ren & Fin-t-skjorte vasker en kjøkkenvask"
            position="center 35%"
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

      <AreasSection />

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
