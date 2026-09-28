import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { byId } from '../data/catalogue'
import { SHIP } from './format'

const Ctx = createContext(null)
export const useShop = () => useContext(Ctx)

const KEYS = {
  cart: 'aethera.cart',
  wish: 'aethera.wishlist',
  acct: 'aethera.account',
  orders: 'aethera.orders',
}

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* private mode: state just lives in memory for the session */
  }
}

const loadCart = () =>
  read(KEYS.cart, []).filter(i => {
    const p = byId(i.pid)
    return p && p.finishes[i.fi] && i.q > 0
  })

/** Pieces that were saved before a catalogue change are dropped on load. */
const loadWish = () => read(KEYS.wish, []).filter(id => byId(id))

/**
 * Cart, wishlist, account, delivery choice, placed orders, and the drawer that
 * opens on add. `drawer` holds the piece that was just added, so the drawer can
 * show it. Everything is persisted to localStorage only — there is no backend.
 */
export function ShopProvider({ children }) {
  const [cart, setCart] = useState(loadCart)
  const [wish, setWish] = useState(loadWish)
  const [account, setAccount] = useState(() => read(KEYS.acct, null))
  const [orders, setOrders] = useState(() => read(KEYS.orders, []))
  const [ship, setShip] = useState('std')
  const [order, setOrder] = useState(null)
  const [drawer, setDrawer] = useState(null)

  useEffect(() => { write(KEYS.cart, cart) }, [cart])
  useEffect(() => { write(KEYS.wish, wish) }, [wish])
  useEffect(() => { write(KEYS.acct, account) }, [account])
  useEffect(() => { write(KEYS.orders, orders) }, [orders])

  const put = useCallback((pid, fi) => {
    setCart(c => {
      const at = c.findIndex(i => i.pid === pid && i.fi === fi)
      return at < 0 ? [...c, { pid, fi, q: 1 }] : c.map((i, n) => (n === at ? { ...i, q: i.q + 1 } : i))
    })
  }, [])

  const add = useCallback((pid, fi = 0) => {
    put(pid, fi)
    setDrawer({ pid, fi })
  }, [put])

  /** The room assistant's shortlist: add several, then show the first. */
  const addMany = useCallback((picks) => {
    picks.forEach(p => put(p.pid, p.fi ?? 0))
    if (picks.length) setDrawer({ pid: picks[0].pid, fi: picks[0].fi ?? 0, n: picks.length })
  }, [put])

  const closeDrawer = useCallback(() => setDrawer(null), [])

  const setQty = useCallback(
    (at, q) => setCart(c => (q < 1 ? c.filter((_, n) => n !== at) : c.map((i, n) => (n === at ? { ...i, q } : i)))),
    []
  )

  const remove = useCallback(at => setCart(c => c.filter((_, n) => n !== at)), [])

  /* ---------- wishlist ---------- */

  const saved = useCallback(id => wish.includes(id), [wish])

  const toggleSave = useCallback(id => {
    setWish(w => (w.includes(id) ? w.filter(x => x !== id) : [...w, id]))
  }, [])

  const unsave = useCallback(id => setWish(w => w.filter(x => x !== id)), [])

  /* ---------- account ---------- */
  /* A prototype sign-in: the email is kept so checkout can prefill a saved
     address. No password is stored, and nothing is sent anywhere. */

  const signIn = useCallback(details => setAccount(a => ({ ...a, ...details })), [])
  const signOut = useCallback(() => setAccount(null), [])
  const saveAddress = useCallback(address => setAccount(a => ({ ...(a || {}), address })), [])

  const value = useMemo(() => {
    const subtotal = cart.reduce((a, i) => a + byId(i.pid).price * i.q, 0)
    const total = subtotal + SHIP[ship].fee

    const place = ({ name, email, address }) => {
      const placed = {
        no: 'AE-' + String(Date.now()).slice(-6),
        name,
        email,
        address,
        ship,
        items: cart,
        total,
        at: new Date().toISOString(),
      }
      setOrder(placed)
      setOrders(o => [placed, ...o].slice(0, 20))
      if (account) saveAddress(address)
      setCart([])
      return placed
    }

    /** Tracking looks an order up by number, and by email when one is given. */
    const findOrder = (no, email) =>
      orders.find(
        o =>
          o.no.toLowerCase() === String(no).trim().toLowerCase() &&
          (!email || o.email.toLowerCase() === String(email).trim().toLowerCase())
      ) || null

    return {
      cart, ship, setShip, order, orders, drawer,
      add, addMany, closeDrawer, setQty, remove, place, findOrder,
      wish, saved, toggleSave, unsave,
      account, signIn, signOut, saveAddress,
      subtotal, total,
      count: cart.reduce((a, i) => a + i.q, 0),
    }
  }, [
    cart, ship, order, orders, drawer, wish, account,
    add, addMany, closeDrawer, setQty, remove,
    saved, toggleSave, unsave, signIn, signOut, saveAddress,
  ])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
