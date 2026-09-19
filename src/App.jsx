import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Collections from './pages/Collections'
import CollectionDetail from './pages/CollectionDetail'
import Journal from './pages/Journal'
import Article from './pages/Article'
import About from './pages/About'
import Contact from './pages/Contact'
import Furniture from './pages/Furniture'
import DesignByAI from './pages/DesignByAI'
import { Profile, Cart, Wishlist } from './pages/Account'
import NotFound from './pages/NotFound'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/shop" element={<Page><Shop /></Page>} />
            <Route path="/shop/:slug" element={<Page><ProductDetail /></Page>} />
            <Route path="/collections" element={<Page><Collections /></Page>} />
            <Route
              path="/collections/:slug"
              element={<Page><CollectionDetail /></Page>}
            />
            <Route path="/journal" element={<Page><Journal /></Page>} />
            <Route path="/journal/:slug" element={<Page><Article /></Page>} />
            <Route path="/furniture" element={<Page><Furniture /></Page>} />
            <Route path="/design-by-ai" element={<Page><DesignByAI /></Page>} />
            <Route path="/profile" element={<Page><Profile /></Page>} />
            <Route path="/cart" element={<Page><Cart /></Page>} />
            <Route path="/wishlist" element={<Page><Wishlist /></Page>} />
            <Route path="/about" element={<Page><About /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
