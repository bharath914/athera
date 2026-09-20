import { Link } from 'react-router-dom'
import { Eyebrow, Wordmark } from './ui'

const columns = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All furniture' },
      { to: '/furniture', label: 'Categories' },
      { to: '/collections', label: 'Collections' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { to: '/about', label: 'About' },
      { to: '/journal', label: 'Journal' },
      { to: '/design-by-ai', label: 'Design your room' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/contact', label: 'Contact' },
      { to: '/profile', label: 'Account' },
      { to: '/wishlist', label: 'Wishlist' },
    ],
  },
]

const item = 'type-body block py-1 text-graphite transition-opacity hover:opacity-60'

export default function Footer() {
  return (
    <footer className="mt-[clamp(4rem,7vw,8rem)] border-t border-rule">
      <div className="shell grid gap-x-10 gap-y-12 py-[clamp(2.5rem,4vw,4.5rem)] sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="sm:col-span-3 lg:col-span-1">
          <Wordmark size="nav" />
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <Eyebrow tone="ink" className="mb-3">
              {col.title}
            </Eyebrow>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={item}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="shell">
        <p className="type-small border-t border-rule py-6 text-mute">
          &copy; {new Date().getFullYear()} Aethera. Furniture and interiors for calm, intentional living.
        </p>
      </div>
    </footer>
  )
}
