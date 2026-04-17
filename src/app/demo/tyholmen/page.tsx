export const metadata = {
  robots: 'noindex',
  title: 'Tyholmen Kolonial & Steenhuset Restaurant – Arendal',
  description:
    'Tyholmen Kolonial er en delikatessecafé i hjertet av Arendal. Steenhuset Restaurant tilbyr 6-retters avsmakningsmeny i historiske omgivelser.',
};

// ─── Colour tokens (inline, self-contained) ────────────────────────────────
// cream:   #F7F3EC
// charcoal:#1C1C1C
// green:   #2C3E2D
// gold:    #B8965A
// muted:   #6B6354

export default function TyholmenPage() {
  return (
    <div
      style={{
        fontFamily: "'Jost', sans-serif",
        background: '#F7F3EC',
        color: '#1C1C1C',
      }}
    >
      {/* ── STICKY HEADER ─────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 w-full"
        style={{ background: '#2C3E2D', borderBottom: '1px solid #3a5040' }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
          {/* Brand names */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#F7F3EC',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
              >
                Tyholmen Kolonial
              </span>
              <span style={{ color: '#B8965A', margin: '0 10px' }}>·</span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#F7F3EC',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
              >
                Steenhuset Restaurant
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a
              href="tel:47398850"
              className="flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors"
              style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.04em' }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.5h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              473 98 850
            </a>
            <a
              href="mailto:post@tyholmenkolonial.no"
              className="rounded-sm px-4 py-2 text-sm font-medium transition-colors"
              style={{
                border: '1px solid #B8965A',
                color: '#B8965A',
                letterSpacing: '0.04em',
              }}
            >
              Book bord
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '88vh' }}>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://placehold.co/1600x900/2a2a2a/444444)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(28,28,28,0.60) 0%, rgba(44,62,45,0.55) 60%, rgba(28,28,28,0.80) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="relative flex h-full min-h-[88vh] flex-col items-center justify-center px-6 py-24 text-center">
          {/* Ornamental line */}
          <div className="mb-8 flex items-center gap-4">
            <div style={{ width: 60, height: 1, background: '#B8965A' }} />
            <span
              style={{
                color: '#B8965A',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                fontWeight: 400,
              }}
            >
              TEATERPLASSEN · ARENDAL
            </span>
            <div style={{ width: 60, height: 1, background: '#B8965A' }} />
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F7F3EC',
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              maxWidth: 800,
            }}
          >
            To steder.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Én opplevelse.</em>
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed"
            style={{ color: 'rgba(247,243,236,0.80)', fontWeight: 300, letterSpacing: '0.02em' }}
          >
            Fra håndskjærte charcuterie og aftenste til seks retter av det ypperste sesongen har
            å by på — alt med utsikt over parkens grøntareal midt i Arendal.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#kolonial"
              className="rounded-sm px-8 py-3 text-sm font-medium tracking-widest transition-opacity hover:opacity-80"
              style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.12em' }}
            >
              TYHOLMEN KOLONIAL
            </a>
            <a
              href="#steenhuset"
              className="rounded-sm px-8 py-3 text-sm font-medium tracking-widest transition-opacity hover:opacity-80"
              style={{
                border: '1px solid rgba(247,243,236,0.6)',
                color: '#F7F3EC',
                letterSpacing: '0.12em',
              }}
            >
              STEENHUSET RESTAURANT
            </a>
          </div>
        </div>
      </section>

      {/* ── TYHOLMEN KOLONIAL ─────────────────────────────────────── */}
      <section id="kolonial" className="py-24" style={{ background: '#F7F3EC' }}>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section label */}
          <div className="mb-12 flex items-center gap-4">
            <div style={{ width: 40, height: 1, background: '#B8965A' }} />
            <span
              style={{
                color: '#B8965A',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                fontWeight: 500,
              }}
            >
              DELIKATESSECAFÉ
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: '#2C3E2D',
                  letterSpacing: '0.01em',
                  marginBottom: '1.5rem',
                }}
              >
                Tyholmen Kolonial
              </h2>

              <p
                className="mb-6 text-base leading-relaxed"
                style={{ color: '#4a4035', fontWeight: 300 }}
              >
                En delikatessecafé i hjertet av Arendal. Håndlagde smørbrød, friske
                sesongbaserte salater og et nøye sammensatt utvalg av fine oster, premium
                spekemat, artisanal pasta, oliven, sauser og mye mer. Om sommeren kan du nyte
                måltidet utendørs med utsikt over parken.
              </p>

              {/* Hours */}
              <div
                className="mb-8 rounded-sm p-5"
                style={{ background: '#EDE9E0', borderLeft: '3px solid #B8965A' }}
              >
                <p
                  className="mb-2 text-xs font-medium tracking-widest"
                  style={{ color: '#B8965A' }}
                >
                  ÅPNINGSTIDER
                </p>
                <div className="space-y-1 text-sm" style={{ color: '#4a4035' }}>
                  <div className="flex justify-between">
                    <span>Mandag – Fredag</span>
                    <span className="font-medium">10:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lørdag</span>
                    <span className="font-medium">11:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between" style={{ color: '#9a8f83' }}>
                    <span>Søndag</span>
                    <span>Stengt</span>
                  </div>
                </div>
              </div>

              {/* Offerings */}
              <div>
                <p
                  className="mb-4 text-xs font-medium tracking-widest"
                  style={{ color: '#6B6354' }}
                >
                  SPESIALITETER & TJENESTER
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { name: 'Afternoon Tea', desc: 'Britisk tradisjon med lokale råvarer' },
                    { name: 'Tapas Catering', desc: 'Skreddersydde tapasbordet til arrangement' },
                    {
                      name: 'Charcuterie Catering',
                      desc: 'Presentasjonsplanker med premium spekemat',
                    },
                    { name: 'Chambre Séparé', desc: 'Private middager i eget rom' },
                    { name: 'Bedriftsgavepakker', desc: 'Kuraterte delikatessegaver' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-sm p-4"
                      style={{ background: '#EDE9E0' }}
                    >
                      <p className="text-sm font-medium" style={{ color: '#2C3E2D' }}>
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: '#6B6354' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://placehold.co/800x900/d4c9b8/a09080"
                alt="Tyholmen Kolonial – interiør og delikatesse"
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: '4/5', maxHeight: 600 }}
              />
              <div
                className="absolute -bottom-4 -left-4 rounded-sm p-4 text-sm"
                style={{ background: '#2C3E2D', color: '#F7F3EC', maxWidth: 220 }}
              >
                <p
                  className="mb-1 text-xs tracking-widest"
                  style={{ color: '#B8965A', fontWeight: 500 }}
                >
                  SOMMER
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,243,236,0.8)' }}>
                  Uteservering med utsikt over parken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────── */}
      <div
        style={{
          background: '#2C3E2D',
          height: 1,
          width: '100%',
          opacity: 0.15,
        }}
      />

      {/* ── STEENHUSET RESTAURANT ─────────────────────────────────── */}
      <section id="steenhuset" className="py-24" style={{ background: '#1C1C1C' }}>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section label */}
          <div className="mb-12 flex items-center gap-4">
            <div style={{ width: 40, height: 1, background: '#B8965A' }} />
            <span
              style={{
                color: '#B8965A',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                fontWeight: 500,
              }}
            >
              RESTAURANT · EST. 300 ÅR
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image — left on desktop */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://placehold.co/800x900/2a2a2a/444444"
                alt="Steenhuset Restaurant – avsmakningsmeny"
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: '4/5', maxHeight: 600 }}
              />
              {/* TripAdvisor badge */}
              <div
                className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-sm px-4 py-3"
                style={{ background: '#2C3E2D' }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: '#34E0A1', color: '#1C1C1C' }}
                >
                  TA
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: '#F7F3EC' }}>
                    TripAdvisor
                  </p>
                  <p className="text-xs" style={{ color: '#B8965A' }}>
                    #1 i Arendal
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: '#F7F3EC',
                  letterSpacing: '0.01em',
                  marginBottom: '1.5rem',
                }}
              >
                Steenhuset
                <br />
                <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Restaurant</em>
              </h2>

              <p
                className="mb-6 text-base leading-relaxed"
                style={{ color: 'rgba(247,243,236,0.70)', fontWeight: 300 }}
              >
                Et vakkert bevart lokale fra 1700-tallet danner rammen for Arendals
                mest omtalte restaurantopplevelse. Avsmakningsmenyen fornyes hvert 14. dag og
                reflekterer det beste sesongene har å by på. Topprangert på TripAdvisor.
              </p>

              {/* Hours */}
              <div
                className="mb-8 rounded-sm p-5"
                style={{ background: 'rgba(44,62,45,0.4)', borderLeft: '3px solid #B8965A' }}
              >
                <p
                  className="mb-2 text-xs font-medium tracking-widest"
                  style={{ color: '#B8965A' }}
                >
                  ÅPNINGSTIDER
                </p>
                <div className="space-y-1 text-sm" style={{ color: 'rgba(247,243,236,0.75)' }}>
                  <div className="flex justify-between">
                    <span>Tirsdag – Lørdag</span>
                    <span className="font-medium">Fra kl. 17:00</span>
                  </div>
                  <div className="flex justify-between" style={{ color: 'rgba(247,243,236,0.5)' }}>
                    <span>Kjøkken stenger</span>
                    <span>21:00</span>
                  </div>
                  <div className="flex justify-between" style={{ color: 'rgba(247,243,236,0.4)' }}>
                    <span>Søndag – Mandag</span>
                    <span>Stengt</span>
                  </div>
                </div>
              </div>

              {/* 6-course highlight */}
              <div
                className="mb-8 rounded-sm p-6"
                style={{ background: 'rgba(184,150,90,0.10)', border: '1px solid rgba(184,150,90,0.25)' }}
              >
                <p
                  className="mb-3 text-xs font-medium tracking-widest"
                  style={{ color: '#B8965A' }}
                >
                  SIGNATURMENYEN
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    color: '#F7F3EC',
                    fontWeight: 400,
                    marginBottom: '0.5rem',
                  }}
                >
                  6-retters avsmakningsmeny
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: 'rgba(247,243,236,0.60)' }}
                >
                  Velg mellom 1 og 6 retter — eller la deg overraske av hele menyen.
                  Oppdateres fortløpende i takt med sesongens råvarer.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['1 rett', '2 retter', '3 retter', '4 retter', '5 retter', '6 retter'].map(
                    (r, i) => (
                      <span
                        key={r}
                        className="rounded-sm px-3 py-1 text-xs"
                        style={{
                          background: i === 5 ? '#B8965A' : 'rgba(184,150,90,0.15)',
                          color: i === 5 ? '#1C1C1C' : 'rgba(247,243,236,0.70)',
                          fontWeight: i === 5 ? 600 : 400,
                        }}
                      >
                        {r}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Offerings */}
              <div>
                <p
                  className="mb-4 text-xs font-medium tracking-widest"
                  style={{ color: 'rgba(247,243,236,0.40)' }}
                >
                  TJENESTER
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    {
                      name: 'Bedriftsmiddager',
                      desc: 'Skreddersydde selskaper – liten og stor gruppe',
                    },
                    { name: 'Sommermiddag ute', desc: 'Uteservering med utsikt mot parken' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-sm p-4"
                      style={{ background: 'rgba(247,243,236,0.04)' }}
                    >
                      <p className="text-sm font-medium" style={{ color: '#F7F3EC' }}>
                        {item.name}
                      </p>
                      <p
                        className="mt-1 text-xs leading-relaxed"
                        style={{ color: 'rgba(247,243,236,0.45)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#2C3E2D' }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div style={{ width: 40, height: 1, background: 'rgba(184,150,90,0.5)' }} />
            <span
              style={{
                color: '#B8965A',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                fontWeight: 500,
              }}
            >
              BESØK OSS
            </span>
            <div style={{ width: 40, height: 1, background: 'rgba(184,150,90,0.5)' }} />
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 400,
              color: '#F7F3EC',
              marginBottom: '1.5rem',
              letterSpacing: '0.01em',
            }}
          >
            To adresser. Samme hjerte.
          </h2>

          <p
            className="mx-auto mb-16 max-w-lg text-sm leading-relaxed"
            style={{ color: 'rgba(247,243,236,0.60)', fontWeight: 300 }}
          >
            Begge virksomhetene finner du på Teaterplassen i Arendal sentrum — side om side med
            parken og bylivet.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Kolonial address */}
            <div
              className="rounded-sm p-8 text-left"
              style={{ background: 'rgba(247,243,236,0.05)' }}
            >
              <p
                className="mb-4 text-xs font-medium tracking-widest"
                style={{ color: '#B8965A' }}
              >
                TYHOLMEN KOLONIAL
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.4rem',
                  color: '#F7F3EC',
                  fontWeight: 400,
                  marginBottom: '0.75rem',
                }}
              >
                Teaterplassen 9A
              </p>
              <p className="mb-6 text-sm" style={{ color: 'rgba(247,243,236,0.55)' }}>
                4836 Arendal
              </p>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(247,243,236,0.55)' }}>
                <p>Man–Fre: 10:00 – 16:00</p>
                <p>Lørdag: 11:00 – 17:00</p>
              </div>
            </div>

            {/* Steenhuset address */}
            <div
              className="rounded-sm p-8 text-left"
              style={{ background: 'rgba(247,243,236,0.05)' }}
            >
              <p
                className="mb-4 text-xs font-medium tracking-widest"
                style={{ color: '#B8965A' }}
              >
                STEENHUSET RESTAURANT
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.4rem',
                  color: '#F7F3EC',
                  fontWeight: 400,
                  marginBottom: '0.75rem',
                }}
              >
                Teaterplassen 1
              </p>
              <p className="mb-6 text-sm" style={{ color: 'rgba(247,243,236,0.55)' }}>
                4836 Arendal
              </p>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(247,243,236,0.55)' }}>
                <p>Tir–Lør: Fra kl. 17:00</p>
                <p>Kjøkken stenger 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact + CTA */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div
              className="flex flex-wrap items-center justify-center gap-6 text-sm"
              style={{ color: 'rgba(247,243,236,0.65)' }}
            >
              <a
                href="tel:47398850"
                className="flex items-center gap-2 transition-colors"
                style={{ color: 'rgba(247,243,236,0.65)' }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.5h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                473 98 850
              </a>
              <span style={{ opacity: 0.3 }}>|</span>
              <a
                href="mailto:post@tyholmenkolonial.no"
                className="transition-colors hover:opacity-80"
                style={{ color: 'rgba(247,243,236,0.65)' }}
              >
                post@tyholmenkolonial.no
              </a>
            </div>

            <a
              href="mailto:post@tyholmenkolonial.no"
              className="mt-2 rounded-sm px-10 py-4 text-sm font-medium tracking-widest transition-opacity hover:opacity-85"
              style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.12em' }}
            >
              BOOK BORD
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ background: '#111111', borderTop: '1px solid rgba(184,150,90,0.15)' }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div className="lg:col-span-1">
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#F7F3EC',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  marginBottom: '0.5rem',
                }}
              >
                Tyholmen Kolonial
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#B8965A',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  marginBottom: '1rem',
                }}
              >
                Steenhuset Restaurant
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'rgba(247,243,236,0.35)', maxWidth: 220 }}
              >
                To unike steder på Teaterplassen i hjertet av Arendal.
              </p>
            </div>

            {/* Kolonial hours */}
            <div>
              <p
                className="mb-4 text-xs font-medium tracking-widest"
                style={{ color: '#B8965A' }}
              >
                TYHOLMEN KOLONIAL
              </p>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>
                <p>Teaterplassen 9A, 4836 Arendal</p>
                <p>Man–Fre: 10:00 – 16:00</p>
                <p>Lørdag: 11:00 – 17:00</p>
              </div>
            </div>

            {/* Steenhuset hours + contact */}
            <div>
              <p
                className="mb-4 text-xs font-medium tracking-widest"
                style={{ color: '#B8965A' }}
              >
                STEENHUSET RESTAURANT
              </p>
              <div className="mb-6 space-y-2 text-sm" style={{ color: 'rgba(247,243,236,0.50)' }}>
                <p>Teaterplassen 1, 4836 Arendal</p>
                <p>Tir–Lør: Fra kl. 17:00</p>
                <p>Kjøkken stenger 21:00</p>
              </div>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(247,243,236,0.40)' }}>
                <p>
                  <a
                    href="tel:47398850"
                    className="hover:opacity-80"
                    style={{ color: 'inherit' }}
                  >
                    473 98 850
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:post@tyholmenkolonial.no"
                    className="hover:opacity-80"
                    style={{ color: 'inherit' }}
                  >
                    post@tyholmenkolonial.no
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-10 border-t pt-8 text-center text-xs"
            style={{ borderColor: 'rgba(247,243,236,0.08)', color: 'rgba(247,243,236,0.20)' }}
          >
            © {new Date().getFullYear()} Tyholmen Kolonial & Steenhuset Restaurant
          </div>
        </div>
      </footer>
    </div>
  );
}
