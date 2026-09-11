// Product catalogue. Imagery is served from the Unsplash CDN with a
// tonal fallback handled in <Img/>, so a missing asset never breaks a layout.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const categories = [
  {
    slug: 'seating',
    name: 'Seating',
    tagline: 'Chairs, lounges and low sofas built around the way a room is actually used.',
    image: 'photo-1567538096630-e0c55bd6374c',
  },
  {
    slug: 'tables',
    name: 'Tables',
    tagline: 'Dining, side and work surfaces in solid timber and honest stone.',
    image: 'photo-1530018352490-c6eef07fd7d0',
  },
  {
    slug: 'storage',
    name: 'Storage',
    tagline: 'Cabinets and shelving that hold the everyday without announcing it.',
    image: 'photo-1594026112284-02bb6f3352fe',
  },
  {
    slug: 'lighting',
    name: 'Lighting',
    tagline: 'Paper, linen and blown glass — light softened before it reaches the room.',
    image: 'photo-1550226891-ef816aed4a98',
  },
  {
    slug: 'textiles',
    name: 'Textiles',
    tagline: 'Hand-loomed wool, undyed linen and cotton that improves with washing.',
    image: 'photo-1581428982868-e410dd047a90',
  },
  {
    slug: 'objects',
    name: 'Objects',
    tagline: 'Small ceramics and vessels — the last five percent of a finished room.',
    image: 'photo-1533090161767-e6ffed986c88',
  },
]

export const collections = [
  {
    slug: 'quiet-hours',
    name: 'Quiet Hours',
    season: 'Chapter 01',
    tagline: 'For the end of the day.',
    statement: 'Low, soft and undemanding — the room you return to rather than perform in.',
    description:
      'A bedroom-first collection built on low profiles, brushed surfaces and undyed cloth. Nothing shines, nothing competes. Designed to be the least demanding thing in the room.',
    cover: 'photo-1505693416388-ac5ce068fe85',
    spread: ['photo-1581428982868-e410dd047a90', 'photo-1522771739844-6a9f6d5f14af'],
  },
  {
    slug: 'the-long-table',
    name: 'The Long Table',
    season: 'Chapter 02',
    tagline: 'Built for people staying longer than planned.',
    statement: 'Proportioned for the meal that runs long, and the conversation that runs longer.',
    description:
      'Dining pieces proportioned for real gatherings — generous tops, forgiving finishes and chairs you can sit in for three hours without noticing them.',
    cover: 'photo-1530018352490-c6eef07fd7d0',
    spread: ['photo-1600585152220-90363fe7e115', 'photo-1549187774-b4e9b0445b41'],
  },
  {
    slug: 'atelier-series',
    name: 'Atelier Series',
    season: 'Chapter 03',
    tagline: 'Made in small runs, signed by hand.',
    statement: 'Forty pieces to a run, each one finished by a hand we can name.',
    description:
      'Limited pieces produced with a single workshop in Jaipur. Each run is capped at forty units and each object carries the marks of the hand that finished it.',
    cover: 'photo-1533090161767-e6ffed986c88',
    spread: ['photo-1595428774223-ef52624120d2', 'photo-1594026112284-02bb6f3352fe'],
  },
  {
    slug: 'low-light',
    name: 'Low Light',
    season: 'Chapter 04',
    tagline: 'Evening, edited.',
    statement: 'Lit below eye level, warm, and never brighter than the evening needs.',
    description:
      'Lighting that works below eye level. Paper shades, blown glass and warm output — the room dimmed rather than lit.',
    cover: 'photo-1550226891-ef816aed4a98',
    spread: ['photo-1513694203232-719a280e022f', 'photo-1507473885765-e6ed057f782c'],
  },
]

