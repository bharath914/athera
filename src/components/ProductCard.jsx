import { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img'
import { formatPrice, cx } from '../lib/format'

export default function ProductCard({ product, index, ratio = '4 / 5' }) {
  const [hover, setHover] = useState(false)
  const hasAlt = product.images.length > 1

  return (
    <Link
      to={`/shop/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="img-zoom relative">
        <Img
          src={product.img(0, 900)}
          alt={product.name}
          ratio={ratio}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        />
        {hasAlt && (
          <div
            className={cx(
              'pointer-events-none absolute inset-0 transition-opacity duration-700 ease-editorial',
              hover ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Img
              src={product.img(1, 900)}
              alt=""
              ratio={ratio}
              className="h-full w-full"
            />
          </div>
        )}
        {product.lead === 'In stock' && (
          <span className="absolute left-3 top-3 bg-paper/90 px-2.5 py-1 text-[10px] uppercase tracking-widest2 text-ink">
            In stock
          </span>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <h3 className="d4 truncate">{product.name}</h3>
          <p className="mt-1 text-[12px] uppercase tracking-widest2 text-mute">
            {typeof index === 'number'
              ? String(index + 1).padStart(2, '0') + ' — '
              : ''}
            {product.category}
          </p>
        </div>
        <p className="shrink-0 text-[14px] font-light tabular-nums text-graphite">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
