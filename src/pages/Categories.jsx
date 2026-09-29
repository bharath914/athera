import { Link, useSearchParams } from 'react-router-dom'
import Img from '../components/Img'
import { CATEGORIES, PRODUCTS, cover } from '../data/catalogue'
import { money } from '../lib/format'

/**
 * Filter by category, then a plain grid of the pieces. Static: no reveals, no
 * drift, no hover swaps.
 */

const TABS = ['Sofas', 'Tables', 'Dining', 'Beds', 'Storage', 'Lighting', 'Objects']

export default function Categories() {
  const [sp, setSp] = useSearchParams()
  const chosen = CATEGORIES.find(c => c.id === sp.get('k')) || null
  const pieces = chosen ? PRODUCTS.filter(p => p.cat === chosen.id) : []
  const choose = id => setSp(id ? { k: id } : {}, { replace: true, preventScrollReset: true })

  return (
    <section className="sec cats__sec">
      <div className="wrap">
        <div className="cats__top">
          <div>
            <span className="eyebrow">Shop by category</span>
            <h1 className="disp d2">Seven ways in</h1>
          </div>
          <p className="lead">
            {chosen ? chosen.tagline : 'The whole collection, grouped the way a room is actually put together.'}
          </p>
        </div>

        <div className="cats__tabs" role="group" aria-label="Filter categories">
          <button type="button" aria-pressed={!chosen} onClick={() => choose(null)}>All</button>
          {CATEGORIES.map((c, i) => (
            <button key={c.id} type="button" aria-pressed={chosen?.id === c.id} onClick={() => choose(c.id)}>{TABS[i]}</button>
          ))}
        </div>

        {chosen ? (
          <>
            <ul className="cgrid">
              {pieces.map((p, i) => (
                <li key={p.id}>
                  <Link to={`/p/${p.id}`}>
                    <span className="cgrid__img"><Img id={cover(p)} alt={p.name} ratio="3 / 4" w={900} priority={i < 6} /></span>
                    <span className="pname">{p.name}</span>
                    <span className="price">{money(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <ul className="cgrid">
              {CATEGORIES.map((c, i) => (
                <li key={c.id}>
                  <Link to={`/categories?k=${c.id}`}>
                    <span className="cgrid__img"><Img id={c.image} alt={c.name} ratio="3 / 4" w={900} priority={i < 6} /></span>
                    <span className="pname">{c.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
