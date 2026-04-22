'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const NAV_LINKS = ['Hjem', 'Tjenester', 'Om oss', 'Prosjekter', 'Kontakt']

const SERVICES = [
  { title: 'Hovedtjeneste 1', desc: 'Her beskriver vi hva denne tjenesten innebærer og hvilken verdi den gir kunden.' },
  { title: 'Hovedtjeneste 2', desc: 'Her beskriver vi hva denne tjenesten innebærer og hvilken verdi den gir kunden.' },
  { title: 'Hovedtjeneste 3', desc: 'Her beskriver vi hva denne tjenesten innebærer og hvilken verdi den gir kunden.' },
  { title: 'Hovedtjeneste 4', desc: 'Her beskriver vi hva denne tjenesten innebærer og hvilken verdi den gir kunden.' },
  { title: 'Hovedtjeneste 5', desc: 'Her beskriver vi hva denne tjenesten innebærer og hvilken verdi den gir kunden.' },
  { title: 'Hovedtjeneste 6', desc: 'Her beskriver vi hva denne tjenesten innebærer og hvilken verdi den gir kunden.' },
]

const PROJECTS = [
  { title: 'Prosjekt 1', img: '/demo/byggogbetong/project1.jpg', desc: 'Her kan vi legge til en kort beskrivelse av prosjektet.' },
  { title: 'Prosjekt 2', img: '/demo/byggogbetong/project2.jpg', desc: 'Her kan vi legge til en kort beskrivelse av prosjektet.' },
  { title: 'Prosjekt 3', img: '/demo/byggogbetong/project3.jpg', desc: 'Her kan vi legge til en kort beskrivelse av prosjektet.' },
]

