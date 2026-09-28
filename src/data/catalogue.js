/**
 * The whole catalogue: categories, pieces, spaces, materials, voices and the
 * three prepared rooms the Room Assistant reads.
 *
 * Imagery is served from the Unsplash CDN. `img()` builds a sized URL; every
 * photo goes through <Img/>, which reserves its ratio and falls back to a tonal
 * block, so a missing asset never collapses a layout.
 */

export const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

/* ---------- categories (four, as drawn in the wireframe) ---------- */

export const CATEGORIES = [
  {
    id: 'seating',
    name: 'Seating',
    items: 'Sofas, lounge chairs, benches',
    tagline: 'Built around the way a room is actually used, not the way it photographs.',
    image: 'photo-1723257131566-c331ac692297',
  },
  {
    id: 'tables',
    name: 'Tables',
    items: 'Coffee tables, side tables, dining tables',
    tagline: 'Dining, side and working surfaces in solid timber and honest stone.',
    image: 'photo-1605885795793-097ffaee6b7c',
  },
  {
    id: 'storage',
    name: 'Storage',
    items: 'Shelves, cabinets, organisers',
    tagline: 'Pieces that hold the everyday without announcing it.',
    image: 'photo-1758974782657-e5ada4b01c3c',
  },
  {
    id: 'lighting',
    name: 'Lighting',
    items: 'Floor lamps, table lamps, ambient lighting',
    tagline: 'Paper, linen and blown glass — light softened before it reaches the room.',
    image: 'photo-1787058513521-d437e6cb1913',
  },
]

/* ---------- pieces ---------- */

