import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { products, categories, collections } from '../data/products'
import { cx } from '../lib/format'

const sorts = [
  { key: 'featured', label: 'Curated' },
  { key: 'new', label: 'Newest' },
  { key: 'low', label: 'Price ↑' },
  { key: 'high', label: 'Price ↓' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') ?? 'all'
  const collection = params.get('collection') ?? 'all'
  const sort = params.get('sort') ?? 'featured'

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const list = useMemo(() => {
    let out = products.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (collection === 'all' || p.collection === collection)
    )
    if (sort === 'low') out = [...out].sort((a, b) => a.price - b.price)
    if (sort === 'high') out = [...out].sort((a, b) => b.price - a.price)
    if (sort === 'new') out = [...out].sort((a, b) => b.year - a.year)
    if (sort === 'featured')
      out = [...out].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    return out
  }, [category, collection, sort])

  const activeCategory = categories.find((c) => c.slug === category)
  const activeCollection = collections.find((c) => c.slug === collection)
  const filtered = category !== 'all' || collection !== 'all'

  return (
    <>
      <PageMeta
        title={activeCategory ? activeCategory.name : 'Shop'}
        description="Browse the full Aethera catalogue — seating, tables, storage, lighting, textiles and objects."
      />

      <header className="shell pb-10 pt-[112px] sm:pt-[136px]">
        <Reveal>
          <p className="eyebrow mb-5">The catalogue — {products.length} pieces</p>
          <h1 className="d1 max-w-[16ch]">
            {activeCategory ? activeCategory.name : 'Everything'}
          </h1>
          <p className="lede mt-6 max-w-xl">
            {activeCategory
              ? activeCategory.tagline
              : 'One catalogue, built to agree with itself. Filter by category or collection — every piece is made to order unless marked in stock.'}
          </p>
        </Reveal>
      </header>

      {/* Filter bar — one row: categories scroll, sort pinned right */}
      <div className="sticky top-[56px] z-30 border-y border-rule bg-paper/90 backdrop-blur-md sm:top-[64px]">
        <div className="shell flex items-center gap-4 py-3.5">
          <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="eyebrow mr-2 hidden shrink-0 lg:inline">Category</span>
            {[{ slug: 'all', name: 'All' }, ...categories].map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setParam('category', c.slug)}
                className={cx(
                  'shrink-0 whitespace-nowrap px-3 py-1.5 text-[11px] uppercase tracking-widest2 transition-colors duration-300',
                  category === c.slug
                    ? 'bg-ink text-paper'
                    : 'text-mute hover:text-ink'
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 border-l border-rule pl-4 sm:flex">
            <span className="eyebrow mr-1 hidden shrink-0 lg:inline">Sort</span>
            {sorts.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setParam('sort', s.key)}
                className={cx(
                  'shrink-0 whitespace-nowrap px-2.5 py-1.5 text-[11px] uppercase tracking-widest2 transition-colors duration-300',
                  sort === s.key
                    ? 'text-ink underline underline-offset-4'
                    : 'text-mute hover:text-ink'
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="shell py-10 md:py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">
              {list.length} {list.length === 1 ? 'piece' : 'pieces'}
            </p>
            {activeCollection && (
              <button
                type="button"
                onClick={() => setParam('collection', 'all')}
                className="flex items-center gap-2 border border-rule px-3 py-1 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:border-ink"
              >
                {activeCollection.name}
                <span aria-hidden="true" className="text-mute">
                  ✕
                </span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 sm:hidden">
              <span className="eyebrow">Sort</span>
              <select
                value={sort}
                onChange={(e) => setParam('sort', e.target.value)}
                className="border-b border-rule bg-transparent py-1 text-[11px] uppercase tracking-widest2 focus:outline-none"
              >
                {sorts.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
            {filtered && (
              <button
                type="button"
                onClick={() => setParams({}, { replace: true })}
                className="link-underline text-[11px] uppercase tracking-widest2 text-mute"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {list.length === 0 ? (
          <div className="rule py-24 text-center">
            <p className="d3">Nothing here yet.</p>
            <p className="body-copy mx-auto mt-3 max-w-sm">
              This combination isn&apos;t in the current chapter. Try a
              different category, or view everything.
            </p>
            <button
              type="button"
              onClick={() => setParams({}, { replace: true })}
              className="btn-ghost mt-7"
            >
              View everything
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.06} amount={0.15}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