const WHY_US = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Kvalitet og erfaring',
    desc: 'Her legger vi til noen ord om kvalitet, fagkunnskap og lang erfaring i bransjen.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Leverer til avtalt tid',
    desc: 'Her legger vi til noen ord om punktlighet, fremdrift og respekt for kundens tid.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Lokalt forankret',
    desc: 'Her legger vi til noen ord om lokal tilstedeværelse, kjennskap til regionen og nærhet til kundene.',
  },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function ByggogbetongPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label: string) => {
    setMenuOpen(false)
    const map: Record<string, string> = {
      Hjem: 'hjem',
      Tjenester: 'tjenester',
      'Om oss': 'om-oss',
      Prosjekter: 'prosjekter',
      Kontakt: 'kontakt',
    }
    scrollTo(map[label] || label.toLowerCase())
  }

  return (
    <div
      style={{
        fontFamily: "'Barlow', sans-serif",
        color: '#2c2c2c',
        background: '#f5f4f2',
        minHeight: '100vh',
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(28,28,28,0.97)' : 'rgba(28,28,28,0.75)',
          backdropFilter: 'blur(8px)',
          borderBottom: scrolled ? '2px solid #e05a00' : '2px solid transparent',
          transition: 'all 0.25s ease',
          padding: '0 2rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => handleNav('Hjem')}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Bygg og Betong <span style={{ color: '#e05a00' }}>Sør AS</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="bb-desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#d4d4d4',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 0',
                borderBottom: '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLButtonElement).style.color = '#e05a00'
                ;(e.target as HTMLButtonElement).style.borderBottomColor = '#e05a00'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLButtonElement).style.color = '#d4d4d4'
                ;(e.target as HTMLButtonElement).style.borderBottomColor = 'transparent'
              }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Meny"
          className="bb-hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '26px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                transition: 'all 0.2s',
                transformOrigin: 'center',
                transform:
                  menuOpen && i === 0
                    ? 'translateY(7px) rotate(45deg)'
                    : menuOpen && i === 2
                    ? 'translateY(-7px) rotate(-45deg)'
                    : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            background: 'rgba(28,28,28,0.97)',
            zIndex: 99,
            padding: '1rem 2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            borderBottom: '2px solid #e05a00',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        id="hjem"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/demo/byggogbetong/hero.jpg"
          alt="Betong og byggarbeid"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(20,18,15,0.75) 0%, rgba(20,18,15,0.60) 60%, rgba(20,18,15,0.85) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 1.5rem',
            maxWidth: '820px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: '#e05a00',
              height: '4px',
              width: '60px',
              marginBottom: '1.5rem',
            }}
          />
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#fff',
              margin: '0 0 1.25rem',
            }}
          >
            Bygg og Betong
            <br />
            <span style={{ color: '#e05a00' }}>Sør AS</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Her kan vi skrive en kort og fengende beskrivelse av hva bedriften gjør og hvilken verdi den leverer til kundene.
          </p>
          <button
            onClick={() => handleNav('Kontakt')}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: '#e05a00',
              color: '#fff',
              border: '2px solid #e05a00',
              padding: '0.85rem 2.5rem',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLButtonElement).style.background = 'transparent'
              ;(e.target as HTMLButtonElement).style.color = '#e05a00'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLButtonElement).style.background = '#e05a00'
              ;(e.target as HTMLButtonElement).style.color = '#fff'
            }}
          >
            Ta kontakt
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            zIndex: 2,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* OM OSS */}
      <section id="om-oss" style={{ background: '#fff', padding: '6rem 0' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e05a00',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Om oss
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: '#2c2c2c',
                margin: '0 0 1.5rem',
              }}
            >
              Her kan vi fortelle
              <br />
              om bedriften
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#e05a00', marginBottom: '1.75rem' }} />
            <p style={{ color: '#555', lineHeight: 1.75, marginBottom: '1rem' }}>
              Her kan vi skrive litt om bedriften, historien og hva som gjør dere unike i markedet. Dette er et godt sted å presentere verdiene og arbeidsmåten til selskapet.
            </p>
            <p style={{ color: '#555', lineHeight: 1.75, marginBottom: '1rem' }}>
              Vi kan beskrive geografisk dekningsområde, typiske oppdrag og hvem dere liker å jobbe for, enten det er privatkunder, næringsbygg eller offentlige prosjekter.
            </p>
            <p style={{ color: '#8a8a8a', lineHeight: 1.75, fontStyle: 'italic' }}>
              "Her kan vi legge inn et sitat eller en kort oppsummering som fremhever det viktigste."
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: '-14px',
                border: '3px solid #e05a00',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
              <Image
                src="/demo/byggogbetong/about.jpg"
                alt="Teamet i Bygg og Betong Sør"
                width={612}
                height={408}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TJENESTER */}
      <section
        id="tjenester"
        style={{
          position: 'relative',
          padding: '6rem 0',
          background: '#2c2c2c',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, zIndex: 0 }}>
          <Image
            src="/demo/byggogbetong/service.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e05a00',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Hva vi gjør
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: '#fff',
                margin: '0 0 1rem',
              }}
            >
              Tjenester vi leverer
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#e05a00', margin: '0 auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '2rem 1.75rem',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#e05a00'
                  ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(224,90,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)'
                  ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ width: '36px', height: '3px', background: '#e05a00', marginBottom: '1.25rem' }} />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    margin: '0 0 0.75rem',
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ color: '#a0a0a0', lineHeight: 1.65, fontSize: '0.95rem' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSJEKTER */}
      <section id="prosjekter" style={{ background: '#f0eeeb', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e05a00',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Referanser
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: '#2c2c2c',
                margin: '0 0 1rem',
              }}
            >
              Utvalgte prosjekter
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#e05a00', margin: '0 auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                      padding: '1rem 1.25rem 0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#fff',
                      }}
                    >
                      {proj.title}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVORFOR VELGE OSS */}
      <section style={{ background: '#fff', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e05a00',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Hvorfor velge oss
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: '#2c2c2c',
                margin: '0 0 1rem',
              }}
            >
              Her legger vi til noen ord om
              <br />
              hvorfor velge oss
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#e05a00', margin: '0 auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {WHY_US.map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 1rem' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    background: '#2c2c2c',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: '#e05a00',
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#2c2c2c',
                    margin: '0 0 0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.65, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ background: '#2c2c2c', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e05a00',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Ta kontakt
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: '#fff',
                margin: '0 0 1rem',
              }}
            >
              Vi hører gjerne fra deg
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#e05a00', margin: '0 auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  margin: '0 0 1.5rem',
                }}
              >
                Kontaktinformasjon
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#e05a00" strokeWidth="2" width="20" height="20">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    text: 'Skibvig Ringvei 84, 4815 Saltrød',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#e05a00" strokeWidth="2" width="20" height="20">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    text: 'Byggogbetongsor@outlook.com',
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                    <span style={{ color: '#c0c0c0', lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {[
                { label: 'Navn', type: 'text', placeholder: 'Ditt navn' },
                { label: 'E-post', type: 'email', placeholder: 'din@epost.no' },
                { label: 'Telefon', type: 'tel', placeholder: '+47 000 00 000' },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#a0a0a0',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      padding: '0.75rem 1rem',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#e05a00')}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.15)')}
                  />
                </div>
              ))}
              <div>
                <label
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#a0a0a0',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Melding
                </label>
                <textarea
                  placeholder="Beskriv hva du trenger hjelp med..."
                  rows={5}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    fontFamily: "'Barlow', sans-serif",
                  }}
                  onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = '#e05a00')}
                  onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.15)')}
                />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: '#e05a00',
                  color: '#fff',
                  border: '2px solid #e05a00',
                  padding: '0.9rem 2rem',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLButtonElement).style.background = 'transparent'
                  ;(e.target as HTMLButtonElement).style.color = '#e05a00'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLButtonElement).style.background = '#e05a00'
                  ;(e.target as HTMLButtonElement).style.color = '#fff'
                }}
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: '#1a1a1a',
          borderTop: '2px solid #e05a00',
          padding: '2.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#fff',
            margin: '0 0 0.5rem',
          }}
        >
          Bygg og Betong Sør AS
        </p>
        <p style={{ color: '#8a8a8a', fontSize: '0.9rem', margin: '0 0 0.25rem' }}>
          Skibvig Ringvei 84, 4815 Saltrød
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="mailto:Byggogbetongsor@outlook.com"
            style={{ color: '#e05a00', textDecoration: 'none', fontSize: '0.9rem' }}
          >
            Byggogbetongsor@outlook.com
          </a>
        </p>
        <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '1.5rem' }}>
          &copy; {new Date().getFullYear()} Bygg og Betong Sør AS. Demo-side.
        </p>
      </footer>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 768px) {
          .bb-desktop-nav { display: none !important; }
          .bb-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .bb-hamburger { display: none !important; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  )
}
