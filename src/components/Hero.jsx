import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img'
import { imageUrl } from '../data/products'
import { cx } from '../lib/format'

const slides = [
  { id: 'photo-1556020685-ae41abfc9365', alt: 'A living room in morning light' },
  { id: 'photo-1513694203232-719a280e022f', alt: 'A low sofa beside a window' },
  { id: 'photo-1530018352490-c6eef07fd7d0', alt: 'A solid oak dining table' },
  { id: 'photo-1567538096630-e0c55bd6374c', alt: 'A lounge chair in a bare room' },
]

const INTERVAL = 6000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const go = useCallback((next) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    timer.current = setTimeout(() => go(index + 1), INTERVAL)
    return () => clearTimeout(timer.current)
  }, [index, paused, go])

  return (
    <section className="bg-white pt-[58px] sm:pt-[66px]">
      <div className="flex flex-col md:h-[calc(100svh-66px)] md:min-h-[540px] md:flex-row">
        {/* Text column */}
        <div className="flex w-full items-center px-5 pb-10 pt-10 sm:px-8 md:w-[42%] md:shrink-0 lg:w-[38%] md:py-0 lg:px-12">
          <div className="max-w-[34rem]">
            <h1 className="text-[clamp(1.5rem,1.85vw,1.75rem)] font-normal leading-[1.3] text-[#2b2b2b]">
              Design spaces that feel quieter.
            </h1>

            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.6] text-[#6b6b6b]">
              Furniture and interiors curated to bring warmth, balance, and
              clarity into everyday life. Thoughtfully designed for homes that
              value comfort over clutter.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center border border-[#8f8f8f] bg-[#ededed] px-4 py-3 text-[13px] leading-none text-[#1a1a1a] transition-colors duration-200 hover:bg-[#e2e2e2]"
              >
                Explore spaces
              </Link>
              <Link
                to="/design-by-ai"
                className="inline-flex items-center justify-center border border-[#c9c9c9] bg-white px-4 py-3 text-[13px] leading-none text-[#1a1a1a] transition-colors duration-200 hover:border-[#8f8f8f]"
              >
                Design your Room
              </Link>
            </div>
          </div>
        </div>

        {/* Image panel — bleeds off the right edge */}
        <div className="w-full px-5 pb-5 sm:px-8 md:flex-1 md:px-0 md:py-5 md:pl-0">
          <div
            className="relative h-[52vh] min-h-[280px] overflow-hidden border border-[#c9c9c9] md:h-full md:border-r-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                aria-hidden={i !== index}
                className={cx(
                  'absolute inset-0 transition-opacity duration-[900ms] ease-editorial',
                  i === index ? 'opacity-100' : 'opacity-0'
                )}
              >
                <Img
                  src={imageUrl(slide.id, 2000)}
                  alt={slide.alt}
                  ratio="auto"
                  priority={i === 0}
                  className="h-full w-full"
                />
              </div>
            ))}

            {/* Carousel dots */}
            <div
              role="tablist"
              aria-label="Featured spaces"
              className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2"
            >
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1} of ${slides.length}`}
                  onClick={() => go(i)}
                  className={cx(
                    'h-2 rounded-full border transition-all duration-300',
                    i === index
                      ? 'w-6 border-[#8a8a8a] bg-[#8a8a8a]'
                      : 'w-2 border-[#8a8a8a] bg-white/80 hover:bg-white'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
