# Aethera — project context

Desktop-only storefront for **Aethera**, a luxury furniture brand: thirteen
pieces across four categories, three spaces, and a room assistant. React 18 +
Vite + React Router. No backend.

The IA comes from the user's own Figma wireframe (`Lofi-wireframe.pdf` in the
root): nav → hero → room assistant → new arrivals → shop by space → browse
categories → testimonials → crafted to last → philosophy → footer. Keep that
order and those section names unless the user says otherwise.

> Two earlier passes live on other branches: the COS-inspired editorial site on
> `claude/aethera-website-design-vfcikd`, and the warm slide-deck build with
> SVG-drawn furniture at commit `fe80dd1` on this branch. Both are superseded.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/athera/
npm run build    # → dist/
npm run preview  # http://localhost:4173/athera/
```

Base path is `/athera/` (GitHub Pages). `public/404.html` bounces deep links
back through the router. `VITE_HASH_ROUTER=1` switches `src/main.jsx` to
`HashRouter`.

## Design

Paper and ink: near-white grounds, hairline rules, one accent, and photography
doing all the colour work. Luxury comes from typography, whitespace and
composition — never from chips, badges, cards-within-cards or motion.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F6F4EF` | page ground |
| `--bone` / `--linen` | `#EFEBE3` / `#E4DED3` | alternating sections, image placeholder |
| `--ink` / `--graphite` | `#171614` / `#3B3833` | headings, body |
| `--mute` | `#7C766C` | eyebrows, captions |
| `--rule` | `#D9D2C6` | hairlines |
| `--clay` | `#9C5B3C` | the single accent, used sparingly |
| `--walnut` | `#241A14` | the one dark section (philosophy) |

Type: **Italiana** (display, uppercase, `.disp` + `.d1/.d2/.d3`) and **Jost**
(300/400 body, `.eyebrow` for tracked small caps). No Tailwind classes are
used; Tailwind is installed but its directives were removed.

**Desktop only by intent.** `body { min-width: 1180px }` and there are no media
queries. Design against a 1280–1680 canvas; do not add mobile breakpoints
unless asked.

Stylesheets: `src/index.css` holds tokens, primitives (buttons, links, image,
nav, footer, cards, forms) and the homepage; `src/pages.css` holds the other
screens. Both are imported from `src/main.jsx`.

## Photography

Every photo is an Unsplash id in `src/data/catalogue.js`, rendered through
`<Img/>` (`src/components/Img.jsx`), which reserves the aspect ratio, fades the
photo in, and falls back to a tonal block so a layout never collapses. `img(id,
w)` builds the CDN URL.

The set was curated for one look — warm neutrals, daylight, no strong colour
casts. When swapping a photo, check it in place: a single saturated image
(orange lamplight, teal upholstery) breaks the whole page.

## Structure

```
src/
  data/catalogue.js   CATEGORIES, PRODUCTS, SPACES, MATERIALS, VOICES, ROOMS + lookups
  lib/format.js       money ($), SHIP, eta(), dims(), cx()
  lib/shop.jsx        cart, delivery choice, last order, toast (localStorage)
  components/         Layout (nav, footer, toast, scroll), Img, ProductCard
  pages/              Home, Shop, Product, Spaces, Space, Cart, Checkout, Done, Assistant, NotFound
  index.css           tokens, primitives, homepage
  pages.css           listing, detail, spaces, cart, checkout, assistant
```

Routes: `/`, `/shop` (`?c=seating|tables|storage|lighting`), `/p/:id`,
`/spaces`, `/spaces/:id`, `/cart`, `/checkout`, `/done`, `/assistant`.

To add a piece: add an entry to `PRODUCTS` with `cat`, `spaces`, three image
ids and its finishes. Add `arrival: true` to put it in New Arrivals.

## Decisions and gotchas

- **Prices are `$`**, placeholders. One price per piece; finishes do not change it.
- **Checkout is a prototype**: the card fields are cosmetic, nothing is sent,
  and the page says so. The cart is the only thing persisted (`aethera.cart`).
- **The Room Assistant uses three prepared rooms** (`ROOMS`) — no upload, no
  model call, no key. Each room carries its reading (light, proportion,
  palette), a note, and three picks with a written reason. It is meant to read
  as editorial judgement, not as a dashboard.
- **Cart and checkout are separate pages** (`/cart`, `/checkout`), as the
  wireframe's nav implies.
- The product gallery is the whole left column on `/p/:id`; the right column is
  sticky (`top: 122px`, clearing the 86px nav).
- `Lofi-wireframe.pdf` uses subsetted fonts, so its text does not copy out of a
  PDF reader cleanly; the IA above is the decoded version of it.
