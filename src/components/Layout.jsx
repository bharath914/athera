import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { SPACES } from '../data/catalogue'
import { cx } from '../lib/format'
import { useShop } from '../lib/shop'

const LINKS = [
  { to: '/shop', label: 'Furniture' },
  { to: '/spaces', label: 'Spaces' },
  { to: '/assistant', label: 'Room Assistant' },
]

function Nav() {
  const { count } = useShop()
  return (
    <header className="nav">
      <div className="nav__in">
        <Link className="mark" to="/" aria-label="Aethera, home">Aethera</Link>
        <nav className="nav__links" aria-label="Main">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
          ))}
        </nav>
        <Link className="nav__cart" to="/cart">
          Cart <span className="nav__n">{count}</span>
        </Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <span className="mark">Aethera</span>
            <p className="fine">
              Furniture and interiors curated for calm, intentional living — made in small
              runs, delivered assembled, and built to age rather than date.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              {LINKS.map(l => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h4>Spaces</h4>
            <ul>
              {SPACES.map(s => <li key={s.id}><Link to={`/spaces/${s.id}`}>{s.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><span className="mute">Instagram</span></li>
              <li><span className="mute">Pinterest</span></li>
              <li><span className="mute">hello@aethera.studio</span></li>
            </ul>
          </div>
        </div>
        <div className="foot__base">
          <span>© {new Date().getFullYear()} Aethera</span>
          <span>Design prototype · no order is processed</span>
        </div>
      </div>
    </footer>
  )
}

function Toast() {
  const { toast } = useShop()
  return (
    <div className={cx('toast', toast && 'on')} role="status" aria-live="polite">
      {toast && (
        <>
          <span>{toast.msg}</span>
          <Link to={toast.to}>View cart</Link>
        </>
      )}
    </div>
  )
}

/** Every navigation starts at the top of the new page. */
function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toast />
    </>
  )
}
