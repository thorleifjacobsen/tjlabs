'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import { useState } from 'react';

// Note: metadata export is not allowed in 'use client' components,
// but robots: noindex is set via the layout or can be added as a meta tag.

const profiltoy = [
  { name: 'Clique 2025', img: '/demo/steinmoen/cat-clique.jpg', url: 'https://viewer.joomag.com/clique-2025-v2/0442190001629794174?short&' },
  { name: 'Tenson Corporate SS25', img: '/demo/steinmoen/cat-tenson.jpg', url: 'https://viewer.joomag.com/tenson-corporate-ss25-v1/0362334001729855822/p1?short=' },
  { name: 'Craft Corporate SS25', img: '/demo/steinmoen/cat-craft.jpg', url: 'https://viewer.joomag.com/craft-corporate-ss25-v1/0176495001503902632?short&' },
  { name: 'Craft Teamwear 2025', img: '/demo/steinmoen/cat-craft.jpg', url: 'https://viewer.joomag.com/craft-teamwear-2025-inkmva-v1/0428152001579852805/p1?short=' },
  { name: 'Cutter & Buck SS25', img: '/demo/steinmoen/cat-cutter.jpg', url: 'https://viewer.joomag.com/cutter-buck-ss25-v1/0085178001503903293/p8?short=' },
  { name: 'James Harvest 2025', img: '/demo/steinmoen/cat-harvest.jpg', url: 'https://viewer.joomag.com/james-harvest-2025-v1/0159605001485421952?short&' },
  { name: 'Printer 2025', img: '/demo/steinmoen/cat-printer.jpg', url: 'https://viewer.joomag.com/printer-2025-v2/0328643001548236454?short&' },
  { name: 'Cottover 2025', img: '/demo/steinmoen/cat-cottover.jpg', url: 'https://viewer.joomag.com/cottover-co-2025-v1/0858695001548839005?short&' },
  { name: 'Bergans 2025', img: '/demo/steinmoen/cat-bergans.png', url: 'https://heyzine.com/flip-book/2b739414cc.html' },
];

const gaveartikler = [
  { name: 'Sagaform SS25', img: '/demo/steinmoen/cat-sagaform.jpg', url: 'https://viewer.joomag.com/sagaform-ss25-v2/0603110001597914465?short&' },
  { name: 'Toppoint 2024', img: '/demo/steinmoen/cat-toppoint.jpg', url: 'https://viewer.joomag.com/toppoint-2024-v3/0723093001485426873?short&' },
  { name: 'Kosta Boda SS25', img: '/demo/steinmoen/cat-kosta.jpg', url: 'https://viewer.joomag.com/kosta-boda-ss25-v1/0777468001487153531?short&' },
];

const alle = [...profiltoy, ...gaveartikler];

const tabs = [
  { id: 'profiltoy', label: 'Profiltøy', catalogs: profiltoy },
  { id: 'gaveartikler', label: 'Gave & Profilartikler', catalogs: gaveartikler },
  { id: 'alle', label: 'Alle kataloger', catalogs: alle },
];

function CatalogGrid({ catalogs }: { catalogs: typeof alle }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {catalogs.map((c) => (
        <a
          key={c.name + c.url}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-800 shadow-md transition-transform duration-150 group-hover:scale-[1.03]">
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/40 transition-all duration-150 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs font-semibold text-[#f5f5f5] bg-[#e8e020] text-[#0a0a0a] px-3 py-1.5">
                Se katalog
              </span>
            </div>
          </div>
          <p className="mt-2 text-xs text-[#888] group-hover:text-[#f5f5f5] transition-colors leading-snug">{c.name}</p>
        </a>
      ))}
    </div>
  );
}

export default function KatalogerPage() {
  const [activeTab, setActiveTab] = useState('profiltoy');
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .kataloger-page * { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="kataloger-page bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
        {/* Page header */}
        <div className="pt-32 pb-12 px-6 md:px-10 border-b border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs text-[#888] uppercase tracking-[0.2em] mb-4">Profiltøy & Profilartikler</p>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#f5f5f5] leading-[0.92] tracking-tight mb-6">
              Kataloger
            </h1>
            <p className="text-[#888] text-sm max-w-lg leading-relaxed">
              Bla gjennom våre digitale kataloger. Ta kontakt med Mats for priser og bestilling
              med ditt logo.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#1a1a1a] px-6 md:px-10">
          <div className="max-w-6xl mx-auto flex gap-8 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`py-4 text-sm whitespace-nowrap border-b-2 transition-colors duration-150 ${
                  activeTab === t.id
                    ? 'border-[#e8e020] text-[#f5f5f5] font-medium'
                    : 'border-transparent text-[#888] hover:text-[#f5f5f5]'
                }`}
              >
                {t.label}
                <span className="ml-2 text-xs text-[#444]">({t.catalogs.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
          <CatalogGrid catalogs={active.catalogs} />
        </div>

        {/* Contact CTA */}
        <div className="bg-[#111111] border-t border-[#1a1a1a] px-6 md:px-10 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative w-20 h-20 overflow-hidden bg-neutral-800 shrink-0">
                <Image
                  src="/demo/steinmoen/mats.jpg"
                  alt="Mats Alfredsen"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-[#f5f5f5] font-semibold text-lg">Mats Alfredsen</p>
                <p className="text-[#888] text-sm mb-3">Selger — hjelper deg med bestilling og tilpasning</p>
                <div className="flex gap-4">
                  <a href="mailto:ma@steinmoen.no" className="text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors">
                    ma@steinmoen.no
                  </a>
                  <span className="text-[#2a2a2a]">|</span>
                  <a href="tel:97799524" className="text-sm text-[#f5f5f5] hover:text-[#e8e020] transition-colors">
                    97 79 95 24
                  </a>
                </div>
              </div>
              <a
                href="/demo/steinmoen#kontakt"
                className="text-sm font-medium px-6 py-3 bg-[#e8e020] text-[#0a0a0a] hover:bg-white transition-colors shrink-0"
              >
                Ta kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
