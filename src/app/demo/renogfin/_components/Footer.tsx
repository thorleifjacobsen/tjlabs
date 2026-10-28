import Link from 'next/link';
import { BASE, SITE } from './data';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './icons';

const social = [
  { href: SITE.facebook, label: 'Facebook', icon: <FacebookIcon /> },
  { href: SITE.instagram, label: 'Instagram', icon: <InstagramIcon className="h-5 w-5" /> },
  { href: SITE.linkedin, label: 'LinkedIn', icon: <LinkedinIcon /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <Link href={BASE} className="self-start" aria-label={`${SITE.name}, til forsiden`}>
          <img src="/demo/renogfin/logo.png" alt={SITE.name} className="h-20 w-auto" />
        </Link>
        <address className="text-sm not-italic leading-relaxed text-slate-600">
          {SITE.name}
          <br />
          {SITE.street}, {SITE.postal}
          <br />
          <a href={SITE.phoneHref} className="hover:text-[#0d9488]">
            {SITE.phoneDisplay}
          </a>
          <br />
          <a href={`mailto:${SITE.email}`} className="hover:text-[#0d9488]">
            {SITE.email}
          </a>
        </address>
        <div className="flex gap-2">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE.name} på ${s.label}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <a href="https://tjlabs.no" className="text-slate-500 hover:text-slate-600">
            Levert av TJLabs
          </a>
        </div>
      </div>
    </footer>
  );
}
