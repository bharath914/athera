import { Link, useSearchParams } from 'react-router-dom'
import Stage, { Piece } from '../components/Stage'
import { CATS, PRODUCTS, byId, from } from '../data/catalogue'
import { vars } from '../lib/art'
import { money } from '../lib/format'

function Card({ p }) {
  return (
    <Link className="card" to={`/p/${p.id}`}>
      <Stage p={p} />
      <div className="card__meta">
        <h3>{p.name}</h3>
        <span className="p">From {money(from(p))}</span>
        <span className="s">{p.sizes.length} sizes · {p.finishes.length} finishes</span>
      </div>
    </Link>
  )
}

function Collection({ filter, onFilter }) {
  const list = PRODUCTS.filter(p => filter === 'all' || p.cat === filter)
  const filters = [
    { id: 'all', name: 'All pieces', n: PRODUCTS.length },
    ...CATS.map(c => ({ ...c, n: PRODUCTS.filter(p => p.cat === c.id).length })),
  ]
  return (
    <section className="slide slide--dark coll" id="collection">
      <div className="rail">
        <div className="cell">
          <span className="label">Collection</span>
          <ul className="filters">
            {filters.map(f => (
              <li key={f.id} className={f.id === filter ? 'on' : ''}>
                <button type="button" aria-pressed={f.id === filter} onClick={() => onFilter(f.id)}>
                  {f.name}<i>{f.n}</i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cell">
          <p>Every piece is made to order. Pick a colour and a size on the next screen.</p>
        </div>
      </div>
      <div className="coll__main">
        <div className="coll__head">
          <h2 className="disp">The<br />collection</h2>
          <p>Two kinds of furniture, six pieces in all. Fewer things, chosen carefully and built to last.</p>
        </div>
        <div className="grid">{list.map(p => <Card key={p.id} p={p} />)}</div>
      </div>
    </section>
  )
}

export default function Home() {
  const [params, setParams] = useSearchParams()
  const c = params.get('c')
  const filter = CATS.some(x => x.id === c) ? c : 'all'
  const sera = byId('sera'), lorne = byId('lorne'), vale = byId('vale')

  return (
    <>
      <section className="slide hero">
        <div className="rail">
          <div className="cell"><span className="label">Design<br />with<br />purpose</span></div>
          <div className="cell"><p>Six pieces in two categories. Choose the colour and the size, and we build it to order.</p></div>
          <div className="cell"><span className="label">Athera · 2025</span></div>
        </div>
        <Stage p={sera} fi={0} si={1} cx={650} vb={960} className="stage--dark">
          <h1 className="disp">Fewer pieces,<br />made well.</h1>
          <Link className="btn btn--bone cta arrow" to="/?c=all">Shop the collection</Link>
          <div className="strip">
            <div><b>Made to order</b><span>Built for you in four to six weeks.</span></div>
            <div><b>Delivered &amp; assembled</b><span>Free, white-glove, placed in your room.</span></div>
            <div><b>Ten-year frames</b><span>Every frame is guaranteed for a decade.</span></div>
          </div>
        </Stage>
      </section>

      <Collection filter={filter} onFilter={id => setParams({ c: id }, { replace: true })} />

      <section className="slide mood">
        <div className="mood__l">
          <div><span className="label muted">Concept &amp; mood</span></div>
          <div>
            <h2 className="disp">Materials<br />&amp; mood</h2>
            <p>We draw on natural textures, soft tones and timeless materials: leather that darkens with use, oak that is oiled rather than lacquered, stone honed by hand.</p>
          </div>
        </div>
        <div className="stage">
          <div className="floor" />
          <Piece p={lorne} si={0} cx={225} style={vars(lorne, 0)} />
          <Piece p={vale} si={1} cx={470} style={vars(vale, 0)} />
        </div>
        <div className="mood__r">
          <div className="chip chip--leather">Cognac leather</div>
          <div className="chip chip--oak">Natural oak</div>
          <div className="chip chip--stone">Travertine</div>
        </div>
      </section>
    </>
  )
}
