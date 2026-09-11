import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { collections, products, imageUrl } from '../data/products'
import { cx } from '../lib/format'

export default function Collections() {
  return (
    <>
      <PageMeta
        title="Collections"
        description="Four chapters of Aethera — Quiet Hours, The Long Table, Atelier Series and Low Light."
      />

      <header className="shell pb-14 pt-[112px] sm:pt-[136px]">
        <Reveal>
          <p className="eyebrow mb-5">Four chapters</p>
          <h1 className="d1 max-w-[13ch]">Collections</h1>
          <p className="lede mt-6 max-w-xl">
            We release work in chapters rather than seasons. Each one is a
            small, closed set of pieces designed to be lived with together —
            and they keep working once the chapter closes.
          </p>
        </Reveal>
      </header>

      <div className="shell space-y-20 md:space-y-32">
        {collections.map((c, i) => {
          const count = products.filter((p) => p.collection === c.slug).length
          const flip = i % 2 === 1
          return (
            <section
              key={c.slug}
              className="grid gap-8 md:grid-cols-12 md:items-center"
            >
              <Reveal
                variant="clip"
                className={cx(
                  'md:col-span-7',
                  flip ? 'md:order-2 md:col-start-6' : ''
                )}
              >
                <Link to={`/collections/${c.slug}`} className="img-zoom block">
                  <Img
                    src={imageUrl(c.cover, 1600)}
                    alt={c.name}
                    ratio="16 / 11"
                  />
                </Link>
              </Reveal>

              <Reveal
                delay={0.08}
                className={cx(
                  'md:col-span-4',
                  flip ? 'md:order-1 md:col-start-1' : 'md:col-start-9'
                )}
              >
                <p className="eyebrow mb-4">
                  {c.season} · {count} {count === 1 ? 'piece' : 'pieces'}
                </p>
                <h2 className="d2">{c.name}</h2>
                <p className="lede mt-4 italic">{c.tagline}</p>
                <p className="body-copy mt-4">{c.description}</p>
                <Link
                  to={`/collections/${c.slug}`}
                  className="link-underline mt-7 inline-block text-[11px] uppercase tracking-widest2"
                >
                  Open chapter
                </Link>
              </Reveal>
            </section>
          )
        })}
      </div>
    </>
  )
}
