import { useEffect, useRef } from 'react'
import { consultaHref, tieneWhatsapp } from '../../data/contacto'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { Reveal } from '../Reveal/Reveal'
import styles from './Hero.module.css'

const Hero = () => {
  const ref = useRef<HTMLElement>(null)

  // Efecto ligado al scroll (único de la página): el fondo retrocede más lento que el contenido.
  // Un listener pasivo + rAF escribe una variable CSS; el CSS solo mueve transform.
  // Es reversible 1:1 (mismo scrollY → mismo valor) y no hay spring sobre un scroll ya suave.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let current = -1
    const update = () => {
      raf = 0
      const y = Math.min(window.scrollY, 800)
      if (y === current) return
      current = y
      el.style.setProperty('--scroll', String(y))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    // la imagen "se asienta" (escala 1.08 → 1) con el mismo spring cuando monta
    const settle = requestAnimationFrame(() => {
      el.dataset.revealed = ''
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      cancelAnimationFrame(settle)
    }
  }, [])

  return (
    <section ref={ref} id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.imageWrapper}>
        <img src="/HeroFondo.jpg" alt="" className={styles.backgroundImage} fetchPriority="high" />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.panel}>
          <Reveal as="p" immediate className={styles.eyebrow} delay={0.12}>
            Mendoza · Más de 25 años
          </Reveal>
          <Reveal as="h1" immediate className={styles.title} id="hero-title" delay={0.2}>
            Ferretería <span className={styles.highlight}>El Tornillo</span>
          </Reveal>
          <Reveal as="p" immediate className={styles.subtitle} delay={0.28}>
            Todo para construcción y hogar. Herramientas de precisión y calidad industrial para profesionales de
            Mendoza.
          </Reveal>
          <Reveal immediate className={styles.actions} delay={0.36}>
            <ButtonLink href={consultaHref()} external={tieneWhatsapp}>
              {tieneWhatsapp ? 'Consultar por WhatsApp' : 'Consultanos'}
            </ButtonLink>
            <ButtonLink href="#materials" variant="ghost">
              Ver productos
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
