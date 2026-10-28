import Link from 'next/link';
import { BASE, NAV, SERVICES, SITE } from './data';
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from './icons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4 md:py-16">
        <div>
          <img src="/demo/renogfin/logo.png" alt="Ren & Fin AS" className="mb-4 h-14 w-auto" />
          <p className="text-sm leading-relaxed text-slate-600">
            Profesjonelt vaskebyrå for bedrifter og private i {SITE.area}.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ren & Fin på Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              <FacebookIcon />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ren & Fin på Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Tjenester</h2>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href={`${BASE}/tjenester#${s.id}`} className="text-slate-600 hover:text-[#0d9488]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Sider</h2>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-600 hover:text-[#0d9488]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Kontakt</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" />
              <span>
                {SITE.street}
                <br />
                {SITE.postal}
              </span>
            </li>
            <li>
              <a href={SITE.phoneHref} className="flex gap-2 hover:text-[#0d9488]">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-[#0d9488]">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Ren & Fin AS. Alle rettigheter reservert.</span>
          <a href="https://tjlabs.no" className="text-slate-500 hover:text-slate-600">
            Levert av TJLabs
          </a>
        </div>
      </div>
    </footer>
  );
}
