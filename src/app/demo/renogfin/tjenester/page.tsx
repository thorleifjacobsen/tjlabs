import SafeImg from '../_components/SafeImg';
import { SERVICES } from '../_components/data';
import { Container, ContactBand, PageHeader } from '../_components/ui';

export const metadata = { title: 'Tjenester', robots: 'noindex' };

export default function TjenesterPage() {
  return (
    <>
      <PageHeader title="Tjenester" intro="Alle tjenestene kan bestilles som fast avtale eller engangsjobb." />

      <nav aria-label="Hopp til tjeneste" className="border-b border-slate-200 bg-white">
        <Container className="flex flex-wrap gap-2 py-4">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-[#0d9488] hover:bg-[#ccfbf1] hover:text-[#0f766e]"
            >
              {s.nav}
            </a>
          ))}
        </Container>
      </nav>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-10 md:py-16 ${i % 2 ? 'bg-[#f8fafc]' : 'bg-white'}`}>
          <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={i % 2 ? 'md:order-2' : ''}>
              <SafeImg
                src={s.image}
                alt={s.title}
                position={s.imagePosition}
                className="aspect-[3/2] w-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed">{s.intro}</p>
              {s.points.length > 0 && (
                <ul className="mt-5 list-disc space-y-1.5 pl-5 text-slate-700 marker:text-[#0d9488]">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
          {s.gallery && (
            <Container className="mt-8">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                {s.gallery.map((g) => (
                  <li key={g.src}>
                    <SafeImg src={g.src} alt={g.alt} className="aspect-square w-full rounded-lg" />
                  </li>
                ))}
              </ul>
            </Container>
          )}
        </section>
      ))}

      <ContactBand />
    </>
  );
}
