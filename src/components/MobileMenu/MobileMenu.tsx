import { m, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { project, springs } from '../../motion/physics'
import styles from './MobileMenu.module.css'

interface Props {
  links: readonly { id: string; label: string }[]
  active: string | null
  open: boolean
  onClose: () => void
}

const drawerWidth = () => Math.min(window.innerWidth * 0.8, 360)

// Menú móvil: un panel que se agarra y se arrastra. Va en su propio chunk (solo en pantallas angostas).
const MobileMenu = ({ links, active, open, onClose }: Props) => {
  const [drawerW] = useState(drawerWidth)
  const drawerRef = useRef<HTMLElement>(null)

  // El drawer sigue el gesto 1:1: x es un MotionValue y el fondo se oscurece según x
  const x = useMotionValue(drawerW)
  const scrimOpacity = useTransform(x, [0, drawerW], [1, 0])

  useEffect(() => {
    if (open) drawerRef.current?.querySelector('a')?.focus({ preventScroll: true })
  }, [open])

  return (
    <>
      <m.div
        className={styles.scrim}
        style={{ opacity: scrimOpacity, pointerEvents: open ? 'auto' : 'none' }}
        onClick={onClose}
        aria-hidden="true"
      />

      <m.nav
        id="menu-movil"
        ref={drawerRef}
        aria-label="Menú móvil"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        style={{ x, width: drawerW }}
        initial={false}
        animate={{ x: open ? 0 : drawerW }}
        transition={springs.settle}
        drag="x"
        dragDirectionLock
        dragMomentum={false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{ left: 0.04, right: 0.6 }}
        onDragEnd={(_, info) => {
          // Se decide por la proyección del flick, no por dónde se soltó
          const projected = info.offset.x + project(info.velocity.x)
          if (projected > Math.max(80, drawerW * 0.3)) onClose()
        }}
        inert={!open}
      >
        <ul className={styles.drawerList}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={styles.drawerLink}
                aria-current={active === l.id ? 'location' : undefined}
                onClick={onClose}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </m.nav>
    </>
  )
}

export default MobileMenu
