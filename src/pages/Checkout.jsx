import { Link, Navigate, useNavigate } from 'react-router-dom'
import Img from '../components/Img'
import { byId } from '../data/catalogue'
import { SHIP, eta, money } from '../lib/format'
import { useShop } from '../lib/shop'

const Field = ({ id, label, ...rest }) => (
  <div className="field">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} required {...rest} />
  </div>
)

const digits = (e, max) => e.target.value.replace(/\D/g, '').slice(0, max)

export default function Checkout() {
  const { cart, ship, subtotal, total, place } = useShop()
  const navigate = useNavigate()

  if (!cart.length) return <Navigate to="/cart" replace />

  const submit = e => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    place({ name: String(fd.get('name') || ''), email: String(fd.get('email') || '') })
    navigate('/done')
  }

  return (
    <section className="sec">
      <div className="wrap">
        <div className="phead phead--short">
          <ol className="trail" aria-label="Order steps">
            <li className="done"><Link to="/cart">Cart</Link></li>
            <li className="now">Details</li>
            <li>Confirmation</li>
          </ol>
          <h1 className="disp d1">Checkout</h1>
        </div>

        <div className="co">
          <form className="co__form" onSubmit={submit}>
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
                  {['United States', 'United Kingdom', 'India', 'Canada', 'Australia', 'Germany'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend>Payment</legend>
              <Field
                id="card" label="Card number" placeholder="0000 0000 0000 0000"
                inputMode="numeric" maxLength={19} autoComplete="cc-number"
                onInput={e => { e.target.value = digits(e, 16).replace(/(.{4})/g, '$1 ').trim() }}
              />
              <div className="row">
                <Field
                  id="exp" label="Expiry" placeholder="MM / YY"
                  inputMode="numeric" maxLength={7} autoComplete="cc-exp"
                  onInput={e => { const d = digits(e, 4); e.target.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d }}
                />
                <Field id="cvc" label="CVC" placeholder="000" inputMode="numeric" maxLength={4} autoComplete="cc-csc" />
              </div>
              <p className="fine">Design prototype — nothing is charged, and nothing is stored.</p>
            </fieldset>

            <button className="btn btn--solid btn--block" type="submit">Place order · {money(total)}</button>
          </form>

          <aside className="sum">
            <h2 className="eyebrow">Your order</h2>
            <ul className="colines">
              {cart.map(i => {
                const p = byId(i.pid)
                return (
                  <li key={`${i.pid}-${i.fi}`}>
                    <Img id={p.images[0]} alt={p.name} ratio="1 / 1" w={200} />
                    <div>
                      <h3 className="pname">{p.name}</h3>
                      <p className="fine">{p.finishes[i.fi].label} · {i.q}</p>
                    </div>
                    <span>{money(p.price * i.q)}</span>
                  </li>
                )
              })}
            </ul>
            <div className="sum__row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="sum__row">
              <span>{SHIP[ship].n}</span>
              <span>{SHIP[ship].fee ? money(SHIP[ship].fee) : 'Free'}</span>
            </div>
            <div className="sum__row sum__total"><span>Total</span><b>{money(total)}</b></div>
            <p className="fine">Ready {eta(...SHIP[ship].w)} · delivered assembled</p>
            <Link className="linkbtn" to="/cart">Edit cart</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
