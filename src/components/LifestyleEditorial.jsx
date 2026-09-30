import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img'

/**
 * The lifestyle editorial: cinematic room photography, full-bleed, one short
 * line set in the picture's own negative space. Three different ideas:
 *
 *   a · reel      a letterboxed film band that changes scene slowly on its
 *                 own, the line set underneath it like a subtitle
 *   b · strip     scroll down and three full-screen scenes slide sideways
 *   c · opening   a small framed photograph opens to full-bleed as you scroll,
 *                 and only then does the line appear
 *
 * Every frame is sized from the viewport, so it fits one screen.
 */

const SCENES = [
  { image: 'photo-1787092419303-8fd21af848b2', alt: 'A woman reclining on a grey sofa in soft window light', line: 'A sofa for the long afternoon.', to: '/categories?k=sofas', pos: 'tl', at: 'center' },
  { image: 'photo-1757792859308-b8d2115a0010', alt: 'A warm neutral living room with a sofa and two armchairs', line: 'Chairs that face each other.', to: '/categories?k=sofas', pos: 'tl', at: 'center' },
  { image: 'photo-1777984994806-ec544b1c8924', alt: 'A long wooden dining table in low golden window light', line: 'A table for the meal that runs long.', to: '/categories?k=dining', pos: 'tl', at: 'center' },
]

const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n))
const ease = t => 1 - Math.pow(1 - t, 3)
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** 0 → 1 while a tall section scrolls past its pinned stage. */
function useProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const nav = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 88
      const r = el.getBoundingClientRect()
      const total = r.height - (window.innerHeight - nav)
      setP(clamp((nav - r.top) / total))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref])
  return p
}

function Line({ s, className = '' }) {
  return (
    <Link className={`sc__t disp ${className}`} to={s.to}>
      {s.line} <span aria-hidden="true">›</span>
    </Link>
  )
}

/* A · reel */
function Reel() {
  const [at, setAt] = useState(0)
  const paused = useRef(false)

  useEffect(() => {
    if (reduced()) return
    const id = setInterval(() => {
      if (paused.current || document.hidden) return
      setAt(a => (a + 1) % SCENES.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="life life--a"
      id="editorial"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      <div className="rl__band">
        {SCENES.map((s, i) => (
          <div key={s.image} className={`rl__f ${i === at ? 'on' : ''}`}>
            <Img id={s.image} alt={s.alt} ratio="21 / 9" ratioSm="4 / 5" w={2400} position={s.at} priority={i === 0} />
          </div>
        ))}
      </div>
      <div className="rl__cap">
        {SCENES.map((s, i) => (
          <Line key={s.image} s={s} className={i === at ? 'on' : ''} />
        ))}
      </div>
    </section>
  )
}

/* B · film strip */
function Strip() {
  const ref = useRef(null)
  const p = useProgress(ref)
  const last = SCENES.length - 1
  const at = Math.round(p * last)

  return (
    <section className="life life--b" id="editorial" ref={ref}>
      <div className="fs__stage">
        <div className="fs__track" style={{ transform: `translate3d(${-p * last * 100}vw, 0, 0)` }}>
          {SCENES.map((s, i) => (
            <div key={s.image} className={`sc sc--${s.pos} fs__p ${i === at ? 'on' : ''}`}>
              <Img id={s.image} alt={s.alt} ratio="3 / 2" ratioSm="4 / 5" w={2400} position={s.at} priority={i === 0} />
              <Line s={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* C · opening frame */
function Opening() {
  const ref = useRef(null)
  const p = useProgress(ref)
  const e = ease(clamp(p / 0.62))
  const s = SCENES[0]

  return (
    <section className="life life--c" id="editorial" ref={ref}>
      <div className="op__stage">
        <div
          className="op__img"
          style={{
            clipPath: `inset(${(1 - e) * 16}% ${(1 - e) * 26}% ${(1 - e) * 16}% ${(1 - e) * 26}%)`,
            transform: `scale(${1.22 - 0.22 * e})`,
          }}
        >
          <Img id={s.image} alt={s.alt} ratio="3 / 2" ratioSm="4 / 5" w={2400} position={s.at} priority />
        </div>
        <div className={`sc sc--${s.pos} op__t ${p > 0.7 ? 'on' : ''}`}>
          <Line s={s} />
        </div>
      </div>
    </section>
  )
}

export default function LifestyleEditorial({ variant = 'a' }) {
  return variant === 'b' ? <Strip /> : variant === 'c' ? <Opening /> : <Reel />
}
