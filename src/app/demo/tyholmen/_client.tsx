'use client';

import { useState } from 'react';

// ─── Palette ──────────────────────────────────────────────────────────────
// white:    #FFFFFF
// offwhite: #F8F6F1
// sage:     #EBF0EC   (light green tint for cards/boxes)
// green:    #2C3E2D   (brand/header)
// dkgreen:  #1E3026   (Steenhuset dark sections)
// gold:     #B8965A
// text:     #1C1C1C
// muted:    #5A5A52

const navLinks = [
  { href: '#kolonial',   label: 'Tyholmen Kolonial' },
  { href: '#steenhuset', label: 'Steenhuset' },
  { href: '#meny',       label: 'Meny' },
  { href: '#kontakt',    label: 'Kontakt' },
];

const menuCourses = [
  { name: 'Krabbe',         desc: 'Eple, Majones og Dill',                              allergens: 'egg, skalldyr' },
  { name: 'Jordskokk',      desc: 'Suppe, Fritert Kapers',                              allergens: 'melk' },
  { name: 'Dagens Fisk',    desc: 'Asparges, Erter og Hollandaise',                     allergens: 'egg, melk' },
  { name: 'Lam',            desc: 'Gulrot, Squash, Urtepotet, Hvitløk og Rosmarinsjy',  allergens: null },
  { name: 'Ost',            desc: null,                                                 allergens: 'melk, hvete' },
  { name: 'Mørk Sjokolade', desc: 'Pannacotta med Appelsin',                            allergens: 'hvete, egg, melk' },
];

