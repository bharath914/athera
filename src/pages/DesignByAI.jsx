import { useState } from 'react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { Button, Chip, Eyebrow, Field, Heading, PageHeader, Section, Text } from '../components/ui'
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

      <PageHeader
        eyebrow="In preview"
        title="Design your room."
        titleClassName="max-w-[14ch]"
        lede="Describe the space and we'll draft a scheme from the catalogue — proportions, placement and a shortlist. Then someone in the studio reads it before you do."
      />

      <Section flush innerClassName="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          {sent ? (
            <div className="rule pt-10">
              <Heading size="heading" className="max-w-md">
                Your {room.toLowerCase()} is in the queue.
              </Heading>
              <Text className="mt-4 max-w-md">
                Schemes take two working days while the preview is running. We
                write to you once a designer has read the draft.
              </Text>
              <Button variant="line" onClick={() => setSent(false)} className="mt-8">
                Start another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="rule pt-10"
            >
              <Eyebrow className="mb-4">
                Which room?
              </Eyebrow>
              <div className="mb-9 flex flex-wrap gap-2">
                {rooms.map((r) => (
                  <Chip key={r} active={room === r} onClick={() => setRoom(r)}>
                    {r}
                  </Chip>
                ))}
              </div>

              <Eyebrow className="mb-4">
                What should it feel like?
              </Eyebrow>
              <div className="mb-9 flex flex-wrap gap-2">
                {moods.map((m) => (
                  <Chip key={m} active={mood === m} onClick={() => setMood(m)}>
                    {m}
                  </Chip>
                ))}
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Room size" placeholder="4.2 × 3.6 m" />
                <Field label="Email" required type="email" placeholder="your@email.com" />
                <Field
                  label="Anything we should know"
                  as="textarea"
                  rows={4}
                  placeholder="North-facing, two cats, no ceiling light."
                  wrapperClassName="sm:col-span-2"
                />
              </div>

              <Button type="submit" className="mt-10">
                Draft a scheme
              </Button>
              <Text variant="small" tone="mute" className="mt-4">
                Preview feature — this form is a demonstration and transmits
                nothing.
              </Text>
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
      </Section>

      <Section innerClassName="grid gap-10 border-t border-rule pt-[clamp(3rem,5vw,5rem)] md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.07}>
            <Eyebrow className="mb-4">
              {String(i + 1).padStart(2, '0')}
            </Eyebrow>
            <Heading as="h3" size="heading" className="mb-3">
              {s.t}
            </Heading>
            <Text className="max-w-sm">{s.d}</Text>
          </Reveal>
        ))}
      </Section>
    </>
  )
}
