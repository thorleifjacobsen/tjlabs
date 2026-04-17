import { DesktopNav, MobileHamburger } from "./MobileNav";
import { GalleryLightbox } from "./GalleryLightbox";

export const metadata = {
  title: "Arendal Takservice AS – Profesjonell taktekking og takreparasjon",
  description:
    "Lokal takekspert i Arendal og omegn siden 1995. Vi tilbyr taktekking, terrasse- og torvtaksmembraner, sedumtak, lekkasjesøk og gratis befaring.",
  robots: "noindex, nofollow",
};

const PHONE = "951 98 594";
const PHONE_HREF = "tel:+4795198594";
const EMAIL = "post@arendal-takservice.no";
const ADDRESS = "Industritoppen 5, 4848 Arendal";
const FB = "https://www.facebook.com/Arendal.takservice.AS";

const GALLERY_IMAGES = [
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2025/12/mataki-gra-2-1024x591.jpg",
    label: "Taklegging med grå Mataki-papp",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2025/12/mataki-rod-1024x768.jpg",
    label: "Rød takstein – klassisk og holdbar",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2026/03/mataki-grafittgra-buet-3-1024x771.jpg",
    label: "Grafittgrå buet taklegging",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2025/12/isolering-kompakttak-med-fallisolasjon-og-nedsenket-renne-3.jpg",
    label: "Kompakttak med fallisolasjon og nedsenket renne",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2025/12/sedum-over-sykkelbod-1024x771.jpg",
    label: "Sedumtak over sykkelbod",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2025/12/mataki-tekking-med-profiler-1024x461.jpg",
    label: "Mataki-tekking med profiler",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2025/12/protan-gapahuk-klar-for-sedum.jpg",
    label: "Gapahuktaket klart for sedumlegging",
  },
  {
    src: "https://www.arendal-takservice.no/wp-content/uploads/2026/03/pipe-771x1024.jpg",
    label: "Pipe og gjennomføring",
  },
];

