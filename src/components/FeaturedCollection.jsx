import { Link } from 'react-router-dom'
import Img from './Img'

/**
 * Featured collections: five small stories, each one mood, material or way of
 * living. Just the photograph and its name — nothing else is written.
 *
 *   a · staggered   five columns of different widths and heights
 *   b · lead + four one large image beside a two-by-two
 *   c · two over three   two wide images above three portraits
 */

const COLLECTIONS = [
  { name: 'The Quiet Morning Collection', image: 'photo-1638531540340-9c3d9f3c3077', to: '/shop?c=beds' },
  { name: 'Living in Oak', image: 'photo-1772442363851-738a548f6c5c', to: '/shop?m=oak' },
  { name: 'Objects for Slow Evenings', image: 'photo-1772208392358-19e96bee3a73', to: '/shop?c=objects' },
  { name: 'The Linen & Walnut Collection', image: 'photo-1701422052139-e72ee5e67249', to: '/shop?m=walnut' },
  { name: 'Made in Cane', image: 'photo-1698417931857-23a611285438', to: '/shop' },
]

export const collectionIds = () => []

function Tile({ c, i, className, w = 1200 }) {
  return (
    <Link to={c.to} className={`fcl ${className || ''}`}>
      <span className="fcl__img"><Img id={c.image} alt={c.name} ratio="4 / 5" w={w} priority={i < 3} /></span>
      <span className="fcl__name">{c.name}</span>
    </Link>
  )
}

export default function FeaturedCollection({ variant = 'a' }) {
  return (
    <div className={`fcs fcs--${variant}`}>
      {COLLECTIONS.map((c, i) => <Tile key={c.name} c={c} i={i} className={`fcl--${i + 1}`} />)}
    </div>
  )
}
