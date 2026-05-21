import type { Metadata } from 'next';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt – Steinmoen',
  description: 'Ta kontakt med Steinmoen. To lokasjoner i Grimstad og Arendal.',
  robots: 'noindex',
};

type TeamMember = {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  img: string;
};

const grimstad: TeamMember[] = [
  {
    name: 'Siv Renate Haga',
    title: 'Eier & Økonomi',
    email: 'srh@steinmoen.no',
    phone: '41 56 44 64',
    img: '/demo/steinmoen/team-siv.jpg',
  },
  {
    name: 'Vera Ankersen',
    title: 'Grafisk Design, Trykk',
    email: 'va@steinmoen.no',
    phone: '97 18 76 55',
    img: '/demo/steinmoen/team-vera.jpg',
  },
  {
    name: 'Eirik Brannfjell',
    title: 'Grafisk Design, Foliering',
    email: 'eb@steinmoen.no',
    phone: '47 90 45 46',
    img: '/demo/steinmoen/team-eirik.jpg',
  },
  {
    name: 'Caroline Lie',
    title: 'Klær & Produksjon',
    email: 'cl@steinmoen.no',
    phone: '46 98 55 56',
    img: '/demo/steinmoen/team-caroline.jpg',
  },
  {
    name: 'Son Huu Vu',
    title: 'Montør',
    phone: '47 26 29 96',
    img: '/demo/steinmoen/team-son.jpg',
  },
  {
    name: 'Vilma Bacenaite',
    title: 'Klær & Produksjon',
    img: '/demo/steinmoen/team-vilma.jpg',
  },
  {
    name: 'Freya',
    title: 'Kundemottak',
    img: '/demo/steinmoen/team-freya.jpg',
  },
];

const arendal: TeamMember[] = [
  {
    name: 'Morten Syse',
    title: 'Eier & Daglig leder',
    email: 'ms@steinmoen.no',
    phone: '99 69 93 65',
    img: '/demo/steinmoen/team-morten.jpg',
  },
  {
    name: 'Mats Alfredsen',
    title: 'Selger',
    email: 'ma@steinmoen.no',
    phone: '97 79 95 24',
    img: '/demo/steinmoen/mats.jpg',
  },
  {
    name: 'Tina Strandli',
    title: 'Design & Montering',
    email: 'tina@steinmoen.no',
    phone: '95 29 92 91',
    img: '/demo/steinmoen/team-tina.jpg',
  },
  {
    name: 'Tom Are Jacobsen',
    title: 'Montør',
    email: 'montor@steinmoen.no',
    phone: '46 65 27 06',
    img: '/demo/steinmoen/team-tom.jpg',
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="overflow-hidden mb-4" style={{ aspectRatio: '3/4', background: '#f0f0ee' }}>
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <p className="font-semibold text-[#111] text-base">{member.name}</p>
      <p className="text-sm text-[#999] mb-2">{member.title}</p>
      {member.email && (
        <a href={`mailto:${member.email}`} className="block text-sm text-[#1a4fd6] hover:underline mb-0.5">
          {member.email}
        </a>
      )}
      {member.phone && (
        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="block text-sm text-[#666] hover:text-[#111] transition-colors">
          {member.phone}
        </a>
      )}
    </div>
  );
}

export default function KontaktPage() {
  return (
    <>
      {/* Page heading */}
      <div className="bg-white border-b border-[#e5e5e5] pt-28 pb-12 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-4">Steinmoen AS</p>
          <h1 className="font-black text-[#111] leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Kontakt
          </h1>
        </div>
      </div>

      {/* Team: Grimstad */}
      <section className="bg-white py-[60px] md:py-[80px] px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-1">Avdeling</p>
              <h2 className="text-2xl font-black text-[#111]">Grimstad</h2>
            </div>
            <div className="flex-1 h-px bg-[#e5e5e5]" />
            <div className="text-right shrink-0">
              <p className="text-sm text-[#666]">Lillesandsveien 44 B</p>
              <p className="text-sm text-[#666]">4877 Grimstad</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {grimstad.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Team: Arendal */}
      <section className="bg-[#f5f4f0] py-[60px] md:py-[80px] px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-1">Avdeling</p>
              <h2 className="text-2xl font-black text-[#111]">Arendal</h2>
            </div>
            <div className="flex-1 h-px bg-[#d5d3cc]" />
            <div className="text-right shrink-0">
              <p className="text-sm text-[#666]">Industritoppen 23</p>
              <p className="text-sm text-[#666]">4848 Arendal</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {arendal.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* General contact + form */}
      <section id="kontakt-form" className="bg-[#0f1f3d] py-[60px] md:py-[100px] px-6 md:px-10" style={{ scrollMarginTop: '64px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: contact info */}
            <div>
              <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-6">Kom i kontakt</p>
              <h2 className="font-black text-white leading-[0.92] mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                La oss jobbe<br /><span className="text-[#1a4fd6]">sammen.</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">E-post</p>
                  <a href="mailto:post@steinmoen.no" className="text-white hover:text-[#1a4fd6] transition-colors">
                    post@steinmoen.no
                  </a>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Telefon</p>
                  <a href="tel:37043896" className="text-white hover:text-[#1a4fd6] transition-colors">
                    37 04 38 96
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Grimstad</p>
                    <p className="text-white/80 text-sm">Lillesandsveien 44 B</p>
                    <p className="text-white/80 text-sm">4877 Grimstad</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Arendal</p>
                    <p className="text-white/80 text-sm">Industritoppen 23</p>
                    <p className="text-white/80 text-sm">4848 Arendal</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-2">
                  <a href="https://www.facebook.com/steinmoenas" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/steinmoenas/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-6">Send oss en melding</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
