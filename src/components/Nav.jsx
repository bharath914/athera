import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cx } from '../lib/format'
import { Wordmark } from './ui'

const left = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/journal', label: 'Journal' },
]

const right = [
  { to: '/about', label: 'Studio' },
  { to: '/design-by-ai', label: 'Design' },
  { to: '/cart', label: 'Bag' },
]

const all = [
  ...left,
  { to: '/furniture', label: 'Furniture' },
  ...right,
  { to: '/wishlist', label: 'Wishlist' },
  { to: '/profile', label: 'Account' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    cx(
      'label leading-none transition-opacity duration-300',
      isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
    )

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur">
        <div className="mx-auto grid h-[56px] w-full max-w-edge grid-cols-[1fr_auto_1fr] items-center px-5 sm:h-[64px] sm:px-8 lg:px-10">
          <nav className="hidden items-center gap-8 lg:flex">
            {left.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="label relative z-50 justify-self-start lg:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <Link to="/" aria-label="Aethera — home" className="relative z-50 justify-self-center">
            <Wordmark size="nav" />
          </Link>

          <nav className="hidden items-center gap-8 justify-self-end lg:flex">
            {right.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-paper lg:hidden">
          <nav className="flex h-full flex-col justify-center gap-1 px-5">
            {all.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="type-title py-2 transition-opacity hover:opacity-60"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
