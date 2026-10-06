import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { HexNut } from '../Icons/Icons'
import styles from './Navbar.module.css'

const LINKS = [
  { id: 'about', label: 'Nosotros' },
  { id: 'materials', label: 'Productos' },
  { id: 'resenas', label: 'Reseñas' },
  { id: 'contact', label: 'Contacto' },
] as const

const SPY_IDS = ['inicio', ...LINKS.map((l) => l.id)] as const
// Solo se descarga en pantallas angostas (y en reposo, para que el primer toque no espere)
const loadMenu = () => import('../MobileMenu/MobileMenu')
const MobileMenu = lazy(loadMenu)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const wide = useMediaQuery('(min-width: 903px)')
  const touchWidth = useMediaQuery('(max-width: 1023px)')
  const scrolledDown = useScrollDirection()
  const active = useScrollSpy(SPY_IDS)

  // Si se agranda la ventana con el menú abierto, el menú móvil deja de existir
  const open = menuOpen && !wide
  // Barra direccional: solo en táctil/tablet. En escritorio es fija (la píldora orienta).
  const hidden = scrolledDown && touchWidth && !open && !focused

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', open)
    return () => document.documentElement.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Píldora que viaja: se mide el enlace activo y se escribe transform en variables CSS
  // (translateX + scaleX, nada de layout). La transición CSS parte siempre del valor actual.
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const place = () => {
      const link = list.querySelector<HTMLElement>('[aria-current="location"]')
      if (!link) {
        list.style.setProperty('--pill-on', '0')
        return
      }
      const wasOn = list.style.getPropertyValue('--pill-on') === '1'
      list.dataset.animate = wasOn ? '' : 'off' // la primera colocación no "viaja" desde 0
      list.style.setProperty('--pill-on', '1')
      list.style.setProperty('--pill-x', `${link.offsetLeft}px`)
      list.style.setProperty('--pill-scale', String(link.offsetWidth / 100))
      if (!wasOn) requestAnimationFrame(() => delete list.dataset.animate)
    }
    place()
    const ro = new ResizeObserver(place)
    ro.observe(list)
    void document.fonts?.ready.then(place)
    return () => ro.disconnect()
  }, [active, wide])

  useEffect(() => {
    if (wide) return
    const id = window.setTimeout(() => void loadMenu(), 1200)
    return () => window.clearTimeout(id)
  }, [wide])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`${styles.navbar} ${hidden ? styles.navbarHidden : ''}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <a href="#inicio" className={styles.brand}>
          <HexNut className={styles.brandMark} width={28} height={28} />
          <span>Ferretería El Tornillo</span>
        </a>

        <nav aria-label="Principal" className={styles.desktopNav}>
          <ul className={styles.navList} ref={listRef}>
            <li className={styles.pill} aria-hidden="true" />
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={styles.navLink}
                  aria-current={active === l.id ? 'location' : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={burgerRef}
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {!wide && (
        <Suspense fallback={null}>
          <MobileMenu links={LINKS} active={active} open={open} onClose={close} />
        </Suspense>
      )}
    </>
  )
}

export default Navbar
