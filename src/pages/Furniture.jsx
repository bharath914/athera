import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { categories, products, imageUrl } from '../data/products'

export default function Furniture() {
  return (
    <>
      <PageMeta
        title="Furniture"
        description="Browse Aethera furniture by category — seating, tables, storage, lighting, textiles and objects."
      />

      <header className="shell pb-14 pt-[104px] sm:pt-[128px]">
        <Reveal>
          <p className="eyebrow mb-5">Six categories — {products.length} pieces</p>
          <h1 className="d1 max-w-[12ch]">Furniture</h1>
          <p className="lede mt-6 max-w-xl">
            Everything we make agrees with everything else we make. Start with a
            category, or open the full catalogue.
          </p>
        </Reveal>
      </header>

      <section className="shell grid grid-cols-1 gap-x-6 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => {
          const count = products.filter((p) => p.category === c.slug).length
          return (
            <Reveal key={c.slug} delay={(i % 3) * 0.07}>
              <Link to={`/shop?category=${c.slug}`} className="group block">
                <div className="img-zoom">
                  <Img src={imageUrl(c.image, 900)} alt={c.name} ratio="4 / 5" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h2 className="d4">{c.name}</h2>
                  <span className="text-[12px] uppercase tracking-widest2 text-mute">
                    {count} {count === 1 ? 'piece' : 'pieces'}
                  </span>
                </div>
                <p className="body-copy mt-2 max-w-sm">{c.tagline}</p>
              </Link>
            </Reveal>
          )
        })}
      </section>

      <section className="shell border-t border-rule py-14 text-center">
        <Reveal>
          <h2 className="d3">Or see everything at once.</h2>
          <Link to="/shop" className="btn-solid mt-7">
            Open the catalogue
          </Link>
        </Reveal>
      </section>
    </>
  )
}
