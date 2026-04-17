# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

There are no automated tests.

## Workflow — after every change

Always run these three steps after making any code change:

```bash
# 1. Commit
git add <files> && git commit -m "..."

# 2. Build
npm run build

# 3. Restart the dev PM2 process
pm2 restart tjlabs-dev
```

The app runs under PM2 (`tjlabs-dev` on port 5001, `tjlabs-prod` on port 5000).
Never skip the build + restart — changes won't be visible until the server reloads.

## Architecture

Personal website for TJ Labs (Thorleif Jacobsen). Built with **Next.js 16 App Router**, **next-intl** for i18n, and **Tailwind CSS v4**.

### Routing

- `src/app/[locale]/` — all pages live under a locale segment
- `src/proxy.ts` — acts as Next.js middleware, runs `next-intl`'s locale middleware on all non-API/asset routes
- Locales: `nb` (default, no prefix) and `en` (`/en/...`)
- `src/navigation.ts` — re-exports `Link`, `redirect`, `useRouter`, `usePathname` from `next-intl/navigation`; always use these instead of Next.js built-ins for locale-aware navigation

### Internationalisation

All visible copy lives in `messages/nb.json` and `messages/en.json`. Components call `useTranslations('namespace')` to access strings. When adding or changing copy, update **both** message files.

### Content

Blog posts are Markdown files in `content/posts/`. Filename = URL slug. Required frontmatter: `title`, `date` (YYYY-MM-DD), `description`. `src/lib/posts.ts` reads and parses them with `gray-matter` and renders with `marked`.

Portfolio projects (`/portfolio`) are hardcoded in `src/app/[locale]/portfolio/page.tsx` — no file-based content source.

### Styling

Tailwind v4 with a custom design system defined in `src/app/globals.css` under `@theme`. Always use the CSS custom properties (`var(--color-text)`, `var(--color-primary)`, etc.) for colour — not arbitrary Tailwind values. The single font is Comfortaa (loaded via `next/font/google`).

Scroll-entrance animations use `AnimateIn.tsx` (wraps `useInView` from `src/hooks/useInView.ts`). Hero entrance uses the `hero-item` CSS class with the `hero-in` keyframe.

### API

`src/app/api/contact/route.ts` — POST handler for the contact form. Email sending via Resend is stubbed out (requires `RESEND_API_KEY` in `.env`).

### Environment variables

See `.env.example`. `NEXT_PUBLIC_APP_URL` is the canonical site URL. `RESEND_API_KEY` is optional until contact email is wired up.
