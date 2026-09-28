import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, PRODUCTS, catById } from '../data/catalogue'
import { cx } from '../lib/format'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const c = params.get('c')
  const active = CATEGORIES.some(x => x.id === c) ? c : 'all'
  const list = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === active)
  const cat = active === 'all' ? null : catById(active)

  const select = id => {
    if (id === 'all') setParams({}, { replace: true })
    else setParams({ c: id }, { replace: true })
  }

  return (
    <section className="sec">
      <div className="wrap">
        <div className="phead">
          <span className="eyebrow">Furniture</span>
          <h1 className="disp d1">{cat ? cat.name : 'The collection'}</h1>
          <p className="lead">
            {cat ? cat.tagline : 'Thirteen pieces across four categories, made in small runs and delivered assembled.'}
          </p>
        </div>

        <div className="filters">
          <ul>
            {[{ id: 'all', name: 'All pieces' }, ...CATEGORIES].map(f => (
              <li key={f.id}>
                <button
                  type="button"
                  className={cx('filter', f.id === active && 'on')}
                  aria-pressed={f.id === active}
                  onClick={() => select(f.id)}
                >
                  {f.name}
                </button>
              </li>
            ))}
          </ul>
          <span className="eyebrow">{list.length} {list.length === 1 ? 'piece' : 'pieces'}</span>
        </div>

        <div className="grid-3 plp">
          {list.map((p, i) => <ProductCard key={p.id} p={p} showCat priority={i < 3} />)}
        </div>

        <div className="plp__foot">
          <p className="fine">
            Every piece is made to order in a small workshop. Lead times are shown on each piece.
          </p>
          <Link className="tlink" to="/assistant">Not sure where to start? Use the room assistant</Link>
        </div>
      </div>
    </section>
  )
}
