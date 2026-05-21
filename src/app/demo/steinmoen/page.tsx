import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Steinmoen – Din Reklamepartner',
  description: 'Skilter, bildekor, profiltøy, trykksaker og mer. Grimstad og Arendal.',
  robots: 'noindex',
};

const clients = [
  'Å Energi', 'Veidekke', 'Rema 1000', 'Skatteetaten', 'UIA',
  'Sørlandet Sykehus', 'XL Bygg', 'NYMO', 'J.B. Ugland',
  'EGDE Consulting', 'IndustriTRE', 'Vikingbad', 'Agder Karosseri',
  'Amundsen Bygg', 'Kuben', 'Fargeriket', 'Igland Garasjen', 'Autostrada',
];

const services = [
  { num: '01', name: 'Skilter', desc: 'Fasade, LED, utendørs' },
  { num: '02', name: 'Bildekor', desc: 'Logo, produkt, identitet' },
  { num: '03', name: 'Helfoliering', desc: 'Farge, matt, PPF' },
  { num: '04', name: 'Profiltøy', desc: 'T-skjorter, jakker, capser' },
  { num: '05', name: 'Trykksaker', desc: 'Visittkort, brosjyrer, plakater' },
  { num: '06', name: 'Interiør', desc: 'Veggdekor, folie, tapet' },
  { num: '07', name: 'Taktil markering', desc: 'Ledelinjer, universell utforming' },
  { num: '08', name: 'Gave & Profilartikler', desc: 'Giveaways, firmagaver' },
  { num: '09', name: 'Lakkbeskyttelse (PPF)', desc: 'Steinsprutfolie, selvrepararende' },
  { num: '10', name: 'Solfilm', desc: 'Bil & bygg, UV, personvern' },
];

