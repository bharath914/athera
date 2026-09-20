import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import ProductCard from '../components/ProductCard'
import {
  Button,
  Card,
  Eyebrow,
  Heading,
  Section,
  SectionHeader,
  Text,
  TextLink,
} from '../components/ui'
import { products, imageUrl } from '../data/products'

const pairs = [
  [
    { name: 'Seating', to: '/shop?category=seating', image: 'photo-1555041469-a586c61ea9bc' },
    { name: 'Tables', to: '/shop?category=tables', image: 'photo-1604578762246-41134e37f9cc' },
  ],
  [
    { name: 'Lighting', to: '/shop?category=lighting', image: 'photo-1540932239986-30128078f3c5' },
    { name: 'Textiles', to: '/shop?category=textiles', image: 'photo-1583845112203-29329902332e' },
  ],
]

const arrivals = [...products].sort((a, b) => b.year - a.year).slice(0, 4)

function Pair({ items }) {
  return (
    <Section innerClassName="grid gap-5 sm:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={it.name} variant="fade" delay={i * 0.08}>
          <Card
            to={it.to}
            image={imageUrl(it.image, 1800)}
            alt={it.name}
            ratio="4 / 5"
            title={it.name}
            titleSize="title"
          />
        </Reveal>
      ))}
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <PageMeta
        title="Furniture for quiet rooms"
        description="Aethera makes furniture and objects for calm, considered rooms. Solid timber, honest materials, small runs."
      />

      {/* One headline, one photograph */}
      <section className="pt-[56px] sm:pt-[64px]">
        <div className="shell pb-[clamp(1.5rem,3vw,3rem)] pt-[clamp(2.5rem,5vw,5.5rem)] text-center">
          <Reveal>
            <Heading as="h1" size="display" className="mx-auto max-w-[14ch]">
              Furniture for quiet rooms
            </Heading>
          </Reveal>
        </div>
        <Link to="/shop?category=seating" className="block">
          <Img
            src={imageUrl('photo-1616486338812-3dadae4b4ace', 2600)}
            alt="A soft sectional in warm light"
            ratio="auto"
            priority
            className="h-[72svh] min-h-[380px] w-full"
          />
        </Link>
        <div className="shell mt-3 flex items-center justify-between gap-6">
          <Eyebrow>The living room</Eyebrow>
          <TextLink to="/shop?category=seating" arrow>
            Shop seating
          </TextLink>
        </div>
      </section>

      {/* A line, a button */}
      <Section innerClassName="text-center">
        <Reveal>
          <Text variant="lead" className="mx-auto max-w-[30em]">
            Furniture and objects designed for calm rooms — solid timber,
            honest materials, made in small runs and meant to last.
          </Text>
          <Button to="/collections" variant="line" className="mt-8">
            Explore the collections
          </Button>
        </Reveal>
      </Section>

      <Pair items={pairs[0]} />

      {/* Full-bleed band */}
      <Section bleed>
        <Reveal variant="fade">
          <Link to="/collections/quiet-hours" className="img-zoom block">
            <Img
              src={imageUrl('photo-1616594039964-ae9021a400a0', 2600)}
              alt="A quiet bedroom"
              ratio="auto"
              className="h-[80svh] min-h-[400px] w-full"
            />
          </Link>
        </Reveal>
        <div className="shell mt-3 flex items-center justify-between gap-6">
          <Eyebrow>Quiet Hours — the bedroom</Eyebrow>
          <TextLink to="/collections/quiet-hours" arrow>
            Open the chapter
          </TextLink>
        </div>
      </Section>

      <Section>
        <SectionHeader title="New arrivals" action={{ to: '/shop', label: 'View all' }} />
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {arrivals.map((p, i) => (
            <Reveal key={p.id} variant="fade" delay={(i % 4) * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Pair items={pairs[1]} />
    </>
  )
}
