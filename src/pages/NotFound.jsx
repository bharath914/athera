import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="slide empty">
      <h1 className="disp">Not found</h1>
      <p>That page isn't in the collection.</p>
      <Link className="btn btn--solid arrow" to="/?c=all">See the collection</Link>
    </section>
  )
}
