'use client';

import { useState } from 'react';

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

const tabs = [
  { id: 'profiltoy', label: 'Profiltøy', catalogs: profiltoy },
  { id: 'gave', label: 'Gave & Profilartikler', catalogs: gaveartikler },
  { id: 'alle', label: 'Alle', catalogs: [...profiltoy, ...gaveartikler] },
];

export default function KatalogerClient() {
  const [activeTab, setActiveTab] = useState('profiltoy');
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* Page heading */}
      <div className="bg-white border-b border-[#e5e5e5] pt-28 pb-12 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-4">Profiltøy & Profilartikler</p>
          <h1 className="font-black text-[#111] leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Kataloger
          </h1>
          <p className="text-[#666] text-sm mt-4 max-w-lg" style={{ lineHeight: 1.7 }}>
            Bla gjennom katalogene digitalt. Ta kontakt med oss for priser og bestilling med ditt logo.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#e5e5e5] px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto flex gap-8 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="py-4 text-sm whitespace-nowrap border-b-2 transition-colors duration-150"
              style={{
                borderBottomColor: activeTab === t.id ? '#1a4fd6' : 'transparent',
                color: activeTab === t.id ? '#111' : '#999',
                fontWeight: activeTab === t.id ? 600 : 400,
              }}
            >
              {t.label}
              <span className="ml-1.5 text-xs" style={{ color: '#ccc' }}>({t.catalogs.length})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Catalog grid */}
      <div className="bg-[#f5f4f0] min-h-[60vh] py-[60px] px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {active.catalogs.map((c, i) => (
              <a
                key={`${c.name}-${i}`}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="bg-white overflow-hidden transition-all duration-150 group-hover:-translate-y-1"
                  style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.07)', transition: 'box-shadow 150ms ease, transform 150ms ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.13)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.07)'; }}
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
                  />
                  <div className="p-3">
                    <p className="text-xs font-semibold text-[#111] mb-1 leading-snug">{c.name}</p>
                    <p className="text-xs text-[#1a4fd6]">Se katalog &rarr;</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white border-t border-[#e5e5e5] px-6 md:px-10 py-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src="/demo/steinmoen/mats.jpg"
            alt="Mats Alfredsen"
            className="rounded-full object-cover object-top shrink-0"
            style={{ width: '72px', height: '72px' }}
          />
          <div className="flex-1">
            <p className="font-semibold text-[#111]">Mats Alfredsen</p>
            <p className="text-sm text-[#999] mb-2">Selger</p>
            <div className="flex gap-4 flex-wrap">
              <a href="mailto:ma@steinmoen.no" className="text-sm text-[#111] hover:text-[#1a4fd6] transition-colors">ma@steinmoen.no</a>
              <span className="text-[#ddd]">|</span>
              <a href="tel:97799524" className="text-sm text-[#111] hover:text-[#1a4fd6] transition-colors">97 79 95 24</a>
            </div>
          </div>
          <a
            href="/demo/steinmoen/kontakt"
            className="px-6 py-3 bg-[#1a4fd6] text-white text-sm font-semibold hover:bg-[#1f60ff] transition-colors shrink-0"
          >
            Ta kontakt
          </a>
        </div>
      </div>
    </>
  );
}
