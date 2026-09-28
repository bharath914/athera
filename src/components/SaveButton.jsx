import { cx } from '../lib/format'
import { useShop } from '../lib/shop'

/**
 * Save → wishlist. A hairline bookmark that fills when the piece is saved —
 * the same control on a card, in the gallery and on the wishlist itself.
 */
export default function SaveButton({ id, name, className = '', withLabel = false }) {
  const { saved, toggleSave } = useShop()
  const on = saved(id)

  return (
    <button
      type="button"
      className={cx('save', on && 'save--on', withLabel && 'save--label', className)}
      aria-pressed={on}
      title={on ? `Saved — remove ${name} from wishlist` : `Save ${name} to wishlist`}
      onClick={e => { e.preventDefault(); toggleSave(id) }}
    >
      <svg viewBox="0 0 16 20" aria-hidden="true" focusable="false">
        <path d="M2.5 1.5h11v17l-5.5-4-5.5 4z" />
      </svg>
      {withLabel && <span>{on ? 'Saved' : 'Save'}</span>}
      {!withLabel && <span className="sr">{on ? 'Saved to wishlist' : 'Save to wishlist'}</span>}
    </button>
  )
}
