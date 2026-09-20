import { useState } from 'react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { Button, Chip, Eyebrow, Field, Heading, PageHeader, Section, Text } from '../components/ui'
import { imageUrl } from '../data/products'

const subjects = ['A piece', 'Interiors & trade', 'Care or repair', 'Something else']

const details = [
  {
    t: 'Showroom',
    lines: ['14 Wood Street', 'Richmond Town, Bengaluru 560025', 'Tuesday–Sunday, 11–7'],
  },
  { t: 'Studio', lines: ['hello@aethera.studio', '+91 80 4000 1900'] },
  { t: 'Trade & interiors', lines: ['trade@aethera.studio', 'Portfolio required'] },
  { t: 'Care & repair', lines: ['care@aethera.studio', 'Include your order number'] },
]

export default function Contact() {
  const [subject, setSubject] = useState(subjects[0])
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageMeta
        title="Contact"
        description="Visit the Aethera showroom in Bengaluru, or write to the studio about a piece, a project or a repair."
      />

      <PageHeader
        eyebrow="Say hello"
        title="Come in, or write."
        titleClassName="max-w-[13ch]"
      />

      <Section flush innerClassName="grid gap-12 md:grid-cols-12">
        {/* Details */}
        <Reveal className="md:col-span-4">
          <div className="rule">
            {details.map((b) => (
              <div key={b.t} className="border-b border-rule py-6">
                <Eyebrow className="mb-3">
                  {b.t}
                </Eyebrow>
                {b.lines.map((l) => (
                  <Text key={l} tone="ink">
                    {l}
                  </Text>
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
              <Heading size="heading" className="max-w-lg">
                Thank you — your note is with us.
              </Heading>
              <Text className="mt-5 max-w-md">
                Someone from the studio replies to everything within two working
                days. If it&apos;s urgent, the showroom phone is answered during
                opening hours.
              </Text>
              <Button variant="line" onClick={() => setSent(false)} className="mt-8">
                Write another
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
              <Eyebrow className="mb-5">
                What is this about?
              </Eyebrow>
              <div className="mb-10 flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <Chip key={s} active={subject === s} onClick={() => setSubject(s)}>
                    {s}
                  </Chip>
                ))}
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Name" required placeholder="Your name" />
                <Field label="Email" required type="email" placeholder="your@email.com" />
                <Field
                  label="City"
                  placeholder="Bengaluru"
                  wrapperClassName="sm:col-span-2"
                />
                <Field
                  label="Message"
                  as="textarea"
                  required
                  rows={5}
                  placeholder="Tell us about the room, or the piece."
                  wrapperClassName="sm:col-span-2"
                />
              </div>

              <Button type="submit" className="mt-10">
                Send note
              </Button>
              <Text variant="small" tone="mute" className="mt-4">
                This is a demonstration form — nothing is transmitted.
              </Text>
            </form>
          )}
        </Reveal>
      </Section>
    </>
  )
}
