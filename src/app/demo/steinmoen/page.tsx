import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Steinmoen – Din Reklamepartner',
  description: 'Skilter, bildekor, profiltøy og trykksaker. To lokasjoner i Aust-Agder.',
  robots: 'noindex',
};

const clients = [
  'Å Energi', 'Veidekke', 'Rema 1000', 'Skatteetaten', 'UIA',
  'Sørlandet Sykehus', 'XL Bygg', 'NYMO', 'J.B. Ugland',
  'EGDE Consulting', 'IndustriTRE', 'Vikingbad', 'Agder Karosseri',
  'Amundsen Bygg', 'Kuben', 'Fargeriket', 'Igland Garasjen', 'Autostrada',
];

const services = [
  { num: '01', name: 'Skilter', slug: 'skilter', desc: 'Fasade, LED, utendørs' },
  { num: '02', name: 'Bildekor', slug: 'bildekor', desc: 'Logo, produkt, identitet' },
  { num: '03', name: 'Helfoliering', slug: 'helfoliering', desc: 'Farge, matt, PPF' },
  { num: '04', name: 'Profiltøy', slug: 'profiltoy', desc: 'T-skjorter, jakker, capser' },
  { num: '05', name: 'Trykksaker', slug: 'trykksaker', desc: 'Visittkort, brosjyrer, plakater' },
  { num: '06', name: 'Interiør', slug: 'interior', desc: 'Veggdekor, folie, tapet' },
  { num: '07', name: 'Taktil markering', slug: 'taktil', desc: 'Ledelinjer, universell utforming' },
  { num: '08', name: 'Gave & Profilartikler', slug: 'gave', desc: 'Giveaways, firmagaver' },
  { num: '09', name: 'Lakkbeskyttelse (PPF)', slug: 'ppf', desc: 'Steinsprutfolie, selvrepararende' },
  { num: '10', name: 'Solfilm', slug: 'solfilm', desc: 'Bil & bygg, UV, personvern' },
];

const catalogs = [
  { name: 'Clique 2025', img: '/demo/steinmoen/cat-clique.jpg', url: 'https://viewer.joomag.com/clique-2025-v2/0442190001629794174?short&' },
  { name: 'Tenson SS25', img: '/demo/steinmoen/cat-tenson.jpg', url: 'https://viewer.joomag.com/tenson-corporate-ss25-v1/0362334001729855822/p1?short=' },
  { name: 'Craft Corporate', img: '/demo/steinmoen/cat-craft.jpg', url: 'https://viewer.joomag.com/craft-corporate-ss25-v1/0176495001503902632?short&' },
  { name: 'Cutter & Buck', img: '/demo/steinmoen/cat-cutter.jpg', url: 'https://viewer.joomag.com/cutter-buck-ss25-v1/0085178001503903293/p8?short=' },
  { name: 'James Harvest', img: '/demo/steinmoen/cat-harvest.jpg', url: 'https://viewer.joomag.com/james-harvest-2025-v1/0159605001485421952?short&' },
  { name: 'Printer 2025', img: '/demo/steinmoen/cat-printer.jpg', url: 'https://viewer.joomag.com/printer-2025-v2/0328643001548236454?short&' },
  { name: 'Sagaform SS25', img: '/demo/steinmoen/cat-sagaform.jpg', url: 'https://viewer.joomag.com/sagaform-ss25-v2/0603110001597914465?short&' },
  { name: 'Toppoint 2024', img: '/demo/steinmoen/cat-toppoint.jpg', url: 'https://viewer.joomag.com/toppoint-2024-v3/0723093001485426873?short&' },
  { name: 'Kosta Boda', img: '/demo/steinmoen/cat-kosta.jpg', url: 'https://viewer.joomag.com/kosta-boda-ss25-v1/0777468001487153531?short&' },
  { name: 'Cottover 2025', img: '/demo/steinmoen/cat-cottover.jpg', url: 'https://viewer.joomag.com/cottover-co-2025-v1/0858695001548839005?short&' },
  { name: 'Bergans 2025', img: '/demo/steinmoen/cat-bergans.png', url: 'https://heyzine.com/flip-book/2b739414cc.html' },
];

