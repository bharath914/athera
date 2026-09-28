import { Routes, Route } from 'react-router-dom'
import { ShopProvider } from './lib/shop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Spaces from './pages/Spaces'
import Space from './pages/Space'
import Assistant from './pages/Assistant'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Done from './pages/Done'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/p/:id" element={<Product />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/spaces/:id" element={<Space />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/done" element={<Done />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ShopProvider>
  )
}
