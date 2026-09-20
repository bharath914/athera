import { Link } from 'react-router-dom'
import Img from './Img'
import Reveal from './Reveal'
import ProductCard from './ProductCard'
import { Eyebrow, TextLink } from './ui'
import { imageUrl } from '../data/products'

const INTERLUDE_AFTER = 8

/**
 * A plain grid of products — two, three, then four across. After the eighth
 * piece one full-width photograph breaks the grid, as a magazine would.
 */
export default function ProductGrid({ products }) {
  const first = products.slice(0, INTERLUDE_AFTER)
  const rest = products.slice(INTERLUDE_AFTER)

  const grid = (items, offset = 0) => (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
      {items.map((p, i) => (
        <Reveal key={p.id} variant="fade" delay={((i + offset) % 4) * 0.04} amount={0.1}>
          <ProductCard product={p} />
        </Reveal>
      ))}
    </div>
  )

  return (
    <>
      {grid(first)}

      {rest.length > 0 && (
        <>
          <div className="my-[clamp(3rem,5vw,6rem)]">
            <Link to="/collections/the-long-table" className="img-zoom block">
              <Img
                src={imageUrl('photo-1604578762246-41134e37f9cc', 2400)}
                alt="The Long Table"
                ratio="21 / 9"
              />
            </Link>
            <div className="mt-3 flex items-center justify-between gap-6">
              <Eyebrow>The Long Table — the dining room</Eyebrow>
              <TextLink to="/collections/the-long-table" arrow>
                Open the chapter
              </TextLink>
            </div>
          </div>
          {grid(rest, INTERLUDE_AFTER)}
        </>
      )}
    </>
  )
}
