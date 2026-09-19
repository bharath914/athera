import { useState } from 'react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { imageUrl } from '../data/products'

const rooms = ['Living room', 'Bedroom', 'Dining', 'Workspace']
const moods = ['Quiet & pale', 'Warm & timber', 'Low & dark']

const steps = [
  {
    t: 'Tell us the room',
    d: 'Dimensions, where the light comes from, and what the room has to do on an ordinary Tuesday.',
  },
  {
    t: 'We draft a scheme',
    d: 'A plan drawn only from pieces we actually make, with the floor left as empty as it should be.',
  },
  {
    t: 'A person checks it',
    d: 'Every scheme is reviewed by someone in the studio before it reaches you. Nothing is sent unread.',
  },
]

export default function DesignByAI() {
  const [room, setRoom] = useState(rooms[0])
  const [mood, setMood] = useState(moods[0])
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageMeta
        title="Design by AI"
        description="Describe your room and Aethera drafts a scheme from pieces we actually make — reviewed by the studio before it reaches you."
      />

      <header className="shell pb-14 pt-[104px] sm:pt-[128px]">
        <Reveal>
          <p className="eyebrow mb-5">In preview</p>
          <h1 className="d1 max-w-[14ch]">Design your room.</h1>
          <p className="lede mt-6 max-w-xl">
            Describe the space and we&apos;ll draft a scheme from the catalogue —
            proportions, placement and a shortlist. Then someone in the studio
            reads it before you do.
          </p>
        </Reveal>
      </header>

      <section className="shell grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          {sent ? (
            <div className="rule pt-10">
              <p className="d3 max-w-md">
                Your {room.toLowerCase()} is in the queue.
              </p>
              <p className="body-copy mt-4 max-w-md">
                Schemes take two working days while the preview is running. We
                write to you once a designer has read the draft.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-ghost mt-8"
              >
                Start another
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
              <p className="eyebrow mb-4">Which room?</p>
              <div className="mb-9 flex flex-wrap gap-2">
                {rooms.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRoom(r)}
                    aria-pressed={room === r}
                    className={
                      'px-4 py-2 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ' +
                      (room === r
                        ? 'bg-ink text-paper'
                        : 'border border-rule text-mute hover:border-ink hover:text-ink')
                    }
                  >
                    {r}
                  </button>
                ))}
              </div>

              <p className="eyebrow mb-4">What should it feel like?</p>
              <div className="mb-9 flex flex-wrap gap-2">
                {moods.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMood(m)}
                    aria-pressed={mood === m}
                    className={
                      'px-4 py-2 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ' +
                      (mood === m
                        ? 'bg-ink text-paper'
                        : 'border border-rule text-mute hover:border-ink hover:text-ink')
                    }
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <label>
                  <span className="eyebrow">Room size</span>
                  <input className="field mt-2" placeholder="4.2 × 3.6 m" />
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
                  <span className="eyebrow">Anything we should know</span>
                  <textarea
                    rows={4}
                    className="field mt-2 resize-none"
                    placeholder="North-facing, two cats, no ceiling light."
                  />
                </label>
              </div>

              <button type="submit" className="btn-solid mt-10">
                Draft a scheme
              </button>
              <p className="body-copy mt-4 text-[13px] text-mute">
                Preview feature — this form is a demonstration and transmits
                nothing.
              </p>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-5 md:col-start-8">
          <Img
            src={imageUrl('photo-1513694203232-719a280e022f', 1200)}
            alt="A drafted living room scheme"
            ratio="3 / 4"
          />
        </Reveal>
      </section>

      <section className="shell grid gap-10 border-t border-rule py-16 md:grid-cols-3 md:py-20">
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.07}>
            <p className="eyebrow mb-4">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="d4 mb-3">{s.t}</h3>
            <p className="body-copy max-w-sm">{s.d}</p>
          </Reveal>
        ))}
      </section>
    </>
  )
}
