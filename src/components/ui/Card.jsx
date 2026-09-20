import { Link } from 'react-router-dom'
import Img from '../Img'
import Eyebrow from './Eyebrow'
import Heading from './Heading'
import Text from './Text'
import { cx } from '../../lib/format'

/**
 * The only image card — products, categories, articles. The photograph, then a
 * quiet caption: title on the left, price on the right. A second photo fades
 * in on hover when `hoverImage` is given.
 */
export default function Card({
  to,
  image,
  alt,
  hoverImage,
  ratio = '3 / 4',
  imgClassName,
  sizes,
  priority = false,
  kicker,
  title,
  byline,
  excerpt,
  meta,
  price,
  badge,
  titleSize = 'caption',
  className,
}) {
  return (
    <Link to={to} className={cx('group block', className)}>
      <div className="img-zoom relative">
        <Img
          src={image}
          alt={alt ?? title}
          ratio={ratio}
          className={imgClassName}
          sizes={sizes}
          priority={priority}
        />
        {hoverImage && (
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <Img src={hoverImage} alt="" ratio="auto" className="h-full w-full" />
          </div>
        )}
        {badge && (
          <span className="label absolute left-3 top-3 bg-paper px-2.5 py-1 text-ink">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          {kicker && <Eyebrow className="mb-2">{kicker}</Eyebrow>}
          <Heading as="h3" size={titleSize}>
            {title}
          </Heading>
          {byline && (
            <Text variant="small" tone="mute" className="mt-0.5">
              {byline}
            </Text>
          )}
          {excerpt && <Text className="mt-2 max-w-md">{excerpt}</Text>}
          {meta && <Eyebrow className="mt-3">{meta}</Eyebrow>}
        </div>
        {price && (
          <Text variant="small" tone="ink" className="shrink-0 tabular-nums">
            {price}
          </Text>
        )}
      </div>
    </Link>
  )
}
