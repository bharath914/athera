import { Link, useNavigate } from 'react-router-dom'
import Stage from '../components/Stage'
import { byId, priceOf } from '../data/catalogue'
import { SHIP, eta, money } from '../lib/format'
import { useShop } from '../lib/shop'

const Field = ({ id, label, ...rest }) => (
  <div className="field">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} required {...rest} />
  </div>
)

const digits = (e, max) => e.target.value.replace(/\D/g, '').slice(0, max)

function Line({ item, at }) {
  const { setQty, remove } = useShop()
  const p = byId(item.pid)
  return (
    <li className="line">
      <Stage p={p} fi={item.fi} si={item.si} />
      <div>
        <h3>{p.name}</h3>
        <p>{p.finishes[item.fi].n} · {p.sizes[item.si].l}</p>
        <div className="qty">
          <button type="button" aria-label={`Fewer ${p.name}`} onClick={() => setQty(at, item.q - 1)}>−</button>
          <span aria-live="polite">{item.q}</span>
          <button type="button" aria-label={`More ${p.name}`} onClick={() => setQty(at, item.q + 1)}>+</button>
        </div>
      </div>
      <div className="amt">
        <span>{money(priceOf(p, item.fi, item.si) * item.q)}</span>
        <button type="button" className="link" onClick={() => remove(at)}>Remove</button>
      </div>
    </li>
  )
}

export default function Checkout() {
  const { cart, ship, setShip, subtotal, total, place } = useShop()
  const navigate = useNavigate()

  if (!cart.length) {
    return (
      <section className="slide empty">
        <span className="label muted">Your cart</span>
        <h1 className="disp">Nothing here yet</h1>
        <p>Pick a piece, choose its colour and size, and it will wait for you here.</p>
        <Link className="btn btn--solid arrow" to="/?c=all">See the collection</Link>
      </section>
    )
  }

  const submit = e => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    place({ name: String(fd.get('name') || ''), email: String(fd.get('email') || '') })
    navigate('/done')
  }

  return (
    <>
      <div className="trail" aria-label="Order steps">
        <span className="done">Piece</span><i /><span className="done">Colour &amp; size</span><i /><span className="now">Checkout</span>
      </div>
      <section className="slide slide--dark co">
        <div className="co__l">
          <div>
            <span className="label muted">Your order</span>
            <h1 className="disp">Checkout</h1>
          </div>
          <ul className="lines">{cart.map((item, at) => <Line key={`${item.pid}-${item.fi}-${item.si}`} item={item} at={at} />)}</ul>
          <div className="sums">
            <div><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div><span>{SHIP[ship].n}</span><span>{SHIP[ship].fee ? money(SHIP[ship].fee) : 'Free'}</span></div>
            <div className="tot"><span>Total</span><b>{money(total)}</b></div>
          </div>
        </div>

        <form className="co__r" style={{ background: 'var(--ivory)', color: 'var(--ink)' }} onSubmit={submit}>
          <fieldset>
            <legend>Contact</legend>
            <Field id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" />
          </fieldset>
          <fieldset>
            <legend>Delivery</legend>
            <Field id="name" label="Full name" placeholder="Your name" autoComplete="name" />
            <Field id="addr" label="Address" placeholder="Street and number" autoComplete="street-address" />
            <div className="row">
              <Field id="city" label="City" placeholder="City" autoComplete="address-level2" />
              <Field id="zip" label="Postcode" placeholder="Postcode" autoComplete="postal-code" />
            </div>
            <div className="field">
              <label htmlFor="country">Country</label>
              <select id="country" name="country" autoComplete="country-name" defaultValue="United States">
                {['United States', 'United Kingdom', 'India', 'Canada', 'Australia', 'Germany'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="ship" role="radiogroup" aria-label="Delivery method">
              {Object.entries(SHIP).map(([k, s]) => (
                <label key={k}>
                  <input type="radio" name="ship" value={k} checked={ship === k} onChange={() => setShip(k)} />
                  <b>{s.n}</b><small>Ready {eta(...s.w)}</small><em>{s.fee ? '+' + money(s.fee) : 'Free'}</em>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            <Field id="card" label="Card number" placeholder="0000 0000 0000 0000" inputMode="numeric" maxLength={19} autoComplete="cc-number"
              onInput={e => { e.target.value = digits(e, 16).replace(/(.{4})/g, '$1 ').trim() }} />
            <div className="row">
              <Field id="exp" label="Expiry" placeholder="MM / YY" inputMode="numeric" maxLength={7} autoComplete="cc-exp"
                onInput={e => { const d = digits(e, 4); e.target.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d }} />
              <Field id="cvc" label="CVC" placeholder="000" inputMode="numeric" maxLength={4} autoComplete="cc-csc" />
            </div>
            <p className="fine" style={{ textAlign: 'left' }}>Design prototype: nothing is charged and nothing is stored.</p>
          </fieldset>
          <button className="btn btn--solid btn--block" type="submit">Place order · {money(total)}</button>
        </form>
      </section>
    </>
  )
}
