# Athera — project context

Storefront for **Athera**, a made-to-order furniture brand: two categories
(Seating, Tables), six pieces. Core flow: **piece → colour & size → checkout →
confirmation**. React 18 + Vite + React Router. No backend, no photography.

> The earlier COS-inspired editorial storefront ("Aethera", 18 products, white /
> Inter / Unsplash photography) lives on the branch
> `claude/aethera-website-design-vfcikd`. This branch replaced it.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/athera/
npm run build    # → dist/
npm run preview  # http://localhost:4173/athera/
```

Base path is `/athera/` (GitHub Pages). `public/404.html` bounces deep links back
through the router. `VITE_HASH_ROUTER=1` switches `src/main.jsx` to `HashRouter`.

## Design

Modelled on a slide-deck reference: separate sharp-edged panels ("slides") on a
tan ground, ivory and walnut panels, thin flared display capitals, small tracked
labels. Warm and quiet; the furniture is the colour.

| Token | Value | Use |
| --- | --- | --- |
| `--tan` | `#9C7F5F` | page ground, nav |
| `--ivory` | `#EFEAE1` | light panels |
| `--walnut` | `#241A14` | dark panels |
| `--bone` | `#EADFCF` | type on dark |
| `--ink` / `--muted` | `#221A14` / `#75685A` | type on ivory |
| `--cognac` | `#A0602F` | focus, selected states, hover |

Type: **Italiana** (display, uppercase, `.disp`) + **Jost** (300/400 body,
uppercase tracked `.label`). No Tailwind classes are used; `src/index.css` holds
all styling (Tailwind is installed but its directives were removed).

## How the furniture works

There are no images. Every piece is drawn as SVG in front elevation
(`src/lib/art.js`, one `DRAW[kind]` function each) and recoloured with CSS
custom properties set from the chosen finish (`vars(p, fi)` → `--c --lo --hi
--leg`). Those are registered with `@property`, so a colour change animates.

- `Stage` = wall + floor + one `Piece`. The floor is bottom-anchored and sized
  by `aspect-ratio` from `--ar`, so it lines up with the drawing at any height.
- Size changes swap the drawing's geometry (`sizes[i].W`, `k`) and its dimension
  line. Shared gradients/blur live in `Defs` (rendered once in `Layout`).
- Gradients are shared, colour-independent overlays (`gV`, `gH`), never
  per-piece `var()` gradients: duplicate ids in one document resolve to the first.

## Structure

```
src/
  data/catalogue.js   PRODUCTS (finishes with upcharge, sizes with price), CATS
  lib/art.js          drawing functions, colour mixing, vars()
  lib/format.js       money ($), SHIP options, eta()
  lib/shop.jsx        cart + delivery choice + last order + toast (localStorage cart)
  components/         Layout (nav, footer, toast, scroll), Stage (Stage, Piece, Defs)
  pages/              Home, Product, Checkout, Done, NotFound
  index.css           the whole stylesheet
```

Routes: `/` (and `/?c=seating|tables|all` for the collection filter), `/p/:id`,
`/checkout`, `/done`. To add a piece: add an entry to `PRODUCTS` and, if it is a
new shape, a `DRAW` function keyed by its `kind`.

## Decisions and gotchas

- **Prices are `$`**, placeholders. Total = size price + finish upcharge.
- **Checkout is a prototype**: card fields are cosmetic, nothing is sent or
  stored beyond the cart in `localStorage`. The page says so.
- **Category links use `?c=`** (same route, no remount) and `ScrollManager` in
  `Layout` smooth-scrolls to `#collection`.
- **Contrast:** light finishes (bone, oat, travertine) are chosen to stay
  readable on the greige `stage--pdp` wall; check any new finish there.
- **Watch class collisions.** `.done` once styled both the confirmation slide
  and the completed-step marker, so every finished step inherited
  `min-height:520px`. The confirmation slide is `.conf` now; keep page-level and
  state-level class names in separate namespaces.
- `Lofi-wireframe.pdf` in the root is from the earlier COS/wireframe passes.
