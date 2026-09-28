# Aethera

A desktop storefront for **Aethera** — a furniture brand curating pieces and
interiors for calm, intentional living.

Built with React 18, Vite and React Router. Designed and built from a Figma
wireframe and brief: quiet, editorial, warm and spacious, with luxury carried
by typography, whitespace and photography rather than by interface.

## Design direction

Paper and ink. Near-white grounds, hairline rules, a single clay accent, and
large photography doing the colour work. **Italiana** for display type against
**Jost** for everything else; generous vertical rhythm and very few controls on
any screen.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F6F4EF` | page ground |
| `bone` / `linen` | `#EFEBE3` / `#E4DED3` | alternating sections, placeholders |
| `ink` / `graphite` | `#171614` / `#3B3833` | headings, body |
| `mute` | `#7C766C` | eyebrows, captions |
| `rule` | `#D9D2C6` | hairlines |
| `clay` | `#9C5B3C` | the single accent |

The site is **desktop-only by intent** — it is designed against a 1280–1680
canvas and carries no mobile breakpoints.

## Screens

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, room assistant, new arrivals, shop by space, categories, testimonials, materials, philosophy |
| `/shop` | Product listing, filtered by category through the URL |
| `/p/:id` | Product detail — gallery, finishes, specification, add to cart |
| `/spaces` | Shop by space — living room, bedroom, workspace |
| `/spaces/:id` | One space, with the pieces chosen for it |
| `/cart` | Cart with quantities and the delivery choice |
| `/checkout` | Contact, delivery and payment, with a live order summary |
| `/done` | Order confirmation |
| `/assistant` | Room Assistant — pick a prepared room, read it, see three pieces |

## The Room Assistant

Three rooms are photographed and prepared in advance. Choosing one shows how
that room reads — its light, proportion and palette — then three pieces chosen
for it, each with the reason written out, and the option to add them to the
cart. Nothing is uploaded and no model is called, so the walkthrough is the
same every time.

## Imagery

Photography is served from the Unsplash CDN. Every image goes through
`src/components/Img.jsx`, which reserves the aspect ratio, fades the photo in
on load, and falls back to a tonal placeholder if an asset fails — so the
layout never collapses or shifts.

## Development

```bash
npm install
npm run dev      # http://localhost:5173/athera/
npm run build    # production build to dist/
npm run preview  # serve the build at /athera/
```

The app is served from the `/athera/` base path (GitHub Pages); `public/404.html`
redirects deep links back through the SPA router.

The cart persists to `localStorage`. Checkout is a prototype: the card fields
are cosmetic, nothing is charged, and nothing is stored or sent.
