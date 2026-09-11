import { useState } from 'react'
import { cx } from '../lib/format'

/**
 * Image with a tonal placeholder that fades out on load and a graceful
 * fallback if the asset can't be fetched — the layout never collapses.
 */
export default function Img({
  src,
  alt = '',
  className = '',
  ratio = '4 / 5',
  sizes,
  priority = false,
  objectPosition = 'center',
}) {
  const [state, setState] = useState('loading')

  return (
    <div
      className={cx('relative overflow-hidden bg-linen', className)}
      style={{ aspectRatio: ratio }}
    >
      {state !== 'error' && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          className={cx(
            'absolute inset-0 h-full w-full object-cover',
            'transition-opacity duration-700 ease-editorial',
            state === 'loaded' ? 'opacity-100' : 'opacity-0'
          )}
          style={{ objectPosition }}
        />
      )}

      {/* placeholder / fallback */}
      <div
        aria-hidden="true"
        className={cx(
          'pointer-events-none absolute inset-0 transition-opacity duration-700',
          state === 'loaded' ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          background:
            'linear-gradient(150deg, #E8E2D7 0%, #DCD4C6 45%, #CFC6B5 100%)',
        }}
      >
        {state === 'error' && alt && (
          <span className="absolute inset-0 flex items-center justify-center px-6 text-center font-display text-lg text-mute">
            {alt}
          </span>
        )}
      </div>
    </div>
  )
}
