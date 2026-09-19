import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import Marquee from '../components/Marquee'
import ProductCard from '../components/ProductCard'
import PageMeta from '../components/PageMeta'
import { products, categories, collections, imageUrl } from '../data/products'
import { journal, formatDate } from '../data/journal'

const featured = products.filter((p) => p.featured).slice(0, 6)
const lead = collections[0]

export default function Home() {
  const [active, setActive] = useState(0)

  return (
    <>
      <PageMeta
        title="Furniture & Objects for Considered Living"
        description="Aethera curates furniture and home accessories designed for calm, functional living. Timeless craftsmanship, honest materials, quietly modern design."
      />

      <Hero />

      <Marquee
        items={[
          'Solid timber, never veneer-over-board',
          'Made in runs of forty',
          'Ten-year frame guarantee',
          'Repairable by design',
          'Delivered and placed by us',
        ]}
      />

      {/* ─── Statement ────────────────────────────────────────── */}
      <section className="shell grid gap-10 py-20 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-6">01 — The idea</p>
          <p className="d3 max-w-2xl">
            We design for the second year of ownership, not the first
            afternoon. A piece earns its place by being easy to live
            beside — <em className="italic text-clay">quiet, useful, and
            still standing straight a decade in.</em>
          </p>
          <div className="mt-10 grid max-w-xl gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Material honesty</p>
              <p className="body-copy">
                Solid ash, oak, stone and undyed cloth. Finishes that can be
                repaired at home rather than sent away.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Small production</p>
              <p className="body-copy">
                Forty units a run, made with four workshops we&apos;ve worked
                with since 2019. Slower, and considerably better.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="clip" delay={0.1} className="md:col-span-4 md:col-start-9">
          <Img
            src={imageUrl('photo-1567538096630-e0c55bd6374c', 1000)}
            alt="Sorrel Lounge Chair in a bare room"
            ratio="3 / 4"
          />
          <p className="mt-4 text-[12px] font-light leading-relaxed text-mute">
            Sorrel Lounge Chair — steam-bent ash, undyed bouclé.
            <br />
            Photographed at the Richmond Town showroom.
          </p>
        </Reveal>
      </section>

      {/* ─── Category index ───────────────────────────────────── */}
      <section className="shell py-8 md:py-16">
        <SectionHead
          index="02"
          eyebrow="The catalogue"
          title="Six categories. Nothing surplus."
          note="Everything we make agrees with everything else we make. Start anywhere."
          action={{ to: '/shop', label: 'View everything' }}
        />

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul className="rule">
              {categories.map((c, i) => (
                <li key={c.slug}>
                  <Link
                    to={`/shop?category=${c.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex items-baseline gap-5 border-b border-rule py-6 transition-colors duration-500 hover:bg-bone/60 md:py-8"
                  >
                    <span className="w-8 shrink-0 text-[11px] tracking-widest2 text-mute">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
                      <span className="d3 block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                        {c.name}
                      </span>
                      <span className="body-copy mt-1 block max-w-md">
                        {c.tagline}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[11px] tracking-widest2 text-mute transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:col-span-4 md:col-start-9 md:block">
            <div className="sticky top-28">
              <Img
                key={categories[active].slug}
                src={imageUrl(categories[active].image, 1000)}
                alt={categories[active].name}
                ratio="3 / 4"
              />
              <p className="eyebrow mt-4">{categories[active].name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Collection spread ────────────────────────────────── */}
      <section className="mt-20 bg-bone py-20 md:mt-32 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal variant="clip" className="md:col-span-7">
            <Img
              src={imageUrl(lead.cover, 1600)}
              alt={`${lead.name} collection`}
              ratio="16 / 11"
            />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="eyebrow mb-4">{lead.season} — Featured collection</p>
            <h2 className="d2">{lead.name}</h2>
            <p className="lede mt-5">{lead.tagline}</p>
            <p className="body-copy mt-4">{lead.description}</p>
            <Link to={`/collections/${lead.slug}`} className="btn-ghost mt-8">
              See the collection
            </Link>
          </Reveal>
        </div>

        <div className="shell mt-10 grid gap-5 sm:grid-cols-2 md:mt-16">
          {lead.spread.map((img, i) => (
            <Reveal key={img} delay={i * 0.08} variant="clip">
              <Img
                src={imageUrl(img, 1200)}
                alt={`${lead.name} — detail ${i + 1}`}
                ratio={i === 0 ? '4 / 5' : '4 / 5'}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Selected pieces ──────────────────────────────────── */}
      <section className="shell py-20 md:py-32">
        <SectionHead
          index="03"
          eyebrow="Selected pieces"
          title="A short list of things worth keeping."
          action={{ to: '/shop', label: 'All 18 pieces' }}
        />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.07}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Editorial break ──────────────────────────────────── */}
      <section className="relative">
        <Img
          src={imageUrl('photo-1513694203232-719a280e022f', 2000)}
          alt="Evening light across a low sofa"
          ratio="21 / 9"
          className="hidden md:block"
        />
        <Img
          src={imageUrl('photo-1513694203232-719a280e022f', 1200)}
          alt="Evening light across a low sofa"
          ratio="4 / 5"
          className="md:hidden"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="shell absolute inset-0 flex items-center">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-5 text-paper/70">From the journal</p>
            <blockquote className="d2 text-paper">
              “A room reaches its final form long before the last object
              arrives.”
            </blockquote>
            <Link
              to="/journal/the-case-for-fewer-things"
              className="link-underline mt-7 inline-block text-[11px] uppercase tracking-widest2 text-paper"
            >
              Read the essay
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── Journal ──────────────────────────────────────────── */}
      <section className="shell py-20 md:py-32">
        <SectionHead
          index="04"
          eyebrow="Journal"
          title="Notes on making, materials and living quietly."
          action={{ to: '/journal', label: 'Read the journal' }}
        />

        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {journal.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link to={`/journal/${a.slug}`} className="group block">
                <div className="img-zoom">
                  <Img
                    src={imageUrl(a.cover, 900)}
                    alt={a.title}
                    ratio="4 / 3"
                  />
                </div>
                <p className="eyebrow mt-5">
                  {a.kicker} · {formatDate(a.date)}
                </p>
                <h3 className="d4 mt-2 max-w-sm">{a.title}</h3>
                <p className="body-copy mt-3 max-w-sm">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Service ──────────────────────────────────────────── */}
      <section className="shell grid gap-10 border-t border-rule py-16 md:grid-cols-3 md:py-20">
        {[
          {
            t: 'Made to order',
            d: 'Most pieces are built after you order them. Lead times are stated honestly on every product page, and we do not move them.',
          },
          {
            t: 'Delivered and placed',
            d: 'Our own team delivers within Bengaluru, Mumbai and Delhi NCR — unpacked, positioned, packaging taken away.',
          },
          {
            t: 'Repaired, not replaced',
            d: 'Ten-year frame guarantee. Re-upholstery, re-weaving and refinishing are offered for the life of the piece.',
          },
        ].map((s, i) => (
          <Reveal key={s.t} delay={i * 0.07}>
            <p className="eyebrow mb-4">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="d4 mb-3">{s.t}</h3>
            <p className="body-copy max-w-sm">{s.d}</p>
          </Reveal>
        ))}
      </section>
    </>
  )
}
