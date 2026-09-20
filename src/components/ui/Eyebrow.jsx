import { cx } from '../../lib/format'

const tones = {
  mute: 'text-mute',
  ink: 'text-ink',
  light: 'text-paper/80',
}

/** Small uppercase label — meta lines, form labels, spec rows. */
export default function Eyebrow({
  as: Tag = 'p',
  tone = 'mute',
  center = false,
  className,
  children,
}) {
  return (
    <Tag className={cx('label', tones[tone], center && 'text-center', className)}>
      {children}
    </Tag>
  )
}
