import Link from 'next/link';
import type { ReactNode } from 'react';
import { BASE, SITE } from './data';
import { QuoteIcon, StarIcon } from './icons';

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0f766e]';
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
    <section className="border-b border-slate-200 bg-[#f8fafc] py-10 md:py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>
      </Container>
    </section>
  );
}

export function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <figure className={`${card} flex flex-col p-6`}>
      <QuoteIcon className="h-7 w-7 text-[#0d9488]" />
      <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">{quote}</blockquote>
      <figcaption className="mt-5 flex items-center justify-between">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="flex text-amber-400" role="img" aria-label="5 av 5 stjerner">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

export function ContactBand() {
  return (
    <section className="bg-[#0d9488] py-10 text-white md:py-14">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Få et tilbud</h2>
          <p className="mt-2 text-lg">
            <a href={SITE.phoneHref} className="font-semibold hover:underline">
              {SITE.phoneDisplay}
            </a>
            <span className="text-teal-100"> eller </span>
            <a href={`mailto:${SITE.email}`} className="font-semibold hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>
        <Link
          href={`${BASE}/kontakt`}
          className="inline-flex items-center justify-center self-start rounded-lg bg-white px-5 py-3 font-semibold text-[#0f766e] transition-colors hover:bg-[#ccfbf1] md:self-auto"
        >
          Send forespørsel
        </Link>
      </Container>
    </section>
  );
}
