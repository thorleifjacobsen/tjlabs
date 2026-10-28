export const BASE = '/demo/renogfin';

export const SITE = {
  name: 'Ren & Fin AS',
  street: 'Industriveien 1',
  postal: '2020 Skedsmokorset',
  phoneDisplay: '+47 462 68 507',
  phoneShort: '462 68 507',
  phoneHref: 'tel:+4746268507',
  email: 'info@renogfin.no',
  area: 'Oslo, Romerike, Ullensaker, Gardermoen, Lørenskog, Bærum og Hønefoss',
  facebook: 'https://www.facebook.com/renogfin/',
  instagram: 'https://www.instagram.com/renogfin.no/',
  linkedin: 'https://www.linkedin.com/in/ren-og-fin-as-2963a5127/',
};

export const NAV = [
  { href: BASE, label: 'Hjem' },
  { href: `${BASE}/tjenester`, label: 'Tjenester' },
  { href: `${BASE}/om-oss`, label: 'Om oss' },
  { href: `${BASE}/kontakt`, label: 'Kontakt' },
];

export type Service = {
  id: string;
  title: string;
  nav: string;
  short: string;
  image: string;
  imagePosition?: string;
  intro: string;
  points: string[];
  gallery?: { src: string; alt: string }[];
};

export const SERVICES: Service[] = [
  {
    id: 'bedrift',
    title: 'Renhold for bedrifter',
    nav: 'Bedrifter',
    short: 'Kontorvask, butikkvask og daglig renhold.',
    image: '/demo/renogfin/team-logo.jpg',
    imagePosition: 'center 40%',
    intro: 'Kontorlokaler, butikklokaler og eiendomsdrift. Rask, effektiv og pålitelig.',
    points: ['Kontorvask', 'Daglig renhold for bedrifter', 'Butikkvask og lokalervask'],
  },
  {
    id: 'periodisk',
    title: 'Periodisk renhold',
    nav: 'Periodisk renhold',
    short: 'Vindusvask, sølvpuss og polering.',
    image: '/demo/renogfin/vindusvask.jpg',
    intro: 'Vasking, rydding, puss, vindusvask, sølvpuss og polering. Hjem eller kontor, vi tar hånd om det.',
    points: [],
  },
  {
    id: 'borettslag',
    title: 'Borettslag og sameie',
    nav: 'Borettslag',
    short: 'Trappevask, dørmatter og fellesarealer.',
    image: '/demo/renogfin/trappevask.jpg',
    imagePosition: 'center 55%',
    intro: 'Alt i ett for borettslag og sameier.',
    points: ['Trappevask', 'Levering av dørmatter', 'Vaktmestertjenester', 'Vindusvask', 'Vedlikehold av fellesområder'],
  },
  {
    id: 'hovedrengjoring',
    title: 'Hovedrengjøring og flyttevask',
    nav: 'Flyttevask',
    short: 'Flyttevask, visningsvask og hovedrengjøring.',
    image: '/demo/renogfin/bad.jpg',
    intro: 'Flyttevask, visningsvask og grundig interiørrengjøring. Tak, vegger, vinduer og kjøkkeninnredning blir helt rent.',
    points: [],
    gallery: [
      { src: '/demo/renogfin/rom-takvindu.jpg', alt: 'Lyst soverom med takvindu' },
      { src: '/demo/renogfin/rom-stue.jpg', alt: 'Lys stue' },
      { src: '/demo/renogfin/rom-soverom.jpg', alt: 'Lyst soverom' },
    ],
  },
  {
    id: 'hjemmespa',
    title: 'HjemmeSpa',
    nav: 'HjemmeSpa',
    short: 'Grundig rengjøring med essensielle oljer.',
    image: '/demo/renogfin/hjem.jpg',
    intro: 'Velvære med essensielle oljer: avslapning, estetisk oppretting og grundig rengjøring.',
    points: [],
  },
  {
    id: 'snomaking',
    title: 'Snømåking og strøsingel',
    nav: 'Snømåking',
    short: 'Snømåking og levering av strøsingel.',
    image: '/demo/renogfin/snomaking.jpg',
    imagePosition: 'center 60%',
    intro: 'For privatpersoner, borettslag og bedrifter. Fast avtale eller ved behov, lokalt og med rask respons.',
    points: [
      'Snømåking av innkjørsler, gårdsplasser, parkeringsplasser og fortau',
      'Levering av strøsingel',
      'Tryggere underlag, mindre risiko for fall',
    ],
    gallery: [
      { src: '/demo/renogfin/snofreser.jpg', alt: 'Snøfreser i arbeid ved et gjerde' },
      { src: '/demo/renogfin/strosingel.jpg', alt: 'Strøsingel på en snødekt gangvei' },
    ],
  },
  {
    id: 'hage',
    title: 'Hage og utemiljø',
    nav: 'Hage',
    short: 'Ferdigplen, hekk, grus og beplanting.',
    image: '/demo/renogfin/hage.jpg',
    intro: 'Fra overgrodd hage til et uteområde som er enkelt å holde i orden.',
    points: [
      'Klargjøring og legging av ferdigplen',
      'Fjerning av ugress og gamle bed',
      'Klipping av hekk',
      'Nye gruspartier og beplanting',
      'Graving',
    ],
    gallery: [
      { src: '/demo/renogfin/hage-klargjoring.jpg', alt: 'Hage klargjort for ferdigplen' },
      { src: '/demo/renogfin/hage-plen.jpg', alt: 'Nylagt ferdigplen' },
      { src: '/demo/renogfin/hage-skraning1.jpg', alt: 'Skråning dekket med beplantning' },
      { src: '/demo/renogfin/hage-skraning2.jpg', alt: 'Ferdig beplantet skråning' },
      { src: '/demo/renogfin/hage-basseng.jpg', alt: 'Ny plen ved basseng' },
      { src: '/demo/renogfin/hage-innkjorsel.jpg', alt: 'Ferdig uteområde med plen, hvit singel og belysning' },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Barbro',
    quote:
      'Fantastisk flott rengjøring! Trodde knapt det var mulig å få leiligheten min så fin... den skinte! Den så nesten ut som en helt ny leilighet etter noen timer med Ren og Fin AS. I tillegg hørte de nøye på info, var hyggelige og forståelsesfulle, og gjorde i det hele tatt en fantastisk innsats!',
  },
  {
    name: 'Andreas',
    quote:
      'Utrolig dyktige, jobber raskt og effektivt. Også over tid. Aldri noe tull. Anbefales på det varmeste.',
  },
  {
    name: 'Hilde',
    quote: 'Vi benyttet Ren & Fin til flyttevask og er veldig fornøyd med jobben de gjorde. Kan trygt anbefales.',
  },
  {
    name: 'Jon',
    quote:
      'Vasket ned kjeller etter vi hadde skittent vann inne ifbm overvann som trakk inn. Svært skitten kjeller ble ren og fin! Takk, Sandra!',
  },
  {
    name: 'Marius',
    quote:
      'Et rent kontor hver dag er en skikkelig opptur, det setter standarden for en god arbeidsdag.',
  },
  {
    name: 'Ingvild',
    quote: 'Mine tåkete vinduer ble perfekte. Nydelig arbeid',
  },
  {
    name: 'Kristin',
    quote:
      'Vi hyret dem til å forvandle en overgrodd hage og plen til en tilnærmet vedlikeholdsfri hage. Vi anbefaler “Renogfin” til ditt neste hageprosjekt og ville brukt de igjen.',
  },
  {
    name: 'Knut',
    quote:
      'Ren og Fin AS utførte ett oppdrag for oss med å klargjøre for og legge ferdigplen. Oppdraget ble utført til vår fulle tilfredsstillelse, og vi kan anbefale Ren og Fin til denne type oppdrag.',
  },
  {
    name: 'Inger Merete',
    quote: 'Veldig fornøyd med utført jobb. Et firma jeg vil fortsette å bruke.',
  },
  {
    name: 'Marianne',
    quote:
      'De leverer varene uten å brife med det. Huset mitt ser mye bedre ut etter de har vært her.',
  },
  {
    name: 'Marcela',
    quote: 'Det er veldig god jobb, de er veldig snille mennesker og jeg liker det firmaet 😊',
  },
];
