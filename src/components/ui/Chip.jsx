import { cx } from '../../lib/format'

/** The only toggle: category filters, sort options, subject and mood pickers. */
export default function Chip({ active = false, className, children, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        'label shrink-0 whitespace-nowrap border px-4 py-2.5 transition-colors duration-300',
        active
          ? 'border-ink bg-ink text-paper'
          : 'border-rule text-graphite hover:border-ink',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
