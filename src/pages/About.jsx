import Img from '../components/Img'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import PageMeta from '../components/PageMeta'
import { Button, Eyebrow, Heading, PageHeader, Section, Text } from '../components/ui'
import { imageUrl } from '../data/products'

const principles = [
  {
    t: 'Design for the second year',
    d: 'A piece proves itself after the novelty has gone. We test proportions, finishes and joints against how they will read once they are ordinary.',
  },
  {
    t: 'Honest materials only',
    d: 'Solid timber rather than veneer over board. Natural fibres rather than blends. Where we use steel or brass, it is left as itself.',
  },
  {
    t: 'Small runs, named makers',
    d: 'Forty units per run across four workshops we have worked with since 2019. Every piece carries the workshop mark on its underside.',
  },
  {
    t: 'Repair before replace',
    d: 'Re-upholstery, re-weaving and refinishing are offered for the life of the piece. Frames carry a ten-year guarantee.',
  },
]

const numbers = [
  { n: '2019', l: 'Studio founded' },
  { n: '4', l: 'Partner workshops' },
  { n: '40', l: 'Units per run' },
  { n: '10 yr', l: 'Frame guarantee' },
]

export default function About() {
  return (
    <>
      <PageMeta
        title="Studio"
        description="Aethera is a small design studio in Bengaluru making furniture and objects for calm, functional rooms."
      />

      <PageHeader
        eyebrow="The studio — est. 2019, Bengaluru"
        title="We make quiet things carefully."
        titleClassName="max-w-[16ch]"
      />

      <Section flush>
        <Reveal variant="clip">
          <Img
            src={imageUrl('photo-1524484485831-a92ffc0de03f', 2000)}
            alt="The Aethera studio in Richmond Town"
            ratio="16 / 9"
            priority
          />
        </Reveal>
      </Section>

      <Section innerClassName="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <Heading size="heading" className="max-w-sm">
            Aethera began with one chair and an argument about lacquer.
          </Heading>
        </Reveal>
        <Reveal delay={0.08} className="space-y-5 md:col-span-6 md:col-start-7">
          <Text variant="lead">
            The chair took nine months. The argument — whether a finish should
            hide a material or admit it — took considerably longer, and it
            settled everything that came afterwards.
          </Text>
          <Text>
            We are a studio of seven working out of a converted warehouse in
            Richmond Town. We design the whole catalogue in-house and
            manufacture it with four independent workshops across Karnataka,
            Rajasthan and Gujarat — the same four we started with. That
            relationship is the reason we can run forty units at a time and
            still ask for a hand-hemmed selvedge.
          </Text>
          <Text>
            We do not run sales, we do not release seasonally, and we do not
            discontinue pieces that are still good. A catalogue that grows by
            four or five pieces a year is a slower business and a much better
            one to buy from.
          </Text>
        </Reveal>
      </Section>

      <div className="pt-section">
        <Marquee
          items={[
            'Designed in Bengaluru',
            'Made in Karnataka, Rajasthan & Gujarat',
            'Seven people',
            'Four workshops',
            'No seasonal sales',
          ]}
        />
      </div>

      <Section innerClassName="grid gap-10 md:grid-cols-12">
        <Reveal variant="clip" className="md:col-span-5">
          <Img
            src={imageUrl('photo-1567538096630-e0c55bd6374c', 1200)}
            alt="A frame resting in the workshop"
            ratio="3 / 4"
          />
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Eyebrow className="mb-8">Four principles</Eyebrow>
          <div className="rule">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div className="flex items-baseline gap-5 border-b border-rule py-7">
                  <Eyebrow as="span" className="w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </Eyebrow>
                  <div>
                    <Heading as="h3" size="heading">
                      {p.t}
                    </Heading>
                    <Text className="mt-2 max-w-md">{p.d}</Text>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="bone" className="mt-[clamp(4rem,7vw,7.5rem)]" innerClassName="grid grid-cols-2 gap-8 md:grid-cols-4">
        {numbers.map((n, i) => (
          <Reveal key={n.l} delay={i * 0.06}>
            <Heading as="p" size="title">
              {n.n}
            </Heading>
            <Eyebrow className="mt-3">
              {n.l}
            </Eyebrow>
          </Reveal>
        ))}
      </Section>

      <Section innerClassName="text-center">
        <Reveal>
          <Eyebrow center className="mb-6">
            Visit
          </Eyebrow>
          <Heading size="heading" className="mx-auto max-w-2xl">
            The showroom is small and the tea is good.
          </Heading>
          <Text className="mx-auto mt-5 max-w-md">
            14 Wood Street, Richmond Town, Bengaluru. Open Tuesday to Sunday,
            eleven until seven. No appointment needed, though one helps.
          </Text>
          <Button to="/contact" className="mt-9">
            Plan a visit
          </Button>
        </Reveal>
      </Section>
    </>
  )
}
