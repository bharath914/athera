import PageMeta from '../components/PageMeta'
import { PageHeader, Section, Spread } from '../components/ui'
import { collections, products, imageUrl } from '../data/products'

export default function Collections() {
  return (
    <>
      <PageMeta
        title="Collections"
        description="Four chapters of Aethera — Quiet Hours, The Long Table, Atelier Series and Low Light."
      />

      <PageHeader
        eyebrow="Four chapters"
        title="Collections"
        titleClassName="max-w-[13ch]"
        lede="We release work in chapters rather than seasons. Each one is a small, closed set of pieces designed to be lived with together — and they keep working once the chapter closes."
      />

      <Section flush innerClassName="space-y-[clamp(5rem,9vw,10rem)]">
        {collections.map((c, i) => {
          const count = products.filter((p) => p.collection === c.slug).length
          return (
            <Spread
              key={c.slug}
              to={`/collections/${c.slug}`}
              image={imageUrl(c.cover, 1600)}
              alt={c.name}
              flip={i % 2 === 1}
              kicker={`${c.season} · ${count} ${count === 1 ? 'piece' : 'pieces'}`}
              title={c.name}
              lede={c.tagline}
              body={c.description}
              action="Open chapter"
            />
          )
        })}
      </Section>
    </>
  )
}