const raw = [
  {
    id: 'ae-01',
    name: 'Sorrel Lounge Chair',
    category: 'seating',
    collection: 'quiet-hours',
    price: 64000,
    designer: 'Studio Aethera',
    year: 2025,
    featured: true,
    editorial: true,
    excerpt: 'A low, wide seat in oiled ash and undyed bouclé.',
    description:
      'The Sorrel began as a question: what does a chair look like when it is designed for the second hour rather than the first? The answer was a lower seat, a deeper pitch and a back that carries weight across the shoulder rather than the spine. The frame is steam-bent ash, oiled rather than lacquered, so it darkens slowly with use.',
    materials: ['Steam-bent ash', 'Undyed bouclé', 'Brass fixings'],
    dimensions: { w: 78, d: 84, h: 72, seat: 38 },
    finishes: [
      { label: 'Undyed', hex: '#E7E1D5' },
      { label: 'Oat', hex: '#CFC4AE' },
      { label: 'Slate', hex: '#6E7176' },
    ],
    lead: '6–8 weeks',
    images: [
      'photo-1567538096630-e0c55bd6374c',
      'photo-1586023492125-27b2c045efd7',
      'photo-1503602642458-232111445657',
    ],
  },
  {
    id: 'ae-02',
    name: 'Meridian Dining Table',
    category: 'tables',
    collection: 'the-long-table',
    price: 128000,
    designer: 'Ines Okafor',
    year: 2024,
    featured: true,
    editorial: true,
    excerpt: 'Two-metre solid oak top on a pared trestle base.',
    description:
      'A table sized for the meal that runs long. The top is a single slab of quarter-sawn oak, finished with hardwax oil so scratches can be spot-repaired instead of refinished. The trestle sits inboard by 32cm, which is the difference between six comfortable seats and eight uncomfortable ones.',
    materials: ['Quarter-sawn oak', 'Hardwax oil finish'],
    dimensions: { w: 200, d: 95, h: 74 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Smoked oak', hex: '#7A6350' },
    ],
    lead: '8–10 weeks',
    images: [
      'photo-1530018352490-c6eef07fd7d0',
      'photo-1600585152220-90363fe7e115',
      'photo-1549187774-b4e9b0445b41',
    ],
  },
  {
    id: 'ae-03',
    name: 'Wren Paper Floor Lamp',
    category: 'lighting',
    collection: 'low-light',
    price: 22500,
    designer: 'Studio Aethera',
    year: 2025,
    featured: true,
    excerpt: 'Hand-folded washi over a blackened steel spine.',
    description:
      'Light is diffused twice — once through the washi shade, once off the floor. The result sits closer to candlelight than to a lamp. The shade is replaceable and shipped flat; the spine is blackened steel, weighted low so it stays put on a rug.',
    materials: ['Washi paper', 'Blackened steel', 'Linen cord'],
    dimensions: { w: 42, d: 42, h: 158 },
    finishes: [{ label: 'Natural washi', hex: '#EFE8D9' }],
    lead: '3–4 weeks',
    images: [
      'photo-1550226891-ef816aed4a98',
      'photo-1507473885765-e6ed057f782c',
      'photo-1513694203232-719a280e022f',
    ],
  },
  {
    id: 'ae-04',
    name: 'Kestrel Low Sofa',
    category: 'seating',
    collection: 'quiet-hours',
    price: 186000,
    designer: 'Ines Okafor',
    year: 2024,
    featured: true,
    editorial: true,
    excerpt: 'Three seats, one continuous line, no visible hardware.',
    description:
      'A sofa built to be lived on rather than looked at. Feather-wrapped foam cushions are removable and re-coverable; the frame is FSC-certified beech with webbing that can be re-tensioned at home. Every seam runs parallel to the floor, which is why the piece reads as one line from across a room.',
    materials: ['FSC beech frame', 'Feather-wrapped foam', 'Belgian linen'],
    dimensions: { w: 232, d: 92, h: 68, seat: 40 },
    finishes: [
      { label: 'Chalk', hex: '#E3DED3' },
      { label: 'Clay', hex: '#A98166' },
      { label: 'Moss', hex: '#5E6650' },
    ],
    lead: '10–12 weeks',
    images: [
      'photo-1555041469-a586c61ea9bc',
      'photo-1526057565006-20beab8dd2ed',
      'photo-1493663284031-b7e3aefcae8e',
    ],
  },
  {
    id: 'ae-05',
    name: 'Ridge Shelving System',
    category: 'storage',
    price: 94000,
    designer: 'Studio Aethera',
    year: 2023,
    excerpt: 'Modular ash uprights, shelves that move without tools.',
    description:
      'Six shelf heights, three depths, no fasteners. The system relies on a machined notch rather than a bracket, which keeps the sightline clean and makes reconfiguring it a two-minute job. Add bays as the room changes.',
    materials: ['Solid ash', 'Powder-coated steel'],
    dimensions: { w: 180, d: 34, h: 196 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8' },
      { label: 'Ebonised', hex: '#2C2A26' },
    ],
    lead: '6–8 weeks',
    images: [
      'photo-1594026112284-02bb6f3352fe',
      'photo-1532372320572-cda25653a26d',
      'photo-1567016376408-0226e4d0c1ea',
    ],
  },
  {
    id: 'ae-06',
    name: 'Fold Sideboard',
    category: 'storage',
    collection: 'the-long-table',
    price: 112000,
    designer: 'Marcus Lindqvist',
    year: 2025,
    featured: true,
    excerpt: 'Fluted oak doors, push-latch, no handles.',
    description:
      'The fluting is not decoration — it is the handle. Each door is milled with a run of shallow half-rounds that give the hand purchase anywhere along the face, so the piece reads as a single uninterrupted plane when closed.',
    materials: ['Fluted oak', 'Soft-close hardware', 'Linoleum interior'],
    dimensions: { w: 168, d: 45, h: 72 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Bone lacquer', hex: '#E8E3D8' },
    ],
    lead: '8–10 weeks',
    images: [
      'photo-1616594039964-ae9021a400a0',
      'photo-1540932239986-30128078f3c5',
      'photo-1616486338812-3dadae4b4ace',
    ],
  },
  {
    id: 'ae-07',
    name: 'Halden Side Table',
    category: 'tables',
    price: 28000,
    designer: 'Studio Aethera',
    year: 2024,
    excerpt: 'A single block of travertine, cut once.',
    description:
      'Cut from a single block of unfilled travertine and honed rather than polished, so the surface holds light instead of reflecting it. Each piece varies; the veining you receive is photographed before it ships.',
    materials: ['Unfilled travertine'],
    dimensions: { w: 42, d: 42, h: 48 },
    finishes: [{ label: 'Honed travertine', hex: '#D8CDBB' }],
    lead: '4–5 weeks',
    images: [
      'photo-1578662996442-48f60103fc96',
      'photo-1604578762246-41134e37f9cc',
      'photo-1583845112203-29329902332e',
    ],
  },
  {
    id: 'ae-08',
    name: 'Cove Armchair',
    category: 'seating',
    price: 74000,
    designer: 'Marcus Lindqvist',
    year: 2023,
    excerpt: 'A curved shell in moulded walnut veneer.',
    description:
      'A compact reading chair with a shell pressed from eleven layers of walnut veneer. The curve does the structural work, so the frame beneath it can be slight. Best placed where it can be seen from behind.',
    materials: ['Moulded walnut', 'Wool felt seat'],
    dimensions: { w: 68, d: 72, h: 76, seat: 42 },
    finishes: [
      { label: 'Walnut', hex: '#6E4B32' },
      { label: 'Pale ash', hex: '#DCCFB8' },
    ],
    lead: '6 weeks',
    images: [
      'photo-1519710164239-da123dc03ef4',
      'photo-1503602642458-232111445657',
      'photo-1567538096630-e0c55bd6374c',
    ],
  },
  {
    id: 'ae-09',
    name: 'Marsh Wool Throw',
    category: 'textiles',
    collection: 'quiet-hours',
    price: 9800,
    designer: 'Atelier Ghosh',
    year: 2025,
    excerpt: 'Hand-loomed lambswool with a hemmed selvedge.',
    description:
      'Woven on hand looms in Bhuj from undyed lambswool, then washed twice so it arrives soft rather than new. The selvedge is hand-hemmed, which is the slowest part of the process and the first thing you notice.',
    materials: ['Undyed lambswool'],
    dimensions: { w: 130, d: 190, h: 0 },
    finishes: [
      { label: 'Oat', hex: '#CFC4AE' },
      { label: 'Ash grey', hex: '#9A9891' },
      { label: 'Moss', hex: '#5E6650' },
    ],
    lead: 'In stock',
    images: [
      'photo-1581428982868-e410dd047a90',
      'photo-1505693416388-ac5ce068fe85',
      'photo-1522771739844-6a9f6d5f14af',
    ],
  },
  {
    id: 'ae-10',
    name: 'Basin Vase, Tall',
    category: 'objects',
    collection: 'atelier-series',
    price: 6400,
    designer: 'Atelier Ghosh',
    year: 2025,
    featured: true,
    excerpt: 'Wheel-thrown stoneware, matte ash glaze.',
    description:
      'Thrown in small batches and finished with an ash glaze that breaks lighter over the shoulder of the form. Holds water. Intended for a single branch rather than a bouquet.',
    materials: ['Stoneware', 'Ash glaze'],
    dimensions: { w: 18, d: 18, h: 36 },
    finishes: [
      { label: 'Ash', hex: '#DAD3C4' },
      { label: 'Iron', hex: '#59544C' },
    ],
    lead: 'In stock',
    images: [
      'photo-1533090161767-e6ffed986c88',
      'photo-1595428774223-ef52624120d2',
      'photo-1594026112284-02bb6f3352fe',
    ],
  },
  {
    id: 'ae-11',
    name: 'Linen Curtain Panel',
    category: 'textiles',
    price: 14500,
    designer: 'Atelier Ghosh',
    year: 2024,
    excerpt: 'Stonewashed linen, 280cm drop.',
    description:
      'A heavyweight linen that filters rather than blocks. Stonewashed before cutting so the drape is settled on arrival, with a concealed tape header that works with both track and pole.',
    materials: ['Stonewashed Belgian linen'],
    dimensions: { w: 140, d: 0, h: 280 },
    finishes: [
      { label: 'Chalk', hex: '#E3DED3' },
      { label: 'Flax', hex: '#C3B49A' },
    ],
    lead: '2–3 weeks',
    images: [
      'photo-1522771739844-6a9f6d5f14af',
      'photo-1513694203232-719a280e022f',
      'photo-1538688525198-9b88f6f53126',
    ],
  },
  {
    id: 'ae-12',
    name: 'Anvil Table Lamp',
    category: 'lighting',
    collection: 'low-light',
    price: 18600,
    designer: 'Marcus Lindqvist',
    year: 2025,
    excerpt: 'Blown glass shade on a solid brass base.',
    description:
      'Opal glass hand-blown in Firozabad, seated on a turned brass base heavy enough to stay honest on a soft surface. The dimmer is inline and metal — no plastic wheel.',
    materials: ['Opal blown glass', 'Solid brass'],
    dimensions: { w: 26, d: 26, h: 44 },
    finishes: [
      { label: 'Raw brass', hex: '#A98548' },
      { label: 'Patinated', hex: '#6B5B3E' },
    ],
    lead: '3–4 weeks',
    images: [
      'photo-1507473885765-e6ed057f782c',
      'photo-1550226891-ef816aed4a98',
      'photo-1558618666-fcd25c85cd64',
    ],
  },
  {
    id: 'ae-13',
    name: 'Perch Dining Chair',
    category: 'seating',
    collection: 'the-long-table',
    price: 21000,
    designer: 'Ines Okafor',
    year: 2024,
    excerpt: 'Stackable, paper-cord seat, ten-year frame guarantee.',
    description:
      'A dining chair proportioned for long sittings and small apartments. The paper-cord seat is woven by hand over three hours and can be re-woven rather than replaced. Stacks four high.',
    materials: ['Solid oak', 'Danish paper cord'],
    dimensions: { w: 48, d: 52, h: 78, seat: 45 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Ebonised', hex: '#2C2A26' },
    ],
    lead: '5–6 weeks',
    images: [
      'photo-1549187774-b4e9b0445b41',
      'photo-1600585152220-90363fe7e115',
      'photo-1530018352490-c6eef07fd7d0',
    ],
  },
  {
    id: 'ae-14',
    name: 'Quarry Coffee Table',
    category: 'tables',
    price: 86000,
    designer: 'Studio Aethera',
    year: 2023,
    excerpt: 'A low limestone plane on a recessed base.',
    description:
      'Deliberately low and deliberately large — a coffee table that functions as a surface for everything rather than a pedestal for one object. The base is recessed 18cm on all sides so the top appears to float.',
    materials: ['Honed limestone', 'Powder-coated steel'],
    dimensions: { w: 130, d: 72, h: 32 },
    finishes: [{ label: 'Pale limestone', hex: '#D6CFC0' }],
    lead: '7–9 weeks',
    images: [
      'photo-1604578762246-41134e37f9cc',
      'photo-1612198188060-c7c2a3b66eae',
      'photo-1526057565006-20beab8dd2ed',
    ],
  },
  {
    id: 'ae-15',
    name: 'Tide Wall Mirror',
    category: 'objects',
    price: 32000,
    designer: 'Marcus Lindqvist',
    year: 2024,
    excerpt: 'Bevelled glass in a hand-shaped ash surround.',
    description:
      'The surround is shaped by hand, so the section thickens slightly toward the base — a detail you register as balance before you register as form. Hangs on a French cleat, included.',
    materials: ['Solid ash', 'Bevelled mirror glass'],
    dimensions: { w: 70, d: 4, h: 110 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8' },
      { label: 'Walnut', hex: '#6E4B32' },
    ],
    lead: '5 weeks',
    images: [
      'photo-1618220179428-22790b461013',
      'photo-1615873968403-89e068629265',
      'photo-1524484485831-a92ffc0de03f',
    ],
  },
  {
    id: 'ae-16',
    name: 'Cairn Stool',
    category: 'seating',
    collection: 'atelier-series',
    price: 16800,
    designer: 'Atelier Ghosh',
    year: 2025,
    excerpt: 'Turned from a single section of mango wood.',
    description:
      'Made from salvaged mango wood, turned green and allowed to move as it dries — so no two are identical and small checks in the end grain are part of the piece, not a fault in it.',
    materials: ['Salvaged mango wood', 'Beeswax finish'],
    dimensions: { w: 34, d: 34, h: 45 },
    finishes: [{ label: 'Waxed natural', hex: '#B99A76' }],
    lead: 'In stock',
    images: [
      'photo-1586023492125-27b2c045efd7',
      'photo-1583845112203-29329902332e',
      'photo-1578662996442-48f60103fc96',
    ],
  },
  {
    id: 'ae-17',
    name: 'Ledger Writing Desk',
    category: 'tables',
    price: 78000,
    designer: 'Ines Okafor',
    year: 2025,
    editorial: true,
    excerpt: 'A compact desk with a cable channel cut into the apron.',
    description:
      'Designed for rooms that are not offices. The apron carries a routed cable channel and a felt-lined drawer sized for a laptop, so the surface can be cleared completely at the end of a working day.',
    materials: ['Solid ash', 'Wool felt lining', 'Brass pull'],
    dimensions: { w: 120, d: 58, h: 74 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8' },
      { label: 'Smoked oak', hex: '#7A6350' },
    ],
    lead: '6–8 weeks',
    images: [
      'photo-1593062096033-9a26b09da705',
      'photo-1524484485831-a92ffc0de03f',
      'photo-1567016376408-0226e4d0c1ea',
    ],
  },
  {
    id: 'ae-18',
    name: 'Ember Ceramic Bowl',
    category: 'objects',
    collection: 'atelier-series',
    price: 4200,
    designer: 'Atelier Ghosh',
    year: 2024,
    excerpt: 'Wood-fired stoneware, no two alike.',
    description:
      'Fired in a wood kiln over four days, which leaves a flash of colour where the flame passed. Food safe, dishwasher safe, and intended for daily use rather than a shelf.',
    materials: ['Wood-fired stoneware'],
    dimensions: { w: 24, d: 24, h: 9 },
    finishes: [
      { label: 'Flame', hex: '#9C5B3C' },
      { label: 'Ash', hex: '#DAD3C4' },
    ],
    lead: 'In stock',
    images: [
      'photo-1595428774223-ef52624120d2',
      'photo-1533090161767-e6ffed986c88',
      'photo-1538688525198-9b88f6f53126',
    ],
  },
]

export const products = raw.map((p) => ({
  ...p,
  slug: p.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  img: (i = 0, w = 1200) => u(p.images[i] ?? p.images[0], w),
}))

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const getCategory = (slug) => categories.find((c) => c.slug === slug)
export const getCollection = (slug) => collections.find((c) => c.slug === slug)
export const imageUrl = u
