import Lightbox from '../_components/Lightbox';
import SafeImg from '../_components/SafeImg';
import { SERVICES, type Service } from '../_components/data';
import { Container, ContactBand, PageHeader } from '../_components/ui';

export const metadata = { title: 'Tjenester', robots: 'noindex' };

const thumb =
  'group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d9488]';
const zoom = 'h-full w-full transition-transform duration-300 group-hover:scale-[1.03]';

// One 3:2 block per service: a single photo, or a collage of one large and two
// small tiles where the last tile shows how many more photos the lightbox holds.
function ServiceMedia({ service, className }: { service: Service; className: string }) {
  const photos = [
    { src: service.image, alt: service.title, position: service.imagePosition },
    ...(service.gallery ?? []).map((g) => ({ ...g, position: undefined })),
  ];
  const [main, ...rest] = photos;
  const tiles = rest.slice(0, 2);
  const hidden = rest.slice(2);

  const tile = (p: (typeof photos)[number], extra = 0) => (
    <button
      type="button"
      data-lb={service.id}
      data-src={p.src}
      data-alt={p.alt}
      aria-label={extra ? `Vis alle ${photos.length} bilder` : `Vis bilde: ${p.alt}`}
      className={thumb}
    >
      <SafeImg src={p.src} alt={p.alt} position={p.position} className={zoom} />
      {extra > 0 && (
        <span className="absolute inset-0 flex items-center justify-center bg-slate-900/55 text-2xl font-semibold text-white transition-colors group-hover:bg-slate-900/45">
          +{extra}
        </span>
      )}
    </button>
  );

  if (tiles.length === 0) return <div className={`aspect-[3/2] ${className}`}>{tile(main)}</div>;

  return (
    <div className={`grid aspect-[3/2] grid-cols-3 grid-rows-2 gap-2 ${className}`}>
      <div className="col-span-2 row-span-2">{tile(main)}</div>
      {tiles.map((p, i) => (
        <div key={p.src} className={tiles.length === 1 ? 'row-span-2' : ''}>
          {tile(p, i === tiles.length - 1 ? hidden.length : 0)}
        </div>
      ))}
      {hidden.map((p) => (
        <span key={p.src} hidden data-lb={service.id} data-src={p.src} data-alt={p.alt} />
      ))}
    </div>
  );
}

export default function TjenesterPage() {
  return (
    <>
      <PageHeader title="Tjenester" intro="Renhold for bedrifter, borettslag og private, og arbeid på uteområdet." />

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
            <ServiceMedia service={s} className={i % 2 ? 'md:order-2' : ''} />
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
        </section>
      ))}

      <ContactBand />
      <Lightbox />
    </>
  );
}
