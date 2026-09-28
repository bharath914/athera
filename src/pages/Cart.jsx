import { Link } from 'react-router-dom'
import Img from '../components/Img'
import { byId } from '../data/catalogue'
import { SHIP, eta, money } from '../lib/format'
import { useShop } from '../lib/shop'

function Line({ item, at }) {
  const { setQty, remove } = useShop()
  const p = byId(item.pid)
  return (
    <li className="cline">
      <Link to={`/p/${p.id}`}>
        <Img id={p.images[0]} alt={p.name} ratio="4 / 5" w={400} />
      </Link>
      <div className="cline__t">
        <h3 className="pname"><Link to={`/p/${p.id}`}>{p.name}</Link></h3>
        <p className="fine">{p.finishes[item.fi].label} · {p.lead}</p>
        <button className="linkbtn" type="button" onClick={() => remove(at)}>Remove</button>
      </div>
      <div className="qty">
        <button type="button" aria-label={`Fewer ${p.name}`} onClick={() => setQty(at, item.q - 1)}>−</button>
        <span aria-live="polite">{item.q}</span>
        <button type="button" aria-label={`More ${p.name}`} onClick={() => setQty(at, item.q + 1)}>+</button>
      </div>
      <span className="cline__amt">{money(p.price * item.q)}</span>
    </li>
  )
}

export default function Cart() {
  const { cart, ship, setShip, subtotal, total } = useShop()

  if (!cart.length) {
    return (
      <section className="sec">
        <div className="wrap empty">
          <span className="eyebrow">Your cart</span>
          <h1 className="disp d2">Nothing here yet</h1>
          <p className="lead">Choose a piece and its finish, and it will wait for you here.</p>
          <div className="hero__cta">
            <Link className="btn btn--solid" to="/shop">Browse the furniture</Link>
            <Link className="btn btn--quiet" to="/assistant">Design your room</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="sec">
      <div className="wrap">
        <div className="phead phead--short">
          <span className="eyebrow">Your cart</span>
          <h1 className="disp d1">Cart</h1>
        </div>

        <div className="cart">
          <ul className="clines">
            {cart.map((item, at) => <Line key={`${item.pid}-${item.fi}`} item={item} at={at} />)}
          </ul>

          <aside className="sum">
            <h2 className="eyebrow">Summary</h2>
            <div className="sum__row"><span>Subtotal</span><span>{money(subtotal)}</span></div>

            <div className="sum__ship" role="radiogroup" aria-label="Delivery">
              {Object.entries(SHIP).map(([k, s]) => (
                <label key={k} className={ship === k ? 'on' : ''}>
                  <input type="radio" name="ship" value={k} checked={ship === k} onChange={() => setShip(k)} />
                  <b>{s.n}</b>
                  <small>Ready {eta(...s.w)}</small>
                  <em>{s.fee ? money(s.fee) : 'Free'}</em>
                </label>
              ))}
            </div>

            <div className="sum__row sum__total"><span>Total</span><b>{money(total)}</b></div>
            <Link className="btn btn--solid btn--block" to="/checkout">Proceed to checkout</Link>
            <p className="fine">Delivered assembled and placed in the room of your choice.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
