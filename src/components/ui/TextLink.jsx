import { Link } from 'react-router-dom'
import { cx } from '../../lib/format'

const tones = {
  dark: 'border-ink/40 text-ink hover:border-ink',
  mute: 'border-mute/40 text-mute hover:border-ink hover:text-ink',
  light: 'border-paper/40 text-paper hover:border-paper',
}

/**
 * The only text action: spaced capitals over a hairline ("View all →").
 * Link, anchor or button depending on the props it is given.
 */
export default function TextLink({
  as: Tag,
  to,
  href,
  arrow = false,
  tone = 'dark',
  className,
  children,
  ...rest
}) {
  const cls = cx(
    'label inline-flex items-center gap-3 border-b pb-1.5 transition-colors duration-500 ease-editorial',
    tones[tone],
    className
  )
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  )

  // `as` renders a plain element — for use inside a parent that is already a link
  if (Tag)
    return (
      <Tag className={cls} {...rest}>
        {content}
      </Tag>
    )
  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  )
}
