import { Link, Navigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import PageMeta from '../components/PageMeta'
import { getCollection, products, collections, imageUrl } from '../data/products'

export default function CollectionDetail() {
  const { slug } = useParams()
  const collection = getCollection(slug)
  if (!collection) return <Navigate to="/collections" replace />

  const list = products.filter((p) => p.collection === collection.slug)
  const others = collections.filter((c) => c.slug !== collection.slug)

  return (
    <>
      <PageMeta title={collection.name} description={collection.description} />

      <section className="relative h-[78svh] min-h-[460px] overflow-hidden">
        <div className="absolute inset-0">
          <Img
            src={imageUrl(collection.cover, 2000)}
            alt={collection.name}
            ratio="auto"
            priority
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/15 to-ink/65" />
        <div className="shell relative flex h-full flex-col justify-end pb-12">
          <p className="eyebrow mb-5 text-paper/70">{collection.season}</p>
          <h1 className="d1 text-paper">{collection.name}</h1>
          <p className="lede mt-5 max-w-lg text-paper/85">{collection.tagline}</p>
        </div>
      </section>

      <section className="shell grid gap-8 py-16 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-5">
          <h2 className="d3 max-w-md">{collection.statement}</h2>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
          <p className="lede">{collection.description}</p>
          <p className="eyebrow mt-8">
            {list.length} {list.length === 1 ? 'piece' : 'pieces'} in this chapter
          </p>
        </Reveal>
      </section>

      <section className="shell grid gap-5 sm:grid-cols-2">
        {collection.spread.map((img, i) => (
          <Reveal key={img} variant="clip" delay={i * 0.08}>
            <Img
              src={imageUrl(img, 1200)}
              alt={`${collection.name} — detail ${i + 1}`}
              ratio="4 / 5"
            />
          </Reveal>
        ))}
      </section>

      <section className="shell py-20 md:py-28">
        <h2 className="d3 mb-10 border-t border-rule pt-8">In this chapter</h2>
        {list.length ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.07}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="body-copy">This chapter is still in the workshop.</p>
        )}
      </section>

      <section className="shell border-t border-rule py-14">
        <p className="eyebrow mb-8">Other chapters</p>
        <div className="grid gap-8 sm:grid-cols-3">
          {others.map((c) => (
            <Link key={c.slug} to={`/collections/${c.slug}`} className="group">
              <div className="img-zoom">
                <Img src={imageUrl(c.cover, 800)} alt={c.name} ratio="3 / 2" />
              </div>
              <p className="eyebrow mt-4">{c.season}</p>
              <h3 className="d4 mt-1">{c.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