const pricing = [
  { label: 'Hovedrett', meny: '495,-', vin: null },
  { label: '2-retters', meny: '555,-', vin: '355,-' },
  { label: '3-retters', meny: '695,-', vin: '595,-' },
  { label: '4-retters', meny: '755,-', vin: '655,-' },
  { label: '5-retters', meny: '855,-', vin: '755,-' },
  { label: '6-retters', meny: '955,-', vin: '855,-' },
];

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.5h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function TyholmenClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: '#FFFFFF', color: '#1C1C1C' }}>

      {/* ── STICKY HEADER ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full" style={{ background: '#2C3E2D', borderBottom: '1px solid #3a5040' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          {/* Brand */}
          <div className="flex min-w-0 flex-col leading-snug">
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F7F3EC', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              Tyholmen Kolonial
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: '#B8965A', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              Steenhuset Restaurant
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-opacity hover:opacity-70" style={{ color: 'rgba(247,243,236,0.78)', letterSpacing: '0.01em' }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="tel:47398850" className="hidden items-center gap-1.5 rounded-sm px-4 py-2 text-sm font-medium md:flex" style={{ background: '#B8965A', color: '#1C1C1C' }}>
            <PhoneIcon /> 473 98 850
          </a>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a href="tel:47398850" className="flex h-9 w-9 items-center justify-center rounded-sm" style={{ background: '#B8965A', color: '#1C1C1C' }} aria-label="Ring oss">
              <PhoneIcon />
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-sm"
              style={{ background: 'rgba(247,243,236,0.10)' }}
              aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            >
              <span className="block h-px w-5 transition-all" style={{ background: '#F7F3EC', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
              <span className="block h-px w-5 transition-all" style={{ background: '#F7F3EC', opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-px w-5 transition-all" style={{ background: '#F7F3EC', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: '#223328', borderTop: '1px solid rgba(247,243,236,0.08)' }}>
            <nav className="mx-auto max-w-6xl px-5 py-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm"
                  style={{ color: 'rgba(247,243,236,0.82)', borderBottom: '1px solid rgba(247,243,236,0.07)', letterSpacing: '0.01em' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:post@tyholmenkolonial.no"
                onClick={() => setMenuOpen(false)}
                className="my-3 block rounded-sm py-3 text-center text-sm font-medium"
                style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.08em' }}
              >
                Book bord
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/demo/tyholmen/ute-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.32)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 65% at 50% 52%, rgba(10,10,10,0.68) 0%, rgba(10,10,10,0) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0" style={{ height: '35%', background: 'linear-gradient(to top, rgba(10,10,10,0.60) 0%, transparent 100%)' }} />

        <div className="relative flex h-full min-h-[88vh] flex-col items-center justify-center px-5 py-24 text-center">
          <p className="mb-5 text-xs font-medium" style={{ color: '#B8965A', letterSpacing: '0.20em', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
            TEATERPLASSEN, ARENDAL
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FFFFFF', fontSize: 'clamp(2.2rem, 8vw, 5rem)', fontWeight: 300, lineHeight: 1.12, letterSpacing: '0.01em', maxWidth: 700, textShadow: '0 2px 20px rgba(0,0,0,0.55)' }}>
            Tyholmen Kolonial
            <br />
            <span style={{ fontWeight: 400, fontStyle: 'italic' }}>og Steenhuset Restaurant</span>
          </h1>
          <p className="mx-auto mt-6 max-w-sm px-2 text-base leading-relaxed sm:max-w-lg" style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 300, textShadow: '0 1px 12px rgba(0,0,0,0.60)' }}>
            Delikatessecafé og restaurant ved Teaterplassen i Arendal. Uteservering med utsikt over parken om sommeren.
          </p>
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a href="#kolonial" className="rounded-sm py-3 text-sm font-medium transition-opacity hover:opacity-80 sm:px-8" style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.08em' }}>
              TYHOLMEN KOLONIAL
            </a>
            <a href="#steenhuset" className="rounded-sm py-3 text-sm font-medium transition-opacity hover:opacity-80 sm:px-8" style={{ border: '1px solid rgba(255,255,255,0.60)', color: '#FFFFFF', letterSpacing: '0.08em' }}>
              STEENHUSET RESTAURANT
            </a>
          </div>
        </div>
      </section>

      {/* ── TYHOLMEN KOLONIAL ───────────────────────────────────────── */}
      <section id="kolonial" className="py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-8 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.20em' }}>TYHOLMEN KOLONIAL</p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.15, color: '#2C3E2D', marginBottom: '1rem' }}>
                Delikatessecafé i hjertet av Arendal
              </h2>
              <p className="mb-6 text-base leading-relaxed" style={{ color: '#4a4a42', fontWeight: 300 }}>
                Håndlagde smørbrød, friske sesongbaserte salater og et utvalg av fine oster,
                premium spekemat, artisanal pasta, oliven og sauser. Om sommeren er det
                uteservering med utsikt over parken.
              </p>

              {/* Hours */}
              <div className="mb-7 rounded-sm p-4" style={{ background: '#EBF0EC', borderLeft: '3px solid #2C3E2D' }}>
                <p className="mb-3 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.18em' }}>ÅPNINGSTIDER</p>
                <div className="space-y-1.5 text-sm" style={{ color: '#3a3a32' }}>
                  <div className="flex justify-between"><span>Mandag til fredag</span><span className="font-medium">10:00-16:00</span></div>
                  <div className="flex justify-between"><span>Lørdag</span><span className="font-medium">11:00-17:00</span></div>
                  <div className="flex justify-between" style={{ color: '#9a9a90' }}><span>Søndag</span><span>Stengt</span></div>
                </div>
              </div>

              {/* Offerings */}
              <p className="mb-3 text-xs font-medium" style={{ color: '#5A5A52', letterSpacing: '0.18em' }}>TILBUD OG TJENESTER</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  { name: 'Afternoon Tea',       desc: 'Britisk tradisjon med lokale råvarer' },
                  { name: 'Tapas Catering',       desc: 'Skreddersydde tapas til arrangement' },
                  { name: 'Charcuterie Catering', desc: 'Presentasjonsplanker med spekemat' },
                  { name: 'Chambre Séparé',       desc: 'Private middager i eget rom' },
                  { name: 'Bedriftsgavepakker',   desc: 'Kuraterte delikatessegaver' },
                ].map((item) => (
                  <div key={item.name} className="rounded-sm p-3" style={{ background: '#EBF0EC' }}>
                    <p className="text-sm font-medium" style={{ color: '#2C3E2D' }}>{item.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: '#5A5A52' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <img src="/demo/tyholmen/kolonial-1.jpg" alt="Tyholmen Kolonial interiør" className="w-full rounded-sm object-cover" style={{ aspectRatio: '16/9' }} />
              </div>
              <img src="/demo/tyholmen/kolonial-2.jpg" alt="Tyholmen Kolonial delikatesse" className="w-full rounded-sm object-cover" style={{ aspectRatio: '4/3' }} />
              <img src="/demo/tyholmen/kolonial-3.jpg" alt="Tyholmen Kolonial utvalg" className="w-full rounded-sm object-cover" style={{ aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STEENHUSET RESTAURANT ───────────────────────────────────── */}
      <section id="steenhuset" className="py-16 lg:py-24" style={{ background: '#1E3026' }}>
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-8 text-xs font-medium" style={{ color: '#B8965A', letterSpacing: '0.20em' }}>STEENHUSET RESTAURANT</p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.15, color: '#FFFFFF', marginBottom: '1rem' }}>
                Historiske omgivelser,{' '}
                <span style={{ fontStyle: 'italic', color: '#B8965A' }}>sesongbasert meny</span>
              </h2>
              <p className="mb-6 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)', fontWeight: 300 }}>
                Steenhuset holder til i et lokale fra 1700-tallet. Avsmakningsmenyen oppdateres
                hvert 14. dag og tilpasses sesongens råvarer. Åpent tirsdag til lørdag fra kl. 17:00.
              </p>

              {/* Hours */}
              <div className="mb-7 rounded-sm p-4" style={{ background: 'rgba(255,255,255,0.06)', borderLeft: '3px solid #B8965A' }}>
                <p className="mb-3 text-xs font-medium" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>ÅPNINGSTIDER</p>
                <div className="space-y-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  <div className="flex justify-between"><span>Tirsdag til lørdag</span><span className="font-medium">Fra kl. 17:00</span></div>
                  <div className="flex justify-between" style={{ color: 'rgba(255,255,255,0.44)' }}><span>Kjøkken stenger</span><span>21:00</span></div>
                  <div className="flex justify-between" style={{ color: 'rgba(255,255,255,0.28)' }}><span>Søndag og mandag</span><span>Stengt</span></div>
                </div>
              </div>

              <p className="mb-3 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.32)', letterSpacing: '0.18em' }}>TJENESTER</p>
              <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  { name: 'Bedriftsmiddager', desc: 'Selskaper for liten og stor gruppe' },
                  { name: 'Sommermiddag ute', desc: 'Uteservering med utsikt mot parken' },
                ].map((item) => (
                  <div key={item.name} className="rounded-sm p-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <p className="text-sm font-medium" style={{ color: '#FFFFFF' }}>{item.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.44)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <a href="#meny" className="inline-block rounded-sm px-7 py-3 text-sm font-medium transition-opacity hover:opacity-85" style={{ background: '#B8965A', color: '#1C1C1C', letterSpacing: '0.08em' }}>
                SE MENYEN
              </a>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <img src="/demo/tyholmen/inne.jpg" alt="Steenhuset Restaurant interiør" className="w-full rounded-sm object-cover" style={{ aspectRatio: '16/9' }} />
              </div>
              <img src="/demo/tyholmen/ute-1.jpg" alt="Steenhuset uteplass" className="w-full rounded-sm object-cover" style={{ aspectRatio: '4/3' }} />
              <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
                <img src="/demo/tyholmen/mat-1.jpg" alt="Rett fra menyen" className="h-full w-full object-cover" />
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-sm px-2 py-1.5" style={{ background: 'rgba(20,20,20,0.88)' }}>
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-bold" style={{ background: '#34E0A1', color: '#1C1C1C', fontSize: '0.55rem' }}>TA</div>
                  <div>
                    <p style={{ color: '#FFFFFF', fontSize: '0.65rem', fontWeight: 500, lineHeight: 1.2 }}>TripAdvisor</p>
                    <p style={{ color: '#B8965A', fontSize: '0.60rem', lineHeight: 1.2 }}>Topprangert i Arendal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────────────── */}
      <section id="meny" className="py-16 lg:py-24" style={{ background: '#F8F6F1' }}>
        <div className="mx-auto max-w-5xl px-5">
          <p className="mb-3 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.20em' }}>AVSMAKNINGSMENY</p>
          <h2 className="mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 400, color: '#1C1C1C' }}>
            Steenhuset, Arendal
          </h2>
          <p className="mb-12 text-sm" style={{ color: '#7a7a72', fontWeight: 300 }}>
            Menyen oppdateres hvert 14. dag. Velg fra 1 til 6 retter.
          </p>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Pricing — first on mobile */}
            <div className="lg:order-2 lg:col-span-2">
              <div className="rounded-sm p-5" style={{ background: '#FFFFFF', border: '1px solid #D8D4CC' }}>
                <p className="mb-4 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.18em' }}>PRISER</p>
                <div className="mb-2 grid grid-cols-3 text-xs" style={{ color: '#9a9a90' }}>
                  <span></span>
                  <span className="text-right">MENY</span>
                  <span className="text-right">VINPAKKE</span>
                </div>
                {pricing.map((row, i) => (
                  <div key={row.label} className="grid grid-cols-3 items-center py-2.5" style={{ borderTop: '1px solid #ECEAE4', background: i === pricing.length - 1 ? '#F5F0E8' : 'transparent' }}>
                    <span className="text-sm" style={{ color: i === pricing.length - 1 ? '#B8965A' : '#3a3a32', fontWeight: i === pricing.length - 1 ? 500 : 300 }}>{row.label}</span>
                    <span className="text-right text-sm font-medium" style={{ color: i === pricing.length - 1 ? '#B8965A' : '#1C1C1C' }}>{row.meny}</span>
                    <span className="text-right text-sm" style={{ color: '#7a7a72' }}>{row.vin ?? ''}</span>
                  </div>
                ))}
                <div className="mt-5 border-t pt-4" style={{ borderColor: '#ECEAE4' }}>
                  <a href="tel:47398850" className="flex w-full items-center justify-center gap-2 rounded-sm py-3 text-sm font-medium" style={{ background: '#2C3E2D', color: '#FFFFFF', letterSpacing: '0.08em' }}>
                    <PhoneIcon /> BOOK BORD
                  </a>
                  <p className="mt-2 text-center text-xs" style={{ color: '#9a9a90' }}>Tir-Lør fra kl. 17:00 · 473 98 850</p>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="lg:order-1 lg:col-span-3">
              {menuCourses.map((course, i) => (
                <div key={course.name} className="py-4" style={{ borderBottom: i < menuCourses.length - 1 ? '1px solid #DEDAD4' : 'none' }}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 400, color: '#1C1C1C' }}>{course.name}</span>
                    {course.desc && <span className="text-sm" style={{ color: '#5A5A52', fontWeight: 300 }}>{course.desc}</span>}
                  </div>
                  {course.allergens && <p className="mt-1 text-xs" style={{ color: '#9a9a90' }}>Inneholder: {course.allergens}</p>}
                </div>
              ))}
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {['/demo/tyholmen/mat-1.jpg', '/demo/tyholmen/mat-2.jpg', '/demo/tyholmen/mat-3.jpg', '/demo/tyholmen/mat-4.jpg'].map((src, i) => (
                  <img key={i} src={src} alt="Rett fra menyen" className="w-full rounded-sm object-cover" style={{ aspectRatio: '1/1' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ──────────────────────────────────────── */}
      <section id="kontakt" className="py-16 lg:py-24" style={{ background: '#EBF0EC' }}>
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-5 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.20em' }}>BESØK OSS</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 5vw, 2.6rem)', fontWeight: 400, color: '#1C1C1C', marginBottom: '1rem' }}>
            Teaterplassen, Arendal
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed" style={{ color: '#5A5A52', fontWeight: 300 }}>
            Begge stedene ligger på Teaterplassen i Arendal sentrum, ved siden av parken.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm p-6 text-left" style={{ background: '#FFFFFF' }}>
              <p className="mb-3 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.18em' }}>TYHOLMEN KOLONIAL</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#1C1C1C', fontWeight: 400, marginBottom: '0.25rem' }}>Teaterplassen 9A</p>
              <p className="mb-4 text-sm" style={{ color: '#7a7a72' }}>4836 Arendal</p>
              <div className="space-y-1 text-sm" style={{ color: '#5A5A52' }}>
                <p>Man-Fre: 10:00-16:00</p>
                <p>Lørdag: 11:00-17:00</p>
              </div>
            </div>
            <div className="rounded-sm p-6 text-left" style={{ background: '#FFFFFF' }}>
              <p className="mb-3 text-xs font-medium" style={{ color: '#2C3E2D', letterSpacing: '0.18em' }}>STEENHUSET RESTAURANT</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#1C1C1C', fontWeight: 400, marginBottom: '0.25rem' }}>Teaterplassen 1</p>
              <p className="mb-4 text-sm" style={{ color: '#7a7a72' }}>4836 Arendal</p>
              <div className="space-y-1 text-sm" style={{ color: '#5A5A52' }}>
                <p>Tir-Lør: Fra kl. 17:00</p>
                <p>Kjøkken stenger 21:00</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: '#5A5A52' }}>
              <a href="tel:47398850" className="flex items-center gap-2" style={{ color: 'inherit' }}>
                <PhoneIcon /> 473 98 850
              </a>
              <a href="mailto:post@tyholmenkolonial.no" className="hover:opacity-75" style={{ color: 'inherit' }}>
                post@tyholmenkolonial.no
              </a>
            </div>
            <a
              href="mailto:post@tyholmenkolonial.no"
              className="w-full max-w-xs rounded-sm py-4 text-center text-sm font-medium transition-opacity hover:opacity-85 sm:w-auto sm:px-10"
              style={{ background: '#2C3E2D', color: '#FFFFFF', letterSpacing: '0.10em', display: 'block' }}
            >
              BOOK BORD
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ background: '#1A2E20', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-2 lg:col-span-1">
              <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FFFFFF', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.04em', marginBottom: '0.3rem' }}>Tyholmen Kolonial</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#B8965A', fontSize: '1rem', fontWeight: 400, letterSpacing: '0.04em', marginBottom: '0.75rem' }}>Steenhuset Restaurant</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>Teaterplassen, Arendal</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>TYHOLMEN KOLONIAL</p>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(255,255,255,0.42)' }}>
                <p>Teaterplassen 9A, 4836 Arendal</p>
                <p>Man-Fre: 10:00-16:00</p>
                <p>Lørdag: 11:00-17:00</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium" style={{ color: '#B8965A', letterSpacing: '0.18em' }}>STEENHUSET RESTAURANT</p>
              <div className="mb-4 space-y-1 text-sm" style={{ color: 'rgba(255,255,255,0.42)' }}>
                <p>Teaterplassen 1, 4836 Arendal</p>
                <p>Tir-Lør: Fra kl. 17:00</p>
                <p>Kjøkken stenger 21:00</p>
              </div>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(255,255,255,0.30)' }}>
                <p><a href="tel:47398850" className="hover:opacity-70" style={{ color: 'inherit' }}>473 98 850</a></p>
                <p><a href="mailto:post@tyholmenkolonial.no" className="hover:opacity-70" style={{ color: 'inherit' }}>post@tyholmenkolonial.no</a></p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs" style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.18)' }}>
            © {new Date().getFullYear()} Tyholmen Kolonial & Steenhuset Restaurant
          </div>
        </div>
      </footer>

    </div>
  );
}
