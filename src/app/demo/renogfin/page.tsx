import Link from 'next/link';
import SafeImg from './_components/SafeImg';
import TestimonialMarquee from './_components/TestimonialMarquee';
import { BASE, SERVICES, SITE, TESTIMONIALS } from './_components/data';
import { CheckIcon, PhoneIcon } from './_components/icons';
import { ContactBand, Section, btnPrimary, card } from './_components/ui';

export const metadata = { robots: 'noindex' };

const FACTS = [
  'Fast kontaktperson',
  'Ingen skjulte kostnader',
  'Tørkepapir og toalettpapir inkludert i faste avtaler',
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SafeImg
          src="/demo/renogfin/hero-kontor.jpg"
          alt="Renholder fra Ren & Fin tørker støv på et lyst kontor"
          position="center 40%"
          eager
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div className="absolute inset-0 -z-10 bg-slate-900/55" />
        <div className="mx-auto flex min-h-[52vh] max-w-[1100px] items-center px-4 pb-20 pt-14 md:min-h-[62vh] md:pb-24 md:pt-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Et rent arbeidsmiljø, hver eneste dag
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-100 md:text-xl">
              Renhold for bedrifter, borettslag og private. Fast avtale eller engangsjobb.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${BASE}/kontakt`} className={btnPrimary}>
                Få et tilbud
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                {SITE.phoneShort}
              </a>
            </div>
            <p className="mt-8 text-sm text-slate-200">Vi jobber i {SITE.area}.</p>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-10 max-w-[1100px] px-4">
        <ul className={`${card} grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-[1fr_1fr_1.6fr]`}>
          {FACTS.map((f) => (
            <li key={f} className="flex items-center gap-3 px-5 py-4 text-[15px] font-medium text-slate-900 md:py-5">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Tjenester</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Link
              key={s.id}
              href={`${BASE}/tjenester#${s.id}`}
              className={`${card} group overflow-hidden transition-colors hover:border-[#0d9488] ${
                i === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <SafeImg src={s.image} alt={s.title} position={s.imagePosition} className="h-44 w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 group-hover:text-[#0f766e]">{s.title}</h3>
                <p className="mt-1 text-[15px] leading-snug">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-white pb-10 md:pb-16">
        <div className="mx-auto max-w-[1100px] px-4">
          <div className="flex flex-col gap-5 rounded-lg bg-[#ccfbf1] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Ekstra måned på kjøpet</h2>
              <p className="mt-1 max-w-xl leading-relaxed text-slate-700">
                Signer en 12 måneders renholdsavtale for bedriften, så får du en ekstra måned med renhold uten
                ekstra kostnad.
              </p>
            </div>
            <Link href={`${BASE}/kontakt`} className={`${btnPrimary} shrink-0`}>
              Få tilbudet
            </Link>
          </div>
        </div>
      </section>

      <Section alt>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dette sier kundene våre</h2>
        <div className="mt-8">
          <TestimonialMarquee items={TESTIMONIALS} />
        </div>
      </Section>

      <ContactBand />
    </>
  );
}
