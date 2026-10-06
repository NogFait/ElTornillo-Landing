import { m, useDragControls, useIsPresent, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useId, useRef } from 'react'
import type { RefObject } from 'react'
import { createPortal } from 'react-dom'
import { consultaHref, tieneWhatsapp } from '../../data/contacto'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { project, springs } from '../../motion/physics'
import type { Material } from '../../types/Materials'
import { formatPrecio } from '../../utils/formatPrecio'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { Close } from '../Icons/Icons'
import styles from './ProductDetail.module.css'

interface Props {
  material: Material
  onClose: () => void
  returnFocusTo: RefObject<HTMLElement | null>
}

// Detalle de producto: la misma tarjeta, convertida en panel (layoutId compartido).
// Escritorio: diálogo centrado. Móvil: hoja inferior que se arrastra hacia abajo para cerrar.
export const ProductDetail = ({ material, onClose, returnFocusTo }: Props) => {
  const { id, nombre, descripcion, categoria, imagen, precio } = material
  const titleId = useId()
  const isPresent = useIsPresent()
  const isMobile = useMediaQuery('(max-width: 720px)')
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Cada píxel del gesto tiene respuesta: el fondo se atenúa y la hoja se encoge con y
  const y = useMotionValue(0)
  const dim = useTransform(y, [0, 360], [1, 0.2])
  const scale = useTransform(y, [0, 400], [1, 0.94])
  const controls = useDragControls()

  // Scroll de fondo bloqueado, foco dentro del diálogo, Esc y trampa de Tab.
  // Se desactiva apenas empieza la salida (isPresent=false), no al terminarla.
  useEffect(() => {
    if (!isPresent) return
    const trigger = returnFocusTo.current
    document.documentElement.classList.add('is-locked')
    closeRef.current?.focus({ preventScroll: true })

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const items = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('is-locked')
      trigger?.focus({ preventScroll: true })
    }
  }, [isPresent, onClose, returnFocusTo])

  return createPortal(
    <>
      <m.div
        className={styles.scrimLayer}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Oscurece sin blur: un blur a pantalla completa con fade duplica los tiempos de frame */}
        <m.div className={styles.scrim} style={{ opacity: dim }} />
      </m.div>

      <div className={styles.stage}>
        <m.div
          ref={panelRef}
          layoutId={`product-${id}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={styles.panel}
          transition={{ default: springs.settle, layout: springs.settle }}
          drag={isMobile ? 'y' : false}
          dragListener={false}
          dragControls={controls}
          dragMomentum={false}
          dragSnapToOrigin
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0.12, bottom: 1 }}
          dragTransition={{ bounceStiffness: springs.momentum.stiffness, bounceDamping: springs.momentum.damping }}
          onDragEnd={(_, info) => {
            // Se decide por hacia dónde iba el gesto (proyección), no por dónde se soltó
            const projected = info.offset.y + project(info.velocity.y)
            if (projected > Math.max(140, window.innerHeight * 0.25)) onClose()
          }}
          style={{ y, scale, borderRadius: 0 }}
        >
          <div className={styles.sheet}>
            <div
              className={styles.grip}
              onPointerDown={isMobile ? (e) => controls.start(e) : undefined}
              aria-hidden="true"
            >
              <span />
            </div>

            <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Cerrar detalle">
              <Close width={22} height={22} />
            </button>

            <m.div layoutId={`product-img-${id}`} className={styles.media} style={{ borderRadius: 0 }}>
              {imagen ? (
                <img src={imagen} alt={nombre} className={styles.image} draggable={false} decoding="async" />
              ) : (
                <span className={styles.noImage}>Sin imagen</span>
              )}
            </m.div>

            {/* El contenido entra después de la forma, y sale antes que ella */}
            <m.div
              className={styles.body}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { ...springs.settle, delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.08 } }}
            >
              <div className={styles.scroll}>
                <span className={styles.category}>{categoria}</span>
                <h2 className={styles.title} id={titleId}>
                  {nombre}
                </h2>
                <p className={styles.description}>{descripcion}</p>
                <p className={styles.priceRow}>
                  <span className={styles.priceLabel}>Precio</span>
                  <span className={styles.price}>{formatPrecio(precio)}</span>
                </p>
              </div>

              {/* Acción principal siempre visible: pie fijo, solo el cuerpo hace scroll */}
              <div className={styles.foot}>
                <ButtonLink
                  href={consultaHref(`Hola, quería consultar por: ${nombre} (${formatPrecio(precio)}).`)}
                  external={tieneWhatsapp}
                  onClick={tieneWhatsapp ? undefined : onClose}
                >
                  Consultar este producto
                </ButtonLink>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </>,
    document.body,
  )
}
