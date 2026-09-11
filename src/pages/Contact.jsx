import { useState } from 'react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { imageUrl } from '../data/products'

const subjects = ['A piece', 'Interiors & trade', 'Care or repair', 'Something else']

export default function Contact() {
  const [subject, setSubject] = useState(subjects[0])
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageMeta
        title="Contact"
        description="Visit the Aethera showroom in Bengaluru, or write to the studio about a piece, a project or a repair."
      />

      <header className="shell pb-14 pt-[112px] sm:pt-[136px]">
        <Reveal>
          <p className="eyebrow mb-5">Say hello</p>
          <h1 className="d1 max-w-[13ch]">Come in, or write.</h1>
        </Reveal>
      </header>

      <section className="shell grid gap-12 md:grid-cols-12">
        {/* Details */}
        <Reveal className="md:col-span-4">
          <div className="rule">
            {[
              {
                t: 'Showroom',
                lines: [
                  '14 Wood Street',
                  'Richmond Town, Bengaluru 560025',
                  'Tuesday–Sunday, 11–7',
                ],
              },
              {
                t: 'Studio',
                lines: ['hello@aethera.studio', '+91 80 4000 1900'],
              },
              {
                t: 'Trade & interiors',
                lines: ['trade@aethera.studio', 'Portfolio required'],
              },
              {
                t: 'Care & repair',
                lines: ['care@aethera.studio', 'Include your order number'],
              },
            ].map((b) => (
              <div key={b.t} className="border-b border-rule py-6">
                <p className="eyebrow mb-3">{b.t}</p>
                {b.lines.map((l) => (
                  <p key={l} className="text-[15px] font-light leading-relaxed text-graphite">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <Img
            src={imageUrl('photo-1538688525198-9b88f6f53126', 1000)}
            alt="The Aethera showroom entrance"
            ratio="4 / 3"
            className="mt-10"
          />
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08} className="md:col-span-7 md:col-start-6">
          {sent ? (
            <div className="rule pt-10">
              <p className="d2 max-w-lg">Thank you — your note is with us.</p>
              <p className="body-copy mt-5 max-w-md">
                Someone from the studio replies to everything within two working
                days. If it&apos;s urgent, the showroom phone is answered during
                opening hours.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-ghost mt-8"
              >
                Write another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="rule pt-10"
            >
              <p className="eyebrow mb-5">What is this about?</p>
              <div className="mb-10 flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSubject(s)}
                    aria-pressed={subject === s}
                    className={
                      'px-4 py-2 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ' +
                      (subject === s
                        ? 'bg-ink text-paper'
                        : 'border border-rule text-mute hover:border-ink hover:text-ink')
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <label>
                  <span className="eyebrow">Name</span>
                  <input required className="field mt-2" placeholder="Your name" />
                </label>
                <label>
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    type="email"
                    className="field mt-2"
                    placeholder="your@email.com"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="eyebrow">City</span>
                  <input className="field mt-2" placeholder="Bengaluru" />
                </label>
                <label className="sm:col-span-2">
                  <span className="eyebrow">Message</span>
                  <textarea
                    required
                    rows={5}
                    className="field mt-2 resize-none"
                    placeholder="Tell us about the room, or the piece."
                  />
                </label>
              </div>

              <button type="submit" className="btn-solid mt-10">
                Send note
              </button>
              <p className="body-copy mt-4 text-[13px] text-mute">
                This is a demonstration form — nothing is transmitted.
              </p>
            </form>
          )}
        </Reveal>
      </section>
    </>
  )
}
