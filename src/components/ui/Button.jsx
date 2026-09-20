import { Link } from 'react-router-dom'
import { cx } from '../../lib/format'

const looks = {
  solid: 'border border-ink bg-ink text-paper hover:bg-paper hover:text-ink',
  line: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  // on photography
  light: 'border border-paper bg-paper text-ink hover:bg-transparent hover:text-paper',
  'light-line': 'border border-paper text-paper hover:bg-paper hover:text-ink',
}

const sizes = {
  md: 'h-12 px-10',
  lg: 'h-14 min-w-[min(100%,22rem)] px-12',
}

/**
 * The only button in the product. Renders a router Link when given `to`, an
 * anchor for `href`, otherwise a <button>.
 */
export default function Button({
  to,
  href,
  variant = 'solid',
  size = 'md',
  block = false,
  className,
  children,
  ...rest
}) {
  const cls = cx(
    'label inline-flex items-center justify-center text-center transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50',
    looks[variant],
    sizes[size],
    block && 'w-full',
    className
  )

  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
