import { cx } from '../../lib/format'

const variants = {
  lead: 'type-lead',
  body: 'type-body',
  small: 'type-small',
}

const tones = {
  default: 'text-graphite',
  mute: 'text-mute',
  ink: 'text-ink',
  light: 'text-paper/80',
}

/** The only reading text: lead, body and small, in four tones. */
export default function Text({
  as: Tag = 'p',
  variant = 'body',
  tone = 'default',
  className,
  children,
  ...rest
}) {
  return (
    <Tag className={cx(variants[variant], tones[tone], className)} {...rest}>
      {children}
    </Tag>
  )
}
