import { cx } from '../../lib/format'
import Eyebrow from './Eyebrow'

/** Label / value rows on hairlines — product specifications, contact details. */
export default function SpecList({ items, className }) {
  return (
    <dl className={cx('border-t border-rule', className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline justify-between gap-6 border-b border-rule py-3.5"
        >
          <dt>
            <Eyebrow as="span" rule={false}>
              {item.label}
            </Eyebrow>
          </dt>
          <dd className="type-small text-right text-graphite">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
