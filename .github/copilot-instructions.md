## Design Context

### Users
Small Norwegian businesses (SMBs) who need something built and don't want to overthink it. Makers and hobbyists who need a prototype, a custom part, or a small tool. People who are slightly technical but primarily just want results — they scan the page quickly, decide if this person seems competent and trustworthy, and move on. The site needs to earn their confidence in under 10 seconds.

### Brand Personality
**Playful, practical, direct.**

Not a corporate agency. Not a freelance hustle brand. Something closer to a skilled craftsperson with a good sense of humor — someone who takes their work seriously but doesn't take themselves too seriously. Fast to respond, hands-on, not pretentious. Norwegian sensibility: understated, functional, quietly confident.

### Aesthetic Direction
**Clean but fancy** — not sterile minimalism, not maximalist chaos. Think: a well-made physical object. Precision without coldness. There should be moments of delight (a nice detail, an unexpected texture, a clever layout choice) that reward attention without demanding it.

- **Theme**: Light mode. Dark mode is a future consideration.
- **Not**: Agency-portfolio gloss, generic SaaS landing page, brutalist raw, overly toy-like.
- **Yes**: Precise, crafted, a little warm. Something that feels designed — not generated.

### Design Principles
1. **Maker energy** — the site should feel built with intention. Craft in the details: spacing rhythm, type choices, small interactions that feel considered.
2. **Scan-first hierarchy** — Norwegian SMB owners are busy. The most important info must be legible in one sweep. No fluff, no long intros.
3. **Playful precision** — clean layouts with one or two unexpected choices that make it memorable. Restraint 90% of the time, character the other 10%.
4. **Direct copy, confident tone** — the copy is already good (honest, no-BS). Design should match that voice: nothing over-decorated, nothing that oversells.
5. **Light with warmth** — avoid the cold blue-grey trap. Neutrals should have a slight warm-blue tint (matching the primary hue) to feel cohesive and alive.

### Technical Constraints
- Next.js 16, React 19, Tailwind CSS v4, TypeScript
- next-intl for Norwegian (nb) + English (en) i18n
- No third-party design system — custom CSS variables + Tailwind
- OKLCH color tokens throughout — keep and extend this approach
- Lucide icons in use
