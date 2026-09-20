import { cx } from '../../lib/format'

const sizes = {
  display: 'type-display', // page titles
  title: 'type-title', // section titles, product name
  heading: 'type-heading', // standfirsts, list titles
  caption: 'type-caption', // card titles
}

const tags = { display: 'h1', title: 'h2', heading: 'h3', caption: 'h3' }

/** The only heading. Size and tag are independent — pass `as` to override. */
export default function Heading({
  as,
  size = 'title',
  tone = 'ink',
  className,
  children,
  ...rest
}) {
  const Tag = as ?? tags[size]
  return (
    <Tag
      className={cx(sizes[size], tone === 'light' ? 'text-paper' : 'text-ink', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
