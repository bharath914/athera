import { Link, Navigate } from 'react-router-dom'
import Img from '../components/Img'
import { byId, cover } from '../data/catalogue'
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
          <span className="eyebrow">Order confirmed</span>
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

          <p className="fine">
            Keep your order number — <b>{o.no}</b> — to follow the build. Prototype: no email is
            sent and nothing was charged.
          </p>

          <div className="hero__cta">
            <Link className="btn btn--solid" to={`/track?no=${o.no}`}>Track this order</Link>
            <Link className="btn btn--quiet" to="/shop">Back to the furniture</Link>
          </div>
        </div>

        <Img id={cover(lead)} alt={lead.name} ratio="4 / 5" w={1000} priority />
      </div>
    </section>
  )
}
