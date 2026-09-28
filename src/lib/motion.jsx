import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * The motion layer. Slow, soft and controlled: images reveal through a vertical
 * mask, text fades upward, and only two elements on the whole site parallax.
 *
 * Everything here is opt-in from the markup — an element asks to be revealed
 * with `data-reveal`, and asks for parallax with `useParallax`. Nothing
 * animates unless it says so, which is what keeps the page quiet.
 *
 * Reduced motion is honoured everywhere: the observer marks elements visible
 * immediately and the parallax listener never attaches.
 */

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Whether a navigation should ask for a view transition at all.
 *
 * The browser aborts `startViewTransition` on a hidden document and rejects
 * its promise, so a backgrounded tab would log an unhandled InvalidStateError
 * on every click. Reduced motion opts out here too, rather than being animated
 * and then flattened by CSS.
 */
export function useViewTransitions() {
  const [ok, setOk] = useState(
    () =>
      typeof document !== 'undefined' &&
      typeof document.startViewTransition === 'function' &&
      document.visibilityState === 'visible' &&
      !reducedMotion()
  )

  useEffect(() => {
    const check = () =>
      setOk(
        typeof document.startViewTransition === 'function' &&
        document.visibilityState === 'visible' &&
        !reducedMotion()
      )
    check()
    document.addEventListener('visibilitychange', check)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    mq.addEventListener('change', check)
    return () => {
      document.removeEventListener('visibilitychange', check)
      mq.removeEventListener('change', check)
    }
  }, [])

  return ok
}

/**
 * Watches every `[data-reveal]` on the page and adds `is-in` once it enters.
 * Mounted once, in Layout. Re-scans on navigation and whenever the DOM changes,
 * so content rendered later (the assistant's shortlist, a filtered grid) is
 * picked up without each page wiring anything.
 */
export function useReveals() {
  const { pathname } = useLocation()

  useEffect(() => {
    const pending = () => document.querySelectorAll('[data-reveal]:not(.is-in)')

    if (reducedMotion()) {
      pending().forEach(el => el.classList.add('is-in'))
      return
    }

    /**
     * A plain measured pass rather than an IntersectionObserver. The observer
     * silently missed elements that were replaced between its registration and
     * the scroll — this re-queries the document each time, so it cannot go
     * stale, and at this page's scale the cost is nil.
     *
     * An element reveals once its top has crossed 92% of the viewport height,
     * which lands the animation about where the reader is looking.
     */
    let frame = 0
    const pass = () => {
      frame = 0
      const limit = window.innerHeight * 0.92
      pending().forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < limit && r.bottom > 0) el.classList.add('is-in')
      })
    }

    const schedule = () => {
      if (frame) return
      frame = requestAnimationFrame(pass)
    }

    pass()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })

    // content rendered later — a filtered grid, the assistant's shortlist
    const mo = new MutationObserver(schedule)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      mo.disconnect()
    }
  }, [pathname])
}

/**
 * Scroll-linked crop movement, in percent of the element's own height.
 * Used on the hero and one full-bleed editorial image — nowhere else, because
 * constant parallax is the thing that makes a page feel restless.
 *
 * Writes `--py` and lets CSS decide what to do with it.
 */
export function useParallax(pct = 5) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return

    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const span = window.innerHeight + r.height
      if (r.bottom < 0 || r.top > window.innerHeight) return
      // -1 → just below the fold, 1 → just above it
      const progress = 1 - ((r.top + r.height) / span) * 2
      el.style.setProperty('--py', (progress * pct).toFixed(2) + '%')
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pct])

  return ref
}
