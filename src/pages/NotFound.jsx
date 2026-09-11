import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" />
      <section className="shell flex min-h-[70svh] flex-col justify-center py-32">
        <p className="eyebrow mb-5">Error 404</p>
        <h1 className="d1 max-w-[14ch]">This room is empty.</h1>
        <p className="lede mt-6 max-w-md">
          The page you asked for doesn&apos;t exist — or it has been folded into
          a newer chapter.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/" className="btn-solid">
            Back to the beginning
          </Link>
          <Link to="/shop" className="btn-ghost">
            Browse the catalogue
          </Link>
        </div>
      </section>
    </>
  )
}
