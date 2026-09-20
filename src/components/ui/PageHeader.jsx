import Reveal from '../Reveal'
import Eyebrow from './Eyebrow'
import Heading from './Heading'
import Text from './Text'
import { cx } from '../../lib/format'

/** The only page opening: a small label, one bold headline, an optional lede. Centred. */
export default function PageHeader({
  eyebrow,
  title,
  lede,
  titleClassName = 'max-w-[18ch]',
  className,
  children,
}) {
  return (
    <header
      className={cx(
        'shell pb-[clamp(2.5rem,4vw,4.5rem)] pt-[112px] text-center sm:pt-[136px]',
        className
      )}
    >
      <Reveal>
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <Heading as="h1" size="display" className={cx('mx-auto', titleClassName)}>
          {title}
        </Heading>
        {lede && (
          <Text variant="lead" className="mx-auto mt-6 max-w-[34em]">
            {lede}
          </Text>
        )}
        {children}
      </Reveal>
    </header>
  )
}
