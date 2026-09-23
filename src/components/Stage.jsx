import { pieceMarkup, vars } from '../lib/art'

/** One piece of furniture, drawn as SVG. Its colours come from CSS variables set on an ancestor (or `style`). */
export function Piece({ p, si = 0, cx = 320, vb = 640, dim = false, style }) {
  return (
    <svg
      className="piece"
      style={style}
      viewBox={`0 0 ${vb} 400`}
      role="img"
      aria-label={`${p.name}, ${p.sizes[si].l}`}
      dangerouslySetInnerHTML={{ __html: pieceMarkup(p, si, { cx, dim }) }}
    />
  )
}

/** A scene (wall + floor) with a piece standing on it, recoloured by finish index `fi`. */
export default function Stage({ p, fi = 0, si = 0, cx, vb, dim, className = '', style, children }) {
  return (
    <div className={`stage ${className}`} style={{ ...vars(p, fi), ...style }}>
      <div className="floor" />
      <Piece p={p} si={si} cx={cx} vb={vb} dim={dim} />
      {children}
    </div>
  )
}

/** Shared gradients and blur used by every drawing. Render once. */
export function Defs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".18" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".24" />
        </linearGradient>
        <linearGradient id="gH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity=".24" />
          <stop offset=".2" stopColor="#000" stopOpacity="0" />
          <stop offset=".78" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".28" />
        </linearGradient>
        <filter id="fb" x="-20%" y="-150%" width="140%" height="400%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
    </svg>
  )
}
