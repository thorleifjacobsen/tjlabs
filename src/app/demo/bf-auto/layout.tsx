import BFAutoHeader from './Header';

export const metadata = {
  title: 'BF Auto - Ditt lokale verksted i Arendal',
  description:
    'BF Auto Helle & Pedersen ANS tilbyr bilservice, EU-kontroll, dekkskift og reparasjoner på Stoa i Arendal. MekoPartner-verksted.',
};

export default function BFAutoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#0f172a',
      }}
    >
      <BFAutoHeader />
      <main>{children}</main>

      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8' }}>
        <div className="mx-auto px-4 sm:px-6 pt-12 pb-8" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            <div>
              <div className="text-white font-bold text-lg mb-2">BF Auto</div>
              <p className="text-sm leading-relaxed">
                Ditt nærverksted på Stoa i Arendal. Profesjonell bilservice for alle merker og årsmodeller.
              </p>
            </div>

            <div>
              <div className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
                Snarveier
              </div>
              <ul className="space-y-2 text-sm">
                {(
                  [
                    ['#tjenester', 'Tjenester'],
                    ['#om-oss', 'Om oss'],
                    ['#kontakt', 'Kontakt'],
                    ['#tjenester', 'EU-kontroll'],
                  ] as [string, string][]
                ).map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
                Kontakt oss
              </div>
              <div className="text-sm space-y-1.5">
                <p>Industritoppen 12A, Stoa</p>
                <p>4848 Arendal</p>
                <p className="pt-1">
                  <a href="tel:37024456" className="hover:text-white transition-colors">
                    37 02 44 56
                  </a>
                </p>
                <p>
                  <a href="mailto:post@bfauto.no" className="hover:text-white transition-colors">
                    post@bfauto.no
                  </a>
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-0.5">
                  <p>Man - Fre: 07:30 - 15:30</p>
                  <p>Lørdag - Søndag: Stengt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
            <span>BF Auto Helle &amp; Pedersen ANS</span>
            <span>Org.nr 989 734 862 &middot; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
