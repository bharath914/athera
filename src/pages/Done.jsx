import { Link, Navigate } from 'react-router-dom'
import Stage from '../components/Stage'
import { byId } from '../data/catalogue'
import { SHIP, eta, money } from '../lib/format'
import { useShop } from '../lib/shop'

export default function Done() {
  const { order: o } = useShop()
  if (!o) return <Navigate to="/" replace />
  const lead = o.items[0]
  const p = byId(lead.pid)
  const s = SHIP[o.ship]

  return (
    <section className="slide conf">
      <div className="conf__l">
        <div>
          <span className="label muted">Order confirmed</span>
          <h1 className="disp">Thank you,<br />{o.name.split(' ')[0] || 'friend'}</h1>
        </div>
        <dl>
          <dt>Order</dt><dd>{o.no}</dd>
          <dt>Items</dt>
          <dd>
            {o.items.map(i => {
              const q = byId(i.pid)
              return <span key={`${i.pid}-${i.fi}-${i.si}`} style={{ display: 'block' }}>{i.q} × {q.name}, {q.finishes[i.fi].n}, {q.sizes[i.si].l}</span>
            })}
          </dd>
          <dt>Ready</dt><dd>{eta(...s.w)}</dd>
          <dt>Total</dt><dd>{money(o.total)}</dd>
        </dl>
        <p className="muted" style={{ margin: 0, fontSize: '.8rem' }}>Prototype: no email is sent and nothing was charged.</p>
        <div><Link className="btn btn--solid arrow" to="/?c=all">Back to the collection</Link></div>
      </div>
      <Stage p={p} fi={lead.fi} si={lead.si} className="stage--pdp">
        <span className="tag"><i />{p.finishes[lead.fi].n}</span>
      </Stage>
    </section>
  )
}
