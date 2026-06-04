import type { Metadata } from 'next'
import FallbackImage from './FallbackImage'

export const metadata: Metadata = {
  robots: 'noindex',
}

function AnchorIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="22" strokeLinecap="round" />
      <path strokeLinecap="round" d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  )
}

function ShipIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20l-1-9h16l-1 9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11V6l3-3 3 3v5" />
    </svg>
  )
}

function WrenchIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function MapPinIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l1.01-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline strokeLinecap="round" strokeLinejoin="round" points="22,6 12,13 2,6" />
    </svg>
  )
}

export default function SMMultiservicePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: 'url(/demo/sm-multiservice/brygge-bygget.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Vi bygger brygger som varer
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Faglig bryggbygging og maritime tjenester langs Sørladskysten. Vi leverer også komplette brygger med lasteskip.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="px-6 py-3 rounded-lg font-semibold text-sm bg-white hover:bg-slate-100 transition-colors"
              style={{ color: '#1a4f7a' }}
            >
              Kontakt oss
            </a>
            <a
              href="#prosjekter"
              className="px-6 py-3 rounded-lg font-semibold text-sm border border-white text-white hover:bg-white/10 transition-colors"
            >
              Se prosjekter
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <AnchorIcon />, label: 'Erfarne fagfolk' },
              { icon: <ShipIcon />, label: 'Levering med lasteskip' },
              { icon: <WrenchIcon />, label: 'Tilbygg og reparasjon' },
              { icon: <MapPinIcon />, label: 'Eydehavn, Aust-Agder' },
            ].map(item => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-2"
                style={{ color: '#1a4f7a' }}
              >
                {item.icon}
                <span className="font-semibold text-sm text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section id="om-oss" style={{ backgroundColor: '#e8f0f7' }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a4f7a' }}>
                Lokalt håndverk, maritim kompetanse
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                SM Multiservice AS eies og drives av Svein Magne Stiansen, med base i Eydehavn. Vi har lang erfaring med bygging og reparasjon av brygger, og tilbyr også tilbygg og andre konstruksjonstjenester. Det vi gjør, gjør vi ordentlig.
              </p>
            </div>
            <div>
              <FallbackImage
                src="/demo/sm-multiservice/brygge-lyngdal.jpg"
                alt="Bryggprosjekt"
                className="rounded-lg aspect-video w-full object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#1a4f7a' }}>
            Hva vi tilbyr
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <AnchorIcon className="w-8 h-8" />,
                title: 'Bryggbygging',
                text: 'Vi planlegger og bygger brygger tilpasset din tomt og dine behov. Solid håndverk med materialer som tåler kulde, salt og bølger.',
              },
              {
                icon: <ShipIcon className="w-8 h-8" />,
                title: 'Leveranse med lasteskip',
                text: 'Ingen kjøreveiadkomst? Ingen problem. Vi leverer og setter på plass komplette bryggdeler med lasteskip direkte til din eiendom.',
              },
              {
                icon: <WrenchIcon className="w-8 h-8" />,
                title: 'Reparasjon og tilbygg',
                text: 'Vi reparerer eksisterende brygger og tar også oppdrag innen tilbygg og lettere konstruksjonsarbeid.',
              },
            ].map(card => (
              <div key={card.title} className="rounded-lg border border-slate-200 shadow-sm p-6">
                <div className="mb-4" style={{ color: '#1a4f7a' }}>{card.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prosjekter */}
      <section id="prosjekter" style={{ backgroundColor: '#e8f0f7' }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: '#1a4f7a' }}>
            Tidligere prosjekter
          </h2>
          <p className="text-slate-600 text-center mb-10">Noen eksempler på arbeid vi har levert</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/demo/sm-multiservice/brygge-bygget.jpg', caption: 'Brygge bygget av SM Multiservice' },
              { src: '/demo/sm-multiservice/brygge-lasteskip.jpg', caption: 'Levering med lasteskip' },
              { src: '/demo/sm-multiservice/brygge-lyngdal.jpg', caption: 'Bryggprosjekt i Lyngdal' },
            ].map(img => (
              <div key={img.src}>
                <FallbackImage
                  src={img.src}
                  alt={img.caption}
                  className="aspect-video w-full object-cover rounded-lg shadow-sm"
                />
                <p className="mt-2 text-sm text-slate-500">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: '#1a4f7a' }}>
            Ta kontakt
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Vi gir deg et uforpliktende tilbud. Ring oss eller send oss en e-post.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="tel:40057058"
              className="group flex flex-col items-center text-center rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1a4f7a]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8f0f7', color: '#1a4f7a' }}>
                <PhoneIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Telefon</p>
              <p className="font-bold text-slate-800 text-lg group-hover:underline">400 57 058</p>
            </a>

            <a
              href="mailto:post@sm-multiservice.no"
              className="group flex flex-col items-center text-center rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1a4f7a]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8f0f7', color: '#1a4f7a' }}>
                <MailIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">E-post</p>
              <p className="font-bold text-slate-800 break-all group-hover:underline">post@sm-multiservice.no</p>
            </a>

            <div className="flex flex-col items-center text-center rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8f0f7', color: '#1a4f7a' }}>
                <MapPinIcon className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Adresse</p>
              <p className="font-bold text-slate-800">Budalen 13</p>
              <p className="text-slate-600 text-sm">4810 Eydehavn</p>
            </div>
          </div>
          <div className="mt-10 rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.5171652887692!2d8.846488124701535!3d58.50427931767596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464795ed78a685ff%3A0xe055dda4b9c9ade3!2sBudalen%2013%2C%204810%20Eydehavn!5e1!3m2!1sen!2sno!4v1780565755697!5m2!1sen!2sno"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SM Multiservice AS, Budalen 13, Eydehavn"
            />
          </div>
        </div>
      </section>
    </>
  )
}
