import Image from 'next/image'
import Link from 'next/link'

export const metadata = { robots: 'noindex' }

const activities = [
  {
    img: 'https://static.wixstatic.com/media/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_6f79806793744b6eb2c4c291887b16ea~mv2.jpg',
    label: 'Laser',
    title: 'Lasergraveringsaktivitet',
    date: 'Tirsdag 6. mai, 17:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Lær deg lasergraveren. Vi lager noe kult sammen i en sosial og avslappet atmosfære.',
  },
  {
    img: 'https://static.wixstatic.com/media/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_95671af81c7f425f98c3876b1c64625b~mv2.jpg',
    label: '3D Printing',
    title: '3D-printingaktivitet',
    date: 'Torsdag 8. mai, 17:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Fra digital modell til ferdig objekt. Vi bruker Bambu Lab X1 Carbon og ser på hele prosessen.',
  },
  {
    img: 'https://static.wixstatic.com/media/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg/v1/fill/w_596,h_596,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d38413_a73f33e8edbf4e9d92b03d9f5071d0c4~mv2.jpg',
    label: 'Maling',
    title: 'Miniatyrmaling og resin 3D-printing',
    date: 'Fredag 9. mai, 16:00',
    location: 'Eik Makerspace, Eydehavn',
    desc: 'Skriv ut og mal miniatyrer med resin-printeren. Perfekt for rollespillfigurer og detaljerte modeller.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-green-50 shadow mb-8 flex-shrink-0">
            <Image src="/demo/eikmakerspace/logo.jpg" alt="Eik Makerspace" fill className="object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Frivilligdrevet i Eydehavn, Arendal
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Eik Makerspace
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">
            Et skaperverksted for alle
          </p>

          <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10">
            Lag, lær og utforsk i vårt delte verksted på Eydehavn.
            Her er det plass til alle som vil skape noe.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/demo/eikmakerspace/bli-medlem"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm shadow-sm"
            >
              Bli medlem
            </Link>
            <Link
              href="/demo/eikmakerspace/utstyr"
              className="bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-semibold px-7 py-3 rounded-xl transition-colors text-sm shadow-sm"
            >
              Se utstyr
            </Link>
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section className="bg-gray-50 py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-4">Om oss</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                Laget av og for skapere
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed text-[15px]">
                <p>
                  Eik Makerspace er et frivilligdrevet skaperverksted i Eydehavn.
                  Ingen er betalt. Vi deler kostnadene til utstyr og lokale gjennom
                  medlemskap, og alle stiller opp på dugnad.
                </p>
                <p>
                  Her er det plass til å lære, utvikle, utforske, mestre og
                  mislykkes. Alle er velkomne uansett bakgrunn eller erfaring.
                  Det eneste du trenger er nysgjerrighet.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Adresse</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Nesgata 13<br />
                    4810 Eydehavn
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Kjelleren til Eydehavn Kuben</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Åpent</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div className="flex justify-between"><span>Tirsdag</span><span className="tabular-nums text-gray-500">17 - 19</span></div>
                    <div className="flex justify-between"><span>Torsdag</span><span className="tabular-nums text-gray-500">17 - 19</span></div>
                    <div className="flex justify-between"><span>Fredag</span><span className="tabular-nums text-gray-500">16 - 19</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative rounded-xl overflow-hidden bg-gray-100 h-52 shadow-sm">
                <Image src="/demo/eikmakerspace/interior1.jpg" alt="Verksted interior" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-100 h-36 shadow-sm">
                <Image src="/demo/eikmakerspace/interior2.jpg" alt="Verksted interior" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-100 h-36 shadow-sm">
                <Image src="/demo/eikmakerspace/interior3.jpg" alt="Verksted interior" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kommende aktiviteter */}
      <section id="aktiviteter" className="bg-white py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10">
            <span className="inline-block text-green-700 font-semibold text-xs uppercase tracking-widest mb-4">Kalender</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Kommende aktiviteter
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((act) => (
              <div
                key={act.title}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-shadow duration-200"
              >
                {/* Activity image */}
                <div className="relative h-40 bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={act.img} alt={act.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-white/90 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
                    {act.label}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-[15px] mb-2 leading-snug">{act.title}</h3>
                  <p className="text-xs text-green-700 font-medium mb-0.5">{act.date}</p>
                  <p className="text-xs text-gray-400 mb-3">{act.location}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{act.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Flere datoer</span>
                    <button className="text-xs text-green-700 font-semibold hover:text-green-800 transition-colors border border-green-200 hover:border-green-300 px-3 py-1.5 rounded-lg">
                      Detaljer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community bar */}
      <section className="bg-gray-50 border-t border-gray-200 py-14 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Bli med i fellesskapet</h2>
              <p className="text-sm text-gray-500 mt-1">
                Chat med andre medlemmer, del prosjekter og hold deg oppdatert.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://discord.com/invite/yzr8cpxE7c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                Discord
              </a>
              <a
                href="https://www.facebook.com/Eik-Makerspace-Arendal-100561299156123/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/eikmakerspacearendal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#ig)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
