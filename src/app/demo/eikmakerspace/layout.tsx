import NavBar from './NavBar'

export default function EikLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif' }}
    >
      <NavBar />
      <main>{children}</main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Eik Makerspace</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Et frivilligdrevet skaperverksted i Eydehavn. Ingen er betalt. Åpent for alle.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://discord.com/invite/yzr8cpxE7c" target="_blank" rel="noopener noreferrer" aria-label="Discord"
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                </a>
                <a href="https://www.instagram.com/eikmakerspacearendal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="https://www.tiktok.com/@eikmakerspace" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors shadow-sm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Adresse</h3>
              <address className="not-italic text-sm text-gray-500 leading-relaxed">
                Nesgata 13<br />
                4810 Eydehavn<br />
                <span className="text-gray-400 text-xs">Kjelleren til Eydehavn Kuben Frivillighetssentral</span>
              </address>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Åpningstider</h3>
              <div className="text-sm text-gray-500 space-y-1.5">
                <div className="flex justify-between gap-4"><span>Tirsdag</span><span className="text-gray-700 tabular-nums">17:00 - 19:00</span></div>
                <div className="flex justify-between gap-4"><span>Torsdag</span><span className="text-gray-700 tabular-nums">17:00 - 19:00</span></div>
                <div className="flex justify-between gap-4"><span>Fredag</span><span className="text-gray-700 tabular-nums">16:00 - 19:00</span></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Kontakt</h3>
              <a href="mailto:eik-makerspace@outlook.com" className="text-sm text-green-700 hover:text-green-800 transition-colors block mb-3 break-all">
                eik-makerspace@outlook.com
              </a>
              <a href="https://eikmakerspace.no" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                eikmakerspace.no &rarr;
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
            <span>Eik Makerspace &copy; 2025 &middot; Frivilligdrevet</span>
            <span>Nesgata 13, 4810 Eydehavn</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
