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
  areas: ['Oslo', 'Romerike', 'Ullensaker', 'Gardermoen', 'Lørenskog', 'Bærum', 'Hønefoss'],
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

export const TASKS = [
  'Kontorvask',
  'Flyttevask',
  'Visningsvask',
  'Butikkvask og lokalervask',
  'Daglig renhold for bedrifter',
  'Trappevask og fellesarealer',
  'Snømåking og strøsingel',
  'Hage og utemiljø',
];

export type Service = {
  id: string;
  title: string;
  short: string;
  image: string;
  imagePosition?: string;
  intro: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'bedrift',
    title: 'Renhold for bedrifter',
    short: 'Kontorlokaler, butikklokaler og eiendomsdrift. Raskt, effektivt og pålitelig.',
    image: '/demo/renogfin/kontorrenhold.jpg',
    imagePosition: 'center 70%',
    intro:
      'Et rent kontor gir bedre trivsel for de ansatte og et godt førsteinntrykk for kundene. Vi setter opp en fast avtale som passer åpningstidene og behovene deres, og dere får en fast kontaktperson som kjenner lokalene.',
    points: [
      'Kontorvask og daglig renhold for bedrifter',
      'Butikkvask og lokalervask',
      'Fast avtale daglig, ukentlig eller etter behov',
      'Tørkepapir og toalettpapir inkludert i faste avtaler',
      'Fast kontaktperson og tydelige rutiner',
    ],
  },
  {
    id: 'periodisk',
    title: 'Periodisk renhold',
    short: 'Vindusvask, polering, sølvpuss og grundig rydding, hjemme eller på kontoret.',
    image: '/demo/renogfin/vindusvask.jpg',
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
    short: 'Flyttevask, visningsvask og hovedrengjøring. Grundig fra topp til bunn.',
    image: '/demo/renogfin/bad.jpg',
    intro:
      'Skal du flytte, selge eller trenger hjemmet en skikkelig runde? Vi går gjennom hele boligen fra topp til bunn, så du kan levere nøklene, ha en skinnende visning eller nyte et hjem som er rent i hver krok.',
    points: [
      'Flyttevask og visningsvask',
      'Tak, vegger og lister',
      'Vinduer og karmer',
      'Kjøkkeninnredning, inne og ute',
    ],
  },
  {
    id: 'hjemmespa',
    title: 'HjemmeSpa',
    short: 'Grundig rengjøring kombinert med velvære og eteriske oljer for et hjem som føles godt.',
    image: '/demo/renogfin/hjem.jpg',
    intro:
      'HjemmeSpa er for deg som vil ha mer enn et rent hjem. Vi kombinerer grundig rengjøring med eteriske oljer og små detaljer som gjør at hjemmet føles godt å komme inn i.',
    points: [
      'Grundig rengjøring av hele boligen',
      'Eteriske oljer for frisk duft',
      'Ekstra fokus på bad og soverom',
      'Et hjem som føles godt, ikke bare ser rent ut',
    ],
  },
  {
    id: 'snomaking',
    title: 'Snømåking og strøsingel',
    short: 'Snømåking av innkjørsler, gårdsplasser, parkeringsplasser og fortau, og levering av strøsingel.',
    image: '/demo/renogfin/snomaking.jpg',
    imagePosition: 'center 60%',
    intro:
      'Vi måker snø og leverer strøsingel, så uteområdene er trygge gjennom vinteren. Lokalt, med rask respons.',
    points: [
      'Snømåking av innkjørsler, gårdsplasser, parkeringsplasser og fortau',
      'Levering av strøsingel',
      'Tryggere underlag, mindre risiko for fall',
      'For privatpersoner, borettslag og bedrifter',
      'Fleksible avtaler, fast eller ved behov',
    ],
  },
  {
    id: 'hage',
    title: 'Hage og utemiljø',
    short: 'Ferdigplen, hekkeklipping, grusarbeid, beplanting og graving. Fra overgrodd til enkel å vedlikeholde.',
    image: '/demo/renogfin/hage.jpg',
    intro:
      'Vi tar også hageprosjekter og arbeid på uteområdet. Vi gjør en overgrodd hage om til et uteområde som er enkelt å holde i orden, grundig, effektivt og til avtalt tid.',
    points: [
      'Klargjøring og legging av ferdigplen',
      'Fjerning av ugress og gamle bed',
      'Klipping av hekk',
      'Nye gruspartier og beplanting',
      'Graving og utemiljø',
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
      'Firmaet “Renogfin” tar ikke bare rengjøringsoppdrag men utfører også hageprosjekter. Vi hyret dem til å forvandle en overgrodd hage og plen til en tilnærmet vedlikeholdsfri hage. Fjerning av ugress, gamle bed, legging av ferdigplen, klipping av hekk, nye gruspartier og beplanting er utført grundig og effektivt og til avtalt tid. Vi anbefaler “Renogfin” til ditt neste hageprosjekt og ville brukt de igjen.',
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
