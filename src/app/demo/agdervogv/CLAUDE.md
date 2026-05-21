# Agder Varme og Vedlikehold — Demo Site

This is a demo/showcase website built inside the TJ Labs Next.js monorepo at `/var/www/tjlabs/dev`.

## Context

- **Live at**: `http://localhost:5001/demo/agdervogv` (dev) / port 5000 (prod)
- **Route prefix**: `/demo/agdervogv` — all internal links and `BASE` constants use this
- **Part of**: The main TJ Labs site (`tjlabs-dev` / `tjlabs-prod` PM2 processes)
- All pages have `robots: 'noindex'` — this is a client demo, not a public site

## About the client

**Agder Varme og Vedlikehold** — local heat pump company in Vegårshei, Norway.
- Owner: Magnus Wedø, daglig leder
- Phone: 97 12 35 54
- Email: hei@agdervogv.no
- Address: Sagaveien 7, 4985 Vegårshei
- Service area: Vegårshei, Tvedestrand, Gjerstad, Risør, Froland og omegn

## Brands sold

Mitsubishi Electric, Panasonic, Toshiba, Daikin — **only these four**.
Services all brands for maintenance/repair.

## Certifications

- ISOVATOR sertifisert varmepumpeinstallatør
- NOVAP godkjent forhandler

## Pages

| File | URL |
|------|-----|
| `page.tsx` | `/demo/agdervogv` — front page / showcase |
| `layout.tsx` | Shared header + footer (sticky nav, hamburger, cert logos in footer) |
| `tjenester/page.tsx` | `/demo/agdervogv/tjenester` |
| `produkter/page.tsx` | `/demo/agdervogv/produkter` |
| `om-oss/page.tsx` | `/demo/agdervogv/om-oss` |
| `kontakt/page.tsx` | `/demo/agdervogv/kontakt` |

## Design system

- **Font**: system-ui stack (no Google Fonts)
- **Primary**: `#ea580c` (orange)
- **Text**: `#1e293b`
- **Muted text**: `#64748b`
- **Section bg**: `#f8fafc`
- **Borders**: `#e2e8f0`
- **Max width**: `1100px`
- Use `<img>` tags — not Next.js `<Image>`
- No arbitrary Tailwind colors — use the hex values above

## Tone

Company/professional, not personal. Magnus appears by name only in:
1. The kontakt page person card ("Din kontakt / Magnus")
2. The om-oss quote attribution ("Magnus Wedø, daglig leder")

Everything else uses "vi/oss".

## Images

External images come from `mee.no` (Mitsubishi Electric Norway) — used directly as `src` URLs.
Local assets live in `public/demo/agdervogv/`:
- `logo.png`, `technician.jpg`, `hero.jpg`, `cozy-home.jpg`
- `isovator.jpg`, `novap.jpg` — certification logos

## Workflow — after every change

```bash
# 1. Commit
git add <files> && git commit -m "..."

# 2. Build
npm run build   # run from /var/www/tjlabs/dev

# 3. Restart
pm2 restart tjlabs-dev
```

Changes are not visible until build + restart.
