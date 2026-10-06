import { useEffect, useState } from 'react'

// Dirección del scroll con umbral de ±4px para ignorar el jitter del scroll inercial.
// Un único listener pasivo con rAF; setState solo en el cambio discreto (visible/oculto).
export function useScrollDirection(hideAfter = 120) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    let raf = 0

    const check = () => {
      raf = 0
      const y = window.scrollY
      const delta = y - last
      if (Math.abs(delta) < 4) return
      last = y
      setHidden(delta > 0 && y > hideAfter)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [hideAfter])

  return hidden
}
