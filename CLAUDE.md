# Aethera — project context

Editorial storefront for **Aethera**, a luxury furniture and interiors brand.
React 18 + Vite + Tailwind + React Router + Framer Motion. No backend.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/athera/
npm run build    # → dist/
npm run preview  # http://localhost:4173/athera/
```

Base path is `/athera/` (GitHub Pages, repo name `athera`). `public/404.html`
bounces deep links back through the SPA router. `.github/workflows` deploys
on push to `main`.

## Design system

Modelled on **COS** (cos.com — only its India landing page is reachable from
here, and that is the whole reference): white ground, black type, one grey,
one grotesk (Inter), a tiny centred wordmark, one bold uppercase headline, a
full-bleed photograph, a narrow centred line of text, plain two-up image
tiles, hairline outlined buttons. No accent colour, no ornament, no kickers
or rules — photography does the work. Keep it short and simple.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#FFFFFF` | page ground |
| `bone` / `linen` | `#F5F4F2` / `#ECEAE6` | image placeholders, tone sections |
| `ink` / `graphite` | `#111111` / `#222222` | type |
| `mute` | `#767676` | secondary text, meta |
| `rule` | `#E4E2DE` | hairlines |

Type is **Inter only** (sans-serif was an explicit request): `Heading` sizes
`display` and `title` are bold uppercase, `heading` and `caption` are normal
case; body is Inter 400 at 14–16px; `.label` is 11–12px uppercase
(`tracking-label` 0.06em) for nav, buttons and meta.

### One component family

Every page is built from `src/components/ui/` (import from
`../components/ui`). Do not hand-roll headings, buttons, chips, form fields or
section wrappers in a page — extend the component instead.

| Component | The only… | Notes |
| --- | --- | --- |
| `Button` | button | `variant` solid / line / light / light-line; `size` md / lg; renders Link (`to`), anchor (`href`) or `<button>` |
| `TextLink` | text action | uppercase over a hairline; `arrow`, `tone`; `as="span"` inside another link |
| `Eyebrow` | small uppercase label | meta lines, form labels |
| `Heading` | heading | `size` display / title / heading / caption, independent of the tag |
| `Text` | reading text | `variant` lead / body / small; `tone` default / mute / ink / light |
| `Chip` | toggle | filters, sort, subject and mood pickers |
| `Field` | form control | label + hairline input or `as="textarea"` |
| `PageHeader` | page opening | centred: small label, display title, lede |
| `Section` | section wrapper | rhythm + shell; `flush` after a header, `bleed` for edge-to-edge |
| `SectionHeader` | section title | bold title left, text action right, optional note |
| `Card` | image card | photo, then title left / price right; `hoverImage` fades in |
| `Spread` | image + text | alternates with `flip` |
| `SpecList` | label / value rows | product specs |
| `Wordmark` | brand name | spaced Inter caps |

Beside them: `Img` (the only image), `Reveal` (a gentle fade), `ProductCard`
(a `Card` fed by a product), `ProductGrid` (two / three / four across, with
one full-width photograph after the eighth piece).

`src/index.css` holds only what the family shares: the `.type-*` scale
(vw-based, clamped), `.label`, `.pt-section` / `.pb-section`, `.field`,
`.img-zoom`. Do not add one-off type or button classes.

**Photography** is the Unsplash set already in `products.js`; `imageUrl()`
requests `q=90` and pages ask for 1800–2600px wide on full-bleed and pair
images. No filter or grade is applied — colours are as shot.

## Structure

```
src/
  components/   ui/ (the component family), Nav, Footer, Img, Reveal,
                ProductCard, ProductGrid, Marquee, PageMeta, ScrollToTop
  pages/        Home, Shop, ProductDetail, Collections, CollectionDetail,
                Journal, Article, Furniture, DesignByAI, About, Contact,
                Account (exports Profile/Cart/Wishlist), NotFound
  data/         products.js (18 products, 6 categories, 4 collections),
                journal.js (4 articles)
  lib/format.js formatPrice (INR), cx
```

Slugs and image helpers are derived in `products.js` — add a product to the
`raw` array and `slug` / `img()` come free.

## Decisions made, and why

- **Rebuilt from scratch**, and then rebuilt again. The repo first held a
  terracotta site called "Athera"; a wireframe-literal homepage
  (`Lofi-wireframe.pdf`, still in the project root) and a Jost/brass luxury
  pass followed. The user then asked for "a completely new experience", COS
  only, editorial, very simple and short — so the wireframe's sections (AI
  before/after, rooms carousel, testimonials, bento) were dropped.
- **Homepage is deliberately short:** one headline, one photograph, one line
  and a button, a Seating / Tables pair, a full-bleed bedroom band, four new
  pieces, a Lighting / Textiles pair.
- **Shop** is a plain grid with one editorial full-width interlude; **product
  page** is photographs left, a sticky panel right (name, price, finish,
  reserve, three disclosures), then four more pieces.
- **Nav** is COS-shaped: links either side of a centred wordmark; the rest of
  the routes (Furniture, Wishlist, Account) live in the footer and mobile menu.
- **No cart or checkout logic.** Product pages "Reserve this piece" (local
  state only); `/cart` and `/wishlist` are empty states.
- **`Img` fallback everywhere.** Every image goes through
  `src/components/Img.jsx`, which reserves the aspect ratio, fades in on load,
  and falls back to a tonal placeholder. Never render a bare `<img>`.
- **Prices in INR.** Studio is fictionally Bengaluru-based; `formatPrice`
  uses `en-IN` grouping. Testimonial-style copy and studio details are
  placeholders.

## Gotchas

- **Never pass a position class to `Img`.** Its root is `relative`, and
  Tailwind orders `.relative` after `.absolute`, so `className="absolute
  inset-0"` silently loses. Wrap it in an absolutely positioned div instead.
  Pass `ratio="auto"` plus a height class for full-bleed images.
- **Nav is `fixed`** at 56px (mobile) / 64px (≥640px). The link rows show from
  `lg` (1024px); below that a `Menu` button opens a full-screen list. Pages
  carry their own top padding (`pt-[112px] sm:pt-[136px]` in `PageHeader`).
  Shop's sticky filter bar is pinned to `top-[56px] sm:top-[64px]`.
- **`VITE_HASH_ROUTER=1`** switches `src/main.jsx` to `HashRouter` for builds
  served from an unknown path. Default builds keep `BrowserRouter`.
- **Unsplash IDs rot.** Re-check IDs with a `fetch` status sweep after
  touching imagery — a dead ID hides behind the `Img` fallback.
- Reveal-on-scroll means full-page screenshots need a scroll pass plus a
  settle, or elements capture mid-fade.

## Verification

No test suite. Changes were checked by driving the built site with headless
Edge over the DevTools protocol at 390 / 768 / 1024 / 1440 / 1728 px: scroll
the page so lazy images and reveals fire, then assert zero console errors, no
broken images and `scrollWidth === clientWidth` on every route, then capture
viewport-sized screenshots. (One very tall screenshot hangs headless Edge —
capture per viewport instead.) Worth repeating for any layout change.
