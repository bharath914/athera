import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function SectionHead({ index, eyebrow, title, note, action }) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="eyebrow mb-4">
          {index && <span className="text-ink">{index}</span>} {eyebrow}
        </p>
        <h2 className="d2 max-w-3xl">{title}</h2>
      </div>
      <div className="md:col-span-4 md:col-start-9">
        {note && <p className="body-copy max-w-sm">{note}</p>}
        {action && (
          <Link
            to={action.to}
            className="link-underline mt-5 inline-block text-[11px] uppercase tracking-widest2"
          >
            {action.label}
          </Link>
        )}
      </div>
    </Reveal>
  )
}
