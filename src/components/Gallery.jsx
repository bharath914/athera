import { useCallback, useEffect, useState } from 'react'
import Img from './Img'
import { img } from '../data/catalogue'
import { cx } from '../lib/format'

/**
 * The product gallery: every shot the piece was photographed in, labelled with
 * its view, at the two ratios the brief specifies — 1:1 for the opening frame,
 * 4:5 for the rest. Any frame opens a zoom view; inside it, click to magnify
 * and move the pointer to pan.
 */
export default function Gallery({ p, opening = false }) {
  const [at, setAt] = useState(-1)
  const [big, setBig] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')
  const open = at >= 0
  const shot = open ? p.images[at] : null

  const close = useCallback(() => { setAt(-1); setBig(false) }, [])
  const step = useCallback(
    d => { setBig(false); setAt(i => (i + d + p.images.length) % p.images.length) },
    [p.images.length]
  )

  useEffect(() => {
    if (!open) return
    const onKey = e => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, close, step])

  const track = e => {
    if (!big) return
    const r = e.currentTarget.getBoundingClientRect()
    setOrigin(
      `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`
    )
  }

  return (
    <>
      <div className="gal">
        {p.images.map((s, i) => (
          <figure className="gal__f" key={s.id} data-reveal={i > 0 ? 'mask' : undefined}>
            <button
              type="button"
              className="gal__b"
              onClick={() => setAt(i)}
              aria-label={`${p.name}, ${s.view.toLowerCase()} view — open zoom`}
              // the opening frame carries the name the card expands from
              style={i === 0 && opening ? { viewTransitionName: 'piece' } : undefined}
            >
              <Img
                id={s.id}
                alt={`${p.name}, ${s.view.toLowerCase()} view`}
                ratio={i === 0 ? '1 / 1' : '4 / 5'}
                w={1400}
                priority={i === 0}
              />
              <span className="gal__zoom" aria-hidden="true">Zoom</span>
            </button>
            <figcaption className="gal__cap">{s.view} view</figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div className="zoom" role="dialog" aria-modal="true" aria-label={`${p.name}, zoom`}>
          <div className="zoom__bar">
            <span className="eyebrow">
              {p.name} · {shot.view} view · {at + 1}/{p.images.length}
            </span>
            <button className="zoom__x" type="button" onClick={close} aria-label="Close zoom">
              &times;
            </button>
          </div>

          <div
            className={cx('zoom__stage', big && 'on')}
            onMouseMove={track}
            onClick={() => setBig(v => !v)}
            role="button"
            tabIndex={0}
            aria-label={big ? 'Reduce' : 'Magnify'}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setBig(v => !v) } }}
          >
            <img
              src={img(shot.id, 2000)}
              alt={`${p.name}, ${shot.view.toLowerCase()} view`}
              style={big ? { transform: 'scale(2.2)', transformOrigin: origin } : undefined}
            />
          </div>

          <div className="zoom__nav">
            <button className="tlink" type="button" onClick={() => step(-1)}>Previous</button>
            <span className="fine">{big ? 'Click to reduce' : 'Click the photograph to magnify'}</span>
            <button className="tlink" type="button" onClick={() => step(1)}>Next</button>
          </div>
        </div>
      )}
    </>
  )
}
