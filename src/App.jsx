import { Routes, Route } from 'react-router-dom'
import { ShopProvider } from './lib/shop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Done from './pages/Done'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/p/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/done" element={<Done />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ShopProvider>
  )
}
