# Aethera

An editorial storefront for **Aethera** — a modern interior lifestyle brand
curating furniture and home accessories for calm, functional living.

Built with React 18, Vite, Tailwind CSS, React Router and Framer Motion.

## Design direction

Editorial rather than e-commerce-generic: a high-contrast serif display face
(Instrument Serif) against a neutral grotesque (Inter), a paper-and-ink
palette, generous whitespace, hairline rules, numbered sections and
asymmetric twelve-column spreads. Motion is restrained — reveal-on-scroll,
slow image zooms, and a page fade — and fully disabled under
`prefers-reduced-motion`.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F6F4EF` | page ground |
| `bone` / `linen` | `#EFEBE3` / `#E4DED3` | section blocks, image placeholders |
| `ink` / `graphite` | `#171614` / `#3B3833` | headings, body |
| `mute` | `#7C766C` | captions, eyebrows |
| `rule` | `#D9D2C6` | hairlines |
| `clay` | `#9C5B3C` | the single accent, used sparingly |

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Editorial homepage — hero, philosophy, category index, featured chapter, selected pieces, journal |
| `/shop` | Full catalogue with category filters and sorting (state held in the URL) |
| `/shop/:slug` | Product detail — stacked gallery, sticky spec column, finishes, related pieces |
| `/collections` | Four chapters, alternating spreads |
| `/collections/:slug` | Chapter detail with its pieces |
| `/journal` | Essays, craft notes and guides |
| `/journal/:slug` | Long-form article layout |
| `/about` | Studio, principles, numbers |
| `/contact` | Showroom details and an enquiry form |

## Imagery

Photography is served from the Unsplash CDN. Every image goes through
`src/components/Img.jsx`, which reserves the aspect ratio, fades the photo in
on load, and falls back to a tonal placeholder if an asset fails — so the
layout never collapses or shifts.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the build at /athera/
```

The app is served from the `/athera/` base path (GitHub Pages); `public/404.html`
redirects deep links back through the SPA router.
