import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } },
  clip: {
    hidden: { opacity: 0, clipPath: 'inset(12% 0 0 0)' },
    show: { opacity: 1, clipPath: 'inset(0% 0 0 0)' },
  },
}

export default function Reveal({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.9,
  amount = 0.25,
  className = '',
  once = true,
}) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
