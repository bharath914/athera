import { Navigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { Card, Eyebrow, Heading, Section, SectionHeader, Text } from '../components/ui'
import { getArticle, journal, formatDate } from '../data/journal'
import { imageUrl } from '../data/products'

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <Navigate to="/journal" replace />

  const more = journal.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <PageMeta title={article.title} description={article.excerpt} />

      <section className="relative h-[70svh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <Img
            src={imageUrl(article.cover, 2000)}
            alt={article.title}
            ratio="auto"
            priority
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/15 to-ink/65" />
        <div className="shell relative flex h-full flex-col justify-end pb-[clamp(2.5rem,5vw,5rem)]">
          <Eyebrow tone="light" className="mb-6">
            {article.kicker} · {formatDate(article.date)} · {article.readTime}
          </Eyebrow>
          <Heading as="h1" size="display" tone="light" className="max-w-[16ch]">
            {article.title}
          </Heading>
        </div>
      </section>

      <Section as="article" innerClassName="grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-28">
            <Eyebrow className="mb-2">
              Written by
            </Eyebrow>
            <Text tone="ink">{article.author}</Text>
            <Eyebrow className="mb-2 mt-6">
              Filed under
            </Eyebrow>
            <Text tone="ink">{article.kicker}</Text>
          </div>
        </aside>

        <div className="md:col-span-7 md:col-start-5">
          <Heading size="heading" className="mb-10 max-w-2xl">
            {article.excerpt}
          </Heading>
          <div className="space-y-6">
            {article.body.map((para, i) => (
              <Reveal key={i} amount={0.1} delay={0.03 * i}>
                <Text
                  variant="lead"
                  className={
                    i === 0
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.5rem] first-letter:font-light first-letter:leading-[0.8] first-letter:text-ink'
                      : ''
                  }
                >
                  {para}
                </Text>
              </Reveal>
            ))}
          </div>

          <Eyebrow className="mt-14 border-t border-rule pt-6">
            Aethera Studio — {formatDate(article.date)}
          </Eyebrow>
        </div>
      </Section>

      <Section>
        <SectionHeader title="More from the journal" />
        <div className="mt-[clamp(28px,3vw,52px)] grid gap-8 sm:grid-cols-2">
          {more.map((a) => (
            <Card
              key={a.slug}
              to={`/journal/${a.slug}`}
              image={imageUrl(a.cover, 900)}
              alt={a.title}
              ratio="16 / 10"
              kicker={a.kicker}
              title={a.title}
              titleSize="heading"
            />
          ))}
        </div>
      </Section>
    </>
  )
}
