export const SITE = {
  name: 'NordicX',
  domain: 'nordicx.no',
  email: 'daniel@nordicx.no',
  contactPerson: 'Daniel',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100070439621121',
  base: '/demo/nordicx',
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductVariant = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  specs: ProductSpec[];
  includes: string[];
  variants: ProductVariant[] | { price: number };
  deliveryNote: string;
  badge: string | null;
};

export function formatPrice(price: number): string {
  const withSpaces = Math.round(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${withSpaces} kr`;
}

export const products: Product[] = [
  {
    id: 'hexagon-lys',
    slug: 'hexagon-lys',
    name: 'Hexagon lyssystem',
    tagline: 'Modulært LED-lyssystem som løfter hele rommet',
    description:
      'Modulært hexagon LED-lyssystem for garasje, verksted, bilpleie, frisørsalong, treningsrom eller kontor. Kraftig lys som løfter hele rommet. Nytt parti på lager, til kampanjepris.',
    image: {
      src: '/demo/nordicx/hexagon-garasje.jpg',
      alt: 'Hexagon LED-lyssystem montert i garasje, seks-kantede lysmoduler som lyser opp taket',
      width: 1560,
      height: 1170,
    },
    specs: [{ label: 'Størrelse på oppsett', value: '4,84 x 2,44 meter' }],
    includes: [
      'Hexagon LED-moduler til komplett oppsett',
      'Montering og strømtilkobling for alle moduler',
      'Fjernkontroll for de dimbare variantene',
    ],
    variants: [
      { name: 'Uten dimming', price: 6000 },
      { name: '3-stegs dimming', price: 7000 },
      { name: '3-stegs dimming med RGB ytterramme', price: 8000 },
      { name: 'Uten dimming med RGB senter og ytterramme', price: 10000 },
    ],
    deliveryNote: 'Nytt parti på lager, kampanjepris',
    badge: 'Kampanjepris',
  },
  {
    id: 'hoytrykkspyler-privat',
    slug: 'hoytrykkspyler-privat',
    name: 'Høytrykkspylerpakke, privat',
    tagline: 'Komplett sett, klart til bruk for privat bruk',
    description:
      'Kampanje på komplett høytrykkspylersett, klart til bruk. Perfekt for privat bruk rundt hus, hage og bil.',
    image: {
      src: '/demo/nordicx/hoytrykkspyler-privat.jpg',
      alt: 'Høytrykkspylerpakke for privat bruk med trommel, vaskelanse og skumkanon',
      width: 665,
      height: 1080,
    },
    specs: [
      { label: 'Trykk', value: '150 bar' },
      { label: 'Kapasitet', value: '10 liter/min' },
    ],
    includes: [
      '1 stk høytrykkspyler: 150 bar, 10 liter/min',
      '1 stk trommel på 20 meter',
      '1 stk vaskelanse som passer til trommelen',
      '1 stk skumkanon for påføring av såpe og skum',
    ],
    variants: { price: 6000 },
    deliveryNote: 'Levering 2 til 3 uker',
    badge: 'Kampanje',
  },
  {
    id: 'hoytrykkspyler-proff',
    slug: 'hoytrykkspyler-proff',
    name: 'Høytrykkspylerpakke, proff',
    tagline: 'Komplett sett for privat og profesjonell bruk',
    description:
      'Komplett høytrykkspylersett bygget for både privat og profesjonell bruk, med to vaskestasjoner klare samtidig.',
    image: {
      src: '/demo/nordicx/hoytrykkspyler-proff.jpg',
      alt: 'Profesjonell høytrykkspylerpakke med to veggmonterte tromler og skuminjektor',
      width: 526,
      height: 789,
    },
    specs: [
      { label: 'Trykk', value: '170 bar' },
      { label: 'Kapasitet', value: '15 liter/min' },
    ],
    includes: [
      '1 stk høytrykkspyler: 170 bar, 15 liter/min',
      '2 stk veggmonterte tromler på 15 meter',
      '2 stk slanger som kobler pumpen til tromlene',
      '2 stk vaskelanser',
      '1 stk skuminjektor',
    ],
    variants: { price: 18750 },
    deliveryNote: 'Levering avtales ved bestilling',
    badge: null,
  },
  {
    id: 'dieselvarmer',
    slug: 'dieselvarmer',
    name: 'Dieselvarmer NDH-16',
    tagline: 'Kraftig og stillegående oppvarming av store rom',
    description:
      'Kraftig og stillegående oppvarming av store rom. Lavt støynivå og en 50 liters tank som gir lang driftstid. Enkel å flytte, økonomisk i drift og konstruert for tøffe miljøer. Passer verksteder, garasjer og lagerbygninger.',
    image: {
      src: '/demo/nordicx/dieselvarmer-ndh16.jpg',
      alt: 'Dieselvarmer NDH-16 plassert i verksted',
      width: 565,
      height: 502,
    },
    specs: [
      { label: 'Effekt', value: '16 kW' },
      { label: 'Tank', value: '50 liter' },
      { label: 'Støynivå', value: 'Lavt' },
    ],
    includes: [],
    variants: { price: 15000 },
    deliveryNote: 'Levering 4 uker, begrenset antall',
    badge: 'Begrenset antall',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
