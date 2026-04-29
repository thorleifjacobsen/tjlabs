export type Activity = {
  id: string
  label: string
  labelColor: string
  pillColor: string
  title: string
  isoDate: string
  time: string
  location: string
  desc: string
  descLong: string
  img: string
  spots: number
  spotsLeft: number
  recurring: 'weekly' | 'monthly' | null
}

export const activities: Activity[] = [
  // — Recurring weekly open sessions —
  {
    id: 'laser-open',
    label: 'Laser',
    labelColor: 'bg-orange-100 text-orange-700',
    pillColor: 'bg-orange-500',
    title: 'Åpen laserkveld',
    isoDate: '2026-05-05', // Tuesday
    time: '17:00 – 19:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Fast ukentlig laserkveld. Graver og skjær i tre, akryl og mer.',
    descLong: 'Vår faste tirsdag-kveld med lasergraveren. Passer for alle nivåer – erfarne medlemmer er til stede for å hjelpe. Ta med eget materiale, eller bruk det vi har. Ingen påmelding nødvendig for faste åpne kvelder.',
    img: 'https://static.wixstatic.com/media/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg',
    spots: 8,
    spotsLeft: 5,
    recurring: 'weekly',
  },
  {
    id: '3d-open',
    label: '3D-printing',
    labelColor: 'bg-blue-100 text-blue-700',
    pillColor: 'bg-blue-500',
    title: 'Åpen 3D-printingkveld',
    isoDate: '2026-05-07', // Thursday
    time: '17:00 – 19:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Fast ukentlig 3D-printingkveld. Ta med prosjekter eller lær fra bunnen.',
    descLong: 'Torsdagskvelden er alltid åpen for 3D-printing. Vi har Bambu Lab X1 Carbon og en resin-printer. Erfarne brukere hjelper nybegynnere. Ta med egne filer, eller la oss hjelpe deg komme i gang.',
    img: 'https://static.wixstatic.com/media/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg',
    spots: 10,
    spotsLeft: 7,
    recurring: 'weekly',
  },
  {
    id: 'verksted-open',
    label: 'Åpent',
    labelColor: 'bg-teal-100 text-teal-700',
    pillColor: 'bg-teal-500',
    title: 'Åpent verksted',
    isoDate: '2026-05-08', // Friday
    time: '16:00 – 19:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Fredagskveld med fri tilgang til alt utstyr. Stikk innom!',
    descLong: 'Åpen fredagskveld der alt utstyr er tilgjengelig. Jobb på egne prosjekter, få hjelp, eller bare kom og se hva vi driver med. Alle er velkomne – ingen påmelding.',
    img: 'https://static.wixstatic.com/media/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg',
    spots: 20,
    spotsLeft: 20,
    recurring: 'weekly',
  },

  // — One-off special workshops —
  {
    id: 'arduino-intro',
    label: 'Elektronikk',
    labelColor: 'bg-green-100 text-green-700',
    pillColor: 'bg-green-600',
    title: 'Workshop: Arduino for nybegynnere',
    isoDate: '2026-05-13',
    time: '17:00 – 19:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Kom i gang med Arduino. Vi lager en enkel lyssekvens og sensor-krets fra bunnen.',
    descLong: 'En komplett introduksjon til mikrokontrollere. Vi starter med grunnleggende elektronikk: breadboard, motstander, LED – og deretter kode. Du programmerer din første Arduino og tar med deg et lite prosjekt hjem. Arduino og komponenter lånes ut.',
    img: 'https://static.wixstatic.com/media/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg',
    spots: 8,
    spotsLeft: 3,
    recurring: null,
  },
  {
    id: 'laser-workshop-mai',
    label: 'Laser',
    labelColor: 'bg-orange-100 text-orange-700',
    pillColor: 'bg-orange-500',
    title: 'Workshop: Laserskjæring i tre og akryl',
    isoDate: '2026-05-16',
    time: '10:00 – 13:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Halvdagsworkshop om laserskjæring. Vi lager sammensatte objekter med presise kutt.',
    descLong: 'En dypere dykk i laserskjæring. Vi designer kutte-filer i Inkscape og setter opp maskinen for gjennomskjæring. Du lager en liten eske eller veggdekor som du tar med hjem. Materialer inkludert. Maks 6 deltakere.',
    img: 'https://static.wixstatic.com/media/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg',
    spots: 6,
    spotsLeft: 2,
    recurring: null,
  },
  {
    id: 'maling-resin',
    label: 'Maling',
    labelColor: 'bg-purple-100 text-purple-700',
    pillColor: 'bg-purple-500',
    title: 'Workshop: Miniatyrmaling og resin',
    isoDate: '2026-05-20',
    time: '17:00 – 20:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Print og mal miniatyrer med resin-printeren. Perfekt for rollespillfigurer.',
    descLong: 'En kombinert sesjon der vi printer resin-miniatyrer og maler dem med acrylfarger. Du lærer alt fra å vaske og kurere resin-print til grunnleggende maleteknikker for miniatyrer. Materialer og figurer inkludert.',
    img: 'https://static.wixstatic.com/media/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg',
    spots: 6,
    spotsLeft: 6,
    recurring: null,
  },
  {
    id: '3d-advanced',
    label: '3D-printing',
    labelColor: 'bg-blue-100 text-blue-700',
    pillColor: 'bg-blue-500',
    title: 'Workshop: Avansert 3D-modellering',
    isoDate: '2026-05-28',
    time: '17:00 – 20:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Lær Fusion 360 for å lage komplekse og funksjonelle 3D-modeller.',
    descLong: 'Ta 3D-modelleringen til neste nivå med Fusion 360. Parametrisk design, toleranser for printede deler, og funksjonelle modeller i praksis. Forkunnskap i enkel 3D-modellering er en fordel. Ta med laptop.',
    img: 'https://static.wixstatic.com/media/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg',
    spots: 8,
    spotsLeft: 8,
    recurring: null,
  },
  {
    id: 'loddekveld',
    label: 'Elektronikk',
    labelColor: 'bg-green-100 text-green-700',
    pillColor: 'bg-green-600',
    title: 'Workshop: Loddekveld',
    isoDate: '2026-06-10',
    time: '17:00 – 20:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Lær å lodde og fiks elektronikk. Ta med ødelagte gadgets eller jobb på noe nytt.',
    descLong: 'Vi har lær-å-lodde-kits for nybegynnere og erfarne loddere som hjelper deg fikse elektronikk. Ta gjerne med det du vil reparere. God stemning, godt utstyr.',
    img: 'https://static.wixstatic.com/media/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg',
    spots: 12,
    spotsLeft: 12,
    recurring: null,
  },
  {
    id: 'maling-workshop-jun',
    label: 'Maling',
    labelColor: 'bg-purple-100 text-purple-700',
    pillColor: 'bg-purple-500',
    title: 'Workshop: Miniatyrmalerkveld',
    isoDate: '2026-06-17',
    time: '17:00 – 20:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Avslappet malerkveld for miniatyrer og figurer. Ta med egne eller bruk våre.',
    descLong: 'En rolig og hyggelig kveld der vi maler miniatyrer. Pensler, farger og figurer inkludert. Erfaringsnivå spiller ingen rolle – det handler om å ha det gøy og lære av hverandre.',
    img: 'https://static.wixstatic.com/media/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg',
    spots: 8,
    spotsLeft: 8,
    recurring: null,
  },
]

export const categories = ['Alle', 'Laser', '3D-printing', 'Åpent', 'Elektronikk', 'Maling']

export const NO_MONTHS = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember']
export const NO_DAYS_SHORT = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn']
