import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './pages.css'

// Static previews (e.g. a published artifact) are served from an unknown
// path, so route on the hash instead of the pathname there.
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter
const routerProps =
  import.meta.env.VITE_HASH_ROUTER === '1' ? {} : { basename: import.meta.env.BASE_URL }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router {...routerProps}>
      <App />
    </Router>
  </React.StrictMode>
)
