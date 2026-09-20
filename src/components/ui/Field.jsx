import { cx } from '../../lib/format'
import Eyebrow from './Eyebrow'

/** The only form control: an eyebrow label over a hairline input or textarea. */
export default function Field({
  label,
  as: Control = 'input',
  className,
  wrapperClassName,
  ...rest
}) {
  return (
    <label className={wrapperClassName}>
      <Eyebrow as="span" rule={false}>
        {label}
      </Eyebrow>
      <Control
        className={cx('field mt-2', Control === 'textarea' && 'resize-none', className)}
        {...rest}
      />
    </label>
  )
}
