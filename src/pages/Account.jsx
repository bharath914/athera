import Reveal from '../components/Reveal'
import PageMeta from '../components/PageMeta'
import { Button, Field, PageHeader, Section, Text } from '../components/ui'

function AccountPage({ eyebrow, title, copy, children }) {
  return (
    <>
      <PageMeta title={title} description={copy} />
      <PageHeader eyebrow={eyebrow} title={title} lede={copy} />
      <Section flush className="pb-section">
        <Reveal delay={0.06} className="rule pt-10">
          {children}
        </Reveal>
      </Section>
    </>
  )
}

export function Profile() {
  return (
    <AccountPage
      eyebrow="Your account"
      title="Profile"
      copy="Orders, delivery windows and saved finishes live here once you have an account with the studio."
    >
      <form onSubmit={(e) => e.preventDefault()} className="grid max-w-md gap-8">
        <Field label="Email" type="email" placeholder="your@email.com" />
        <Field label="Password" type="password" placeholder="••••••••" />
        <div className="flex flex-wrap gap-3">
          <Button type="submit">Sign in</Button>
          <Button to="/contact" variant="line">
            Create an account
          </Button>
        </div>
        <Text variant="small" tone="mute">
          Demonstration only — no credentials are sent or stored.
        </Text>
      </form>
    </AccountPage>
  )
}

export function Cart() {
  return (
    <AccountPage
      eyebrow="Nothing reserved yet"
      title="Your cart"
      copy="Pieces are made to order, so the studio confirms finish and delivery window before anything is charged."
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Text className="max-w-md">
          Your cart is empty. Reserve a piece from its product page and it will
          be held here for forty-eight hours.
        </Text>
        <div className="flex flex-wrap gap-3">
          <Button to="/shop">Browse the catalogue</Button>
          <Button to="/collections" variant="line">
            See the chapters
          </Button>
        </div>
      </div>
    </AccountPage>
  )
}

export function Wishlist() {
  return (
    <AccountPage
      eyebrow="Saved for later"
      title="Wishlist"
      copy="A quiet place to keep the pieces you are still thinking about. We will tell you if a lead time changes."
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Text className="max-w-md">
          Nothing saved yet. Add a piece from the catalogue and it will wait here
          for you.
        </Text>
        <Button to="/furniture">Start with a category</Button>
      </div>
    </AccountPage>
  )
}
