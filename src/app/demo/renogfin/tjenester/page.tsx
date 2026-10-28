import Link from 'next/link';
import SafeImg from '../_components/SafeImg';
import { BASE, SERVICES } from '../_components/data';
import { CheckIcon } from '../_components/icons';
import { Container, CtaBand, PageHeader, btnPrimary } from '../_components/ui';

export const metadata = { title: 'Tjenester', robots: 'noindex' };

export default function TjenesterPage() {
  return (
    <>
      <PageHeader
        title="Tjenester"
        intro="Vi tar renholdet for bedrifter, borettslag og private i Oslo og omegn. Velg en fast avtale eller bestill en engangsjobb, så tilpasser vi oss deg."
      />

      <div className="border-b border-slate-200 bg-white">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              {s.title}
            </a>
          ))}
        </Container>
      </div>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-10 md:py-16 ${i % 2 ? 'bg-[#f8fafc]' : 'bg-white'}`}>
          <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={i % 2 ? 'md:order-2' : ''}>
              <SafeImg src={s.image} alt={s.title} className="aspect-[3/2] w-full rounded-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed">{s.intro}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ccfbf1] text-[#0d9488]">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-slate-700">{p}</span>
                  </li>
                ))}
              </ul>
              <Link href={`${BASE}/kontakt`} className={`${btnPrimary} mt-7`}>
                Få et tilbud
              </Link>
            </div>
          </Container>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
