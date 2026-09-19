import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cx } from '../lib/format'

const primary = [
  { to: '/shop', label: 'Shop' },
  { to: '/furniture', label: 'Furniture' },
  { to: '/design-by-ai', label: 'Design by AI' },
  { to: '/journal', label: 'Journal' },
  { to: '/about', label: 'About' },
]

const utility = [
  { to: '/profile', label: 'Profile' },
  { to: '/cart', label: 'Cart' },
  { to: '/wishlist', label: 'Wishlist' },
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
      'text-[14px] leading-none transition-colors duration-200',
      isActive ? 'text-[#1a1a1a]' : 'text-[#3d3d3d] hover:text-[#1a1a1a]'
    )

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-t border-[#d2d2d2] bg-white">
        <div className="mx-auto grid h-[56px] w-full max-w-edge grid-cols-[1fr_auto_1fr] items-center px-5 sm:h-[64px] sm:px-8 lg:px-12">
          <Link
            to="/"
            aria-label="Aethera — home"
            className="justify-self-start text-[15px] leading-none text-[#1a1a1a]"
          >
            Aethera
          </Link>

          <nav className="hidden items-center gap-7 justify-self-center md:flex">
            {primary.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <nav className="hidden items-center gap-6 justify-self-end md:flex">
            {utility.map((l) => (
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
            className="relative z-50 col-start-3 flex h-10 w-10 items-center justify-center justify-self-end text-[#1a1a1a] md:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={cx(
                  'absolute left-0 block h-px w-6 bg-current transition-transform duration-300',
                  open ? 'top-1.5 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cx(
                  'absolute left-0 block h-px w-6 bg-current transition-transform duration-300',
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-5 pb-12 pt-[88px]">
              <nav className="flex flex-col">
                {primary.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="border-b border-[#e2e2e2] py-4 text-[20px] text-[#1a1a1a]"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <nav className="flex flex-wrap gap-6">
                {utility.map((l) => (
                  <Link key={l.to} to={l.to} className="text-[14px] text-[#3d3d3d]">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
