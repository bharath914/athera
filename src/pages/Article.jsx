import { Link, Navigate, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
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
        <div className="shell relative flex h-full flex-col justify-end pb-12">
          <p className="eyebrow mb-5 text-paper/70">
            {article.kicker} · {formatDate(article.date)} · {article.readTime}
          </p>
          <h1 className="d1 max-w-[16ch] text-paper">{article.title}</h1>
        </div>
      </section>

      <article className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-28">
            <p className="eyebrow mb-2">Written by</p>
            <p className="text-[15px] font-light text-graphite">{article.author}</p>
            <p className="eyebrow mt-6 mb-2">Filed under</p>
            <p className="text-[15px] font-light text-graphite">{article.kicker}</p>
          </div>
        </aside>

        <div className="md:col-span-7 md:col-start-5">
          <p className="d3 mb-10 max-w-2xl">{article.excerpt}</p>
          <div className="space-y-6">
            {article.body.map((para, i) => (
              <Reveal key={i} amount={0.1} delay={0.03 * i}>
                <p
                  className={
                    i === 0
                      ? "body-copy text-[17px] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[64px] first-letter:leading-[0.8] first-letter:text-ink"
                      : 'body-copy text-[17px]'
                  }
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="eyebrow mt-14 border-t border-rule pt-6">
            Aethera Studio — {formatDate(article.date)}
          </p>
        </div>
      </article>

      <section className="shell border-t border-rule py-14">
        <p className="eyebrow mb-8">Keep reading</p>
        <div className="grid gap-8 sm:grid-cols-2">
          {more.map((a) => (
            <Link key={a.slug} to={`/journal/${a.slug}`} className="group">
              <div className="img-zoom">
                <Img src={imageUrl(a.cover, 900)} alt={a.title} ratio="16 / 10" />
              </div>
              <p className="eyebrow mt-4">{a.kicker}</p>
              <h3 className="d4 mt-1 max-w-md">{a.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
