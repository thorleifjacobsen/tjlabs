'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BASE, NAV, SITE } from './data';
import { CloseIcon, MenuIcon, PhoneIcon } from './icons';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const firstRender = useRef(true);

  // Closing the mobile menu shrinks the page while Next.js restores scroll, which
  // can leave the new page part way down. Jump explicitly once the layout settles.
  useEffect(() => {
    setOpen(false);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, [pathname]);

  const isActive = (href: string) =>
    href === BASE ? pathname === BASE : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-4 md:h-[72px]">
        <Link href={BASE} className="flex items-center" aria-label="Ren & Fin AS, til forsiden">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hovedmeny">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                isActive(item.href) ? 'text-[#0d9488]' : 'text-slate-700 hover:text-[#0d9488]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-[#0d9488] px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0f766e]"
          >
            <PhoneIcon className="h-4 w-4" />
            Ring {SITE.phoneShort}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE.phoneHref}
            aria-label={`Ring ${SITE.phoneShort}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0d9488] text-white hover:bg-[#0f766e]"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="rf-mobile-menu"
            aria-label={open ? 'Lukk meny' : 'Åpne meny'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="rf-mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1100px] flex-col px-4 py-3" aria-label="Mobilmeny">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(item.href) ? 'bg-[#ccfbf1] text-[#0f766e]' : 'text-slate-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d9488] px-4 py-3 font-semibold text-white hover:bg-[#0f766e]"
            >
              <PhoneIcon className="h-4 w-4" />
              Ring {SITE.phoneShort}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