const projects = [
  { src: '/demo/steinmoen/project-yono.jpg', client: 'Autostrada / Yono', category: 'Helfoliering', large: true },
  { src: '/demo/steinmoen/project-vikingbad.jpg', client: 'Vikingbad', category: 'Design & Profilering' },
  { src: '/demo/steinmoen/project-egde.jpg', client: 'EGDE Consulting', category: 'Print-frame' },
  { src: '/demo/steinmoen/project-aenergi.jpg', client: 'Å Energi', category: 'Figurer & Profilering', large: true },
  { src: '/demo/steinmoen/project-veidekke.jpg', client: 'Veidekke', category: 'Print-frame' },
  { src: '/demo/steinmoen/project-agder.jpg', client: 'Agder Karosseri', category: 'Helfoliering' },
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-inner:hover { animation-play-state: paused; }
        .service-row:hover .service-arrow { opacity: 1; transform: translateX(0); }
        .service-row { transition: background 150ms ease; }
        .service-row:hover { background: #111111; }
        .service-arrow { opacity: 0; transform: translateX(-6px); transition: all 150ms ease; }
        .project-card:hover .project-overlay { opacity: 1; }
        .project-overlay { transition: opacity 150ms ease; }
      `}</style>

      {/* 1. INTRO */}
      <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-between px-6 md:px-10 pt-32 pb-12">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <p className="text-xs text-[#888] uppercase tracking-[0.2em] mb-8">Grimstad &amp; Arendal</p>
          <h1
            className="text-[clamp(3.5rem,10vw,9rem)] font-black text-[#f5f5f5] leading-[0.92] tracking-tight mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Vi gjør<br />
            <span className="text-[#e8e020]">bedriften din</span><br />
            synlig.
          </h1>
          <p className="text-[#888] text-base md:text-lg max-w-md leading-relaxed">
            Steinmoen leverer alt innen reklame og profilering — fra skilter og bildekor
            til profiltøy og gave&shy;artikler.
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-16">
          <div className="flex gap-6">
            <Link
              href="/demo/steinmoen/tjenester"
              className="text-sm text-[#f5f5f5] border-b border-[#f5f5f5] pb-0.5 hover:text-[#e8e020] hover:border-[#e8e020] transition-colors"
            >
              Se tjenester &rarr;
            </Link>
            <a
              href="#prosjekter"
              className="text-sm text-[#888] border-b border-[#888] pb-0.5 hover:text-[#f5f5f5] hover:border-[#f5f5f5] transition-colors"
            >
              Se arbeid &rarr;
            </a>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#888] uppercase tracking-[0.2em]">To lokasjoner</p>
            <p className="text-sm text-[#f5f5f5]">Grimstad</p>
            <p className="text-sm text-[#f5f5f5]">Arendal</p>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <div className="bg-[#111111] border-y border-[#1a1a1a] py-4 overflow-hidden">
        <div className="marquee-inner">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-sm text-[#888] whitespace-nowrap px-6">
              {c} <span className="text-[#2a2a2a] mx-2">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. SERVICES */}
      <section className="bg-[#0a0a0a] px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-xs text-[#888] uppercase tracking-[0.2em]">Tjenester</h2>
            <Link href="/demo/steinmoen/tjenester" className="text-xs text-[#888] hover:text-[#f5f5f5] transition-colors">
              Se alle &rarr;
            </Link>
          </div>

          {services.map((s) => (
            <Link
              key={s.num}
              href="/demo/steinmoen/tjenester"
              className="service-row flex items-center gap-6 py-5 border-b border-[#1a1a1a] group cursor-pointer"
            >
              <span className="text-xs text-[#444] w-8 shrink-0 tabular-nums">{s.num}</span>
              <span className="flex-1 text-xl md:text-2xl font-semibold text-[#f5f5f5]">{s.name}</span>
              <span className="text-sm text-[#888] hidden md:block">{s.desc}</span>
              <span className="service-arrow text-[#e8e020] ml-2">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="prosjekter" className="bg-[#0a0a0a] px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-[#f5f5f5] leading-none">
              Utvalgte<br />prosjekter
            </h2>
            <span className="text-xs text-[#888] uppercase tracking-[0.2em]">Arbeid</span>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Row 1: large left (span 7), two right stacked (span 5) */}
            <div className="project-card relative md:col-span-7 aspect-[4/3] overflow-hidden bg-neutral-800">
              <Image
                src={projects[0].src}
                alt={projects[0].client}
                fill
                className="object-cover"
              />
              <div className="project-overlay absolute inset-0 bg-[#0a0a0a]/80 flex flex-col justify-end p-6 opacity-0">
                <p className="text-xs text-[#888] uppercase tracking-widest mb-1">{projects[0].category}</p>
                <p className="text-lg font-semibold text-[#f5f5f5]">{projects[0].client}</p>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-rows-2 gap-2">
              {[projects[1], projects[2]].map((p) => (
                <div key={p.client} className="project-card relative aspect-[4/3] md:aspect-auto overflow-hidden bg-neutral-800">
                  <Image src={p.src} alt={p.client} fill className="object-cover" />
                  <div className="project-overlay absolute inset-0 bg-[#0a0a0a]/80 flex flex-col justify-end p-5 opacity-0">
                    <p className="text-xs text-[#888] uppercase tracking-widest mb-1">{p.category}</p>
                    <p className="text-base font-semibold text-[#f5f5f5]">{p.client}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: two left, large right */}
            <div className="md:col-span-5 grid grid-rows-2 gap-2">
              {[projects[4], projects[5]].map((p) => (
                <div key={p.client} className="project-card relative aspect-[4/3] md:aspect-auto overflow-hidden bg-neutral-800">
                  <Image src={p.src} alt={p.client} fill className="object-cover" />
                  <div className="project-overlay absolute inset-0 bg-[#0a0a0a]/80 flex flex-col justify-end p-5 opacity-0">
                    <p className="text-xs text-[#888] uppercase tracking-widest mb-1">{p.category}</p>
                    <p className="text-base font-semibold text-[#f5f5f5]">{p.client}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="project-card relative md:col-span-7 aspect-[4/3] overflow-hidden bg-neutral-800">
              <Image src={projects[3].src} alt={projects[3].client} fill className="object-cover" />
              <div className="project-overlay absolute inset-0 bg-[#0a0a0a]/80 flex flex-col justify-end p-6 opacity-0">
                <p className="text-xs text-[#888] uppercase tracking-widest mb-1">{projects[3].category}</p>
                <p className="text-lg font-semibold text-[#f5f5f5]">{projects[3].client}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATALOG TEASER */}
      <section className="bg-[#111111] border-t border-[#1a1a1a] px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-[#f5f5f5] leading-none">
              Bla i våre<br />kataloger
            </h2>
            <Link href="/demo/steinmoen/kataloger" className="text-xs text-[#888] hover:text-[#f5f5f5] transition-colors uppercase tracking-widest">
              Alle kataloger &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {catalogs.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-40"
                >
                  <div className="relative w-40 h-52 overflow-hidden bg-neutral-800 shadow-lg transition-transform duration-150 group-hover:scale-[1.03]">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#888] group-hover:text-[#f5f5f5] transition-colors">{c.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="kontakt" className="bg-[#0a0a0a] border-t border-[#1a1a1a] px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-[#f5f5f5] leading-none mb-16">
            La oss jobbe<br />
            <span className="text-[#e8e020]">sammen.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: Mats */}
            <div>
              <div className="relative w-full aspect-[3/4] max-w-xs overflow-hidden bg-neutral-800 mb-6">
                <Image
                  src="/demo/steinmoen/mats.jpg"
                  alt="Mats Alfredsen"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-xl font-semibold text-[#f5f5f5]">Mats Alfredsen</p>
              <p className="text-sm text-[#888] mb-4">Selger</p>
              <a href="mailto:ma@steinmoen.no" className="block text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors mb-1">
                ma@steinmoen.no
              </a>
              <a href="tel:97799524" className="block text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors">
                97 79 95 24
              </a>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-[#888] uppercase tracking-widest mb-2">Grimstad</p>
                  <p className="text-sm text-[#f5f5f5]">Lillesandsveien 44 B</p>
                  <p className="text-sm text-[#f5f5f5]">4877 Grimstad</p>
                </div>
                <div>
                  <p className="text-xs text-[#888] uppercase tracking-widest mb-2">Arendal</p>
                  <p className="text-sm text-[#f5f5f5]">Industritoppen 23</p>
                  <p className="text-sm text-[#f5f5f5]">4848 Arendal</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />

              <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
                <p className="text-xs text-[#888] mb-3">Eller ta direkte kontakt:</p>
                <a href="mailto:post@steinmoen.no" className="block text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors mb-1">
                  post@steinmoen.no
                </a>
                <a href="tel:37043896" className="block text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors">
                  37 04 38 96
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
