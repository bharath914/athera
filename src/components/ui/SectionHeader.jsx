import Reveal from '../Reveal'
import Heading from './Heading'
import Text from './Text'
import TextLink from './TextLink'
import { cx } from '../../lib/format'

/** The only section title: bold uppercase title left, a text action right, optional note. */
export default function SectionHeader({
  title,
  note,
  action,
  as = 'h2',
  size = 'title',
  className,
}) {
  return (
    <Reveal className={cx(className)}>
      <div className="flex items-baseline justify-between gap-6">
        <Heading as={as} size={size}>
          {title}
        </Heading>
        {action && (
          <TextLink to={action.to} arrow className="shrink-0">
            {action.label}
          </TextLink>
        )}
      </div>
      {note && <Text className="mt-3 max-w-[60ch] text-mute">{note}</Text>}
    </Reveal>
  )
}
