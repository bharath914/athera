import { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from '../components/Img'
import CategoryCarousel from '../components/CategoryCarousel'
import FeaturedCollection, { collectionIds } from '../components/FeaturedCollection'
import Newsletter from '../components/Newsletter'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, CRAFT, EDITORIAL, PRODUCTS, SPACES, bestsellers } from '../data/catalogue'
import { cx } from '../lib/format'
import { useParallax } from '../lib/motion'

/**
 * The landing page carries the brief's nine parts, in the visual concept's
 * rhythm: no two consecutive sections share a shape. Full-screen visual ·
 * editorial index · horizontal row · asymmetric composition · grid ·
 * split-screen · texture band · spread · closing.
 *
 * Navigation and footer live in Layout.
 */

/** Best-sellers the featured collection has not already shown. */
const shown = new Set(collectionIds('b'))
const best = bestsellers().filter(p => !shown.has(p.id)).slice(0, 3)

const lead = EDITORIAL[0]
const ceramics = EDITORIAL.find(e => e.id === 'ceramics')

function Head({ eyebrow, title, lead: text, to, cta = 'View all' }) {
  return (
    <div className="head">
      <div className="head__t">
        <span className="eyebrow" data-reveal="">{eyebrow}</span>
        <h2 className="disp d2" data-reveal="" data-delay="1">{title}</h2>
        {text && <p className="lead" data-reveal="" data-delay="2">{text}</p>}
      </div>
      {to && <Link className="tlink" data-reveal="" data-delay="2" to={to}>{cta}</Link>}
    </div>
  )
}

