import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import PageMeta from '../components/PageMeta'
import {
  Button,
  Eyebrow,
  Heading,
  Section,
  SectionHeader,
  SpecList,
  Text,
} from '../components/ui'
import { getProduct, products } from '../data/products'
import { formatPrice, cx } from '../lib/format'

/** A single closed-by-default disclosure — description, details, delivery. */
function Disclosure({ title, children, open = false }) {
  return (
    <details open={open} className="group border-b border-rule">
      <summary className="label flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
        {title}
        <span aria-hidden="true" className="transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="pb-5">{children}</div>
    </details>
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
    .slice(0, 4)
  const fallback = products
    .filter((p) => p.id !== product.id && p.category !== product.category)
    .slice(0, 4 - related.length)
  const also = [...related, ...fallback]

  const d = product.dimensions
  const specs = [
    { label: 'Materials', value: product.materials.join(', ') },
    {
      label: 'Dimensions',
      value:
        [d.w ? `W ${d.w}` : null, d.d ? `D ${d.d}` : null, d.h ? `H ${d.h}` : null]
          .filter(Boolean)
          .join(' × ') + ' cm',
    },
    ...(d.seat ? [{ label: 'Seat height', value: `${d.seat} cm` }] : []),
    { label: 'Designed by', value: `${product.designer}, ${product.year}` },
    { label: 'Guarantee', value: '10 years, frame' },
  ]

  return (
    <>
      <PageMeta title={product.name} description={product.excerpt} />

      <div className="shell pb-6 pt-[88px] sm:pt-[104px]">
        <Eyebrow as="nav" className="flex gap-2">
          <Link to="/shop" className="transition-colors hover:text-ink">
            Shop
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="transition-colors hover:text-ink"
          >
            {product.category}
          </Link>
        </Eyebrow>
      </div>

      <Section flush innerClassName="grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Photographs */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {product.images.map((_, i) => (
            <Reveal
              key={i}
              variant="fade"
              amount={0.1}
              className={cx(i === 0 && 'sm:col-span-2')}
            >
              <Img
                src={product.img(i, 2000)}
                alt={`${product.name} — view ${i + 1}`}
                ratio={i === 0 ? '4 / 3' : '4 / 5'}
                priority={i === 0}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </Reveal>
          ))}
        </div>

        {/* The ask */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[96px]">
            <Heading as="h1" size="title">
              {product.name}
            </Heading>
            <Text variant="lead" tone="ink" className="mt-3 tabular-nums">
              {formatPrice(product.price)}
            </Text>
            <Text className="mt-6 text-mute">{product.excerpt}</Text>

            <Eyebrow tone="ink" className="mb-3 mt-8">
              Finish — {product.finishes[finish].label}
            </Eyebrow>
            <div className="flex flex-wrap gap-3">
              {product.finishes.map((f, i) => (
                <button
                  key={f.label}
                  type="button"
                  onClick={() => setFinish(i)}
                  aria-label={f.label}
                  aria-pressed={i === finish}
                  className={cx(
                    'h-8 w-8 rounded-full border transition-all duration-300',
                    i === finish
                      ? 'border-ink ring-1 ring-ink ring-offset-2 ring-offset-paper'
                      : 'border-rule hover:border-mute'
                  )}
                  style={{ backgroundColor: f.hex }}
                />
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <Button block onClick={() => setRequested(true)}>
                {requested ? 'Piece reserved' : 'Reserve this piece'}
              </Button>
              <Button block to="/contact" variant="line">
                Book a viewing
              </Button>
            </div>
            {requested && (
              <Text variant="small" className="mt-3 text-mute">
                Held for 48 hours. The studio will write to confirm finish and
                delivery.
              </Text>
            )}
            <Eyebrow className="mt-4">Lead time — {product.lead}</Eyebrow>

            <div className="mt-8 border-t border-rule">
              <Disclosure title="Description" open>
                <Text className="text-mute">{product.description}</Text>
              </Disclosure>
              <Disclosure title="Details">
                <SpecList items={specs} className="border-t-0" />
              </Disclosure>
              <Disclosure title="Delivery & care">
                <Text className="text-mute">
                  Made to order in small runs and placed in the room with
                  packaging removed. Timber is a living material — grain and
                  tone vary between pieces, and that variation is not a fault.
                </Text>
              </Disclosure>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="You may also like" action={{ to: '/shop', label: 'All pieces' }} />
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {also.map((p, i) => (
            <Reveal key={p.id} variant="fade" delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
