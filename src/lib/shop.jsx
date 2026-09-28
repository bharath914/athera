import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { byId } from '../data/catalogue'
import { SHIP } from './format'

const Ctx = createContext(null)
export const useShop = () => useContext(Ctx)

const KEY = 'aethera.cart'

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]').filter(i => {
      const p = byId(i.pid)
      return p && p.finishes[i.fi] && i.q > 0
    })
  } catch {
    return []
  }
}

/** Cart, delivery choice, last order and the "added" toast. Persisted to localStorage only. */
export function ShopProvider({ children }) {
  const [cart, setCart] = useState(load)
  const [ship, setShip] = useState('std')
  const [order, setOrder] = useState(null)
  const [toast, setToast] = useState(null)
  const timer = useRef()

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(cart))
    } catch {
      /* private mode: the cart just lives in memory */
    }
  }, [cart])

  const add = useCallback((pid, fi = 0) => {
    setCart(c => {
      const at = c.findIndex(i => i.pid === pid && i.fi === fi)
      return at < 0 ? [...c, { pid, fi, q: 1 }] : c.map((i, n) => (n === at ? { ...i, q: i.q + 1 } : i))
    })
  }, [])

  const setQty = useCallback(
    (at, q) => setCart(c => (q < 1 ? c.filter((_, n) => n !== at) : c.map((i, n) => (n === at ? { ...i, q } : i)))),
    []
  )

  const remove = useCallback(at => setCart(c => c.filter((_, n) => n !== at)), [])

  const notify = useCallback((msg, to) => {
    setToast({ msg, to })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 4200)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  const value = useMemo(() => {
    const subtotal = cart.reduce((a, i) => a + byId(i.pid).price * i.q, 0)
    const total = subtotal + SHIP[ship].fee
    const place = ({ name, email }) => {
      setOrder({ no: 'AE-' + String(Date.now()).slice(-6), name, email, ship, items: cart, total })
      setCart([])
    }
    return {
      cart, ship, setShip, order, toast, add, setQty, remove, notify, place, subtotal, total,
      count: cart.reduce((a, i) => a + i.q, 0),
    }
  }, [cart, ship, order, toast, add, setQty, remove, notify])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
