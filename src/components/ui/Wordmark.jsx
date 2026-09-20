import { cx } from '../../lib/format'

const sizes = {
  nav: 'text-[15px] lg:text-[clamp(15px,1.15vw,20px)]',
  footer: 'text-[clamp(1.5rem,3vw,3.5rem)]',
}

/** The only rendering of the brand name: spaced capitals. */
export default function Wordmark({ size = 'nav', tone = 'ink', className }) {
  return (
    <span
      className={cx(
        'font-display font-medium uppercase leading-none tracking-[0.34em]',
        sizes[size],
        tone === 'light' ? 'text-paper' : 'text-ink',
        className
      )}
    >
      Aethera
    </span>
  )
}
