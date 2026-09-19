import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'

function Shell({ eyebrow, title, copy, children, meta }) {
  return (
    <>
      <PageMeta title={title} description={copy} />
      <header className="shell pb-10 pt-[104px] sm:pt-[128px]">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="d1 max-w-[14ch]">{title}</h1>
          <p className="lede mt-6 max-w-lg">{copy}</p>
        </Reveal>
      </header>
      <section className="shell pb-20">
        <Reveal delay={0.06} className="rule pt-10">
          {children}
        </Reveal>
      </section>
      {meta}
    </>
  )
}

export function Profile() {
  return (
    <Shell
      eyebrow="Your account"
      title="Profile"
      copy="Orders, delivery windows and saved finishes live here once you have an account with the studio."
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid max-w-md gap-8"
      >
        <label>
          <span className="eyebrow">Email</span>
          <input type="email" className="field mt-2" placeholder="your@email.com" />
        </label>
        <label>
          <span className="eyebrow">Password</span>
          <input type="password" className="field mt-2" placeholder="••••••••" />
        </label>
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="btn-solid">
            Sign in
          </button>
          <Link to="/contact" className="btn-ghost">
            Create an account
          </Link>
        </div>
        <p className="body-copy text-[13px] text-mute">
          Demonstration only — no credentials are sent or stored.
        </p>
      </form>
    </Shell>
  )
}

export function Cart() {
  return (
    <Shell
      eyebrow="Nothing reserved yet"
      title="Your cart"
      copy="Pieces are made to order, so the studio confirms finish and delivery window before anything is charged."
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="body-copy max-w-md">
          Your cart is empty. Reserve a piece from its product page and it will
          be held here for forty-eight hours.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/shop" className="btn-solid">
            Browse the catalogue
          </Link>
          <Link to="/collections" className="btn-ghost">
            See the chapters
          </Link>
        </div>
      </div>
    </Shell>
  )
}

export function Wishlist() {
  return (
    <Shell
      eyebrow="Saved for later"
      title="Wishlist"
      copy="A quiet place to keep the pieces you are still thinking about. We will tell you if a lead time changes."
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="body-copy max-w-md">
          Nothing saved yet. Add a piece from the catalogue and it will wait here
          for you.
        </p>
        <Link to="/furniture" className="btn-solid">
          Start with a category
        </Link>
      </div>
    </Shell>
  )
}
