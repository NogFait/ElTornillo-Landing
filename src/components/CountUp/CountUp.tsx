import { useEffect, useRef } from 'react'
import { springs } from '../../motion/physics'

interface Props {
  to: number
  suffix?: string
}

// El número sube con un spring críticamente amortiguado (la misma física `ambient` del resto)
// cuando entra en pantalla. Se escribe directo en el DOM: cero re-renders por frame.
export const CountUp = ({ to, suffix = '' }: Props) => {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const write = (v: number) => {
      el.textContent = `${Math.round(v)}${suffix}`
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      write(to)
      return
    }

    let raf = 0
    const { stiffness, damping } = springs.ambient
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        let x = 0
        let v = 0
        let last = performance.now()
        const tick = (now: number) => {
          const dt = Math.min((now - last) / 1000, 1 / 30)
          last = now
          v += (-stiffness * (x - to) - damping * v) * dt
          x += v * dt
          if (Math.abs(to - x) < 0.4 && Math.abs(v) < 1) {
            write(to)
            return
          }
          write(x)
          raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, suffix])

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {`0${suffix}`}
      </span>
      <span className="sr-only">{`${to}${suffix}`}</span>
    </>
  )
}
