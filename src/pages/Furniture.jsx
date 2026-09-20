import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { Button, Card, Heading, PageHeader, Section } from '../components/ui'
import { categories, products, imageUrl } from '../data/products'

export default function Furniture() {
  return (
    <>
      <PageMeta
        title="Furniture"
        description="Browse Aethera furniture by category — seating, tables, storage, lighting, textiles and objects."
      />

      <PageHeader
        eyebrow={`Six categories — ${products.length} pieces`}
        title="Furniture"
        titleClassName="max-w-[12ch]"
        lede="Everything we make agrees with everything else we make. Start with a category, or open the full catalogue."
      />

      <Section
        flush
        innerClassName="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((c, i) => {
          const count = products.filter((p) => p.category === c.slug).length
          return (
            <Reveal key={c.slug} delay={(i % 3) * 0.07}>
              <Card
                to={`/shop?category=${c.slug}`}
                image={imageUrl(c.image, 1000)}
                alt={c.name}
                ratio="4 / 5"
                kicker={`${String(i + 1).padStart(2, '0')} — ${count} ${count === 1 ? 'piece' : 'pieces'}`}
                title={c.name}
                excerpt={c.tagline}
              />
            </Reveal>
          )
        })}
      </Section>

      <Section innerClassName="border-t border-rule pt-[clamp(3rem,5vw,5rem)] text-center">
        <Reveal>
          <Heading size="heading">Or see everything at once.</Heading>
          <Button to="/shop" className="mt-8">
            Open the catalogue
          </Button>
        </Reveal>
      </Section>
    </>
  )
}
