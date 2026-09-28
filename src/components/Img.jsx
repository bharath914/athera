import { useState } from 'react'
import { img } from '../data/catalogue'
import { cx } from '../lib/format'

/**
 * A photograph with its aspect ratio reserved, a tonal placeholder underneath
 * and a graceful fallback if the asset never arrives — the layout never shifts
 * or collapses.
 *
 * `id` is an Unsplash photo id; pass `src` instead for anything else.
 */
export default function Img({
  id,
  src,
  alt = '',
  ratio = '4 / 5',
  w = 1400,
  className = '',
  position = 'center',
  priority = false,
}) {
  const [state, setState] = useState('loading')
  const url = src || img(id, w)

  return (
    <div
      className={cx('img', state === 'loaded' && 'img--on', className)}
      style={ratio === 'auto' ? undefined : { aspectRatio: ratio }}
    >
      {state !== 'error' && (
        <img
          src={url}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
          style={{ objectPosition: position }}
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
        />
      )}
      {state === 'error' && alt && <span className="img__fb">{alt}</span>}
    </div>
  )
}
