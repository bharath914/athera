import { Link } from 'react-router-dom'
import Img from '../Img'
import Reveal from '../Reveal'
import Eyebrow from './Eyebrow'
import Heading from './Heading'
import Text from './Text'
import TextLink from './TextLink'
import { cx } from '../../lib/format'

/** A large image beside a short text column, alternating with `flip`. */
export default function Spread({
  to,
  image,
  alt,
  ratio = '4 / 3',
  flip = false,
  kicker,
  title,
  lede,
  body,
  action,
}) {
  return (
    <section className="grid gap-8 md:grid-cols-12 md:items-center">
      <Reveal
        variant="fade"
        className={cx('md:col-span-8', flip && 'md:order-2 md:col-start-5')}
      >
        <Link to={to} className="img-zoom block">
          <Img src={image} alt={alt ?? title} ratio={ratio} />
        </Link>
      </Reveal>

      <Reveal
        variant="fade"
        className={cx('md:col-span-3', flip ? 'md:order-1 md:col-start-1' : 'md:col-start-10')}
      >
        {kicker && <Eyebrow className="mb-4">{kicker}</Eyebrow>}
        <Heading size="title">{title}</Heading>
        {lede && (
          <Text variant="lead" className="mt-4">
            {lede}
          </Text>
        )}
        {body && <Text className="mt-4 text-mute">{body}</Text>}
        {action && (
          <TextLink to={to} arrow className="mt-6">
            {action}
          </TextLink>
        )}
      </Reveal>
    </section>
  )
}
