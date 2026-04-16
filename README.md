# TJ Labs

Personal website for TJ Labs — built with Next.js, next-intl, and Tailwind CSS.

## Editing content

### Text & copy

All visible text lives in two JSON files:

- `messages/nb.json` — Norwegian
- `messages/en.json` — English

Each key maps to a section (`hero`, `services`, `about`, `contact`, etc.). Change the values there to update what appears on the page.

### Blog posts

Add a `.md` file to `content/posts/` with this frontmatter:

```markdown
---
title: "Post title"
date: "2026-04-15"
description: "Short summary shown in the post list."
---

Your content here in Markdown.
```

The filename becomes the URL slug — e.g. `my-post.md` → `/blog/my-post`.

### Layout & design

The React components in `src/components/` control structure and styling:

| File | Controls |
|---|---|
| `Hero.tsx` | Top section |
| `Services.tsx` | Services grid |
| `Projects.tsx` | Featured projects |
| `About.tsx` | About section |
| `Contact.tsx` | Contact form |
| `Nav.tsx` | Top navigation |
| `Footer.tsx` | Footer |

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
npm start
```
