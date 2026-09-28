import { Link } from 'react-router-dom'
import Img from '../components/Img'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, MATERIALS, SPACES, VOICES, arrivals } from '../data/catalogue'

const STEPS = [
  { n: '01', t: 'Choose a room', d: 'Start from one of three rooms we have photographed, measured and lit.' },
  { n: '02', t: 'Read the room', d: 'Light, proportion and palette, noted the way a designer would note them.' },
  { n: '03', t: 'See the pieces', d: 'Three pieces chosen for that room, with the reasoning kept in plain words.' },
]

function Head({ eyebrow, title, lead, to, cta = 'View all' }) {
  return (
    <div className="head">
      <div className="head__t">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="disp d2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {to && <Link className="tlink" to={to}>{cta}</Link>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="wrap hero__in">
          <div className="hero__t">
            <span className="eyebrow">Aethera · Est. 2019</span>
            <h1 className="disp d1">Design spaces<br />that feel quieter.</h1>
            <p className="lead">
              Furniture and interiors curated to bring warmth, balance and clarity into
              everyday life. Thoughtfully designed for homes that value comfort over clutter.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--solid" to="/spaces">Explore spaces</Link>
              <Link className="btn btn--quiet" to="/assistant">Design your room</Link>
            </div>
          </div>
          <Img
            className="hero__img"
            id="photo-1567016376408-0226e4d0c1ea"
            alt="A quiet room in late morning light"
            ratio="4 / 5"
            priority
          />
        </div>
      </section>

      {/* ---------- room assistant ---------- */}
      <section className="sec sec--bone">
        <div className="wrap">
          <Head
            eyebrow="Room assistant"
            title="Design your space smarter"
            lead="Tell us which room you are working with. We read its light, proportion and palette, then suggest the few pieces that belong in it."
          />
          <div className="ai">
            <div className="ai__pair">
              <figure>
                <Img id="photo-1534094830444-3a1e21f7e3e7" alt="A room before" ratio="1 / 1" w={800} />
                <figcaption className="eyebrow">Before</figcaption>
              </figure>
              <figure>
                <Img id="photo-1772797583328-f83bc3f94f80" alt="The same room, furnished" ratio="1 / 1" w={800} />
                <figcaption className="eyebrow">After</figcaption>
              </figure>
            </div>
            <ol className="ai__steps">
              {STEPS.map(s => (
                <li key={s.n}>
                  <span className="eyebrow">{s.n}</span>
                  <h3 className="pname">{s.t}</h3>
                  <p className="fine">{s.d}</p>
                </li>
              ))}
              <li className="ai__go">
                <Link className="btn btn--solid" to="/assistant">See how it works</Link>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- new arrivals ---------- */}
      <section className="sec">
        <div className="wrap">
          <Head
            eyebrow="New arrivals"
            title="Recently curated"
            lead="Pieces designed to bring warmth, comfort and timeless simplicity into your home."
            to="/shop"
          />
          <div className="grid-4">
            {arrivals().map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ---------- shop by space ---------- */}
      <section className="sec sec--tight">
        <div className="wrap">
          <Head
            eyebrow="Shop by space"
            title="Designed for every room"
            lead="Explore furniture and layouts tailored to the way you live."
            to="/spaces"
          />
          <div className="grid-3 spaces">
            {SPACES.map(s => (
              <Link className="scard" key={s.id} to={`/spaces/${s.id}`}>
                <Img id={s.cover} alt={s.name} ratio="3 / 4" w={800} />
                <div className="scard__t">
                  <h3 className="disp d3">{s.name}</h3>
                  <p className="fine">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- categories ---------- */}
      <section className="sec sec--tight">
        <div className="wrap">
          <Head
            eyebrow="Browse categories"
            title="For every corner"
            lead="Thoughtfully curated collections for every corner of your home."
            to="/shop"
          />
          <div className="grid-4 cats">
            {CATEGORIES.map(c => (
              <Link className="ccard" key={c.id} to={`/shop?c=${c.id}`}>
                <Img id={c.image} alt={c.name} ratio="1 / 1" w={700} />
                <h3 className="pname">{c.name}</h3>
                <p className="fine">{c.items}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- voices ---------- */}
      <section className="sec sec--bone">
        <div className="wrap">
          <Head eyebrow="Testimonials" title="Loved by thoughtful homeowners" />
          <div className="grid-3 voices">
            {VOICES.map(v => (
              <figure key={v.name}>
                <blockquote>{v.quote}</blockquote>
                <figcaption className="eyebrow">{v.name} · {v.place}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- materials ---------- */}
      <section className="sec">
        <div className="wrap">
          <Head
            eyebrow="Crafted to last"
            title="Materials, chosen once"
            lead="Carefully selected materials and timeless construction, designed for everyday living."
          />
          <div className="grid-3 mats">
            {MATERIALS.map(m => (
              <article key={m.name}>
                <Img id={m.image} alt={m.name} ratio="5 / 6" w={800} />
                <h3 className="pname">{m.name}</h3>
                <p className="fine">{m.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- philosophy ---------- */}
      <section className="sec sec--dark">
        <div className="wrap philo">
          <span className="eyebrow">Brand philosophy</span>
          <p className="disp d2">
            We make fewer things, in smaller runs, for rooms that are meant to be lived in
            rather than looked at.
          </p>
          <div className="hero__cta">
            <Link className="btn" to="/spaces">Explore spaces</Link>
            <Link className="btn" to="/assistant">Design your room</Link>
          </div>
        </div>
      </section>
    </>
  )
}
