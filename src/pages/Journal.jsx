import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
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

      <header className="shell pb-12 pt-[112px] sm:pt-[136px]">
        <Reveal>
          <p className="eyebrow mb-5">Writing from the studio</p>
          <h1 className="d1 max-w-[12ch]">Journal</h1>
        </Reveal>
      </header>

      {/* Lead article */}
      <section className="shell">
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
            <div className="mt-7 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="eyebrow mb-3">
                  {lead.kicker} · {formatDate(lead.date)} · {lead.readTime}
                </p>
                <h2 className="d2 max-w-2xl">{lead.title}</h2>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="body-copy">{lead.excerpt}</p>
                <span className="link-underline mt-5 inline-block text-[11px] uppercase tracking-widest2">
                  Read — {lead.author}
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Index */}
      <section className="shell mt-20 md:mt-28">
        <p className="eyebrow mb-6 border-t border-rule pt-6">All writing</p>
        <ul>
          {rest.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 0.06}>
              <Link
                to={`/journal/${a.slug}`}
                className="group grid gap-5 border-b border-rule py-8 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-3">
                  <div className="img-zoom">
                    <Img src={imageUrl(a.cover, 700)} alt={a.title} ratio="4 / 3" />
                  </div>
                </div>
                <div className="md:col-span-6">
                  <p className="eyebrow mb-2">
                    {a.kicker} · {formatDate(a.date)}
                  </p>
                  <h3 className="d3 transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                    {a.title}
                  </h3>
                  <p className="body-copy mt-2 max-w-xl">{a.excerpt}</p>
                </div>
                <div className="md:col-span-2 md:col-start-11 md:text-right">
                  <p className="eyebrow">{a.readTime}</p>
                  <p className="mt-1 text-[13px] font-light text-mute">
                    {a.author}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  )
}
