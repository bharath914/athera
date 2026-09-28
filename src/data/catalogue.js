/**
 * The whole catalogue: categories, pieces, spaces, materials, craft close-ups,
 * editorial stories and the three prepared rooms the Room Assistant reads.
 *
 * The seven categories, the five gallery views, the filter facets and the
 * editorial/craft sets all come from the core-flows brief (`coreflows.jpg`).
 *
 * Imagery is served from the Unsplash CDN. `img()` builds a sized URL; every
 * photo goes through <Img/>, which reserves its ratio and falls back to a tonal
 * block, so a missing asset never collapses a layout.
 */

export const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

/** A crop at a named ratio — used for the hero, which ships two crops. */
export const imgAt = (id, w, ar) => {
  const [rw, rh] = ar.split(':').map(Number)
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(
    (w * rh) / rw
  )}&q=85`
}

/* ---------- categories (the seven groups in the brief) ---------- */

export const CATEGORIES = [
  {
    id: 'sofas',
    name: 'Sofas and lounge chairs',
    short: 'Sofas & lounge chairs',
    items: 'Sofas, lounge chairs, stools',
    tagline: 'Built around the way a room is actually used, not the way it photographs.',
    image: 'photo-1745429523617-0d837856ca35',
  },
  {
    id: 'tables',
    name: 'Coffee and side tables',
    short: 'Coffee & side tables',
    items: 'Coffee tables, side tables',
    tagline: 'Low surfaces in solid timber and honest stone, sized for the room around them.',
    image: 'photo-1730104231026-46e3cf7c3141',
  },
  {
    id: 'dining',
    name: 'Dining tables and chairs',
    short: 'Dining tables & chairs',
    items: 'Dining tables, dining chairs, desks',
    tagline: 'Tables sized for the meal that runs long, and chairs you can stay in.',
    image: 'photo-1572297259518-0974576b6738',
  },
  {
    id: 'beds',
    name: 'Beds and bedside tables',
    short: 'Beds & bedside tables',
    items: 'Beds, headboards, bedside tables',
    tagline: 'The least demanding pieces in the house, so the room can recede.',
    image: 'photo-1552558636-f6a8f071c2b3',
  },
  {
    id: 'storage',
    name: 'Shelves and storage cabinets',
    short: 'Shelves & storage',
    items: 'Shelving, sideboards, cabinets',
    tagline: 'Pieces that hold the everyday without announcing it.',
    image: 'photo-1776482128045-66c880f2ed3a',
  },
  {
    id: 'lighting',
    name: 'Floor and table lamps',
    short: 'Floor & table lamps',
    items: 'Floor lamps, table lamps',
    tagline: 'Paper, linen and blown glass — light softened before it reaches the room.',
    image: 'photo-1778731525276-3d026f4ad45d',
  },
  {
    id: 'objects',
    name: 'Rugs, cushions and ceramic objects',
    short: 'Rugs, cushions & objects',
    items: 'Rugs, cushions, ceramics',
    tagline: 'The last layer: the things that make a room read as lived in.',
    image: 'photo-1719513709219-1d6e405ea017',
  },
]

/* ---------- gallery views (the five shots every piece is photographed in) --- */

export const VIEWS = ['Front', 'Side', 'Three-quarter', 'Back', 'Detail']

/* ---------- filter facets ---------- */

/** Colour families, so "colour" filters across finishes rather than per swatch. */
export const COLOURS = [
  { id: 'chalk', name: 'Chalk', hex: '#E7E1D5' },
  { id: 'sand', name: 'Sand', hex: '#D8C7A9' },
  { id: 'oak', name: 'Oak', hex: '#C8A97E' },
  { id: 'stone', name: 'Stone', hex: '#D8CDBB' },
  { id: 'sage', name: 'Sage', hex: '#7E8A73' },
  { id: 'walnut', name: 'Walnut', hex: '#6E4B32' },
  { id: 'charcoal', name: 'Charcoal', hex: '#2C2A26' },
  { id: 'brass', name: 'Brass', hex: '#A98548' },
]

export const SIZES = [
  { id: 'small', name: 'Small', note: 'Under 90 cm wide' },
  { id: 'medium', name: 'Medium', note: '90–160 cm wide' },
  { id: 'large', name: 'Large', note: 'Over 160 cm wide' },
]

/** Material families, so "material" filters across the way pieces list theirs. */
export const MATERIAL_FILTERS = [
  { id: 'oak', name: 'Oak and ash', match: ['oak', 'ash', 'beech', 'birch'] },
  { id: 'walnut', name: 'Walnut', match: ['walnut'] },
  { id: 'linen', name: 'Linen and cotton', match: ['linen', 'cotton', 'bouclé', 'paper cord'] },
  { id: 'wool', name: 'Wool and felt', match: ['wool', 'felt', 'feather'] },
  { id: 'stone', name: 'Travertine and stone', match: ['travertine', 'limestone', 'stone'] },
  { id: 'metal', name: 'Brass and steel', match: ['brass', 'steel', 'metal'] },
  { id: 'paper', name: 'Paper and glass', match: ['washi', 'glass', 'paper'] },
  { id: 'ceramic', name: 'Stoneware', match: ['stoneware', 'ceramic'] },
]

export const PRICE_BANDS = [
  { id: 'a', name: 'Under $500', min: 0, max: 499 },
  { id: 'b', name: '$500 – $1,500', min: 500, max: 1500 },
  { id: 'c', name: '$1,500 – $3,000', min: 1501, max: 3000 },
  { id: 'd', name: 'Over $3,000', min: 3001, max: Infinity },
]

/* ---------- pieces ---------- */

export const PRODUCTS = [
  {
    id: 'linen-lounge-sofa',
    name: 'Linen Lounge Sofa',
    cat: 'sofas',
    spaces: ['living-room'],
    price: 3750,
    size: 'large',
    designer: 'Ines Okafor',
    year: 2025,
    arrival: true,
    featured: true,
    bestseller: true,
    excerpt: 'Three seats, one continuous line, no visible hardware.',
    description:
      'A sofa built to be lived on rather than looked at. Feather-wrapped cushions are removable and re-coverable; the frame is FSC-certified beech with webbing that can be re-tensioned at home. Every seam runs parallel to the floor, which is why the piece reads as one line from across a room.',
    materials: ['Belgian linen', 'FSC beech frame', 'Feather-wrapped foam'],
    care:
      'Vacuum the linen monthly on a low setting and rotate the seat cushions each season so they wear evenly. Covers are removable and can be cold-washed; do not tumble dry. Blot spills, never rub. Keep out of direct afternoon sun, which fades undyed cloth faster than use does.',
    dim: { w: 232, d: 92, h: 68, seat: 40 },
    finishes: [
      { label: 'Chalk', hex: '#E3DED3', colour: 'chalk' },
      { label: 'Clay', hex: '#A98166', colour: 'sand' },
      { label: 'Moss', hex: '#5E6650', colour: 'sage' },
    ],
    lead: '10–12 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1768144092684-c1a5dd6c7aad', view: 'Front' },
      { id: 'photo-1758448755778-90ebf4d0f1e7', view: 'Three-quarter' },
      { id: 'photo-1745301558339-44eb3217d5da', view: 'Side' },
      { id: 'photo-1528458909336-e7a0adfed0a5', view: 'Detail' },
    ],
  },
  {
    id: 'walnut-reading-chair',
    name: 'Walnut Reading Chair',
    cat: 'sofas',
    spaces: ['living-room', 'bedroom'],
    price: 1490,
    size: 'small',
    designer: 'Marcus Lindqvist',
    year: 2025,
    arrival: true,
    featured: true,
    excerpt: 'A curved shell pressed from eleven layers of walnut veneer.',
    description:
      'A compact reading chair with a shell pressed from eleven layers of walnut veneer. The curve does the structural work, so the frame beneath it can stay slight. Best placed where it can be seen from behind.',
    materials: ['Moulded walnut', 'Wool felt seat'],
    care:
      'Dust with a dry cloth along the grain. Re-oil the shell once a year with a clear hardwax oil — a walnut veneer left dry will lighten unevenly. The felt seat pad lifts out and can be spot-cleaned with cold water.',
    dim: { w: 68, d: 72, h: 76, seat: 42 },
    finishes: [
      { label: 'Walnut', hex: '#6E4B32', colour: 'walnut' },
      { label: 'Pale ash', hex: '#DCCFB8', colour: 'oak' },
    ],
    lead: '6 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1786564026112-25e9ecdcf363', view: 'Three-quarter' },
      { id: 'photo-1758486561455-ebd0d3ba7423', view: 'Front' },
      { id: 'photo-1672797494267-affab75c2bc0', view: 'Side' },
      { id: 'photo-1564512533667-015a90133f04', view: 'Detail' },
    ],
  },
  {
    id: 'boucle-lounge-chair',
    name: 'Bouclé Lounge Chair',
    cat: 'sofas',
    spaces: ['living-room', 'bedroom'],
    price: 1290,
    size: 'small',
    designer: 'Studio Aethera',
    year: 2025,
    featured: true,
    bestseller: true,
    excerpt: 'A low, wide seat in oiled ash and undyed bouclé.',
    description:
      'This chair began as a question: what does a seat look like when it is designed for the second hour rather than the first? The answer was a lower seat, a deeper pitch and a back that carries weight across the shoulder rather than the spine. The frame is steam-bent ash, oiled rather than lacquered, so it darkens slowly with use.',
    materials: ['Steam-bent ash', 'Undyed bouclé', 'Brass fixings'],
    care:
      'Bouclé holds its loop best when it is brushed rather than vacuumed — use a soft upholstery brush in one direction. Pull, never cut, a snagged loop back through from behind. Re-oil the ash frame every eighteen months.',
    dim: { w: 78, d: 84, h: 72, seat: 38 },
    finishes: [
      { label: 'Undyed', hex: '#E7E1D5', colour: 'chalk' },
      { label: 'Oat', hex: '#CFC4AE', colour: 'sand' },
      { label: 'Slate', hex: '#6E7176', colour: 'charcoal' },
    ],
    lead: '6–8 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1785535573662-417e82193598', view: 'Front' },
      { id: 'photo-1758448755952-42b404bc6f39', view: 'Three-quarter' },
      { id: 'photo-1768946131536-39b5f3ec329d', view: 'Side' },
      { id: 'photo-1789655468281-c4a264d1410c', view: 'Detail' },
    ],
  },
  {
    id: 'mango-wood-stool',
    name: 'Mango Wood Stool',
    cat: 'sofas',
    spaces: ['bedroom'],
    price: 340,
    size: 'small',
    designer: 'Atelier Ghosh',
    year: 2025,
    excerpt: 'Turned from a single section of salvaged mango.',
    description:
      'Turned green from salvaged mango wood and allowed to move as it dries — so no two are identical, and small checks in the end grain are part of the piece rather than a fault in it.',
    materials: ['Salvaged mango wood', 'Beeswax finish'],
    care:
      'Wipe with a barely damp cloth and dry at once. Refresh the beeswax twice a year. Standing water will raise the grain, so do not use it as a drinks table without a coaster.',
    dim: { w: 34, d: 34, h: 45 },
    finishes: [{ label: 'Waxed natural', hex: '#B99A76', colour: 'oak' }],
    lead: 'In stock',
    stock: 'In stock',
    images: [
      { id: 'photo-1781388466821-609b24f7e12c', view: 'Front' },
      { id: 'photo-1786325492229-b6d7103ffa67', view: 'Three-quarter' },
      { id: 'photo-1786840228948-9b955498e991', view: 'Side' },
      { id: 'photo-1522092663698-61ab4b1aa6a7', view: 'Detail' },
    ],
  },
  {
    id: 'oak-frame-coffee-table',
    name: 'Oak Frame Coffee Table',
    cat: 'tables',
    spaces: ['living-room'],
    price: 1740,
    size: 'medium',
    designer: 'Studio Aethera',
    year: 2025,
    arrival: true,
    featured: true,
    bestseller: true,
    excerpt: 'A low honed plane inside a recessed oak frame.',
    description:
      'Deliberately low and deliberately large — a coffee table that works as a surface for everything rather than a pedestal for one object. The oak frame is recessed 18cm on all sides, so the top appears to float clear of it.',
    materials: ['Solid oak frame', 'Honed limestone'],
    care:
      'Seal the limestone once a year; unsealed stone will take a ring from a wine glass within minutes. Wipe with pH-neutral soap only — anything acidic will etch the honed surface. Re-oil the oak frame annually.',
    dim: { w: 130, d: 72, h: 32 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E', colour: 'oak' },
      { label: 'Smoked oak', hex: '#7A6350', colour: 'walnut' },
    ],
    lead: '7–9 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1784653548743-496e53468a5d', view: 'Front' },
      { id: 'photo-1784653548992-624a30f590cd', view: 'Three-quarter' },
      { id: 'photo-1787539386477-5324beb6eec7', view: 'Side' },
      { id: 'photo-1583418007992-a8e33a92e7ad', view: 'Detail' },
    ],
  },
  {
    id: 'stone-lamp-table',
    name: 'Stone Lamp Table',
    cat: 'tables',
    spaces: ['living-room', 'bedroom'],
    price: 580,
    size: 'small',
    designer: 'Studio Aethera',
    year: 2025,
    bestseller: true,
    arrival: true,
    excerpt: 'A single block of travertine, cut once.',
    description:
      'Cut from one block of unfilled travertine and honed rather than polished, so the surface holds light instead of reflecting it. Each piece varies; the veining you receive is photographed before it ships.',
    materials: ['Unfilled travertine'],
    care:
      'Travertine is porous and unfilled by design. Seal on arrival and again each year. Blot spills immediately — oil and wine will mark it permanently if left. Do not use vinegar, citrus or any acidic cleaner.',
    dim: { w: 42, d: 42, h: 48 },
    finishes: [{ label: 'Honed travertine', hex: '#D8CDBB', colour: 'stone' }],
    lead: '4–5 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1769736436858-65a86b395ef7', view: 'Front' },
      { id: 'photo-1765766638341-0beb9eb9926c', view: 'Three-quarter' },
      { id: 'photo-1762856490803-8e200418973a', view: 'Side' },
    ],
  },
  {
    id: 'oak-dining-table',
    name: 'Oak Dining Table',
    cat: 'dining',
    spaces: ['living-room'],
    price: 2590,
    size: 'large',
    designer: 'Ines Okafor',
    year: 2024,
    featured: true,
    bestseller: true,
    excerpt: 'Two metres of solid oak on a pared trestle base.',
    description:
      'A table sized for the meal that runs long. The top is quarter-sawn oak finished with hardwax oil, so scratches can be spot-repaired instead of refinished. The trestle sits inboard by 32cm, which is the difference between six comfortable seats and eight uncomfortable ones.',
    materials: ['Quarter-sawn oak', 'Hardwax oil finish'],
    care:
      'Hardwax oil is repairable, which is the point: sand a scratch back with 240 grit and re-oil that patch only. Re-oil the whole top once a year. Use a trivet — heat marks are the one thing the finish cannot absorb.',
    dim: { w: 200, d: 95, h: 74 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E', colour: 'oak' },
      { label: 'Smoked oak', hex: '#7A6350', colour: 'walnut' },
    ],
    lead: '8–10 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1572297259518-0974576b6738', view: 'Front' },
      { id: 'photo-1643999440226-7290747ef45f', view: 'Three-quarter' },
      { id: 'photo-1645301300961-e2bc264b51fd', view: 'Side' },
      { id: 'photo-1497218770144-3fea6dbc33fe', view: 'Detail' },
    ],
  },
  {
    id: 'oak-dining-chair',
    name: 'Oak Dining Chair',
    cat: 'dining',
    spaces: ['workspace'],
    price: 430,
    size: 'small',
    designer: 'Ines Okafor',
    year: 2024,
    bestseller: true,
    excerpt: 'Stackable, paper-cord seat, ten-year frame guarantee.',
    description:
      'A dining chair proportioned for long sittings and small rooms. The paper-cord seat is woven by hand over three hours and can be re-woven rather than replaced. Stacks four high.',
    materials: ['Solid oak', 'Danish paper cord'],
    care:
      'Paper cord must stay dry — blot, never soak. Vacuum the weave with a brush head. The cord tightens for the first year and then settles; if it slackens after a decade, we will re-weave the seat rather than replace the chair.',
    dim: { w: 48, d: 52, h: 78, seat: 45 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E', colour: 'oak' },
      { label: 'Ebonised', hex: '#2C2A26', colour: 'charcoal' },
    ],
    lead: '5–6 weeks',
    stock: 'In stock',
    images: [
      { id: 'photo-1540760029765-138c8f6d2eac', view: 'Front' },
      { id: 'photo-1690489965043-ec15758cce71', view: 'Three-quarter' },
      { id: 'photo-1785535573599-816365bdd4e4', view: 'Side' },
      { id: 'photo-1560258632-fb994fd2bd44', view: 'Detail' },
    ],
  },
  {
    id: 'ash-writing-desk',
    name: 'Ash Writing Desk',
    cat: 'dining',
    spaces: ['workspace'],
    price: 1580,
    size: 'medium',
    designer: 'Ines Okafor',
    year: 2025,
    featured: true,
    excerpt: 'A compact desk with a cable channel cut into the apron.',
    description:
      'Designed for rooms that are not offices. The apron carries a routed cable channel and a felt-lined drawer sized for a laptop, so the surface can be cleared completely at the end of a working day.',
    materials: ['Solid ash', 'Wool felt lining', 'Brass pull'],
    care:
      'Re-oil the top annually and the brass pull never — it is unlacquered and meant to patinate. Lift the felt drawer liner out to vacuum it. Run cables through the apron channel rather than over the back edge, which is where desks wear first.',
    dim: { w: 120, d: 58, h: 74 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8', colour: 'oak' },
      { label: 'Smoked oak', hex: '#7A6350', colour: 'walnut' },
    ],
    lead: '6–8 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1776482128008-2c9cf5bc0edc', view: 'Front' },
      { id: 'photo-1783437581569-d10b23df85f5', view: 'Three-quarter' },
      { id: 'photo-1778731525509-e1bb04020935', view: 'Side' },
      { id: 'photo-1595418312726-3beb2f4fe67e', view: 'Detail' },
    ],
  },
  {
    id: 'linen-platform-bed',
    name: 'Linen Platform Bed',
    cat: 'beds',
    spaces: ['bedroom'],
    price: 2980,
    size: 'large',
    designer: 'Ines Okafor',
    year: 2025,
    arrival: true,
    featured: true,
    bestseller: true,
    excerpt: 'A low upholstered platform with a headboard you can lean on.',
    description:
      'The platform sits 26cm from the floor, low enough that the room keeps its ceiling. The headboard is upholstered in washed linen over a webbed frame, so it gives slightly when you lean back against it rather than meeting you like a wall. Slats are solid beech and replaceable one at a time.',
    materials: ['Washed Belgian linen', 'Solid beech slats', 'FSC birch platform'],
    care:
      'The headboard cover unzips and can be cold-washed; reshape it damp and let it dry on the frame. Vacuum the platform sides monthly. Turn the mattress rather than the slats — the slats are handed and marked accordingly.',
    dim: { w: 168, d: 212, h: 92 },
    finishes: [
      { label: 'Chalk', hex: '#E3DED3', colour: 'chalk' },
      { label: 'Oat', hex: '#CFC4AE', colour: 'sand' },
      { label: 'Smoke', hex: '#6E7176', colour: 'charcoal' },
    ],
    lead: '9–11 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1631048501851-4aa85ffc3be8', view: 'Front' },
      { id: 'photo-1552558636-f6a8f071c2b3', view: 'Three-quarter' },
      { id: 'photo-1612152605347-f93296cb657d', view: 'Side' },
      { id: 'photo-1631048501786-4e97f20eac71', view: 'Back' },
      { id: 'photo-1606796913825-2b02883605e9', view: 'Detail' },
    ],
  },
  {
    id: 'oak-bedside-table',
    name: 'Oak Bedside Table',
    cat: 'beds',
    spaces: ['bedroom'],
    price: 620,
    size: 'small',
    designer: 'Marcus Lindqvist',
    year: 2025,
    arrival: true,
    excerpt: 'One open shelf, one drawer, nothing on the outside.',
    description:
      'Sized to sit level with the Linen Platform Bed. The drawer front is cut from the same board as the carcase so the grain runs straight through it, and the pull is a rebate rather than a handle — there is nothing to catch a sheet on at night.',
    materials: ['Solid oak', 'Hardwax oil finish'],
    care:
      'Dust along the grain and re-oil once a year. Wax the drawer runners with a candle stub if they tighten in a humid summer; they are wood on wood by design.',
    dim: { w: 46, d: 38, h: 54 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E', colour: 'oak' },
      { label: 'Smoked oak', hex: '#7A6350', colour: 'walnut' },
    ],
    lead: '5–6 weeks',
    stock: 'In stock',
    images: [
      { id: 'photo-1611486212557-88be5ff6f941', view: 'Three-quarter' },
      { id: 'photo-1766431066492-9bec8410a57b', view: 'Front' },
      { id: 'photo-1532372320572-cda25653a26d', view: 'Side' },
      { id: 'photo-1564512533667-015a90133f04', view: 'Detail' },
    ],
  },
  {
    id: 'ash-shelving-system',
    name: 'Ash Shelving System',
    cat: 'storage',
    spaces: ['workspace', 'living-room'],
    price: 1890,
    size: 'large',
    designer: 'Studio Aethera',
    year: 2023,
    excerpt: 'Modular ash uprights; shelves that move without tools.',
    description:
      'Six shelf heights, three depths, no fasteners. The system relies on a machined notch rather than a bracket, which keeps the sightline clean and makes reconfiguring it a two-minute job. Add bays as the room changes.',
    materials: ['Solid ash', 'Powder-coated steel'],
    care:
      'Lift shelves clear of the notch rather than sliding them, which is what rounds a notch over time. Re-oil the uprights annually. Wall-fix the top rail in any room with a floor that flexes.',
    dim: { w: 180, d: 34, h: 196 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8', colour: 'oak' },
      { label: 'Ebonised', hex: '#2C2A26', colour: 'charcoal' },
    ],
    lead: '6–8 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1787539386387-77e2f679f2da', view: 'Front' },
      { id: 'photo-1594272807878-93df1f68c357', view: 'Three-quarter' },
      { id: 'photo-1780257563050-0ee78acfeee8', view: 'Side' },
    ],
  },
  {
    id: 'fluted-oak-sideboard',
    name: 'Fluted Oak Sideboard',
    cat: 'storage',
    spaces: ['living-room'],
    price: 2250,
    size: 'large',
    designer: 'Marcus Lindqvist',
    year: 2025,
    featured: true,
    excerpt: 'Fluted doors, push latch, no handles.',
    description:
      'The fluting is not decoration — it is the handle. Each door is milled with a run of shallow half-rounds that give the hand purchase anywhere along the face, so the piece reads as one uninterrupted plane when closed.',
    materials: ['Fluted oak', 'Soft-close hardware', 'Linoleum interior'],
    care:
      'Dust the flutes with a soft brush rather than a cloth, which leaves lint in the grooves. The linoleum interior takes a damp cloth. Adjust the soft-close hinges after the first year; they settle once.',
    dim: { w: 168, d: 45, h: 72 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E', colour: 'oak' },
      { label: 'Bone lacquer', hex: '#E8E3D8', colour: 'chalk' },
    ],
    lead: '8–10 weeks',
    stock: 'Made to order',
    images: [
      { id: 'photo-1769690399048-acdcfa33cdc8', view: 'Front' },
      { id: 'photo-1707980716909-61b696e2b84d', view: 'Three-quarter' },
      { id: 'photo-1668957065541-d1af07128bd1', view: 'Side' },
      { id: 'photo-1732885479418-6e50e6f00397', view: 'Detail' },
    ],
  },
  {
    id: 'washi-floor-lamp',
    name: 'Washi Floor Lamp',
    cat: 'lighting',
    spaces: ['living-room', 'bedroom'],
    price: 460,
    size: 'small',
    designer: 'Studio Aethera',
    year: 2025,
    featured: true,
    bestseller: true,
    excerpt: 'Hand-folded washi over a blackened steel spine.',
    description:
      'Light is diffused twice — once through the washi shade, once off the floor. The result sits closer to candlelight than to a lamp. The shade is replaceable and ships flat; the spine is blackened steel, weighted low so it stays put on a rug.',
    materials: ['Washi paper', 'Blackened steel', 'Linen cord'],
    care:
      'Dust the shade with a dry brush only — washi marks with any moisture. Replacement shades ship flat and fit without tools. Use a bulb of 8W or less; the paper is close to the source.',
    dim: { w: 42, d: 42, h: 158 },
    finishes: [{ label: 'Natural washi', hex: '#EFE8D9', colour: 'chalk' }],
    lead: '3–4 weeks',
    stock: 'In stock',
    images: [
      { id: 'photo-1778731525385-c52ad855677c', view: 'Front' },
      { id: 'photo-1778731525372-0ec34ead8d08', view: 'Three-quarter' },
      { id: 'photo-1765181539706-361512106019', view: 'Detail' },
    ],
  },
  {
    id: 'brass-table-lamp',
    name: 'Brass Table Lamp',
    cat: 'lighting',
    spaces: ['bedroom', 'workspace'],
    price: 380,
    size: 'small',
    designer: 'Marcus Lindqvist',
    year: 2025,
    excerpt: 'Blown opal glass on a turned brass base.',
    description:
      'Opal glass, hand-blown, seated on a turned brass base heavy enough to stay honest on a soft surface. The dimmer is inline and metal — no plastic wheel.',
    materials: ['Opal blown glass', 'Solid brass'],
    care:
      'The brass is unlacquered and will darken; that is the finish, not a fault. Leave it, or bring it back with a brass cloth. Wash the opal shade in warm water once a year — dust is what dulls opal glass, not age.',
    dim: { w: 26, d: 26, h: 44 },
    finishes: [
      { label: 'Raw brass', hex: '#A98548', colour: 'brass' },
      { label: 'Patinated', hex: '#6B5B3E', colour: 'walnut' },
    ],
    lead: '3–4 weeks',
    stock: 'In stock',
    images: [
      { id: 'photo-1759264244741-7175af0b7e75', view: 'Front' },
      { id: 'photo-1789472785227-38c0043ddccb', view: 'Three-quarter' },
      { id: 'photo-1540759772348-12e90305e8f4', view: 'Side' },
      { id: 'photo-1595418312726-3beb2f4fe67e', view: 'Detail' },
    ],
  },
  {
    id: 'wool-flatweave-rug',
    name: 'Wool Flatweave Rug',
    cat: 'objects',
    spaces: ['living-room', 'bedroom'],
    price: 890,
    size: 'large',
    designer: 'Atelier Ghosh',
    year: 2025,
    arrival: true,
    featured: true,
    excerpt: 'Undyed wool, flatwoven, with a hand-knotted edge.',
    description:
      'Woven from the fleece of three flocks whose wool is left undyed, which is where the drift of tone across the rug comes from. Flatwoven rather than tufted, so it sits low enough to take a door and can be turned over and used from either side.',
    materials: ['Undyed wool', 'Cotton warp'],
    care:
      'Turn it end to end twice a year so the traffic evens out. Vacuum without a beater bar. Shedding for the first months is normal for undyed wool. Blot spills from the edge inwards; a professional wash every few years is enough.',
    dim: { w: 240, d: 170, h: 1 },
    finishes: [
      { label: 'Undyed', hex: '#D9CDB8', colour: 'sand' },
      { label: 'Stone', hex: '#B9B2A5', colour: 'stone' },
    ],
    lead: '4–6 weeks',
    stock: 'In stock',
    images: [
      { id: 'photo-1616980540826-5542d5aad277', view: 'Front' },
      { id: 'photo-1572427734891-5592aae758b2', view: 'Three-quarter' },
      { id: 'photo-1745589720030-c32f81367a57', view: 'Side' },
      { id: 'photo-1606203230902-89be7eb9fbe6', view: 'Detail' },
    ],
  },
  {
    id: 'linen-cushion-set',
    name: 'Linen Cushion Set',
    cat: 'objects',
    spaces: ['living-room', 'bedroom'],
    price: 180,
    size: 'small',
    designer: 'Studio Aethera',
    year: 2025,
    excerpt: 'Three washed-linen covers, feather inners included.',
    description:
      'Three covers in one weight of washed linen, cut in three sizes so they stack rather than compete. Closures are a plain linen tie — no zip to find with the back of your head. Feather inners are included and are overfilled by ten per cent, because linen relaxes.',
    materials: ['Washed Belgian linen', 'Feather inners'],
    care:
      'Cold wash, line dry, iron damp if you want them crisp — or do not, which is how they are photographed. Plump rather than fold. The linen softens for about twenty washes and then stops changing.',
    dim: { w: 50, d: 50, h: 14 },
    finishes: [
      { label: 'Chalk', hex: '#E7E1D5', colour: 'chalk' },
      { label: 'Clay', hex: '#A98166', colour: 'sand' },
      { label: 'Sage', hex: '#7E8A73', colour: 'sage' },
    ],
    lead: 'In stock',
    stock: 'In stock',
    images: [
      { id: 'photo-1611489704164-6f73c62bd810', view: 'Front' },
      { id: 'photo-1611490135455-3a02bb9eb653', view: 'Three-quarter' },
      { id: 'photo-1761330439252-325f2091e88d', view: 'Side' },
      { id: 'photo-1528458909336-e7a0adfed0a5', view: 'Detail' },
    ],
  },
  {
    id: 'ceramic-vessel-set',
    name: 'Ceramic Vessel Set',
    cat: 'objects',
    spaces: ['living-room', 'workspace'],
    price: 240,
    size: 'small',
    designer: 'Atelier Ghosh',
    year: 2025,
    arrival: true,
    excerpt: 'Three thrown vessels in an unglazed matt stoneware.',
    description:
      'Thrown in three heights so they group without matching, and left unglazed on the outside so the clay keeps its own colour. The interiors are glazed and watertight. Each one carries the thrower’s rings, which is the only decoration on them.',
    materials: ['Matt stoneware', 'Food-safe interior glaze'],
    care:
      'The unglazed exterior will take a mark from oil, so handle them with dry hands. Wash the interiors by hand. They are watertight but not dishwasher-safe, and the largest is not meant for a hot liquid.',
    dim: { w: 18, d: 18, h: 32 },
    finishes: [
      { label: 'Bone', hex: '#E4DCCB', colour: 'chalk' },
      { label: 'Sand', hex: '#C9B195', colour: 'sand' },
    ],
    lead: 'In stock',
    stock: 'In stock',
    images: [
      { id: 'photo-1597696929736-6d13bed8e6a8', view: 'Front' },
      { id: 'photo-1719513709219-1d6e405ea017', view: 'Three-quarter' },
      { id: 'photo-1508716897701-edab2a9e860c', view: 'Side' },
      { id: 'photo-1608111115633-872fa895d40d', view: 'Detail' },
    ],
  },
]

/* ---------- spaces ---------- */

export const SPACES = [
  {
    id: 'living-room',
    name: 'Living room',
    tagline: 'A room that holds people for longer than planned.',
    description:
      'Low seating, one generous surface and light kept below eye level. Everything here is proportioned so that a room reads as settled the moment you walk into it.',
    cover: 'photo-1680773525468-eda783c5bfe7',
    detail: 'photo-1599696848652-f0ff23bc911f',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    tagline: 'The room you return to rather than perform in.',
    description:
      'Brushed surfaces, undyed cloth and nothing that shines. A bedroom should be the least demanding room in a home, so these pieces are chosen to recede.',
    cover: 'photo-1750420556288-d0e32a6f517b',
    detail: 'photo-1642541070065-3912f347e7c6',
  },
  {
    id: 'workspace',
    name: 'Workspace',
    tagline: 'A focused environment that supports creativity and clarity.',
    description:
      'Designed for rooms that are not offices. A surface that can be cleared completely, a chair you can sit in for three hours, and storage that keeps the work out of sight when the day ends.',
    cover: 'photo-1738168266307-1d1515cbca2b',
    detail: 'photo-1764410481612-7544525b2991',
  },
]

/* ---------- the five materials the house works in ---------- */

export const MATERIALS = [
  { name: 'Natural oak and ash', note: 'Strong, warm, and built to age beautifully.' },
  { name: 'Linen and textured cotton', note: 'Washed before it is cut, so it never has to be broken in.' },
  { name: 'Travertine and muted stone', note: 'Honed rather than polished, so it holds light instead of throwing it.' },
  { name: 'Brushed metal accents', note: 'Unlacquered brass and blackened steel, left to patinate.' },
  { name: 'Cane, used sparingly', note: 'One woven plane per room is enough.' },
]

/* ---------- craftsmanship close-ups ---------- */
/* The seven shots that make quality visible, straight from the brief. */

export const CRAFT = [
  { name: 'Wood grain', note: 'Quarter-sawn, so the figure runs straight down the board.', image: 'photo-1564512533667-015a90133f04' },
  { name: 'Fabric weave', note: 'Washed linen, open enough to see the warp.', image: 'photo-1528458909336-e7a0adfed0a5' },
  { name: 'Joinery', note: 'Cut to fit, then fitted once — no bracket, no filler.', image: 'photo-1497218770144-3fea6dbc33fe' },
  { name: 'Rounded edges', note: 'Every arris eased by hand so the light turns the corner.', image: 'photo-1522092663698-61ab4b1aa6a7' },
  { name: 'Stitching', note: 'One seam per plane, run parallel to the floor.', image: 'photo-1789655468281-c4a264d1410c' },
  { name: 'Metal finishing', note: 'Unlacquered brass, brushed in one direction and left alone.', image: 'photo-1595418312726-3beb2f4fe67e' },
  { name: 'Hands crafting', note: 'Made to order in a workshop of eleven people.', image: 'photo-1659930087003-2d64e33181f7' },
]

/* ---------- editorial story images ---------- */
/* Atmosphere between the product sections, not products. */

export const EDITORIAL = [
  { id: 'sunlight', title: 'Sunlight falling on linen', note: 'Late morning, before the room is used.', image: 'photo-1601276174812-63280a55656e' },
  { id: 'reading', title: 'A quiet reading corner', note: 'One chair, one lamp, nothing else asked of it.', image: 'photo-1761330439629-d734ef9395b0' },
  { id: 'ceramics', title: 'Ceramic objects on wood', note: 'Three heights, no two alike.', image: 'photo-1719513709219-1d6e405ea017' },
  { id: 'curtains', title: 'Curtains moving near a window', note: 'The only thing in the room that changes.', image: 'photo-1612196808827-9ff25cb6137a' },
  { id: 'shadows', title: 'Shadows across furniture', note: 'Four o’clock, and the table draws itself.', image: 'photo-1738900737999-c7b0b26addc2' },
]

/* ---------- prepared rooms for the Room Assistant ---------- */

export const ROOMS = [
  {
    id: 'north-facing-living-room',
    name: 'North-facing living room',
    summary: 'Cool light, high ceiling, one long empty wall.',
    image: 'photo-1785535573593-6f3eb1cc8189',
    reading: [
      { label: 'Light', note: 'Cool and indirect until late afternoon. Warm materials will do more work here than bright ones.' },
      { label: 'Proportion', note: 'A 3.1m ceiling over a low sightline. Pieces can afford to sit low and wide.' },
      { label: 'Palette', note: 'Chalk walls, pale oak floor. Undyed cloth and honed stone will settle; high contrast will not.' },
    ],
    picks: [
      { id: 'linen-lounge-sofa', why: 'One long horizontal against the empty wall, in chalk linen so the cool light reads as soft rather than flat.' },
      { id: 'oak-frame-coffee-table', why: 'Low and wide enough to hold the centre of the room without adding a second visual line.' },
      { id: 'washi-floor-lamp', why: 'The one vertical in the scheme, and a warm light source to offset the northern daylight.' },
    ],
    note: 'Anchor the long wall with a single low line, then break it with one vertical: the floor lamp rather than a second seat.',
  },
  {
    id: 'small-city-bedroom',
    name: 'Small city bedroom',
    summary: 'Warm evening light, limited floor area, dark corner.',
    image: 'photo-1644057501622-dfa7dd26dbfb',
    reading: [
      { label: 'Light', note: 'Warm and low after 4pm, with one corner the daylight never reaches.' },
      { label: 'Proportion', note: 'Under 12m². Anything with a visible frame will read lighter than a solid volume.' },
      { label: 'Palette', note: 'Linen and walnut already present. Keep additions within one tone of what is there.' },
    ],
    picks: [
      { id: 'walnut-reading-chair', why: 'A visible frame and a raised shell, so the corner keeps its floor and the room keeps its air.' },
      { id: 'brass-table-lamp', why: 'Warm, dimmable light at table height — the dark corner lit without an overhead fitting.' },
      { id: 'oak-bedside-table', why: 'A rebated pull and a small footprint: a surface beside the bed with nothing to catch a sheet on.' },
    ],
    note: 'Light the dark corner at table height rather than overhead, and keep the floor as open as you can.',
  },
  {
    id: 'workspace-alcove',
    name: 'Workspace alcove',
    summary: 'A working corner inside a room used for other things.',
    image: 'photo-1699621106755-4fe40ce95d64',
    reading: [
      { label: 'Light', note: 'Side light from a single window. A surface placed square to it will avoid working in your own shadow.' },
      { label: 'Proportion', note: 'A 2.4m alcove. One desk, one chair and vertical storage is the whole brief.' },
      { label: 'Palette', note: 'Pale ash keeps the corner from reading as a separate, darker room.' },
    ],
    picks: [
      { id: 'ash-writing-desk', why: 'A surface that clears completely at the end of the day, with the cabling hidden in the apron.' },
      { id: 'oak-dining-chair', why: 'Comfortable for three hours and light enough to pull away when the corner is not in use.' },
      { id: 'ash-shelving-system', why: 'Storage that goes up rather than along, so the alcove ends at the wall.' },
    ],
    note: 'Choose storage that goes up rather than along, so the corner ends at the wall instead of spreading into the room.',
  },
]

/* ---------- lookups ---------- */

export const byId = id => PRODUCTS.find(p => p.id === id)
export const catById = id => CATEGORIES.find(c => c.id === id)
export const spaceById = id => SPACES.find(s => s.id === id)
export const inSpace = id => PRODUCTS.filter(p => p.spaces.includes(id))
export const inCat = id => PRODUCTS.filter(p => p.cat === id)
export const arrivals = () => PRODUCTS.filter(p => p.arrival)
export const bestsellers = () => PRODUCTS.filter(p => p.bestseller)

/** The photo a piece is represented by everywhere except its own gallery. */
export const cover = p => p.images[0].id

/** Every colour family a piece is actually offered in. */
export const coloursOf = p => [...new Set(p.finishes.map(f => f.colour))]

/** Does a piece use any material in this family? Matched on its own list. */
export const hasMaterial = (p, id) => {
  const f = MATERIAL_FILTERS.find(m => m.id === id)
  if (!f) return false
  const text = p.materials.join(' ').toLowerCase()
  return f.match.some(m => text.includes(m))
}
