import { useState } from 'react'

/**
 * Landing section eight. A single field on a quiet ground — a prototype, so
 * the address is acknowledged and then forgotten.
 */
export default function Newsletter() {
  const [done, setDone] = useState(false)

  return (
    <section className="sec sec--tight sec--bone">
      <div className="wrap news">
        <div className="news__t">
          <span className="eyebrow">Newsletter</span>
          <h2 className="disp d2">Four letters a year</h2>
          <p className="lead">
            One when a piece joins the collection, one when the workshop changes something, and
            two about rooms we have worked on. Nothing else.
          </p>
        </div>

        {done ? (
          <p className="news__done" role="status">
            Thank you — you are on the list. Nothing was actually sent: this is a prototype.
          </p>
        ) : (
          <form className="news__f" onSubmit={e => { e.preventDefault(); setDone(true) }}>
            <div className="field">
              <label htmlFor="news-email">Email address</label>
              <input
                id="news-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <button className="btn btn--solid" type="submit">Subscribe</button>
            <p className="fine">No address is stored and no mail is sent.</p>
          </form>
        )}
      </div>
    </section>
  )
}
