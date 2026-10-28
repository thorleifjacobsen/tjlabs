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
    short: 'Kontorer, butikker og lokaler. Daglig, ukentlig eller etter behov.',
    image: '/demo/renogfin/kontorrenhold.jpg',
    imagePosition: 'center 70%',
    intro:
      'Fast renhold av kontorlokaler, butikklokaler og eiendom. Avtalen settes opp etter åpningstidene og behovene deres.',
    points: [
      'Kontorvask og daglig renhold',
      'Butikkvask og lokalervask',
      'Daglig, ukentlig eller etter behov',
      '12 måneders avtale gir en ekstra måned uten ekstra kostnad',
    ],
  },
  {
    id: 'periodisk',
    title: 'Periodisk renhold',
    nav: 'Periodisk renhold',
    short: 'Vindusvask, polering og sølvpuss.',
    image: '/demo/renogfin/vindusvask.jpg',
    intro: 'Jobbene som ikke trengs hver uke. Som en del av en fast avtale eller som engangsjobb, hjemme eller på kontoret.',
    points: ['Vindusvask innvendig og utvendig', 'Polering og behandling av gulv', 'Sølvpuss', 'Grundig rydding'],
  },
  {
    id: 'borettslag',
    title: 'Borettslag og sameie',
    nav: 'Borettslag',
    short: 'Trappevask, dørmatter og fellesarealer.',
    image: '/demo/renogfin/trappevask.jpg',
    imagePosition: 'center 55%',
    intro: 'Faste rutiner for trappeoppganger og fellesområder, så styret slipper å følge opp.',
    points: [
      'Trappevask etter fast plan',
      'Levering og bytte av dørmatter',
      'Vaktmestertjenester',
      'Vedlikehold av fellesområder',
    ],
  },
  {
    id: 'hovedrengjoring',
    title: 'Hovedrengjøring og flyttevask',
    nav: 'Flyttevask',
    short: 'Flyttevask, visningsvask og hovedrengjøring.',
    image: '/demo/renogfin/bad.jpg',
    intro: 'Når du skal flytte, selge eller trenger en skikkelig runde. Vi går gjennom hele boligen fra topp til bunn.',
    points: ['Flyttevask og visningsvask', 'Tak, vegger og lister', 'Vinduer og karmer', 'Kjøkkeninnredning, inne og ute'],
    gallery: [
      { src: '/demo/renogfin/rom-takvindu.jpg', alt: 'Lyst soverom med takvindu etter rengjøring' },
      { src: '/demo/renogfin/rom-stue.jpg', alt: 'Ren og ryddig stue' },
      { src: '/demo/renogfin/rom-soverom.jpg', alt: 'Rent soverom klart for visning' },
    ],
  },
  {
    id: 'hjemmespa',
    title: 'HjemmeSpa',
    nav: 'HjemmeSpa',
    short: 'Grundig rengjøring med eteriske oljer.',
    image: '/demo/renogfin/hjem.jpg',
    intro:
      'Grundig rengjøring av hele boligen, med ekstra fokus på bad og soverom. Vi bruker eteriske oljer for en frisk duft.',
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
      'De leverer varene uten å skryte av det. Huset mitt ser mye bedre ut etter at de har vært her.',
  },
  {
    name: 'Marcela',
    quote: 'Det er veldig god jobb, de er veldig snille mennesker og jeg liker det firmaet 😊',
  },
];
