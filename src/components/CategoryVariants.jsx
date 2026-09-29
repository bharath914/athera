import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Img from './Img'
import { CATEGORIES, PRODUCTS } from '../data/catalogue'
import { cx } from '../lib/format'

/**
 * Three alternative treatments of "Shop by category" for review. The current
 * index is kept as the baseline. Chosen with ?cv=mosaic|panels|rail; the
 * switcher above the section is temporary and goes once one is picked.
 */

const num = i => String(i + 1).padStart(2, '0')
const to = c => `/shop?c=${c.id}`

/** A · Mosaic — seven frames at deliberately unequal sizes and heights. */
const MOSAIC = [
  { span: '1 / span 5', ratio: '4 / 5' },
  { span: '6 / span 3', ratio: '3 / 4', drop: 120 },
  { span: '9 / span 4', ratio: '1 / 1', drop: 40 },
  { span: '1 / span 3', ratio: '3 / 4', drop: 0 },
  { span: '4 / span 5', ratio: '4 / 3', drop: 96 },
  { span: '9 / span 4', ratio: '4 / 5', drop: 0 },
  { span: '3 / span 5', ratio: '16 / 10', drop: 0 },
]

function Mosaic() {
  return (
    <div className="cmos">
      {CATEGORIES.map((c, i) => {
        const m = MOSAIC[i]
        return (
          <Link
            key={c.id}
            to={to(c)}
            className="cmos__t"
            style={{ gridColumn: m.span, marginTop: m.drop }}
            data-reveal=""
            data-delay={i % 3}
          >
            <span className="cmos__frame"><Img id={c.image} alt={c.name} ratio={m.ratio} w={1100} /></span>
            <span className="cmos__cap">
              <span className="cindex__n">{num(i)}</span>
              <span className="cmos__name">{c.short}</span>
            </span>
          </Link>
        )
      })}
      <div className="cmos__foot">
        <p className="fine">{PRODUCTS.length} pieces in all, made to order.</p>
        <Link className="tlink" to="/shop">All furniture</Link>
      </div>
    </div>
  )
}

/** B · Panels — seven full-height strips; the one you point at opens. */
function Panels() {
  const [at, setAt] = useState(0)
  return (
    <div className="cpan" onMouseLeave={() => setAt(0)}>
      {CATEGORIES.map((c, i) => (
        <Link
          key={c.id}
          to={to(c)}
          className={cx('cpan__p', i === at && 'on')}
          onMouseEnter={() => setAt(i)}
          onFocus={() => setAt(i)}
        >
          <Img id={c.image} alt={c.name} ratio="3 / 4" w={1200} />
          <span className="cpan__n">{num(i)}</span>
          <span className="cpan__cap">
            <span className="cpan__name">{c.short}</span>
            <span className="cpan__items">{c.items}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}

/** C · Rail — tall cards on a horizontal scroll, large numerals, quiet captions. */
function Rail() {
  return (
    <>
      <div className="crail">
        {CATEGORIES.map((c, i) => (
          <Link key={c.id} to={to(c)} className="crail__c" data-reveal="" data-delay={Math.min(i, 4)}>
            <span className="crail__n">{num(i)}</span>
            <span className="crail__frame"><Img id={c.image} alt={c.name} ratio="3 / 4" w={900} /></span>
            <span className="crail__name">{c.short}</span>
            <span className="crail__items">{c.items}</span>
          </Link>
        ))}
      </div>
      <p className="fine hrow__hint">Scroll for more</p>
    </>
  )
}

export const VARIANTS = [
  { id: 'index', label: 'Index (current)' },
  { id: 'mosaic', label: 'A · Mosaic', node: <Mosaic /> },
  { id: 'panels', label: 'B · Panels', node: <Panels /> },
  { id: 'rail', label: 'C · Rail', node: <Rail /> },
]

/** Reads ?cv= and returns [variant, switcher]. */
export function useCategoryVariant() {
  const [sp, setSp] = useSearchParams()
  const id = 'mosaic'
  const v = VARIANTS.find(x => x.id === id) || VARIANTS[0]
  const switcher = (
    <div className="cvsw" role="tablist" aria-label="Category layout variation">
      <span className="eyebrow">Layout</span>
      {VARIANTS.map(x => (
        <button
          key={x.id}
          type="button"
          role="tab"
          aria-selected={x.id === v.id}
          className={cx('cvsw__b', x.id === v.id && 'on')}
          onClick={() => {
            const n = new URLSearchParams(sp)
            x.id === 'index' ? n.delete('cv') : n.set('cv', x.id)
            setSp(n, { replace: true, preventScrollReset: true })
          }}
        >
          {x.label}
        </button>
      ))}
    </div>
  )
  return [v, switcher]
}