export default function SteinmoenHome() {
  return (
    <>
      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .mq-track { display:flex; width:max-content; animation:marquee 40s linear infinite; }
        .mq-track:hover { animation-play-state:paused; }

        @keyframes catmq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .cat-mq { display:flex; width:max-content; animation:catmq 38s linear infinite; }
        .cat-mq:hover { animation-play-state:paused; }

        .svc-row { transition:background 150ms ease; }
        .svc-row:hover { background:#f0f4ff; }
        .svc-name { transition:transform 150ms ease; display:inline-block; }
        .svc-row:hover .svc-name { transform:translateX(3px); }
        .svc-arrow { opacity:0; transition:opacity 150ms ease; }
        .svc-row:hover .svc-arrow { opacity:1; }
        .pj-overlay { opacity:0; transition:opacity 200ms ease; }
        .pj-card:hover .pj-overlay { opacity:1; }
        .cat-card-hover { transition:box-shadow 150ms ease,transform 150ms ease; }
        .cat-card-hover:hover { box-shadow:0 6px 20px rgba(0,0,0,0.12); transform:translateY(-2px); }
      `}</style>

      {/* 1. HERO */}
      <section className="flex bg-white" style={{ minHeight: '90vh' }}>
        <div className="flex flex-col justify-center w-full md:w-[60%] px-6 md:px-16 lg:px-20 py-24 md:py-0">
          <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-8">
            Grimstad & Arendal — Din reklamepartner
          </p>
          <h1
            className="font-black leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 8rem)' }}
          >
            <span className="block text-[#111]">Vi gjør</span>
            <span className="block text-[#1a4fd6]">bedriften din</span>
            <span className="block text-[#111]">synlig.</span>
          </h1>
          <p className="text-[#666] text-base max-w-md mb-10" style={{ lineHeight: 1.7 }}>
            Steinmoen leverer alt innen reklame og profilering. Fra skilter og bildekor
            til profiltøy og gaveart&shy;ikler. Med to lokasjoner i Aust-Agder.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/demo/steinmoen/tjenester"
              className="px-6 py-3 bg-[#1a4fd6] text-white text-sm font-semibold hover:bg-[#1540b0] transition-colors duration-150"
            >
              Se tjenester
            </Link>
            <a
              href="#prosjekter"
              className="px-6 py-3 text-[#111] text-sm font-semibold hover:bg-[#111] hover:text-white transition-colors duration-150"
              style={{ border: '1.5px solid #111' }}
            >
              Se arbeid
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-[40%] relative overflow-hidden" style={{ minHeight: '90vh' }}>
          <img
            src="/demo/steinmoen/project-yono.jpg"
            alt="Helfoliering"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. MARQUEE — clients */}
      <div className="bg-white border-t border-b border-[#e5e5e5] py-4 overflow-hidden">
        <div className="mq-track">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-sm text-[#111] whitespace-nowrap px-8">
              {c}
              <span className="text-[#ddd] mx-6">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. SERVICES — numbered rows, each links to its anchor */}
      <section className="bg-white py-[60px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-12">
            <p className="text-xs tracking-[0.25em] text-[#999] uppercase whitespace-nowrap">Hva vi tilbyr</p>
            <div className="flex-1 h-px bg-[#e5e5e5]" />
            <Link href="/demo/steinmoen/tjenester" className="text-xs text-[#1a4fd6] whitespace-nowrap hover:underline">
              Se alle tjenester &rarr;
            </Link>
          </div>

          <div className="border-t border-[#e5e5e5]">
            {services.map((s) => (
              <Link
                key={s.num}
                href={`/demo/steinmoen/tjenester#${s.slug}`}
                className="svc-row flex items-center border-b border-[#e5e5e5] py-5 px-2 cursor-pointer group"
              >
                <span className="text-xs font-medium text-[#1a4fd6] tabular-nums w-10 shrink-0">{s.num}</span>
                <span className="svc-name flex-1 font-black text-[#111]" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.5rem)', lineHeight: 1 }}>
                  {s.name}
                </span>
                <span className="text-sm text-[#999] hidden md:block mr-6">{s.desc}</span>
                <span className="svc-arrow text-[#1a4fd6] text-lg">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="prosjekter" className="bg-[#f5f4f0] py-[60px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-6 mb-10">
            <p className="text-xs tracking-[0.25em] text-[#999] uppercase whitespace-nowrap">Utvalgte prosjekter</p>
            <div className="flex-1 h-px bg-[#d5d3cc]" />
          </div>

          {/* Desktop row 1: 7fr + 5fr stacked */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: '7fr 5fr', gap: 0 }}>
            <div className="pj-card relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
              <img src="/demo/steinmoen/project-yono.jpg" alt="Autostrada / Yono" className="absolute inset-0 w-full h-full object-cover" />
              <div className="pj-overlay absolute inset-0 flex flex-col justify-end p-6" style={{ background: 'rgba(255,255,255,0.88)' }}>
                <p className="text-xs font-medium text-[#1a4fd6] uppercase tracking-widest mb-1">Helfoliering</p>
                <p className="text-xl font-semibold text-[#111]">Autostrada / Yono</p>
              </div>
            </div>
            <div className="grid" style={{ gridTemplateRows: '1fr 1fr', gap: 0 }}>
              {[
                { src: '/demo/steinmoen/project-vikingbad.jpg', client: 'Vikingbad', cat: 'Design & Profilering' },
                { src: '/demo/steinmoen/project-egde.jpg', client: 'EGDE Consulting', cat: 'Print-frame' },
              ].map((p) => (
                <div key={p.client} className="pj-card relative overflow-hidden">
                  <img src={p.src} alt={p.client} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="pj-overlay absolute inset-0 flex flex-col justify-end p-5" style={{ background: 'rgba(255,255,255,0.88)' }}>
                    <p className="text-xs font-medium text-[#1a4fd6] uppercase tracking-widest mb-1">{p.cat}</p>
                    <p className="text-base font-semibold text-[#111]">{p.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop row 2: 5fr stacked + 7fr */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: '5fr 7fr', gap: 0 }}>
            <div className="grid" style={{ gridTemplateRows: '1fr 1fr', gap: 0 }}>
              {[
                { src: '/demo/steinmoen/project-veidekke.jpg', client: 'Veidekke', cat: 'Print-frame' },
                { src: '/demo/steinmoen/project-agder.jpg', client: 'Agder Karosseri', cat: 'Helfoliering' },
              ].map((p) => (
                <div key={p.client} className="pj-card relative overflow-hidden">
                  <img src={p.src} alt={p.client} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="pj-overlay absolute inset-0 flex flex-col justify-end p-5" style={{ background: 'rgba(255,255,255,0.88)' }}>
                    <p className="text-xs font-medium text-[#1a4fd6] uppercase tracking-widest mb-1">{p.cat}</p>
                    <p className="text-base font-semibold text-[#111]">{p.client}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pj-card relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
              <img src="/demo/steinmoen/project-aenergi.jpg" alt="Å Energi" className="absolute inset-0 w-full h-full object-cover" />
              <div className="pj-overlay absolute inset-0 flex flex-col justify-end p-6" style={{ background: 'rgba(255,255,255,0.88)' }}>
                <p className="text-xs font-medium text-[#1a4fd6] uppercase tracking-widest mb-1">Figurer & Profilering</p>
                <p className="text-xl font-semibold text-[#111]">Å Energi</p>
              </div>
            </div>
          </div>

          {/* Mobile 2-col */}
          <div className="md:hidden grid grid-cols-2" style={{ gap: 3 }}>
            {[
              { src: '/demo/steinmoen/project-yono.jpg', client: 'Autostrada', cat: 'Helfoliering' },
              { src: '/demo/steinmoen/project-vikingbad.jpg', client: 'Vikingbad', cat: 'Profilering' },
              { src: '/demo/steinmoen/project-egde.jpg', client: 'EGDE', cat: 'Print' },
              { src: '/demo/steinmoen/project-aenergi.jpg', client: 'Å Energi', cat: 'Figurer' },
              { src: '/demo/steinmoen/project-veidekke.jpg', client: 'Veidekke', cat: 'Print' },
              { src: '/demo/steinmoen/project-agder.jpg', client: 'Agder Karosseri', cat: 'Foliering' },
            ].map((p) => (
              <div key={p.client} className="pj-card relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={p.src} alt={p.client} className="absolute inset-0 w-full h-full object-cover" />
                <div className="pj-overlay absolute inset-0 flex flex-col justify-end p-3" style={{ background: 'rgba(255,255,255,0.88)' }}>
                  <p className="text-[10px] font-medium text-[#1a4fd6] uppercase tracking-wider">{p.cat}</p>
                  <p className="text-sm font-semibold text-[#111]">{p.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CATALOGS — auto-scrolling marquee */}
      <section className="bg-white py-[60px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-3">Bla gjennom</p>
              <h2 className="font-black text-[#111] leading-none" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Kataloger
              </h2>
            </div>
            <Link href="/demo/steinmoen/kataloger" className="text-xs text-[#1a4fd6] hover:underline whitespace-nowrap">
              Se alle kataloger &rarr;
            </Link>
          </div>
        </div>

        {/* Auto-scrolling strip */}
        <div className="overflow-hidden">
          <div className="cat-mq py-2">
            {[...catalogs, ...catalogs].map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cat-card-hover inline-block mx-3 bg-white align-top"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)', width: '148px' }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  style={{ width: '148px', height: '192px', objectFit: 'cover', display: 'block' }}
                />
                <div className="p-3">
                  <p className="text-xs font-semibold text-[#111] mb-1 leading-snug">{c.name}</p>
                  <p className="text-xs text-[#1a4fd6]">Se katalog &rarr;</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-[#0f1f3d] px-6 md:px-10 py-[60px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-6">Klar for neste steg?</p>
            <h2 className="font-black text-white leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
              La oss jobbe<br />
              <span className="text-[#1a4fd6]">sammen.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:shrink-0">
            <a
              href="/demo/steinmoen/kontakt#kontakt-form"
              className="px-8 py-4 bg-[#1a4fd6] text-white text-sm font-semibold hover:bg-[#1f60ff] transition-colors duration-150 text-center"
            >
              Ta kontakt
            </a>
            <Link
              href="/demo/steinmoen/kontakt"
              className="px-8 py-4 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-150 text-center"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              Hvem er vi?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
