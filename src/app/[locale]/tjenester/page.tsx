import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tjenester | TJLabs',
  description:
    'Nettsider, webapplikasjoner, IoT, 3D-printing og teknisk rådgivning. Freelance webutvikler i hele Norge.',
};

const services = [
  {
    title: 'Nettsider',
    desc: 'Enkle og greie bedriftssider og landingssider. Ser bra ut, fungerer på alle enheter og er søkemotoroptimert fra start. Rask levering og lett å vedlikeholde.',
    detail: 'Bedriftssider, landingssider, porteføljer',
  },
  {
    title: 'Webapplikasjoner',
    desc: 'Apper med innlogging, betaling og brukerdata. Interne portaler, bookingsystemer og abonnementstjenester. Fullstack fra database til grensesnitt — jeg gjør alt selv.',
    detail: 'Portaler, booking, SaaS, PWA',
  },
  {
    title: 'Elektronikk & IoT',
    desc: 'PCB-design og prototyper, firmware til ESP32 og Arduino, smarthusintegrasjoner med Home Assistant og sensorbaserte løsninger. Kobler det fysiske til nettet.',
    detail: 'PCB, firmware, Home Assistant, sensorer',
  },
  {
    title: '3D-printing',
    desc: 'Send filer og få pristilbud. Jobber med STL, STEP og OBJ. Kan også hjelpe med design fra mål og skisser — bra for prototyper, festepunkter og funksjonelle deler.',
    detail: 'Prototyper, funksjonelle deler, design fra mål',
  },
  {
    title: 'PC & hardware',
    desc: 'PC-reparasjon og oppgraderinger, databerging og maskinvarehjelp. Windows og Mac. Vet hva som er inni en datamaskin og er ikke redd for å åpne den.',
    detail: 'Reparasjon, oppgraderinger, databerging',
  },
  {
    title: 'Teknisk rådgivning',
    desc: 'Trenger du noen å sparre med om en teknisk utfordring? Hjelper gjerne med å tenke gjennom arkitektur, produktvalg eller problemstillinger du sitter fast i.',
    detail: 'Sparring, vurderinger, planlegging',
  },
];

export default function TjenesterPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-28 pb-24">
      <div className="mb-16">
        <h1
          className="font-display font-semibold text-[var(--color-text)]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Tjenester
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-4 text-base max-w-md" style={{ lineHeight: 1.7 }}>
          Fra nettsider til kretskort. Jeg tar på meg varierte oppdrag og finner som regel en god løsning.
        </p>
      </div>

      <div className="border-t border-[var(--color-border)]">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="border-b border-[var(--color-border)] py-10 grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_14rem_1fr] gap-x-8 gap-y-4"
          >
            <span className="text-[10px] font-mono text-[var(--color-text-muted)] pt-1.5">
              {String(i + 1).padStart(2, '0')}
            </span>

            <h2
              className="font-display font-medium text-[var(--color-text)]"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}
            >
              {s.title}
              <span className="block text-xs font-normal text-[var(--color-text-muted)] mt-1 tracking-wide">
                {s.detail}
              </span>
            </h2>

            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed col-start-2 md:col-auto">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between">
        <p className="text-sm text-[var(--color-text-muted)]">
          Noe som ikke passer inn her? Ta kontakt uansett.
        </p>
        <a href="/kontakt" className="btn-primary">
          Ta kontakt <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </main>
  );
}
