import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import Newsletter from './Newsletter'

const cols = [
  {
    title: 'Shop',
    links: categories.slice(0, 4).map((c) => ({
      to: `/shop?category=${c.slug}`,
      label: c.name,
    })),
  },
  {
    title: 'Studio',
    links: [
      { to: '/about', label: 'Our approach' },
      { to: '/journal', label: 'Journal' },
      { to: '/collections', label: 'Collections' },
      { to: '/contact', label: 'Visit us' },
    ],
  },
  {
    title: 'Care',
    links: [
      { to: '/contact', label: 'Delivery & lead times' },
      { to: '/contact', label: 'Returns' },
      { to: '/contact', label: 'Material care' },
      { to: '/contact', label: 'Trade enquiries' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-bone sm:mt-32">
      <Newsletter />

      <div className="shell grid grid-cols-2 gap-x-8 gap-y-12 border-t border-rule py-16 md:grid-cols-12 md:py-20">
        <div className="col-span-2 md:col-span-4">
          <p className="font-display text-[26px] tracking-[0.16em]">AETHERA</p>
          <p className="body-copy mt-5 max-w-xs">
            Furniture and objects for calm, functional rooms. Designed in
            Bengaluru, made in small runs across India.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title} className="md:col-span-2 md:col-start-auto">
            <p className="eyebrow mb-5">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="link-underline text-[14px] font-light text-graphite"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-2">
          <p className="eyebrow mb-5">Showroom</p>
          <p className="text-[14px] font-light leading-relaxed text-graphite">
            14 Wood Street
            <br />
            Richmond Town
            <br />
            Bengaluru 560025
          </p>
          <p className="mt-4 text-[14px] font-light text-graphite">
            Tue–Sun, 11–7
          </p>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-rule py-6 text-[11px] uppercase tracking-widest2 text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aethera Studio</p>
        <p className="normal-case tracking-normal">
          Imagery courtesy of Unsplash contributors.
        </p>
        <p>Privacy · Terms</p>
      </div>
    </footer>
  )
}
