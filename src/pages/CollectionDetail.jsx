import { Navigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProductGrid from '../components/ProductGrid'
import PageMeta from '../components/PageMeta'
import { Card, Eyebrow, Heading, Section, SectionHeader, Text } from '../components/ui'
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
        <div className="shell relative flex h-full flex-col justify-end pb-[clamp(2.5rem,5vw,5rem)]">
          <Eyebrow tone="light" className="mb-6">
            {collection.season}
          </Eyebrow>
          <Heading as="h1" size="display" tone="light">
            {collection.name}
          </Heading>
          <Text variant="lead" tone="light" className="mt-5 max-w-lg">
            {collection.tagline}
          </Text>
        </div>
      </section>

      <Section innerClassName="grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <Heading size="heading" className="max-w-md">
            {collection.statement}
          </Heading>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
          <Text variant="lead">{collection.description}</Text>
          <Eyebrow className="mt-8">
            {list.length} {list.length === 1 ? 'piece' : 'pieces'} in this chapter
          </Eyebrow>
        </Reveal>
      </Section>

      <Section innerClassName="grid gap-5 sm:grid-cols-2">
        {collection.spread.map((img, i) => (
          <Reveal key={img} variant="clip" delay={i * 0.08}>
            <Img
              src={imageUrl(img, 1200)}
              alt={`${collection.name} — detail ${i + 1}`}
              ratio="4 / 5"
            />
          </Reveal>
        ))}
      </Section>

      <Section>
        <SectionHeader title="In this chapter" />
        <div className="mt-[clamp(28px,3vw,52px)]">
          {list.length ? (
            <ProductGrid products={list} />
          ) : (
            <Text>This chapter is still in the workshop.</Text>
          )}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Other chapters" />
        <div className="mt-[clamp(28px,3vw,52px)] grid gap-8 sm:grid-cols-3">
          {others.map((c) => (
            <Card
              key={c.slug}
              to={`/collections/${c.slug}`}
              image={imageUrl(c.cover, 900)}
              alt={c.name}
              ratio="3 / 2"
              kicker={c.season}
              title={c.name}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
