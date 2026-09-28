# Aethera

A desktop storefront for **Aethera** — a furniture brand curating pieces and
interiors for calm, intentional living.

Built with React 18, Vite and React Router. Designed and built from a Figma
wireframe, a core-flows brief (`coreflows.jpg`) and a visual concept: **a quiet
editorial gallery, not a normal e-commerce site** — slow, spacious, tactile and
carefully composed, with luxury carried by typography, whitespace and
photography rather than by interface.

## Design direction

Paper and ink. Warm off-white grounds, hairline rules, a single sage accent,
charcoal text instead of pure black, and large photography doing the colour
work. **Italiana** for display type against **Jost** for everything else;
generous vertical rhythm and very few controls on any screen.

The page is laid out on a 12-column grid: 1440px maximum, 1280px of content,
80px desktop margins, and 120–180px between sections.

The palette is the brief's seven colours:

| Token | Value | Use |
| --- | --- | --- |
| `warm-white` | `#F6F4EF` | page ground |
| `sand` | `#EFE7DA` | alternating sections |
| `beige` | `#E4DED3` | third ground, image placeholders |
| `taupe` | `#7C766C` | eyebrows, captions |
| `sage` | `#7E8A73` | the single accent |
| `walnut` | `#241A14` | the one dark section |
| `charcoal` | `#2B2A27` | accent ink |

Image ratios are fixed by the brief: 16:9 for the homepage hero (with a
separate 4:5 crop on mobile), 4:5 for editorial sections, 3:4 for product
cards, and 1:1 plus 4:5 in the product gallery.

The site is **designed desktop-first** against a 1280–1680 canvas, and adapts
down through three breakpoints for the core flow. Below 980px the navigation
becomes a full-screen editorial menu; below 640px the product page grows a
sticky add-to-cart bar and product rows stay horizontally scrollable.

## Rhythm and motion

No two consecutive sections share a shape. The landing page moves between large
visual moments and quiet empty spaces: a full-screen hero, an editorial
category index, a horizontal product row, an asymmetric image composition, a
grid, a split-screen, a cropped texture band, a spread, and a minimal close.

Motion is slow, soft and controlled, and opt-in from the markup. Images reveal
through a vertical mask, text fades upward, two images carry a 4–5% scroll-
linked crop movement, product cards crossfade to a second frame on hover, links
grow a thin sliding underline, the cart opens as a right-side drawer, and
opening a piece expands its card image into the product gallery. Every one of
these is disabled under `prefers-reduced-motion`.

## Screens

| Route | Purpose |
| --- | --- |
| `/` | Landing — hero, shop by category, featured collection, lifestyle editorial, best-selling, shop by space, craftsmanship, philosophy, newsletter |
| `/shop` | Listing, filtered by category, price, colour, material and size through the URL |
| `/p/:id` | Product detail — gallery with zoom, finishes, availability check, specification, care |
| `/spaces` | Shop by space — living room, bedroom, workspace |
| `/spaces/:id` | One space, with the pieces chosen for it |
| `/assistant` | Room Assistant — pick a prepared room, read it, see three pieces |
| `/wishlist` | Saved pieces, with add-to-cart and remove |
| `/account` | Prototype sign-in and a saved address |
| `/cart` | Cart with quantities and a running total |
| `/checkout` | Account, delivery details, shipping method and payment, with a live summary |
| `/done` | Order confirmation |
| `/track` | Order tracking — enter an order number, see the delivery status |

## The collection

Eighteen pieces across the brief's seven categories: sofas and lounge chairs,
coffee and side tables, dining tables and chairs, beds and bedside tables,
shelves and storage cabinets, floor and table lamps, and rugs, cushions and
ceramic objects.

Each piece is photographed in the views the brief asks for — front, side,
three-quarter, back and detail — labelled under each frame in the gallery. Any
frame opens a zoom view: click to magnify, move the pointer to pan.

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
layout never collapses or shifts. The hero ships two genuinely different CDN
crops through a `<picture>` rather than letterboxing one.

## Development

```bash
npm install
npm run dev      # http://localhost:5173/athera/
npm run build    # production build to dist/
npm run preview  # serve the build at /athera/
```

The app is served from the `/athera/` base path (GitHub Pages); `public/404.html`
redirects deep links back through the SPA router. Because that redirect uses a
`p` query parameter, application query parameters must not be named `p` — the
listing's price filter is `pr`.

The cart, wishlist, account and placed orders persist to `localStorage`. There
is no backend: checkout is a prototype — the card fields are cosmetic, nothing
is charged, and nothing is stored or sent — and order tracking finds only the
orders placed in that browser.
