export const metadata = {
  robots: 'noindex',
  title: 'Tyholmen Kolonial & Steenhuset Restaurant – Arendal',
  description:
    'Tyholmen Kolonial er en delikatessecafé i hjertet av Arendal. Steenhuset Restaurant tilbyr 6-retters avsmakningsmeny i historiske omgivelser.',
};

// cream: #F7F3EC  charcoal: #1C1C1C  green: #2C3E2D  gold: #B8965A

const IMGS = {
  kolonial1: '/demo/tyholmen/kolonial-1.jpg',
  kolonial2: '/demo/tyholmen/kolonial-2.jpg',
  kolonial3: '/demo/tyholmen/kolonial-3.jpg',
  ute1:      '/demo/tyholmen/ute-1.jpg',
  ute2:      '/demo/tyholmen/ute-2.jpg',
  inne:      '/demo/tyholmen/inne.jpg',
  mat1:      '/demo/tyholmen/mat-1.jpg',
  mat2:      '/demo/tyholmen/mat-2.jpg',
  mat3:      '/demo/tyholmen/mat-3.jpg',
  mat4:      '/demo/tyholmen/mat-4.jpg',
};

const menuCourses = [
  { name: 'Krabbe',         desc: 'Eple, Majones og Dill',                             allergens: 'egg, skalldyr' },
  { name: 'Jordskokk',      desc: 'Suppe, Fritert Kapers',                             allergens: 'melk' },
  { name: 'Dagens Fisk',    desc: 'Asparges, Erter og Hollandaise',                    allergens: 'egg, melk' },
  { name: 'Lam',            desc: 'Gulrot, Squash, Urtepotet, Hvitløk og Rosmarinsjy', allergens: null },
  { name: 'Ost',            desc: null,                                                allergens: 'melk, hvete' },
  { name: 'Mørk Sjokolade', desc: 'Pannacotta med Appelsin',                           allergens: 'hvete, egg, melk' },
];

const pricing = [
  { label: 'Hovedrett', meny: '495,-', vin: null },
  { label: '2-retters', meny: '555,-', vin: '355,-' },
  { label: '3-retters', meny: '695,-', vin: '595,-' },
  { label: '4-retters', meny: '755,-', vin: '655,-' },
  { label: '5-retters', meny: '855,-', vin: '755,-' },
  { label: '6-retters', meny: '955,-', vin: '855,-' },
];

