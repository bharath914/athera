export const cx = (...a) => a.filter(Boolean).join(' ')

export const money = n => '$' + n.toLocaleString('en-US')

export const SHIP = {
  std: { n: 'White-glove delivery', fee: 0, w: [4, 6] },
  exp: { n: 'Priority build', fee: 180, w: [2, 3] },
}

/** "March 4 – March 18", from a window given in weeks. */
export const eta = (w1, w2) => {
  const f = d => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
  const a = new Date(), b = new Date()
  a.setDate(a.getDate() + w1 * 7)
  b.setDate(b.getDate() + w2 * 7)
  return `${f(a)} – ${f(b)}`
}

/** One date, n weeks out. */
export const dateIn = w => {
  const d = new Date()
  d.setDate(d.getDate() + w * 7)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

/** 232 × 92 × 68 cm */
export const dims = d => [d.w, d.d, d.h].filter(Boolean).join(' × ') + ' cm'

/**
 * The delivery and availability check on a product page.
 * A prototype: the postcode only decides which of three service areas you are
 * in, and the lead time is the piece's own. Nothing is looked up.
 */
export const AREAS = [
  { test: n => n < 30000, name: 'East coast', add: 0 },
  { test: n => n < 70000, name: 'Central', add: 1 },
  { test: () => true, name: 'West coast', add: 2 },
]

export const checkPostcode = (code, weeks) => {
  const clean = String(code).replace(/\D/g, '')
  if (clean.length < 4) return null
  const area = AREAS.find(a => a.test(Number(clean.slice(0, 5))))
  return { area: area.name, from: dateIn(weeks + area.add), to: dateIn(weeks + area.add + 2) }
}
