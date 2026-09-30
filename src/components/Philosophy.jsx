import { Link } from 'react-router-dom'
import Img from './Img'

/**
 * Brand philosophy: a strong statement, close-ups of hands and joinery, and
 * evidence rather than adjectives — every number here is already true of a
 * piece in the catalogue.
 *
 *   a · split      the hands photograph fills the left half, the statement and
 *                  three proofs sit in the space on the right
 *   b · spread     the statement runs across the page in large type above four
 *                  material close-ups, each with its own proof
 *   c · pair       statement, a joinery photograph and a hands photograph side
 *                  by side, each captioned with what it shows
 *
 * Every layout is sized from the viewport, so it fits one screen.
 */

const STATEMENT = 'We make fewer things, in smaller runs, for rooms meant to be lived in rather than looked at.'

const IMG = {
  chisel: { id: 'photo-1497219055242-93359eeed651', alt: 'A pair of hands cutting a curve into pale timber with a chisel', at: '38% center' },
  joint: { id: 'photo-1561435375-c3e1b6fdd7d7', alt: 'A timber section with a mortise cut cleanly into it', at: 'center' },
  grain: { id: 'photo-1566733622605-eedf4a0f8223', alt: 'Straight, close grain running down a board', at: 'center' },
  walnut: { id: 'photo-1697507695420-04623ccff2af', alt: 'Deep, figured walnut grain', at: 'center' },
}

const PROOF = [
  { n: '11', t: 'layers of walnut veneer', d: 'pressed into every shell chair' },
  { n: '3', t: 'hours', d: 'to weave one paper-cord seat by hand' },
  { n: '10', t: 'years', d: 'frame guarantee on the dining chair' },
  { n: '11', t: 'makers', d: 'in one workshop, making to order' },
]

const cta = <Link className="tlink" to="/shop">Explore the collection</Link>

function Photo({ k, w = 1600, ratio = '4 / 5', priority = false }) {
  const p = IMG[k]
  // a focal point asks the CDN for a genuinely tighter crop, not just a positioned one
  return <Img id={p.id} alt={p.alt} ratio={ratio} w={w} position={p.at} priority={priority} {...(p.fp ? { ar: ratio.replace(/\s/g, '').replace('/', ':'), fp: p.fp } : {})} />
}

function Proof({ p }) {
  return (
    <div className="ph__proof">
      <span className="ph__n disp">{p.n}</span>
      <span className="ph__d"><b>{p.t}</b> {p.d}</span>
    </div>
  )
}

export default function Philosophy({ variant = 'a' }) {
  if (variant === 'b') {
    return (
      <section className="ph ph--b" id="philosophy">
        <div className="wrap ph__wrap">
          <div className="ph__head">
            <span className="eyebrow" data-reveal="">Our philosophy</span>
            <p className="disp ph__big" data-reveal="" data-delay="1">{STATEMENT}</p>
          </div>
          <div className="ph__row">
            {[['chisel', PROOF[3]], ['joint', PROOF[0]], ['grain', PROOF[1]], ['walnut', PROOF[2]]].map(([k, p], i) => (
              <div className="ph__col" key={k} data-reveal="" data-delay={Math.min(i + 1, 4)}>
                <div className="ph__ph"><Photo k={k} w={1000} ratio="3 / 4" /></div>
                <Proof p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'c') {
    return (
      <section className="ph ph--c" id="philosophy">
        <div className="wrap ph__wrap">
          <div className="ph__side">
            <span className="eyebrow" data-reveal="">Our philosophy</span>
            <p className="disp ph__mid" data-reveal="" data-delay="1">{STATEMENT}</p>
            <span data-reveal="" data-delay="2">{cta}</span>
          </div>
          <figure className="ph__fig ph__fig--lo" data-reveal="mask">
            <div className="ph__ph"><Photo k="joint" w={1400} ratio="3 / 4" /></div>
            <figcaption>Cut to fit, then fitted once — no bracket, no filler.</figcaption>
          </figure>
          <figure className="ph__fig" data-reveal="mask" data-delay="2">
            <div className="ph__ph"><Photo k="chisel" w={1400} ratio="3 / 4" /></div>
            <figcaption>Made to order in a workshop of eleven people.</figcaption>
          </figure>
        </div>
      </section>
    )
  }

  return (
    <section className="ph ph--a" id="philosophy">
      <div className="ph__img" data-reveal="mask"><Photo k="chisel" w={1800} priority /></div>
      <div className="ph__body">
        <span className="eyebrow" data-reveal="">Our philosophy</span>
        <p className="disp ph__mid" data-reveal="" data-delay="1">{STATEMENT}</p>
        <div className="ph__list" data-reveal="" data-delay="2">
          {PROOF.slice(0, 3).map(p => <Proof key={p.t} p={p} />)}
        </div>
        <span data-reveal="" data-delay="3">{cta}</span>
      </div>
    </section>
  )
}