export default function TyholmenPage() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: '#F7F3EC', color: '#1C1C1C' }}>

      {/* ── STICKY HEADER ───────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 w-full"
        style={{ background: '#2C3E2D', borderBottom: '1px solid #3a5040' }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F7F3EC', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.05em' }}>
              Tyholmen Kolonial
            </span>
            <span style={{ color: '#B8965A' }}>·</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F7F3EC', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.05em' }}>
              Steenhuset Restaurant
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a
              href="tel:47398850"
              className="flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium"
              style={{ background: '#B8965A', color: '#1C1C1C' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.5h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              473 98 850
            </a>
            <a
              href="mailto:post@tyholmenkolonial.no"
              className="rounded-sm px-4 py-2 text-sm font-medium"
              style={{ border: '1px solid #B8965A', color: '#B8965A' }}
            >
              Book bord
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '88vh' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${IMGS.ute2})`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
        />
        {/* Edge-to-edge base darkening */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10,10,10,0.35)' }}
        />
        {/* Radial vignette centred on text area */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 52%, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0) 100%)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: '35%', background: 'linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 100%)' }}
        />
        <div className="relative flex h-full min-h-[88vh] flex-col items-center justify-center px-6 py-28 text-center">
          <p className="mb-6 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.22em', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
            TEATERPLASSEN, ARENDAL
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F7F3EC',
              fontSize: 'clamp(2.6rem, 7vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: '0.02em',
              maxWidth: 760,
              textShadow: '0 2px 20px rgba(0,0,0,0.55)',
            }}
          >
            Tyholmen Kolonial
            <br />
            <span style={{ fontWeight: 400, fontStyle: 'italic' }}>og Steenhuset Restaurant</span>
          </h1>
          <p
            className="mx-auto mt-7 max-w-lg text-base leading-relaxed"
            style={{ color: 'rgba(247,243,236,0.92)', fontWeight: 300, textShadow: '0 1px 12px rgba(0,0,0,0.65)' }}
          >
            Delikatessecafé og restaurant ved Teaterplassen i Arendal. Uteservering med
            utsikt over parken om sommeren.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#kolonial"
              className="rounded-sm px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.10em' }}
            >
              TYHOLMEN KOLONIAL
            </a>
            <a
              href="#steenhuset"
              className="rounded-sm px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: '1px solid rgba(247,243,236,0.60)', color: '#F7F3EC', letterSpacing: '0.10em' }}
            >
              STEENHUSET RESTAURANT
            </a>
          </div>
        </div>
      </section>

      {/* ── TYHOLMEN KOLONIAL ───────────────────────────────────────── */}
      <section id="kolonial" className="py-24" style={{ background: '#F7F3EC' }}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.22em' }}>
            TYHOLMEN KOLONIAL
          </p>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Text */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.15, color: '#2C3E2D', marginBottom: '1.25rem' }}>
                Delikatessecafé i hjertet av Arendal
              </h2>
              <p className="mb-6 text-base leading-relaxed" style={{ color: '#4a4035', fontWeight: 300 }}>
                Håndlagde smørbrød, friske sesongbaserte salater og et utvalg av fine oster,
                premium spekemat, artisanal pasta, oliven og sauser. Om sommeren er det
                uteservering med utsikt over parken.
              </p>

              {/* Hours */}
              <div className="mb-8 rounded-sm p-5" style={{ background: '#EDE9E0', borderLeft: '3px solid #B8965A' }}>
                <p className="mb-3 text-xs font-medium tracking-widest" style={{ color: '#B8965A' }}>ÅPNINGSTIDER</p>
                <div className="space-y-1.5 text-sm" style={{ color: '#4a4035' }}>
                  <div className="flex justify-between"><span>Mandag – Fredag</span><span className="font-medium">10:00 – 16:00</span></div>
                  <div className="flex justify-between"><span>Lørdag</span><span className="font-medium">11:00 – 17:00</span></div>
                  <div className="flex justify-between" style={{ color: '#9a8f83' }}><span>Søndag</span><span>Stengt</span></div>
                </div>
              </div>

              {/* Offerings */}
              <div>
                <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: '#6B6354', letterSpacing: '0.18em' }}>TILBUD OG TJENESTER</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    { name: 'Afternoon Tea',       desc: 'Britisk tradisjon med lokale råvarer' },
                    { name: 'Tapas Catering',       desc: 'Skreddersydde tapas til arrangement' },
                    { name: 'Charcuterie Catering', desc: 'Presentasjonsplanker med spekemat' },
                    { name: 'Chambre Séparé',       desc: 'Private middager i eget rom' },
                    { name: 'Bedriftsgavepakker',   desc: 'Kuraterte delikatessegaver' },
                  ].map((item) => (
                    <div key={item.name} className="rounded-sm p-4" style={{ background: '#EDE9E0' }}>
                      <p className="text-sm font-medium" style={{ color: '#2C3E2D' }}>{item.name}</p>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: '#6B6354' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <img
                  src={IMGS.kolonial1}
                  alt="Tyholmen Kolonial interiør"
                  className="w-full rounded-sm object-cover"
                  style={{ height: 320, objectPosition: 'center' }}
                />
              </div>
              <img
                src={IMGS.kolonial2}
                alt="Tyholmen Kolonial delikatesse"
                className="w-full rounded-sm object-cover"
                style={{ height: 200, objectPosition: 'center' }}
              />
              <img
                src={IMGS.kolonial3}
                alt="Tyholmen Kolonial utvalg"
                className="w-full rounded-sm object-cover"
                style={{ height: 200, objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STEENHUSET RESTAURANT ───────────────────────────────────── */}
      <section id="steenhuset" className="py-24" style={{ background: '#1C1C1C' }}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.22em' }}>
            STEENHUSET RESTAURANT
          </p>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Images */}
            <div className="order-2 grid grid-cols-2 gap-3 lg:order-1">
              <div className="col-span-2">
                <img
                  src={IMGS.inne}
                  alt="Steenhuset Restaurant interiør"
                  className="w-full rounded-sm object-cover"
                  style={{ height: 340, objectPosition: 'center' }}
                />
              </div>
              <img
                src={IMGS.ute1}
                alt="Steenhuset Restaurant uteplass"
                className="w-full rounded-sm object-cover"
                style={{ height: 200, objectPosition: 'center' }}
              />
              <div className="relative overflow-hidden rounded-sm" style={{ height: 200 }}>
                <img
                  src={IMGS.mat1}
                  alt="Rett fra menyen"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
                <div
                  className="absolute bottom-3 right-3 flex items-center gap-2 rounded-sm px-3 py-2"
                  style={{ background: 'rgba(28,28,28,0.85)' }}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold" style={{ background: '#34E0A1', color: '#1C1C1C' }}>
                    TA
                  </div>
                  <div>
                    <p className="text-xs font-medium leading-none" style={{ color: '#F7F3EC' }}>TripAdvisor</p>
                    <p className="mt-0.5 text-xs" style={{ color: '#B8965A' }}>#1 i Arendal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.15, color: '#F7F3EC', marginBottom: '1.25rem' }}>
                Historiske omgivelser,{' '}
                <span style={{ fontStyle: 'italic', color: '#B8965A' }}>sesongbasert meny</span>
              </h2>
              <p className="mb-6 text-base leading-relaxed" style={{ color: 'rgba(247,243,236,0.70)', fontWeight: 300 }}>
                Steenhuset holder til i et lokale fra 1700-tallet og er Arendals topprangerte
                restaurant på TripAdvisor. Avsmakningsmenyen oppdateres hvert 14. dag og
                tilpasses sesongens råvarer. Åpent tirsdag til lørdag fra kl. 17:00.
              </p>

              {/* Hours */}
              <div className="mb-8 rounded-sm p-5" style={{ background: 'rgba(44,62,45,0.4)', borderLeft: '3px solid #B8965A' }}>
                <p className="mb-3 text-xs font-medium tracking-widest" style={{ color: '#B8965A' }}>ÅPNINGSTIDER</p>
                <div className="space-y-1.5 text-sm" style={{ color: 'rgba(247,243,236,0.75)' }}>
                  <div className="flex justify-between"><span>Tirsdag – Lørdag</span><span className="font-medium">Fra kl. 17:00</span></div>
                  <div className="flex justify-between" style={{ color: 'rgba(247,243,236,0.45)' }}><span>Kjøkken stenger</span><span>21:00</span></div>
                  <div className="flex justify-between" style={{ color: 'rgba(247,243,236,0.30)' }}><span>Søndag og mandag</span><span>Stengt</span></div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: 'rgba(247,243,236,0.35)', letterSpacing: '0.18em' }}>TJENESTER</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    { name: 'Bedriftsmiddager',  desc: 'Selskaper for liten og stor gruppe' },
                    { name: 'Sommermiddag ute',  desc: 'Uteservering med utsikt mot parken' },
                  ].map((item) => (
                    <div key={item.name} className="rounded-sm p-4" style={{ background: 'rgba(247,243,236,0.04)' }}>
                      <p className="text-sm font-medium" style={{ color: '#F7F3EC' }}>{item.name}</p>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: 'rgba(247,243,236,0.45)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#meny"
                className="inline-block rounded-sm px-7 py-3 text-sm font-medium tracking-widest transition-opacity hover:opacity-85"
                style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.10em' }}
              >
                SE MENYEN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────────────── */}
      <section id="meny" className="py-24" style={{ background: '#161616' }}>
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.22em' }}>
            AVSMAKNINGSMENY
          </p>
          <h2
            className="mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 400, color: '#F7F3EC' }}
          >
            Steenhuset — Arendal
          </h2>
          <p className="mb-14 text-sm" style={{ color: 'rgba(247,243,236,0.38)', fontWeight: 300 }}>
            Menyen oppdateres hvert 14. dag. Velg fra 1 til 6 retter.
          </p>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Courses */}
            <div className="lg:col-span-3">
              <div className="space-y-0">
                {menuCourses.map((course, i) => (
                  <div
                    key={course.name}
                    className="py-5"
                    style={{ borderBottom: i < menuCourses.length - 1 ? '1px solid rgba(247,243,236,0.07)' : 'none' }}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, color: '#F7F3EC' }}>
                        {course.name}
                      </span>
                      {course.desc && (
                        <span className="text-sm" style={{ color: 'rgba(247,243,236,0.55)', fontWeight: 300 }}>
                          {course.desc}
                        </span>
                      )}
                    </div>
                    {course.allergens && (
                      <p className="mt-1 text-xs" style={{ color: 'rgba(247,243,236,0.28)' }}>
                        Inneholder: {course.allergens}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Dish photos */}
              <div className="mt-10 grid grid-cols-4 gap-2">
                {[IMGS.mat1, IMGS.mat2, IMGS.mat3, IMGS.mat4].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Rett fra menyen`}
                    className="w-full rounded-sm object-cover"
                    style={{ height: 96, objectPosition: 'center' }}
                  />
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="lg:col-span-2">
              <div className="rounded-sm p-6" style={{ background: 'rgba(247,243,236,0.03)', border: '1px solid rgba(184,150,90,0.15)' }}>
                <p className="mb-5 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>PRISER</p>

                <div className="mb-3 grid grid-cols-3 text-xs" style={{ color: 'rgba(247,243,236,0.30)', letterSpacing: '0.08em' }}>
                  <span></span>
                  <span className="text-right">MENY</span>
                  <span className="text-right">VINPAKKE</span>
                </div>

                <div className="space-y-0">
                  {pricing.map((row, i) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-3 items-center py-3"
                      style={{
                        borderTop: '1px solid rgba(247,243,236,0.07)',
                        background: i === pricing.length - 1 ? 'rgba(184,150,90,0.06)' : 'transparent',
                      }}
                    >
                      <span
                        className="text-sm"
                        style={{
                          color: i === pricing.length - 1 ? '#B8965A' : 'rgba(247,243,236,0.70)',
                          fontWeight: i === pricing.length - 1 ? 500 : 300,
                        }}
                      >
                        {row.label}
                      </span>
                      <span
                        className="text-right text-sm font-medium"
                        style={{ color: i === pricing.length - 1 ? '#B8965A' : 'rgba(247,243,236,0.85)' }}
                      >
                        {row.meny}
                      </span>
                      <span className="text-right text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>
                        {row.vin ?? ''}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t pt-5" style={{ borderColor: 'rgba(247,243,236,0.07)' }}>
                  <a
                    href="tel:47398850"
                    className="flex w-full items-center justify-center gap-2 rounded-sm py-3 text-sm font-medium transition-opacity hover:opacity-85"
                    style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.10em' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.5h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    BOOK BORD
                  </a>
                  <p className="mt-3 text-center text-xs" style={{ color: 'rgba(247,243,236,0.28)' }}>
                    Tir–Lør fra kl. 17:00 · 473 98 850
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ──────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#2C3E2D' }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.22em' }}>
            BESØK OSS
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: 400, color: '#F7F3EC', marginBottom: '1.25rem' }}
          >
            Teaterplassen, Arendal
          </h2>
          <p className="mx-auto mb-12 max-w-md text-sm leading-relaxed" style={{ color: 'rgba(247,243,236,0.58)', fontWeight: 300 }}>
            Begge stedene ligger på Teaterplassen i Arendal sentrum, ved siden av parken.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm p-8 text-left" style={{ background: 'rgba(247,243,236,0.06)' }}>
              <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>TYHOLMEN KOLONIAL</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', color: '#F7F3EC', fontWeight: 400, marginBottom: '0.4rem' }}>Teaterplassen 9A</p>
              <p className="mb-5 text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>4836 Arendal</p>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>
                <p>Man–Fre: 10:00 – 16:00</p>
                <p>Lørdag: 11:00 – 17:00</p>
              </div>
            </div>
            <div className="rounded-sm p-8 text-left" style={{ background: 'rgba(247,243,236,0.06)' }}>
              <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>STEENHUSET RESTAURANT</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', color: '#F7F3EC', fontWeight: 400, marginBottom: '0.4rem' }}>Teaterplassen 1</p>
              <p className="mb-5 text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>4836 Arendal</p>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>
                <p>Tir–Lør: Fra kl. 17:00</p>
                <p>Kjøkken stenger 21:00</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-5">
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm" style={{ color: 'rgba(247,243,236,0.60)' }}>
              <a href="tel:47398850" className="flex items-center gap-2" style={{ color: 'inherit' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.5h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                473 98 850
              </a>
              <span style={{ opacity: 0.2 }}>|</span>
              <a href="mailto:post@tyholmenkolonial.no" className="hover:opacity-75" style={{ color: 'inherit' }}>
                post@tyholmenkolonial.no
              </a>
            </div>
            <a
              href="mailto:post@tyholmenkolonial.no"
              className="rounded-sm px-10 py-4 text-sm font-medium tracking-widest transition-opacity hover:opacity-85"
              style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.12em' }}
            >
              BOOK BORD
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ background: '#111111', borderTop: '1px solid rgba(184,150,90,0.10)' }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F7F3EC', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Tyholmen Kolonial</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#B8965A', fontSize: '1.05rem', fontWeight: 400, letterSpacing: '0.05em', marginBottom: '1rem' }}>Steenhuset Restaurant</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,243,236,0.28)', maxWidth: 200 }}>Teaterplassen, Arendal</p>
            </div>
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>TYHOLMEN KOLONIAL</p>
              <div className="space-y-1.5 text-sm" style={{ color: 'rgba(247,243,236,0.42)' }}>
                <p>Teaterplassen 9A, 4836 Arendal</p>
                <p>Man–Fre: 10:00 – 16:00</p>
                <p>Lørdag: 11:00 – 17:00</p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>STEENHUSET RESTAURANT</p>
              <div className="mb-5 space-y-1.5 text-sm" style={{ color: 'rgba(247,243,236,0.42)' }}>
                <p>Teaterplassen 1, 4836 Arendal</p>
                <p>Tir–Lør: Fra kl. 17:00</p>
                <p>Kjøkken stenger 21:00</p>
              </div>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(247,243,236,0.32)' }}>
                <p><a href="tel:47398850" className="hover:opacity-70" style={{ color: 'inherit' }}>473 98 850</a></p>
                <p><a href="mailto:post@tyholmenkolonial.no" className="hover:opacity-70" style={{ color: 'inherit' }}>post@tyholmenkolonial.no</a></p>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t pt-8 text-center text-xs" style={{ borderColor: 'rgba(247,243,236,0.06)', color: 'rgba(247,243,236,0.16)' }}>
            © {new Date().getFullYear()} Tyholmen Kolonial & Steenhuset Restaurant
          </div>
        </div>
      </footer>

    </div>
  );
}
