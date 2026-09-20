import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import PageMeta from '../components/PageMeta'
import { Button, Chip, Eyebrow, Heading, PageHeader, Section, Text, TextLink } from '../components/ui'
import { products, categories, collections } from '../data/products'

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
  const reset = () => setParams({}, { replace: true })

  return (
    <>
      <PageMeta
        title={activeCategory ? activeCategory.name : 'Shop'}
        description="Browse the full Aethera catalogue — seating, tables, storage, lighting, textiles and objects."
      />

      <PageHeader
        eyebrow={`The catalogue — ${products.length} pieces`}
        title={activeCategory ? activeCategory.name : 'Everything'}
        titleClassName="max-w-[16ch]"
        lede={
          activeCategory
            ? activeCategory.tagline
            : 'One catalogue, built to agree with itself. Filter by category or collection — every piece is made to order unless marked in stock.'
        }
      />

      {/* Filter bar — categories scroll, sort pinned right */}
      <div className="sticky top-[56px] z-30 border-y border-rule bg-paper/90 backdrop-blur-md sm:top-[64px]">
        <div className="shell flex items-center gap-4 py-3">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto no-scrollbar">
            {[{ slug: 'all', name: 'All' }, ...categories].map((c) => (
              <Chip
                key={c.slug}
                active={category === c.slug}
                onClick={() => setParam('category', c.slug)}
              >
                {c.name}
              </Chip>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 border-l border-rule pl-4 lg:flex">
            {sorts.map((s) => (
              <Chip
                key={s.key}
                active={sort === s.key}
                onClick={() => setParam('sort', s.key)}
              >
                {s.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <Section className="pb-section">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow>
              {list.length} {list.length === 1 ? 'piece' : 'pieces'}
            </Eyebrow>
            {activeCollection && (
              <Chip active onClick={() => setParam('collection', 'all')}>
                {activeCollection.name} ✕
              </Chip>
            )}
          </div>

          <div className="flex items-center gap-5">
            <label className="flex items-center gap-3 lg:hidden">
              <Eyebrow as="span">
                Sort
              </Eyebrow>
              <select
                value={sort}
                onChange={(e) => setParam('sort', e.target.value)}
                className="label border-b border-rule bg-transparent py-1 focus:outline-none"
              >
                {sorts.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
            {filtered && (
              <TextLink tone="mute" onClick={reset}>
                Clear filters
              </TextLink>
            )}
          </div>
        </div>

        {list.length === 0 ? (
          <div className="rule py-24 text-center">
            <Heading size="heading">Nothing here yet.</Heading>
            <Text className="mx-auto mt-4 max-w-sm">
              This combination isn&apos;t in the current chapter. Try a
              different category, or view everything.
            </Text>
            <Button variant="line" onClick={reset} className="mt-8">
              View everything
            </Button>
          </div>
        ) : (
          <ProductGrid products={list} />
        )}
      </Section>
    </>
  )
}
