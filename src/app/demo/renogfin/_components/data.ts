export const BASE = '/demo/renogfin';

export const SITE = {
  name: 'Ren & Fin AS',
  street: 'Industriveien 1',
  postal: '2020 Skedsmokorset',
  phoneDisplay: '+47 462 68 507',
  phoneShort: '462 68 507',
  phoneHref: 'tel:+4746268507',
  email: 'info@renogfin.no',
  area: 'Romerike, Lillestrøm og omegn',
  facebook: 'https://www.facebook.com/renogfin/',
  instagram: 'https://www.instagram.com/renogfin.no/',
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
  short: string;
  image: string;
  intro: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'bedrift',
    title: 'Renhold for bedrifter',
    short: 'Kontorlokaler, butikklokaler og eiendomsdrift. Raskt, effektivt og pålitelig.',
    image: 'https://placehold.co/800x533/e2e8f0/94a3b8?text=Kontorrenhold',
    intro:
      'Et rent kontor gir bedre trivsel for de ansatte og et godt førsteinntrykk for kundene. Vi setter opp en fast avtale som passer åpningstidene og behovene deres, og dere får en fast kontaktperson som kjenner lokalene.',
    points: [
      'Kontorlokaler, butikklokaler og fellesarealer',
      'Fast avtale daglig, ukentlig eller etter behov',
      'Tørkepapir og toalettpapir inkludert i faste avtaler',
      'Fast kontaktperson og tydelige rutiner',
    ],
  },
  {
    id: 'periodisk',
    title: 'Periodisk renhold',
    short: 'Vindusvask, polering, sølvpuss og grundig rydding, hjemme eller på kontoret.',
    image: 'https://placehold.co/800x533/e2e8f0/94a3b8?text=Vindusvask+og+polering',
    intro:
      'Noen oppgaver trenger ikke gjøres hver uke, men gjør stor forskjell når de blir gjort skikkelig. Vi tar de periodiske jobbene, enten som en del av en fast avtale eller som en engangsjobb.',
    points: [
      'Vindusvask innvendig og utvendig',
      'Polering og behandling av gulv',
      'Sølvpuss',
      'Grundig rydding og opprydding',
    ],
  },
  {
    id: 'borettslag',
    title: 'Borettslag og sameie',
    short: 'Trappevask, levering av dørmatter, vaktmestertjenester og vedlikehold av fellesområder.',
    image: 'https://placehold.co/800x533/e2e8f0/94a3b8?text=Trappeoppgang',
    intro:
      'Rene trappeoppganger og ryddige fellesområder gjør det trivelig å komme hjem. Vi hjelper styret med faste rutiner, så beboerne merker forskjellen uten at styret må følge opp.',
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
    short: 'Tak, vegger, vinduer og kjøkkeninnredning. Grundig fra topp til bunn.',
    image: 'https://placehold.co/800x533/e2e8f0/94a3b8?text=Flyttevask',
    intro:
      'Skal du flytte, eller trenger hjemmet en skikkelig runde? Vi går gjennom hele boligen fra topp til bunn, så du kan levere nøklene eller nyte et hjem som er rent i hver krok.',
    points: [
      'Tak, vegger og lister',
      'Vinduer og karmer',
      'Kjøkkeninnredning, inne og ute',
      'Bad, sluk og fliser',
    ],
  },
  {
    id: 'hjemmespa',
    title: 'HjemmeSpa',
    short: 'Grundig rengjøring kombinert med velvære og eteriske oljer for et hjem som føles godt.',
    image: 'https://placehold.co/800x533/e2e8f0/94a3b8?text=Hjemmespa',
    intro:
      'HjemmeSpa er for deg som vil ha mer enn et rent hjem. Vi kombinerer grundig rengjøring med eteriske oljer og små detaljer som gjør at hjemmet føles godt å komme inn i.',
    points: [
      'Grundig rengjøring av hele boligen',
      'Eteriske oljer for frisk duft',
      'Ekstra fokus på bad og soverom',
      'Et hjem som føles godt, ikke bare ser rent ut',
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Andreas Haug',
    quote:
      'Utrolig dyktige, jobber raskt og effektivt. Også over tid. Aldri noe tull. Anbefales på det varmeste.',
  },
  {
    name: 'Marius Berg',
    quote:
      'Et rent kontor hver dag er en skikkelig opptur, det setter standarden for en god arbeidsdag.',
  },
  {
    name: 'Marianne Hansen',
    quote:
      'De leverer varene uten å skryte av det. Huset mitt ser mye bedre ut etter at de har vært her.',
  },
];