export default function AtakasPage() {
  return (
    <div className="text-slate-800 bg-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-900 shadow-md">
        <div className="relative max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo – left */}
          <a href="#" className="flex items-center gap-3 min-w-0 flex-1 md:flex-none">
            <img
              src="https://www.arendal-takservice.no/wp-content/uploads/2025/12/305156840_508003107995487_5938799203690304181_n-1-e1766754537652.jpg"
              alt="Arendal Takservice AS"
              className="w-10 h-10 rounded-md object-cover object-top flex-shrink-0 border border-slate-600"
            />
            <span className="text-white font-bold text-xl font-[family-name:var(--font-playfair)] tracking-wide leading-tight">Arendal Takservice AS</span>
          </a>

          {/* Nav – truly centered */}
          <DesktopNav />

          {/* Right side – CTA + hamburger */}
          <div className="flex items-center justify-end gap-3 ml-auto md:ml-0">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              {PHONE}
            </a>
            <MobileHamburger />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative bg-slate-900 text-white py-28 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('https://www.arendal-takservice.no/wp-content/uploads/2025/12/mataki-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Fagfolk i Arendal siden 1995
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
            Trygt tak over hodet,{" "}
            <span className="text-orange-400">levert av fagfolk</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Arendal Takservice AS utfører profesjonell taktekking, membranarbeid og vedlikehold for
            private og næringsbygg i hele Aust-Agder. Gratis befaring og uforpliktende tilbud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Få gratis befaring
            </a>
            <a
              href={PHONE_HREF}
              className="border-2 border-white hover:border-orange-400 hover:text-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Ring {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="tjenester" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Hva vi gjør</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Vi har kompetanse på alt som har med tak å gjøre. Her er noen av de vanligste
              oppdragstypene — ta gjerne kontakt om du lurer på noe annet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                category: "Taktekking",
                items: [
                  "Taktekking av nybygg",
                  "Omtekking ved rehabilitering",
                ],
              },
              {
                category: "Membraner og spesialtak",
                items: [
                  "Terrasse membraner",
                  "Torvtaks membraner",
                  "Sedumtak",
                  "Bassengfolie",
                  "Radonsperre",
                ],
              },
              {
                category: "Service og kontroll",
                items: [
                  "Taksikringssystemer",
                  "Lekkasjesøk med røykmaskin",
                  "Tak-kontroll og vedlikehold",
                ],
              },
            ].map((group, i) => (
              <div key={i}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-12">
            Ikke sikker på om vi kan hjelpe deg?{" "}
            <a href="#kontakt" className="text-orange-500 hover:underline font-medium">Ta kontakt</a>
            {" "}så finner vi ut av det.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="bilder" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Noe av vårt arbeid</h2>
            <p className="text-slate-500 text-lg">Klikk på et bilde for å se det i full størrelse.</p>
          </div>
          <GalleryLightbox images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="om-oss" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Om oss</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://www.arendal-takservice.no/wp-content/uploads/2025/12/305156840_508003107995487_5938799203690304181_n-1-e1766754537652.jpg"
                  alt="Takarbeider fra Arendal Takservice"
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                <img
                  src="https://www.arendal-takservice.no/wp-content/uploads/2025/12/mestermerke-bla-hvit-bakgrunn-2-e1766755311201.png"
                  alt="Mestermerket"
                  className="h-20 w-auto object-contain"
                />
                <div className="w-px h-16 bg-slate-200 hidden sm:block" />
                <img
                  src="https://www.arendal-takservice.no/wp-content/uploads/2025/12/Sentral_Godkjenning.webp"
                  alt="Sentral Godkjenning"
                  className="h-20 w-auto object-contain"
                />
                <div className="w-px h-16 bg-slate-200 hidden sm:block" />
                <img
                  src="https://www.arendal-takservice.no/wp-content/uploads/2025/12/StartBANK-logo-300x200-1.jpg"
                  alt="StartBANK"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Arendal Takservice AS ble stiftet i 1995, med røtter tilbake til 1989. Gjennom over 30 år har vi
                bygd oss opp som et av regionens mest erfarne og betrodde takfirmaer.
              </p>
              <p>
                Vi er stolte av at alle våre medarbeidere har Fagbrev i Tak- og Membrantekkerfaget, og tre av dem
                har i tillegg Mesterbrev. Flere ansatte har også Fagbrev i hhv. Murer-, Tømrer- og
                Industrirørlegger-faget.
              </p>
              <p>
                Mesterkompetanse kombinert med mange års erfaring gjør at vi har{" "}
                <strong className="text-slate-800">Sentral Godkjenning i tiltaksklasse 2</strong>. Vi er registrert
                i <strong className="text-slate-800">StartBank</strong> og har all nødvendig fagkompetanse,
                forsikringer og sertifiseringer for å være et trygt valg for deg som kunde.
              </p>
              <p>Vi har for tiden én lærling, og satser på å utdanne neste generasjon fagfolk.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Gratis og uforpliktende befaring",
                  "Fast pris uten skjulte kostnader",
                  "Sentral Godkjenning tiltaksklasse 2",
                  "Forsikret og registrert i StartBank",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLIERS */}
      <section id="leverandorer" className="py-16 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Våre leverandører</h2>
            <p className="text-slate-500">
              Vi samarbeider med noen av bransjens mest anerkjente leverandører for å sikre kvalitet på alle jobber.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <img
              src="https://www.arendal-takservice.no/wp-content/uploads/2026/03/mataki-logo-png_seeklogo-609076-1.png"
              alt="Mataki"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
            <img
              src="https://www.arendal-takservice.no/wp-content/uploads/2026/03/protan-logo-hvit-bakgrunn-1024x297.png"
              alt="Protan"
              className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
            <img
              src="https://www.arendal-takservice.no/wp-content/uploads/2026/03/isola6955.logowik.com_-1.webp"
              alt="Isola"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
            <img
              src="https://www.arendal-takservice.no/wp-content/uploads/2026/03/sfs-group-logo-vector.png"
              alt="SFS"
              className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
            <span className="text-slate-400 font-semibold text-sm tracking-wide">Rockwool</span>
            <span className="text-slate-400 font-semibold text-sm tracking-wide">Glava</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ta kontakt</h2>
          <p className="text-slate-500 text-lg mb-10">
            Vi tilbyr gratis befaring og uforpliktende pristilbud. Ring oss eller send en melding, så svarer vi raskt.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-left space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Navn</label>
              <input
                type="text"
                placeholder="Ola Nordmann"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  placeholder={PHONE}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">E-post</label>
                <input
                  type="email"
                  placeholder="ola@eksempel.no"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Melding</label>
              <textarea
                rows={4}
                placeholder="Beskriv hva du trenger hjelp med..."
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg text-lg transition-colors shadow"
            >
              Send forespørsel
            </button>
            <p className="text-slate-400 text-xs text-center">
              Vi tar kontakt så snart vi kan.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 text-slate-600">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-orange-500 transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-500">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                {PHONE}
              </a>
              <span className="text-slate-300">|</span>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-orange-500 transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-500">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                {EMAIL}
              </a>
            </div>
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-400">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.827a8.25 8.25 0 0 0-16.5 0c0 4.13 1.556 6.824 3.5 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              {ADDRESS}
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://www.arendal-takservice.no/wp-content/uploads/2025/12/305156840_508003107995487_5938799203690304181_n-1-e1766754537652.jpg"
                  alt="Arendal Takservice AS"
                  className="w-9 h-9 rounded-md object-cover object-top border border-slate-600"
                />
                <span className="text-white font-bold text-xl font-[family-name:var(--font-playfair)] tracking-wide">Arendal Takservice AS</span>
              </div>
              <p className="text-sm max-w-xs leading-relaxed">
                Profesjonell taktekking og membranarbeid i Arendal og Aust-Agder. Stiftet 1995, med røtter tilbake til 1989.
              </p>
              <a
                href={FB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Følg oss på Facebook
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href={PHONE_HREF} className="hover:text-orange-400 transition-colors">Tlf: {PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="hover:text-orange-400 transition-colors">{EMAIL}</a>
              <span>{ADDRESS}</span>
            </div>
          </div>
          <div className="pt-6 text-xs">
            <span>&copy; {new Date().getFullYear()} Arendal Takservice AS. Alle rettigheter forbeholdt.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
