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
  { name: 'The Quiet Morning Collection', image: 'photo-1617325247661-675ab4b64ae2', to: '/shop?c=beds' },
  { name: 'Living in Oak', image: 'photo-1763279934323-edb3735f6a6e', to: '/shop?m=oak' },
  { name: 'Objects for Slow Evenings', image: 'photo-1667312939978-64cf31718a6e', to: '/shop?c=objects' },
  { name: 'The Linen & Walnut Collection', image: 'photo-1694721025063-08eff99ba558', to: '/shop?m=walnut' },
  { name: 'Made in Cane', image: 'photo-1758486561455-ebd0d3ba7423', to: '/shop' },
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
    <>
      <div className="fcs__head">
        <span className="eyebrow" data-reveal="">Featured collections</span>
        <h2 className="disp d3" data-reveal="" data-delay="1">Five small stories</h2>
      </div>
      <div className={`fcs fcs--${variant}`}>
        {COLLECTIONS.map((c, i) => <Tile key={c.name} c={c} i={i} className={`fcl--${i + 1}`} />)}
      </div>
    </>
  )
}
