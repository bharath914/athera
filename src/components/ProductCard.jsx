import { Link, useViewTransitionState } from 'react-router-dom'
import Img from './Img'
import SaveButton from './SaveButton'
import { cover } from '../data/catalogue'
import { cx, money } from '../lib/format'
import { useViewTransitions } from '../lib/motion'

/**
 * Borderless and image-dominant: the photograph carries the card, a second
 * frame crossfades in on approach, and the material line is revealed gently
 * rather than always sitting there. Product cards are 3:4, per the brief.
 *
 * The media box takes a view-transition name while a navigation to this piece
 * is in flight, so the product page opens by expanding this image.
 */
export default function ProductCard({ p, ratio = '3 / 4', priority = false, delay }) {
  const to = `/p/${p.id}`
  const opening = useViewTransitionState(to)
  const canTransition = useViewTransitions()
  const alt = p.images[1]?.id

  return (
    <article className="pcard" data-reveal="" data-delay={delay}>
      <Link className="pcard__a" to={to} viewTransition={canTransition}>
        <div
          className="pcard__media"
          style={opening ? { viewTransitionName: 'piece' } : undefined}
        >
          <Img id={cover(p)} alt={p.name} ratio={ratio} w={900} priority={priority} />
          {alt && (
            <Img id={alt} alt="" ratio={ratio} w={900} className={cx('pcard__alt')} />
          )}
        </div>
        <div className="pcard__meta">
          <h3 className="pname">{p.name}</h3>
          <span className="price">{money(p.price)}</span>
          <span className="pcard__mat">{p.materials[0]}</span>
        </div>
      </Link>
      <SaveButton id={p.id} name={p.name} className="pcard__save" />
    </article>
  )
}
