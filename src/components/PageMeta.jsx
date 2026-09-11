import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} — Aethera`
    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', description)
    }
  }, [title, description])
  return null
}
