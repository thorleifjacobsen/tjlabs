import Link from 'next/link';
import type { ReactNode } from 'react';
import { BASE, SITE, TASKS } from './data';
import { CheckIcon, PhoneIcon, PinIcon, QuoteIcon, StarIcon } from './icons';

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0f766e]';
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-lg border border-[#0d9488] bg-white px-5 py-3 font-semibold text-[#0d9488] transition-colors hover:bg-[#ccfbf1]';
export const card = 'rounded-lg border border-slate-200 bg-white shadow-sm';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1100px] px-4 ${className}`}>{children}</div>;
}

export function Section({
  children,
  alt = false,
  className = '',
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-10 md:py-16 ${alt ? 'bg-[#f8fafc]' : 'bg-white'} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="border-b border-slate-200 bg-[#f8fafc] py-10 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>
      </Container>
    </section>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ccfbf1] text-[#0d9488]">
      {children}
    </span>
  );
}

export function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <figure className={`${card} flex flex-col p-6`}>
      <QuoteIcon className="h-7 w-7 text-[#0d9488]" />
      <blockquote className="mt-3 flex-1 leading-relaxed text-slate-600">{quote}</blockquote>
      <figcaption className="mt-5 flex items-center justify-between">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="flex text-amber-400" aria-label="5 av 5 stjerner">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

// Endless horizontal scroll: the list is rendered twice and shifted by half its width
export function TestimonialMarquee({ items }: { items: { name: string; quote: string }[] }) {
  return (
    <div className="rf-marquee relative -mx-4 overflow-hidden px-4 md:mx-0 md:px-0">
      <div className="rf-marquee-track flex w-max gap-6 py-1">
        {[...items, ...items].map((t, i) => (
          <div key={i} aria-hidden={i >= items.length} className="w-[300px] shrink-0 sm:w-[340px]">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f8fafc] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f8fafc] to-transparent" />
    </div>
  );
}

export function AreasSection({ alt = false }: { alt?: boolean }) {
  return (
    <Section alt={alt}>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Vi utfører blant annet</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {TASKS.map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium text-slate-900">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccfbf1] text-[#0d9488]">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${card} p-6 md:p-8`}>
          <div className="flex items-center gap-3">
            <IconBadge>
              <PinIcon className="h-5 w-5" />
            </IconBadge>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Her jobber vi</h2>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SITE.areas.map((a) => (
              <li key={a} className="rounded-full bg-[#ccfbf1] px-3 py-1 text-sm font-medium text-[#0f766e]">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed">
            Vi har et stabilt team med tilgjengelig arbeidskraft, og vi er klare til å ta inn nye kunder og
            oppdrag med en gang.
          </p>
          <Link href={`${BASE}/kontakt`} className={`${btnPrimary} mt-6`}>
            Få et tilbud
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-[#0d9488] py-10 text-white md:py-16">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Klar for en renere arbeidsplass?</h2>
          <p className="mt-2 text-teal-50">Fortell oss hva du trenger, så får du et tilbud raskt.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={`${BASE}/kontakt`}
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-[#0d9488] transition-colors hover:bg-[#ccfbf1]"
          >
            Kontakt oss
          </Link>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-white hover:underline">
            <PhoneIcon className="h-5 w-5" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
