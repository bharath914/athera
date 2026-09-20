import { Card } from './ui'
import { formatPrice } from '../lib/format'

/** A product: photograph, name, price — and a second photo on hover. */
export default function ProductCard({ product, ratio, imgClassName, className }) {
  return (
    <Card
      to={`/shop/${product.slug}`}
      image={product.img(0, 1400)}
      alt={product.name}
      hoverImage={product.images.length > 1 ? product.img(1, 1400) : undefined}
      ratio={ratio}
      imgClassName={imgClassName}
      sizes="(min-width: 1024px) 25vw, 45vw"
      title={product.name}
      price={formatPrice(product.price)}
      badge={product.lead === 'In stock' ? 'In stock' : undefined}
      className={className}
    />
  )
}
