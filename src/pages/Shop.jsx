import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import {
  CATEGORIES,
  COLOURS,
  MATERIAL_FILTERS,
  PRICE_BANDS,
  PRODUCTS,
  SIZES,
  catById,
  coloursOf,
  hasMaterial,
} from '../data/catalogue'
import { cx } from '../lib/format'

/* The five facets the brief asks for, plus a sort. Each is a URL parameter, so
   a filtered listing can be linked to and the back button behaves. */

const SORTS = [
  { id: 'featured', name: 'Featured' },
  { id: 'low', name: 'Price, low to high' },
  { id: 'high', name: 'Price, high to low' },
  { id: 'new', name: 'Newest first' },
]

/** Multi-value params travel as a comma list. */
const list = v => (v ? v.split(',').filter(Boolean) : [])

function Group({ title, children }) {
  return (
    <div className="rail__g">
      <h3 className="eyebrow">{title}</h3>
      {children}
    </div>
  )
}

function Check({ on, onChange, children }) {
  return (
    <label className={cx('check', on && 'on')}>
      <input type="checkbox" checked={on} onChange={onChange} />
      <span className="check__b" aria-hidden="true" />
      <span className="check__t">{children}</span>
    </label>
  )
}

export default function Shop() {
  const [params, setParams] = useSearchParams()

  const cat = CATEGORIES.some(x => x.id === params.get('c')) ? params.get('c') : null
  const bands = list(params.get('pr'))
  const colours = list(params.get('col'))
  const mats = list(params.get('m'))
  const sizes = list(params.get('s'))
  const sort = SORTS.some(s => s.id === params.get('sort')) ? params.get('sort') : 'featured'

  const set = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value.length === 0) next.delete(key)
    else next.set(key, Array.isArray(value) ? value.join(',') : value)
    setParams(next, { replace: true })
  }

  const toggle = (key, current, id) =>
    set(key, current.includes(id) ? current.filter(x => x !== id) : [...current, id])

  const clear = () => setParams({}, { replace: true })

  /* ---------- the filtered, sorted list ---------- */

  let list_ = PRODUCTS.filter(p => {
    if (cat && p.cat !== cat) return false
    if (bands.length && !bands.some(b => {
      const band = PRICE_BANDS.find(x => x.id === b)
      return band && p.price >= band.min && p.price <= band.max
    })) return false
    if (colours.length && !coloursOf(p).some(c => colours.includes(c))) return false
    if (mats.length && !mats.some(m => hasMaterial(p, m))) return false
    if (sizes.length && !sizes.includes(p.size)) return false
    return true
  })

  if (sort === 'low') list_ = [...list_].sort((a, b) => a.price - b.price)
  if (sort === 'high') list_ = [...list_].sort((a, b) => b.price - a.price)
  if (sort === 'new') list_ = [...list_].sort((a, b) => b.year - a.year)

  const active = [
    ...(cat ? [{ key: 'c', id: cat, name: catById(cat).short, clear: () => set('c', null) }] : []),
    ...bands.map(b => ({ key: 'pr', id: b, name: PRICE_BANDS.find(x => x.id === b).name, clear: () => toggle('pr', bands, b) })),
    ...colours.map(c => ({ key: 'col', id: c, name: COLOURS.find(x => x.id === c).name, clear: () => toggle('col', colours, c) })),
    ...mats.map(m => ({ key: 'm', id: m, name: MATERIAL_FILTERS.find(x => x.id === m).name, clear: () => toggle('m', mats, m) })),
    ...sizes.map(s => ({ key: 's', id: s, name: SIZES.find(x => x.id === s).name, clear: () => toggle('s', sizes, s) })),
  ]

  const c = cat ? catById(cat) : null

  return (
    <section className="sec">
      <div className="wrap">
        <div className="phead">
          <span className="eyebrow">Furniture</span>
          <h1 className="disp d1">{c ? c.name : 'The collection'}</h1>
          <p className="lead">
            {c
              ? c.tagline
              : `${PRODUCTS.length} pieces across seven categories, made in small runs and delivered assembled.`}
          </p>
        </div>

        <div className="plp__in">
          {/* ---------- filter rail ---------- */}
          <aside className="rail" aria-label="Filters">
            <div className="rail__head">
              <h2 className="eyebrow">Filter</h2>
              {active.length > 0 && (
                <button className="linkbtn" type="button" onClick={clear}>Clear all</button>
              )}
            </div>

            <Group title="Category">
              <ul className="rail__l">
                <li>
                  <button
                    type="button"
                    className={cx('filter', !cat && 'on')}
                    aria-pressed={!cat}
                    onClick={() => set('c', null)}
                  >
                    All pieces
                  </button>
                </li>
                {CATEGORIES.map(x => (
                  <li key={x.id}>
                    <button
                      type="button"
                      className={cx('filter', cat === x.id && 'on')}
                      aria-pressed={cat === x.id}
                      onClick={() => set('c', x.id)}
                    >
                      {x.short}
                    </button>
                  </li>
                ))}
              </ul>
            </Group>

            <Group title="Price">
              {PRICE_BANDS.map(b => (
                <Check key={b.id} on={bands.includes(b.id)} onChange={() => toggle('pr', bands, b.id)}>
                  {b.name}
                </Check>
              ))}
            </Group>

            <Group title="Colour">
              <div className="rail__cols">
                {COLOURS.map(col => (
                  <Check key={col.id} on={colours.includes(col.id)} onChange={() => toggle('col', colours, col.id)}>
                    <span className="dot dot--sm" style={{ background: col.hex }} />
                    {col.name}
                  </Check>
                ))}
              </div>
            </Group>

            <Group title="Material">
              {MATERIAL_FILTERS.map(m => (
                <Check key={m.id} on={mats.includes(m.id)} onChange={() => toggle('m', mats, m.id)}>
                  {m.name}
                </Check>
              ))}
            </Group>

            <Group title="Size">
              {SIZES.map(s => (
                <Check key={s.id} on={sizes.includes(s.id)} onChange={() => toggle('s', sizes, s.id)}>
                  {s.name} <em>{s.note}</em>
                </Check>
              ))}
            </Group>
          </aside>

          {/* ---------- results ---------- */}
          <div className="plp__main">
            <div className="plp__bar">
              <span className="eyebrow">
                {list_.length} {list_.length === 1 ? 'piece' : 'pieces'}
              </span>
              <label className="sortf">
                <span className="eyebrow">Sort</span>
                <select value={sort} onChange={e => set('sort', e.target.value === 'featured' ? null : e.target.value)}>
                  {SORTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </label>
            </div>

            {active.length > 0 && (
              <div className="plp__active">
                {active.map(a => (
                  <button className="pill" type="button" key={`${a.key}-${a.id}`} onClick={a.clear}>
                    {a.name}<span aria-hidden="true">×</span>
                    <span className="sr">, remove filter</span>
                  </button>
                ))}
              </div>
            )}

            {list_.length === 0 ? (
              <div className="empty">
                <h2 className="disp d3">Nothing matches that combination</h2>
                <p className="lead">Try removing a filter — the collection is deliberately small.</p>
                <button className="btn btn--quiet" type="button" onClick={clear}>Clear all filters</button>
              </div>
            ) : (
              <div className="grid-3 plp">
                {list_.map((p, i) => <ProductCard key={p.id} p={p} priority={i < 3} />)}
              </div>
            )}

            <div className="plp__foot">
              <p className="fine">
                Every piece is made to order in a small workshop. Lead times are shown on each piece.
              </p>
              <Link className="tlink" to="/assistant">Not sure where to start? Use the room assistant</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
