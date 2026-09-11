import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cx } from '../lib/format'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/journal', label: 'Journal' },
  { to: '/about', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
]

// Routes that open with a full-bleed dark image behind the header.
const OVERLAY_ROUTES = [/^\/$/, /^\/collections\/[^/]+$/, /^\/journal\/[^/]+$/]

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const overlay = OVERLAY_ROUTES.some((r) => r.test(pathname))
  const light = overlay && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cx(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial',
          light ? 'text-paper' : 'text-ink',
          scrolled && !open
            ? 'bg-paper/85 backdrop-blur-md border-b border-rule/70'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="shell flex h-[64px] items-center justify-between sm:h-[76px]">
          <Link
            to="/"
            aria-label="Aethera — home"
            className="font-display text-[22px] leading-none tracking-[0.16em] sm:text-[26px]"
          >
            AETHERA
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cx(
                    'link-underline text-[11px] uppercase tracking-widest2 transition-opacity duration-300',
                    isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3 w-6">
              <span
                className={cx(
                  'absolute left-0 block h-px w-6 bg-current transition-transform duration-400 ease-editorial',
                  open ? 'top-1.5 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cx(
                  'absolute left-0 block h-px w-6 bg-current transition-transform duration-400 ease-editorial',
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-paper md:hidden"
          >
            <div className="shell flex h-full flex-col justify-between pb-12 pt-[104px]">
              <nav className="flex flex-col">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 * i + 0.05,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={l.to}
                      className="block border-b border-rule py-5 font-display text-4xl"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="eyebrow">
                Aethera — Bengaluru
                <br />
                <span className="normal-case tracking-normal text-mute">
                  hello@aethera.studio
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
