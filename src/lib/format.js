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

/** 232 × 92 × 68 cm */
export const dims = d => [d.w, d.d, d.h].filter(Boolean).join(' × ') + ' cm'
