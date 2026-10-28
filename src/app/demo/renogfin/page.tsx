import Link from 'next/link';
import SafeImg from './_components/SafeImg';
import { BASE, SERVICES, TESTIMONIALS } from './_components/data';
import { ArrowIcon, RollIcon, SparkleIcon, TagIcon, UserIcon, PinIcon } from './_components/icons';
import { CtaBand, IconBadge, Section, TestimonialMarquee, btnPrimary, card } from './_components/ui';

export const metadata = { robots: 'noindex' };

const TRUST = [
  { label: 'Ingen skjulte kostnader', icon: <TagIcon className="h-5 w-5" /> },
  { label: 'Fast kontaktperson', icon: <UserIcon className="h-5 w-5" /> },
  { label: 'Tørkepapir og toalettpapir inkludert i faste avtaler', icon: <RollIcon className="h-5 w-5" /> },
  { label: 'Lokalt på Romerike', icon: <PinIcon className="h-5 w-5" /> },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <SafeImg
          src="https://placehold.co/1600x900/e2e8f0/94a3b8?text=Lyst+og+rent+kontorlokale"
          alt="Lyst og rent kontorlokale"
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div className="absolute inset-0 -z-10 bg-slate-900/55" />
        <div className="mx-auto flex min-h-[60vh] max-w-[1100px] items-center px-4 py-16 md:min-h-[70vh] md:py-24">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Et rent arbeidsmiljø, hver eneste dag
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-100 md:text-xl">
              Ren & Fin AS leverer renhold for bedrifter, borettslag og private på Romerike. Fast avtale
              eller engangsjobb, vi tilpasser oss deg.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${BASE}/kontakt`} className={btnPrimary}>
                Få et tilbud
              </Link>
              <Link
                href={`${BASE}/tjenester`}
                className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Se tjenestene
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white py-8 md:py-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-start gap-3">
              <IconBadge>{t.icon}</IconBadge>
              <span className="pt-1 text-sm font-medium leading-snug text-slate-900 md:text-[15px]">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Offer */}
      <Section>
        <div className="flex flex-col gap-6 rounded-lg border border-teal-200 bg-[#ccfbf1] p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-[#0d9488] sm:inline-flex">
              <SparkleIcon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Ekstra måned på kjøpet</h2>
              <p className="mt-2 max-w-xl leading-relaxed text-slate-700">
                Signer en 12 måneders renholdsavtale for bedriften, så får du en ekstra måned med renhold uten
                ekstra kostnad.
              </p>
            </div>
          </div>
          <Link href={`${BASE}/kontakt`} className={`${btnPrimary} shrink-0`}>
            Få tilbudet
          </Link>
        </div>
      </Section>

      {/* About */}
      <Section alt>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Renhold gjort enkelt</h2>
            <p className="mt-4 leading-relaxed">
              For en bedrift handler suksess om mer enn tall og resultater. Et rent og ryddig arbeidsmiljø gir
              bedre trivsel for de ansatte og et godt førsteinntrykk for kundene. Hos Ren & Fin AS får du
              gjennomsiktige priser, en enkel oppstart og et team som leverer hver gang.
            </p>
            <Link
              href={`${BASE}/om-oss`}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0d9488] hover:text-[#0f766e]"
            >
              Les mer om oss
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <SafeImg
            src="https://placehold.co/800x600/e2e8f0/94a3b8?text=Renholdsteam+i+arbeid"
            alt="Renholdsteam i arbeid"
            className="aspect-[4/3] w-full rounded-lg"
          />
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Tjenestene våre</h2>
          <p className="mt-3 leading-relaxed">
            Fra daglig kontorrenhold til en grundig flyttevask. Vi tilpasser jobben etter deg.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.id} className={`${card} flex flex-col overflow-hidden`}>
              <SafeImg src={s.image} alt={s.title} className="aspect-[3/2] w-full" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed">{s.short}</p>
                <Link
                  href={`${BASE}/tjenester#${s.id}`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-[#0d9488] hover:text-[#0f766e]"
                >
                  Les mer
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
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
