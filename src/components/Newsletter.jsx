import { useState } from 'react'
import Reveal from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="shell py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-6">
          <p className="eyebrow mb-4">Correspondence</p>
          <h2 className="d3 max-w-md">
            Six letters a year. New work, workshop notes, nothing else.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-5 md:col-start-8">
          {sent ? (
            <p className="body-copy border-b border-ink pb-3">
              Thank you — we&apos;ll be in touch when the next chapter is ready.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="flex items-end gap-4"
            >
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="field"
                />
              </label>
              <button
                type="submit"
                className="shrink-0 border-b border-ink pb-3 text-[11px] uppercase tracking-widest2 transition-colors hover:text-clay"
              >
                Subscribe
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
