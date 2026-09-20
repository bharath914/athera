import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { Card, Eyebrow, Heading, PageHeader, Section, SectionHeader, Text, TextLink } from '../components/ui'
import { journal, formatDate } from '../data/journal'
import { imageUrl } from '../data/products'

export default function Journal() {
  const [lead, ...rest] = journal

  return (
    <>
      <PageMeta
        title="Journal"
        description="Essays, craft notes and guides from the Aethera studio."
      />

      <PageHeader
        eyebrow="Writing from the studio"
        title="Journal"
        titleClassName="max-w-[12ch]"
      />

      {/* Lead article */}
      <Section flush>
        <Reveal variant="clip">
          <Link to={`/journal/${lead.slug}`} className="group block">
            <div className="img-zoom">
              <Img
                src={imageUrl(lead.cover, 2000)}
                alt={lead.title}
                ratio="16 / 9"
                priority
              />
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <Eyebrow className="mb-4">
                  {lead.kicker} · {formatDate(lead.date)} · {lead.readTime}
                </Eyebrow>
                <Heading size="title" className="max-w-2xl">
                  {lead.title}
                </Heading>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Text>{lead.excerpt}</Text>
                <TextLink arrow as="span" className="mt-6" tabIndex={-1}>
                  Read — {lead.author}
                </TextLink>
              </div>
            </div>
          </Link>
        </Reveal>
      </Section>

      {/* Index */}
      <Section>
        <SectionHeader title="All writing" />
        <div className="mt-[clamp(28px,3vw,52px)] grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.06}>
              <Card
                to={`/journal/${a.slug}`}
                image={imageUrl(a.cover, 900)}
                alt={a.title}
                ratio="4 / 3"
                kicker={`${a.kicker} · ${formatDate(a.date)}`}
                title={a.title}
                titleSize="heading"
                excerpt={a.excerpt}
                meta={`${a.readTime} — ${a.author}`}
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
