import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import PageMeta from '../components/PageMeta'
import { getProduct, products } from '../data/products'
import { formatPrice, cx } from '../lib/format'

function Spec({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-rule py-3">
      <dt className="eyebrow">{label}</dt>
      <dd className="text-right text-[14px] font-light text-graphite">{value}</dd>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [finish, setFinish] = useState(0)
  const [requested, setRequested] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3)
  const fallback = products
    .filter((p) => p.id !== product.id && p.category !== product.category)
    .slice(0, 3 - related.length)
  const also = [...related, ...fallback]

  const d = product.dimensions

  return (
    <>
      <PageMeta title={product.name} description={product.excerpt} />

      <div className="shell pb-8 pt-[100px] sm:pt-[120px]">
        <nav className="eyebrow flex items-center gap-2">
          <Link to="/shop" className="link-underline">
            Shop
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={`/shop?category=${product.category}`} className="link-underline">
            {product.category}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="shell grid gap-10 md:grid-cols-12 md:gap-12">
        {/* Gallery */}
        <div className="flex flex-col gap-4 md:col-span-7">
          {product.images.map((_, i) => (
            <Reveal key={i} variant={i === 0 ? 'fade' : 'clip'} amount={0.1}>
              <Img
                src={product.img(i, 1400)}
                alt={`${product.name} — view ${i + 1}`}
                ratio={i === 0 ? '4 / 5' : '4 / 3'}
                priority={i === 0}
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </Reveal>
          ))}
        </div>

        {/* Detail column */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-[104px]">
            <p className="eyebrow mb-4">
              {product.collection ? 'Collection piece · ' : ''}
              {product.designer} · {product.year}
            </p>
            <h1 className="d2">{product.name}</h1>
            <p className="mt-4 text-[17px] font-light tabular-nums text-graphite">
              {formatPrice(product.price)}
              <span className="ml-3 text-[12px] uppercase tracking-widest2 text-mute">
                incl. taxes
              </span>
            </p>

            <p className="body-copy mt-7">{product.description}</p>

            {/* Finishes */}
            <div className="mt-9">
              <p className="eyebrow mb-4">
                Finish — {product.finishes[finish].label}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.finishes.map((f, i) => (
                  <button
                    key={f.label}
                    type="button"
                    onClick={() => setFinish(i)}
                    aria-label={f.label}
                    aria-pressed={i === finish}
                    className={cx(
                      'h-9 w-9 rounded-full border transition-all duration-300',
                      i === finish
                        ? 'border-ink ring-1 ring-ink ring-offset-2 ring-offset-paper'
                        : 'border-rule hover:border-mute'
                    )}
                    style={{ backgroundColor: f.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setRequested(true)}
                className="btn-solid flex-1 sm:flex-none"
              >
                {requested ? 'Piece reserved' : 'Reserve this piece'}
              </button>
              <Link to="/contact" className="btn-ghost flex-1 sm:flex-none">
                Book a viewing
              </Link>
            </div>
            {requested && (
              <p className="body-copy mt-4">
                Held for 48 hours. A member of the studio will write to you at
                the address on your account to confirm finish and delivery
                window.
              </p>
            )}

            <p className="eyebrow mt-6">
              Lead time — <span className="text-ink">{product.lead}</span>
            </p>

            {/* Specs */}
            <dl className="mt-10 border-t border-rule">
              <Spec label="Materials" value={product.materials.join(', ')} />
              <Spec
                label="Dimensions"
                value={[
                  d.w ? `W ${d.w}` : null,
                  d.d ? `D ${d.d}` : null,
                  d.h ? `H ${d.h}` : null,
                ]
                  .filter(Boolean)
                  .join(' × ') + ' cm'}
              />
              {d.seat && <Spec label="Seat height" value={`${d.seat} cm`} />}
              <Spec label="Designed by" value={`${product.designer}, ${product.year}`} />
              <Spec label="Guarantee" value="10 years, frame" />
              <Spec label="Delivery" value="Placed in room, packaging removed" />
            </dl>

            <p className="body-copy mt-6 text-[13px] text-mute">
              Made to order in small runs. Timber is a living material —
              grain, tone and figure will vary between pieces, and that
              variation is not a fault.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="shell mt-24 md:mt-36">
        <div className="mb-10 flex items-baseline justify-between border-t border-rule pt-8">
          <h2 className="d3">Also consider</h2>
          <Link
            to="/shop"
            className="link-underline text-[11px] uppercase tracking-widest2"
          >
            All pieces
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {also.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
