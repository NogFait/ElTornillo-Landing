import type { CSSProperties, ElementType, ReactNode } from 'react'

// Un solo IntersectionObserver para toda la página. Cuando el elemento entra, se marca
// data-revealed y la transición (spring CSS, mismo que --spring-gentle) hace el resto.
let observer: IntersectionObserver | null = null

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        ;(entry.target as HTMLElement).dataset.revealed = ''
        observer?.unobserve(entry.target) // once: lo que ya se vio no se vuelve a ocultar
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  )
  return observer
}

interface Props {
  as?: ElementType
  className?: string
  delay?: number // segundos
  immediate?: boolean // marcar al montar (above the fold)
  children?: ReactNode
  id?: string
  [key: string]: unknown
}

export const Reveal = ({ as: Tag = 'div', className = '', delay = 0, immediate, children, ...rest }: Props) => (
  <Tag
    {...rest}
    className={`reveal ${className}`.trim()}
    style={{ '--reveal-delay': `${Math.round(delay * 1000)}ms` } as CSSProperties}
    ref={(el: HTMLElement | null) => {
      if (!el) return
      if (immediate || typeof IntersectionObserver === 'undefined') {
        // un frame después, para que la transición parta del estado oculto
        const raf = requestAnimationFrame(() => { el.dataset.revealed = '' })
        return () => cancelAnimationFrame(raf)
      }
      const io = getObserver()
      io.observe(el)
      return () => io.unobserve(el)
    }}
  >
    {children}
  </Tag>
)
