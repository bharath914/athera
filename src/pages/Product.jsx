import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import ProductCard from '../components/ProductCard'
import NotFound from './NotFound'
import { PRODUCTS, SPACES, byId, catById } from '../data/catalogue'
import { dims, money } from '../lib/format'
import { useShop } from '../lib/shop'

function Detail({ p }) {
  const [fi, setFi] = useState(0)
  const { add, notify } = useShop()
  const navigate = useNavigate()
  const cat = catById(p.cat)
  const finish = p.finishes[fi]
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 3)
  const spaces = SPACES.filter(s => p.spaces.includes(s.id))

  const addCart = () => { add(p.id, fi); notify(`${p.name} · ${finish.label} added`, '/cart') }
  const buyNow = () => { add(p.id, fi); navigate('/cart') }

  return (
    <>
      <section className="pdp">
        <div className="wrap pdp__in">
          <div className="pdp__gallery">
            {p.images.map((id, i) => (
              <Img key={id} id={id} alt={`${p.name}, view ${i + 1}`} ratio={i === 0 ? '4 / 5' : '3 / 4'} priority={i === 0} />
            ))}
          </div>

          <div className="pdp__side">
            <div className="pdp__panel">
              <nav className="crumb" aria-label="Breadcrumb">
                <Link to="/shop">Furniture</Link>
                <span>/</span>
                <Link to={`/shop?c=${cat.id}`}>{cat.name}</Link>
              </nav>

              <h1 className="disp d2">{p.name}</h1>
              <p className="pdp__price">{money(p.price)}</p>
              <p className="lead">{p.excerpt}</p>

              <div className="pdp__opt">
                <div className="pdp__optHead">
                  <span className="eyebrow">Finish</span>
                  <span className="pdp__optVal">{finish.label}</span>
                </div>
                <div className="swatches" role="radiogroup" aria-label="Finish">
                  {p.finishes.map((f, i) => (
                    <label className="sw" key={f.label} title={f.label}>
                      <input
                        className="sr"
                        type="radio"
                        name="finish"
                        checked={fi === i}
                        onChange={() => setFi(i)}
                      />
                      <span className="dot" style={{ background: f.hex }} />
                      <span className="sr">{f.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pdp__buy">
                <button className="btn btn--solid btn--block" type="button" onClick={addCart}>Add to cart</button>
                <button className="btn btn--quiet btn--block" type="button" onClick={buyNow}>Buy now</button>
              </div>

              <dl className="spec">
                <div><dt>Materials</dt><dd>{p.materials.join(', ')}</dd></div>
                <div><dt>Dimensions</dt><dd>{dims(p.dim)}{p.dim.seat ? ` · seat ${p.dim.seat} cm` : ''}</dd></div>
                <div><dt>Designer</dt><dd>{p.designer}, {p.year}</dd></div>
                <div><dt>Lead time</dt><dd>{p.lead}</dd></div>
                <div><dt>Delivery</dt><dd>White-glove, assembled and placed</dd></div>
              </dl>

              <p className="fine">Thirty-day returns · ten-year frame guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--tight sec--bone">
        <div className="wrap note">
          <span className="eyebrow">On this piece</span>
          <p className="note__body">{p.description}</p>
          {spaces.length > 0 && (
            <p className="fine">
              Shown in{' '}
              {spaces.map((s, i) => (
                <span key={s.id}>
                  {i > 0 && ', '}
                  <Link className="ulink" to={`/spaces/${s.id}`}>{s.name.toLowerCase()}</Link>
                </span>
              ))}.
            </p>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="sec sec--tight">
          <div className="wrap">
            <div className="head">
              <div className="head__t">
                <span className="eyebrow">More {cat.name.toLowerCase()}</span>
                <h2 className="disp d2">Pieces that sit well together</h2>
              </div>
              <Link className="tlink" to={`/shop?c=${cat.id}`}>View all</Link>
            </div>
            <div className="grid-3">
              {related.map(x => <ProductCard key={x.id} p={x} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default function Product() {
  const { id } = useParams()
  const p = byId(id)
  // keyed by id so choosing another piece resets to its first finish
  return p ? <Detail key={id} p={p} /> : <NotFound />
}
