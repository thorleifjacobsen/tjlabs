import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produkter | Agder Varme og Vedlikehold',
  description: 'Varmepumper fra Daikin, Mitsubishi Electric, Panasonic, Fujitsu, Samsung og LG.',
  robots: 'noindex',
};

const brands = [
  {
    name: 'Daikin',
    note: 'Japansk kvalitet og markedsleder i Europa. Kjent for høy energieffektivitet og lang levetid.',
  },
  {
    name: 'Mitsubishi Electric',
    note: 'Svært pålitelige pumper med utmerket ytelse i kaldt klima. Populær i norske hjem.',
  },
  {
    name: 'Panasonic',
    note: 'God effekt og stille drift. Spesielt sterk på oppvarming ved lave utetemperaturer.',
  },
  {
    name: 'Fujitsu',
    note: 'Effektive og driftsikre pumper med god varmeytelse gjennom hele vintersesongen.',
  },
  {
    name: 'Samsung',
    note: 'Moderne design med smart styring. Egner seg godt for hus med moderne varmesystem.',
  },
  {
    name: 'LG',
    note: 'Pålitelig ytelse og stilig design. Tilbyr modeller for alle boligstørrelser.',
  },
];

export default function ProdukterPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Produkter</h1>
        <p className="text-[#6b7280] max-w-xl">
          Vi leverer og monterer varmepumper fra ledende merker. Magnus hjelper deg velge riktig modell
          basert på din bolig, ditt budsjett og lokale forhold i Agder.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {brands.map((b) => (
          <div key={b.name} className="border border-[#e5e7eb] rounded-lg p-5 bg-white">
            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded h-12 flex items-center justify-center mb-3">
              <span className="font-bold text-sm text-[#1a1a1a]">{b.name}</span>
            </div>
            <p className="text-sm text-[#6b7280] leading-relaxed">{b.note}</p>
          </div>
        ))}
      </div>

      <div className="border border-[#e5e7eb] rounded-lg p-6 mb-8 bg-[#f9fafb]">
        <p className="font-semibold text-sm text-[#1a1a1a] mb-1">
          Usikker på hvilken modell som passer?
        </p>
        <p className="text-sm text-[#6b7280] mb-1">
          Vi hjelper deg finne riktig pumpe for din boligstørrelse og ditt budsjett.
        </p>
        <p className="text-sm text-[#6b7280]">
          Pris varierer etter modell og boligstørrelse. Kontakt oss for uforpliktende tilbud.
        </p>
      </div>

      <div>
        <p className="text-[#1a1a1a] mb-3 font-medium">Ring for gratis befaring:</p>
        <a
          href="tel:97123554"
          className="bg-[#c2410c] hover:bg-[#b03a0b] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors inline-block"
        >
          Ring 97 12 35 54
        </a>
      </div>
    </div>
  );
}
