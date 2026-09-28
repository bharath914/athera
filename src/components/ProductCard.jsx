import { Link } from 'react-router-dom'
import Img from './Img'
import { catById } from '../data/catalogue'
import { money } from '../lib/format'

/** The catalogue's one product tile: photograph, name, price, one line of copy. */
export default function ProductCard({ p, ratio = '4 / 5', showCat = false, priority = false }) {
  return (
    <Link className="pcard" to={`/p/${p.id}`}>
      <Img id={p.images[0]} alt={p.name} ratio={ratio} w={900} priority={priority} />
      <div className="pcard__meta">
        <h3 className="pname">{p.name}</h3>
        <span className="price">{money(p.price)}</span>
        <p className="excerpt">{p.excerpt}</p>
        {showCat && <span className="pcard__cat">{catById(p.cat).name}</span>}
      </div>
    </Link>
  )
}
