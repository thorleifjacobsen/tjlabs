import SafeImg from '../_components/SafeImg';
import { SITE } from '../_components/data';
import { PageHeader, Section } from '../_components/ui';

export const metadata = { title: 'Om oss', robots: 'noindex' };

const FACTS = [
  { label: 'Område', value: SITE.area },
  { label: 'Kunder', value: 'Bedrifter, borettslag og private' },
  { label: 'Avtaler', value: 'Fast avtale eller ved behov' },
  { label: 'Adresse', value: `${SITE.street}, ${SITE.postal}` },
];

export default function OmOssPage() {
  return (
    <>
      <PageHeader title="Om oss" intro="Ren & Fin AS er et vaskebyrå med base i Skedsmokorset." />

      <Section>
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="leading-relaxed">
              Vi tilbyr pålitelig og effektiv rengjøring for både bedrifter og private, og leverer renholdstjenester
              som holder høy kvalitet hver gang.
            </p>
            <p className="mt-4 leading-relaxed">
              For en bedrift handler suksess om mer enn tall og resultater. Et rent og ryddig arbeidsmiljø gir bedre
              trivsel for de ansatte og et godt førsteinntrykk for kundene.
            </p>
            <p className="mt-4 leading-relaxed">
              Vi har et stabilt team med tilgjengelig arbeidskraft, og vi er klare til å ta inn nye kunder og oppdrag
              med en gang.
            </p>
            <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {FACTS.map((f) => (
                <div key={f.label} className="grid grid-cols-[96px_1fr] gap-4 py-3">
                  <dt className="font-medium text-slate-900">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <SafeImg
            src="/demo/renogfin/team-kjokken.jpg"
            alt="Renholder i Ren & Fin-t-skjorte vasker en kjøkkenvask"
            position="center 35%"
            className="aspect-[4/5] w-full rounded-lg"
          />
        </div>
      </Section>
    </>
  );
}
