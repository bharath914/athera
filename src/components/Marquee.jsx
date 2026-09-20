export default function Marquee({ items }) {
  const run = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-rule py-5">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {run.map((item, i) => (
          <span key={i} className="label flex items-center gap-12 text-mute">
            {item}
            <span aria-hidden="true" className="text-clay">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
