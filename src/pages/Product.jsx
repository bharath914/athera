import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Stage from '../components/Stage'
import NotFound from './NotFound'
import { CATS, byId, priceOf } from '../data/catalogue'
import { money } from '../lib/format'
import { useShop } from '../lib/shop'

function Configurator({ p }) {
  const [fi, setFi] = useState(0)
  const [si, setSi] = useState(0)
  const { add, notify } = useShop()
  const navigate = useNavigate()
  const cat = CATS.find(c => c.id === p.cat)
  const [first, ...rest] = p.name.split(' ')
  const f = p.finishes[fi], z = p.sizes[si]

  const buyNow = () => { add(p.id, fi, si); navigate('/checkout') }
  const addCart = () => { add(p.id, fi, si); notify(`${p.name} · ${f.n} added`, '/checkout') }

  return (
    <section className="slide pdp">
      <div className="pdp__l">
        <div className="crumb">
          <Link to="/?c=all">Collection</Link> / <Link to={`/?c=${cat.id}`}>{cat.name}</Link>
        </div>
        <ol className="steps" aria-label="Order steps">
          <li className="done">Piece</li><li className="now">Colour &amp; size</li><li>Checkout</li>
        </ol>
        <h1 className="disp">{first}<br />{rest.join(' ')}</h1>
        <p>{p.blurb}</p>
        <dl className="spec">
          <dt>Size</dt><dd>{z.cm}</dd>
          {Object.entries(p.spec).map(([k, v]) => <div key={k} style={{ display: 'contents' }}><dt>{k}</dt><dd>{v}</dd></div>)}
          <dt>Lead time</dt><dd>4–6 weeks</dd>
        </dl>
      </div>

      <Stage p={p} fi={fi} si={si} dim className="stage--pdp">
        <span className="tag"><i /><span>{f.n}</span></span>
      </Stage>

      <div className="pdp__r">
        <div className="opt">
          <h2>Colour <span>{f.n}</span></h2>
          <div className="swatches" role="radiogroup" aria-label="Colour">
            {p.finishes.map((x, i) => (
              <label className="sw" key={x.n} title={x.n}>
                <input className="sr" type="radio" name="fin" id={`fin-${i}`} checked={fi === i} onChange={() => setFi(i)} />
                <span style={{ background: x.h }} />
                <span className="sr">{x.n}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="opt">
          <h2>Size <span>{z.l}</span></h2>
          <div className="sizes" role="radiogroup" aria-label="Size">
            {p.sizes.map((x, i) => (
              <label className="size" key={x.l}>
                <input className="sr" type="radio" name="size" id={`size-${i}`} checked={si === i} onChange={() => setSi(i)} />
                <b>{x.l}</b><small>{x.cm}</small><em>{money(priceOf(p, fi, i))}</em>
              </label>
            ))}
          </div>
        </div>
        <div className="buy">
          <div className="price">
            <strong>{money(priceOf(p, fi, si))}</strong>
            <span>Delivery &amp; assembly included<br />Made to order</span>
          </div>
          <button className="btn btn--solid btn--block" type="button" onClick={buyNow}>Checkout</button>
          <button className="btn btn--block" type="button" onClick={addCart}>Add to cart</button>
          <p className="fine">30-day returns · 10-year frame guarantee</p>
        </div>
      </div>
    </section>
  )
}

export default function Product() {
  const { id } = useParams()
  const p = byId(id)
  // keyed by id so choosing another piece starts from its first colour and size
  return p ? <Configurator key={id} p={p} /> : <NotFound />
}