export const PRODUCTS = [
  {
    id: 'linen-lounge-sofa',
    name: 'Linen Lounge Sofa',
    cat: 'seating',
    spaces: ['living-room'],
    price: 3750,
    designer: 'Ines Okafor',
    year: 2025,
    arrival: true,
    featured: true,
    excerpt: 'Three seats, one continuous line, no visible hardware.',
    description:
      'A sofa built to be lived on rather than looked at. Feather-wrapped cushions are removable and re-coverable; the frame is FSC-certified beech with webbing that can be re-tensioned at home. Every seam runs parallel to the floor, which is why the piece reads as one line from across a room.',
    materials: ['FSC beech frame', 'Feather-wrapped foam', 'Belgian linen'],
    dim: { w: 232, d: 92, h: 68, seat: 40 },
    finishes: [
      { label: 'Chalk', hex: '#E3DED3' },
      { label: 'Clay', hex: '#A98166' },
      { label: 'Moss', hex: '#5E6650' },
    ],
    lead: '10–12 weeks',
    images: [
      'photo-1723257131566-c331ac692297',
      'photo-1664711942326-2c3351e215e6',
      'photo-1761330440315-7550eb161354',
    ],
  },
  {
    id: 'walnut-reading-chair',
    name: 'Walnut Reading Chair',
    cat: 'seating',
    spaces: ['living-room', 'bedroom'],
    price: 1490,
    designer: 'Marcus Lindqvist',
    year: 2025,
    arrival: true,
    featured: true,
    excerpt: 'A curved shell pressed from eleven layers of walnut veneer.',
    description:
      'A compact reading chair with a shell pressed from eleven layers of walnut veneer. The curve does the structural work, so the frame beneath it can stay slight. Best placed where it can be seen from behind.',
    materials: ['Moulded walnut', 'Wool felt seat'],
    dim: { w: 68, d: 72, h: 76, seat: 42 },
    finishes: [
      { label: 'Walnut', hex: '#6E4B32' },
      { label: 'Pale ash', hex: '#DCCFB8' },
    ],
    lead: '6 weeks',
    images: [
      'photo-1658211312038-4293c7bdd37e',
      'photo-1763279934323-edb3735f6a6e',
      'photo-1713286663271-809d910c0c65',
    ],
  },
  {
    id: 'stone-lamp-table',
    name: 'Stone Lamp Table',
    cat: 'tables',
    spaces: ['living-room', 'bedroom'],
    price: 580,
    designer: 'Studio Aethera',
    year: 2025,
    arrival: true,
    excerpt: 'A single block of travertine, cut once.',
    description:
      'Cut from one block of unfilled travertine and honed rather than polished, so the surface holds light instead of reflecting it. Each piece varies; the veining you receive is photographed before it ships.',
    materials: ['Unfilled travertine'],
    dim: { w: 42, d: 42, h: 48 },
    finishes: [{ label: 'Honed travertine', hex: '#D8CDBB' }],
    lead: '4–5 weeks',
    images: [
      'photo-1717416697965-181d1ed75888',
      'photo-1717416697464-6c6ad56b258a',
      'photo-1717416697687-3d01d0ffeb51',
    ],
  },
  {
    id: 'oak-frame-coffee-table',
    name: 'Oak Frame Coffee Table',
    cat: 'tables',
    spaces: ['living-room'],
    price: 1740,
    designer: 'Studio Aethera',
    year: 2025,
    arrival: true,
    featured: true,
    excerpt: 'A low honed plane inside a recessed oak frame.',
    description:
      'Deliberately low and deliberately large — a coffee table that works as a surface for everything rather than a pedestal for one object. The oak frame is recessed 18cm on all sides, so the top appears to float clear of it.',
    materials: ['Solid oak frame', 'Honed limestone'],
    dim: { w: 130, d: 72, h: 32 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Smoked oak', hex: '#7A6350' },
    ],
    lead: '7–9 weeks',
    images: [
      'photo-1543936177-12e24c26776a',
      'photo-1600623050499-84929aad17c9',
      'photo-1647967527216-adea2f078e07',
    ],
  },
  {
    id: 'boucle-lounge-chair',
    name: 'Bouclé Lounge Chair',
    cat: 'seating',
    spaces: ['living-room', 'bedroom'],
    price: 1290,
    designer: 'Studio Aethera',
    year: 2025,
    featured: true,
    excerpt: 'A low, wide seat in oiled ash and undyed bouclé.',
    description:
      'This chair began as a question: what does a seat look like when it is designed for the second hour rather than the first? The answer was a lower seat, a deeper pitch and a back that carries weight across the shoulder rather than the spine. The frame is steam-bent ash, oiled rather than lacquered, so it darkens slowly with use.',
    materials: ['Steam-bent ash', 'Undyed bouclé', 'Brass fixings'],
    dim: { w: 78, d: 84, h: 72, seat: 38 },
    finishes: [
      { label: 'Undyed', hex: '#E7E1D5' },
      { label: 'Oat', hex: '#CFC4AE' },
      { label: 'Slate', hex: '#6E7176' },
    ],
    lead: '6–8 weeks',
    images: [
      'photo-1695457264710-304756bfc89c',
      'photo-1695457264728-ed616015c6b2',
      'photo-1686510347470-0e36eb055a30',
    ],
  },
  {
    id: 'oak-dining-chair',
    name: 'Oak Dining Chair',
    cat: 'seating',
    spaces: ['workspace'],
    price: 430,
    designer: 'Ines Okafor',
    year: 2024,
    excerpt: 'Stackable, paper-cord seat, ten-year frame guarantee.',
    description:
      'A dining chair proportioned for long sittings and small rooms. The paper-cord seat is woven by hand over three hours and can be re-woven rather than replaced. Stacks four high.',
    materials: ['Solid oak', 'Danish paper cord'],
    dim: { w: 48, d: 52, h: 78, seat: 45 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Ebonised', hex: '#2C2A26' },
    ],
    lead: '5–6 weeks',
    images: [
      'photo-1699588772787-1eed3b726e0a',
      'photo-1650476524564-f94dc9669067',
      'photo-1487015307662-6ce6210680f1',
    ],
  },
  {
    id: 'mango-wood-stool',
    name: 'Mango Wood Stool',
    cat: 'seating',
    spaces: ['bedroom'],
    price: 340,
    designer: 'Atelier Ghosh',
    year: 2025,
    excerpt: 'Turned from a single section of salvaged mango.',
    description:
      'Turned green from salvaged mango wood and allowed to move as it dries — so no two are identical, and small checks in the end grain are part of the piece rather than a fault in it.',
    materials: ['Salvaged mango wood', 'Beeswax finish'],
    dim: { w: 34, d: 34, h: 45 },
    finishes: [{ label: 'Waxed natural', hex: '#B99A76' }],
    lead: 'In stock',
    images: [
      'photo-1779278547541-370129cc09f7',
      'photo-1622759660470-63d4369958ba',
      'photo-1692731753374-9145fff9b0cb',
    ],
  },
  {
    id: 'oak-dining-table',
    name: 'Oak Dining Table',
    cat: 'tables',
    spaces: ['living-room'],
    price: 2590,
    designer: 'Ines Okafor',
    year: 2024,
    featured: true,
    excerpt: 'Two metres of solid oak on a pared trestle base.',
    description:
      'A table sized for the meal that runs long. The top is quarter-sawn oak finished with hardwax oil, so scratches can be spot-repaired instead of refinished. The trestle sits inboard by 32cm, which is the difference between six comfortable seats and eight uncomfortable ones.',
    materials: ['Quarter-sawn oak', 'Hardwax oil finish'],
    dim: { w: 200, d: 95, h: 74 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Smoked oak', hex: '#7A6350' },
    ],
    lead: '8–10 weeks',
    images: [
      'photo-1605885795793-097ffaee6b7c',
      'photo-1769541072159-81a0ad69b66a',
      'photo-1597072689227-8882273e8f6a',
    ],
  },
  {
    id: 'ash-writing-desk',
    name: 'Ash Writing Desk',
    cat: 'tables',
    spaces: ['workspace'],
    price: 1580,
    designer: 'Ines Okafor',
    year: 2025,
    featured: true,
    excerpt: 'A compact desk with a cable channel cut into the apron.',
    description:
      'Designed for rooms that are not offices. The apron carries a routed cable channel and a felt-lined drawer sized for a laptop, so the surface can be cleared completely at the end of a working day.',
    materials: ['Solid ash', 'Wool felt lining', 'Brass pull'],
    dim: { w: 120, d: 58, h: 74 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8' },
      { label: 'Smoked oak', hex: '#7A6350' },
    ],
    lead: '6–8 weeks',
    images: [
      'photo-1449247709967-d4461a6a6103',
      'photo-1772475385509-93fd87a2d4ba',
      'photo-1766330977451-de1b64b5e641',
    ],
  },
  {
    id: 'ash-shelving-system',
    name: 'Ash Shelving System',
    cat: 'storage',
    spaces: ['workspace', 'living-room'],
    price: 1890,
    designer: 'Studio Aethera',
    year: 2023,
    excerpt: 'Modular ash uprights; shelves that move without tools.',
    description:
      'Six shelf heights, three depths, no fasteners. The system relies on a machined notch rather than a bracket, which keeps the sightline clean and makes reconfiguring it a two-minute job. Add bays as the room changes.',
    materials: ['Solid ash', 'Powder-coated steel'],
    dim: { w: 180, d: 34, h: 196 },
    finishes: [
      { label: 'Pale ash', hex: '#DCCFB8' },
      { label: 'Ebonised', hex: '#2C2A26' },
    ],
    lead: '6–8 weeks',
    images: [
      'photo-1733764682545-40c0c659cd29',
      'photo-1612416845256-8414b229f853',
      'photo-1772797583328-f83bc3f94f80',
    ],
  },
  {
    id: 'fluted-oak-sideboard',
    name: 'Fluted Oak Sideboard',
    cat: 'storage',
    spaces: ['living-room'],
    price: 2250,
    designer: 'Marcus Lindqvist',
    year: 2025,
    featured: true,
    excerpt: 'Fluted doors, push latch, no handles.',
    description:
      'The fluting is not decoration — it is the handle. Each door is milled with a run of shallow half-rounds that give the hand purchase anywhere along the face, so the piece reads as one uninterrupted plane when closed.',
    materials: ['Fluted oak', 'Soft-close hardware', 'Linoleum interior'],
    dim: { w: 168, d: 45, h: 72 },
    finishes: [
      { label: 'Natural oak', hex: '#C8A97E' },
      { label: 'Bone lacquer', hex: '#E8E3D8' },
    ],
    lead: '8–10 weeks',
    images: [
      'photo-1758974782657-e5ada4b01c3c',
      'photo-1532588213355-52317771cce6',
      'photo-1563371557-d98db5294563',
    ],
  },
  {
    id: 'washi-floor-lamp',
    name: 'Washi Floor Lamp',
    cat: 'lighting',
    spaces: ['living-room', 'bedroom'],
    price: 460,
    designer: 'Studio Aethera',
    year: 2025,
    featured: true,
    excerpt: 'Hand-folded washi over a blackened steel spine.',
    description:
      'Light is diffused twice — once through the washi shade, once off the floor. The result sits closer to candlelight than to a lamp. The shade is replaceable and ships flat; the spine is blackened steel, weighted low so it stays put on a rug.',
    materials: ['Washi paper', 'Blackened steel', 'Linen cord'],
    dim: { w: 42, d: 42, h: 158 },
    finishes: [{ label: 'Natural washi', hex: '#EFE8D9' }],
    lead: '3–4 weeks',
    images: [
      'photo-1786075235955-350ef4d4a7f7',
      'photo-1782010657327-0a206c93d172',
      'photo-1776525433194-449b9a2c01ae',
    ],
  },
  {
    id: 'brass-table-lamp',
    name: 'Brass Table Lamp',
    cat: 'lighting',
    spaces: ['bedroom', 'workspace'],
    price: 380,
    designer: 'Marcus Lindqvist',
    year: 2025,
    excerpt: 'Blown opal glass on a turned brass base.',
    description:
      'Opal glass, hand-blown, seated on a turned brass base heavy enough to stay honest on a soft surface. The dimmer is inline and metal — no plastic wheel.',
    materials: ['Opal blown glass', 'Solid brass'],
    dim: { w: 26, d: 26, h: 44 },
    finishes: [
      { label: 'Raw brass', hex: '#A98548' },
      { label: 'Patinated', hex: '#6B5B3E' },
    ],
    lead: '3–4 weeks',
    images: [
      'photo-1787058513521-d437e6cb1913',
      'photo-1667312939978-64cf31718a6e',
      'photo-1765371512501-d25a6af94c91',
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
    cover: 'photo-1664711942326-2c3351e215e6',
    detail: 'photo-1543936177-12e24c26776a',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    tagline: 'The room you return to rather than perform in.',
    description:
      'Brushed surfaces, undyed cloth and nothing that shines. A bedroom should be the least demanding room in a home, so these pieces are chosen to recede.',
    cover: 'photo-1762199904138-d163fe89540a',
    detail: 'photo-1552558636-f6a8f071c2b3',
  },
  {
    id: 'workspace',
    name: 'Workspace',
    tagline: 'A focused environment that supports creativity and clarity.',
    description:
      'Designed for rooms that are not offices. A surface that can be cleared completely, a chair you can sit in for three hours, and storage that keeps the work out of sight when the day ends.',
    cover: 'photo-1449247709967-d4461a6a6103',
    detail: 'photo-1772475385509-93fd87a2d4ba',
  },
]

/* ---------- materials ---------- */

export const MATERIALS = [
  {
    name: 'Solid oak',
    note: 'Strong, warm, and built to age beautifully.',
    image: 'photo-1644931551533-02906718127f',
  },
  {
    name: 'Linen upholstery',
    note: 'Soft textures that bring comfort and calm.',
    image: 'photo-1528458909336-e7a0adfed0a5',
  },
  {
    name: 'Matte stone',
    note: 'Natural surfaces with quiet character.',
    image: 'photo-1606208594041-3dfd470247ce',
  },
]

/* ---------- voices ---------- */

export const VOICES = [
  {
    quote:
      'We bought one chair to test them and ended up furnishing the whole room. Two years on, it still looks like the day it arrived — only softer.',
    name: 'Anna Reinhardt',
    place: 'Copenhagen',
  },
  {
    quote:
      'The room assistant picked three pieces I would not have put together. It was right, and the flat has felt finished ever since.',
    name: 'Joseph Mwangi',
    place: 'Lisbon',
  },
  {
    quote:
      'Everything arrived assembled and placed. No boxes, no allen keys, no afternoon lost. That is worth as much to me as the furniture.',
    name: 'Priya Raghunathan',
    place: 'Bengaluru',
  },
]

/* ---------- prepared rooms for the Room Assistant ---------- */

export const ROOMS = [
  {
    id: 'north-facing-living-room',
    name: 'North-facing living room',
    summary: 'Cool light, high ceiling, one long empty wall.',
    image: 'photo-1772797583328-f83bc3f94f80',
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
    image: 'photo-1770036093292-81a073b107ca',
    reading: [
      { label: 'Light', note: 'Warm and low after 4pm, with one corner the daylight never reaches.' },
      { label: 'Proportion', note: 'Under 12m². Anything with a visible frame will read lighter than a solid volume.' },
      { label: 'Palette', note: 'Linen and walnut already present. Keep additions within one tone of what is there.' },
    ],
    picks: [
      { id: 'walnut-reading-chair', why: 'A visible frame and a raised shell, so the corner keeps its floor and the room keeps its air.' },
      { id: 'brass-table-lamp', why: 'Warm, dimmable light at table height — the dark corner lit without an overhead fitting.' },
      { id: 'mango-wood-stool', why: 'A surface beside the chair that can move: bedside table one week, plant stand the next.' },
    ],
    note: 'Light the dark corner at table height rather than overhead, and keep the floor as open as you can.',
  },
  {
    id: 'workspace-alcove',
    name: 'Workspace alcove',
    summary: 'A working corner inside a room used for other things.',
    image: 'photo-1766330977451-de1b64b5e641',
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
