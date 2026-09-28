import { Link, Navigate } from 'react-router-dom'
import Img from '../components/Img'
import { byId } from '../data/catalogue'
import { SHIP, eta, money } from '../lib/format'
import { useShop } from '../lib/shop'

export default function Done() {
  const { order: o } = useShop()
  if (!o) return <Navigate to="/" replace />

  const s = SHIP[o.ship]
  const lead = byId(o.items[0].pid)

  return (
    <section className="conf">
      <div className="wrap conf__in">
        <div className="conf__t">
          <ol className="trail" aria-label="Order steps">
            <li className="done">Cart</li>
            <li className="done">Details</li>
            <li className="now">Confirmation</li>
          </ol>
          <h1 className="disp d1">Thank you,<br />{o.name.split(' ')[0] || 'friend'}</h1>
          <p className="lead">
            Your order is with the workshop. We will write when it goes into production, and
            again when it is ready to be delivered.
          </p>

          <dl className="spec">
            <div><dt>Order</dt><dd>{o.no}</dd></div>
            <div>
              <dt>Pieces</dt>
              <dd>
                {o.items.map(i => {
                  const p = byId(i.pid)
                  return <span key={`${i.pid}-${i.fi}`}>{i.q} × {p.name}, {p.finishes[i.fi].label}</span>
                })}
              </dd>
            </div>
            <div><dt>Delivery</dt><dd>{s.n}</dd></div>
            <div><dt>Ready</dt><dd>{eta(...s.w)}</dd></div>
            <div><dt>Total</dt><dd>{money(o.total)}</dd></div>
          </dl>

          <p className="fine">Prototype — no email is sent and nothing was charged.</p>
          <div className="hero__cta">
            <Link className="btn btn--solid" to="/shop">Back to the furniture</Link>
            <Link className="btn btn--quiet" to="/assistant">Design another room</Link>
          </div>
        </div>

        <Img id={lead.images[0]} alt={lead.name} ratio="4 / 5" w={1000} priority />
      </div>
    </section>
  )
}
