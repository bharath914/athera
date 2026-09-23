import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { Defs } from './Stage'
import { useShop } from '../lib/shop'

const cx = (...a) => a.filter(Boolean).join(' ')

function Header() {
  const { count } = useShop()
  const { pathname } = useLocation()
  const [params] = useSearchParams()
  const cat = pathname === '/' ? params.get('c') : null
  const cur = on => (on ? { 'aria-current': 'page' } : {})
  return (
    <header className="nav">
      <div className="nav__in">
        <Link className="mark" to="/" aria-label="Athera, home">Athera</Link>
        <nav className="nav__links" aria-label="Main">
          <Link className="lnk" to="/?c=seating" {...cur(cat === 'seating')}>Seating</Link>
          <Link className="lnk" to="/?c=tables" {...cur(cat === 'tables')}>Tables</Link>
          <Link className="lnk" to="/checkout" {...cur(pathname === '/checkout')}>
            Cart<span className="cart-n">{count}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

/** New page → top. A category link (?c=…) → smooth-scroll to the collection. */
function ScrollManager() {
  const { pathname, search } = useLocation()
  const first = useRef(true)
  useEffect(() => {
    const cat = new URLSearchParams(search).get('c')
    if (pathname === '/' && cat) document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else if (!first.current) window.scrollTo({ top: 0, behavior: 'instant' })
    first.current = false
  }, [pathname, search])
  return null
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

export default function Layout() {
  return (
    <>
      <Defs />
      <ScrollManager />
      <Header />
      <main className="deck">
        <Outlet />
      </main>
      <footer className="foot">
        <span>Athera · Furniture, edited</span>
        <span>Design prototype · orders are not processed</span>
      </footer>
      <Toast />
    </>
  )
}