/** Shop by category, as an index against one large frame rather than a grid. */
function CategoryIndex() {
  const [at, setAt] = useState(0)

  return (
    <div className="cindex">
      <div className="cindex__stage cindex__frame" data-reveal="mask">
        {CATEGORIES.map((c, i) => (
          <Img
            key={c.id}
            id={c.image}
            alt={c.name}
            ratio="4 / 5"
            w={1000}
            priority={i === 0}
            className={cx(i === at && 'on')}
          />
        ))}
      </div>

      <div>
        <ul className="cindex__list">
          {CATEGORIES.map((c, i) => (
            <li key={c.id} data-reveal="" data-delay={Math.min(i, 5)}>
              <Link
                to={`/shop?c=${c.id}`}
                onMouseEnter={() => setAt(i)}
                onFocus={() => setAt(i)}
              >
                <span className="cindex__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cindex__name">{c.short}</h3>
                <span className="cindex__items">{c.items}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="cindex__foot" data-reveal="">
          <p className="fine">{PRODUCTS.length} pieces in all, made to order.</p>
          <Link className="tlink" to="/shop">All furniture</Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const editRef = useParallax(4)
  const [leadSpace, ...restSpaces] = SPACES

  return (
    <>
      {/* ---------- 1 · hero — full-screen visual ---------- */}
      <section className="hero">
        <div className="hero__media">
          <Img
            id="photo-1745429523617-0d837856ca35"
            alt="A taupe sofa against a taupe wall, softly lit"
            ratio="16 / 9"
            ratioSm="3 / 4"
            ar="16:9"
            arSm="3:4"
            fp={[0.5, 0.62]}
            w={2600}
            position="center 62%"
            priority
          />
        </div>
        <div className="wrap">
          <div className="hero__t">
            <h1 className="disp d1" data-reveal="">Design spaces<br />that feel quieter.</h1>
            <div className="hero__cta" data-reveal="" data-delay="1">
              <Link className="btn btn--solid" to="/shop">Explore the collection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2 · shop by category — editorial index ---------- */}
      <section className="sec" id="categories">
        <div className="wrap">
          <Head
            eyebrow="Shop by category"
            title="Seven ways in"
            lead="The whole collection, grouped the way a room is actually put together."
            to="/categories"
            cta="View all  ›"
          />
          <CategoryCarousel variant="a" />
        </div>
      </section>

      {/* ---------- 3 · featured collection — one story, a few pieces ---------- */}
      <section className="sec sec--bone sec--fit" id="featured">
        <div className="wrap">
          <FeaturedCollection variant="b" />
        </div>
      </section>

      {/* ---------- 4 · lifestyle editorial — asymmetric composition ---------- */}
      <section className="sec">
        <div className="wrap g12 edit">
          <div className="edit__lead par" ref={editRef} data-reveal="mask">
            <Img id={lead.image} alt={lead.title} ratio="4 / 5" w={1400} />
          </div>

          <div className="edit__t">
            <span className="eyebrow" data-reveal="">Editorial</span>
            <h2 className="disp d2" data-reveal="" data-delay="1">{lead.title}</h2>
            <p className="lead" data-reveal="" data-delay="2">
              We photograph rooms at the hour they are least used — before the day starts, or
              after it has gone quiet. Warm daylight, soft shadows, natural textures left
              visible, and enough space around a piece to see what it is.
            </p>
            <Link className="tlink" data-reveal="" data-delay="3" to="/spaces">See the rooms</Link>
          </div>

          <div className="edit__detail" data-reveal="mask">
            <Img id={ceramics.image} alt={ceramics.title} ratio="1 / 1" w={900} />
          </div>

          <div className="edit__cap" data-reveal="">
            <p className="fine">{ceramics.title} — {ceramics.note}</p>
          </div>
        </div>
      </section>

      {/* ---------- 5 · best-selling — grid ---------- */}
      <section className="sec sec--tight sec--bone" id="bestselling">
        <div className="wrap">
          <Head
            eyebrow="Best-selling"
            title="What people actually buy"
            lead="The pieces that leave the workshop most often."
            to="/shop"
            cta="All furniture"
          />
          <div className="grid-3">
            {best.map((p, i) => <ProductCard key={p.id} p={p} delay={Math.min(i, 3)} />)}
          </div>
        </div>
      </section>

      {/* ---------- 6 · shop by space — split-screen ---------- */}
      <section className="sec sec--tight">
        <div className="wrap">
          <Head
            eyebrow="Shop by space"
            title="Designed for every room"
            lead="Three rooms, each a short list rather than a catalogue."
            to="/spaces"
            cta="All spaces"
          />
        </div>
        <div className="split">
          <Link className="split__pane split--lead" to={`/spaces/${leadSpace.id}`} data-reveal="mask">
            <Img id={leadSpace.cover} alt={leadSpace.name} ratio="21 / 9" w={2000} />
            <div className="split__t">
              <h3 className="disp d3">{leadSpace.name}</h3>
              <p className="fine">{leadSpace.tagline}</p>
            </div>
          </Link>
          {restSpaces.map((s, i) => (
            <Link className="split__pane" key={s.id} to={`/spaces/${s.id}`} data-reveal="mask" data-delay={i + 1}>
              <Img id={s.cover} alt={s.name} ratio="4 / 5" w={1200} />
              <div className="split__t">
                <h3 className="disp d3">{s.name}</h3>
                <p className="fine">{s.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- 7 · a cropped texture band ---------- */}
      <section className="band" data-reveal="mask">
        <Img id={CRAFT[0].image} alt="" ratio="32 / 9" w={2000} position="center 60%" />
        <div className="band__t">
          <div className="wrap">
            <p>Quarter-sawn, oiled, and left to settle with use.</p>
          </div>
        </div>
      </section>

      {/* ---------- 8 · craftsmanship ---------- */}
      <section className="sec sec--tight">
        <div className="wrap craft">
          <Img
            id={CRAFT[6].image}
            alt={CRAFT[6].name}
            ratio="4 / 5"
            w={1100}
            className="craft__img"
            data-reveal="mask"
          />
          <div className="craft__t">
            <span className="eyebrow" data-reveal="">Craftsmanship</span>
            <h2 className="disp d2" data-reveal="" data-delay="1">Close enough<br />to see the work</h2>
            <p className="lead" data-reveal="" data-delay="2">
              Every piece is made to order in a small workshop. Timber is oiled rather than
              lacquered, cloth is washed before it is cut, and stone is honed by hand — so the
              surfaces settle with use instead of wearing out.
            </p>
            <dl className="craft__list" data-reveal="" data-delay="3">
              {CRAFT.map(c => (
                <div key={c.name}>
                  <Img id={c.image} alt="" ratio="1 / 1" w={160} className="craft__thumb" />
                  <dt>{c.name}</dt>
                  <dd>{c.note}</dd>
                </div>
              ))}
            </dl>
            <Link className="tlink" data-reveal="" to="/shop">See the pieces</Link>
          </div>
        </div>
      </section>

      {/* ---------- 9 · brand philosophy ---------- */}
      <section className="sec sec--tight sec--dark">
        <div className="wrap statement">
          <span className="eyebrow" data-reveal="">Our philosophy</span>
          <p className="disp" data-reveal="" data-delay="1">
            We make fewer things, in smaller runs, for rooms meant to be lived in rather than
            looked at.
          </p>
          <Link className="tlink" data-reveal="" data-delay="2" to="/shop">Explore the collection</Link>
        </div>
      </section>

      {/* ---------- 10 · newsletter ---------- */}
      <Newsletter />
    </>
  )
}
