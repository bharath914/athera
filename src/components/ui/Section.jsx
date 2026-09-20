import { cx } from '../../lib/format'

const tones = {
  paper: '',
  bone: 'bg-bone pb-section',
  ink: 'bg-ink text-paper pb-section',
}

/**
 * The only section wrapper: sets the vertical rhythm and the shell width.
 * `flush` drops the top padding (use straight after a PageHeader); `bleed`
 * skips the shell so children can run edge to edge.
 */
export default function Section({
  as: Tag = 'section',
  tone = 'paper',
  flush = false,
  bleed = false,
  id,
  className,
  innerClassName,
  children,
}) {
  return (
    <Tag id={id} className={cx(!flush && 'pt-section', tones[tone], className)}>
      {bleed ? children : <div className={cx('shell', innerClassName)}>{children}</div>}
    </Tag>
  )
}
