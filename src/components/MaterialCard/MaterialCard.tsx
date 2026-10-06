import { m } from 'framer-motion'
import type { Material } from '../../types/Materials'
import { stagger } from '../../motion/variants'
import { Reveal } from '../Reveal/Reveal'
import { springs } from '../../motion/physics'
import { ArrowRight } from '../Icons/Icons'
import { formatPrecio } from '../../utils/formatPrecio'
import styles from './MaterialCard.module.css'

interface Props {
  material: Material
  index: number
  onOpen: (id: number, trigger: HTMLElement) => void
}

export const MaterialCard = ({ material, index, onOpen }: Props) => {
  const { id, nombre, descripcion, categoria, imagen, precio } = material

  return (
    // La entrada va en el <li>; la <article> queda libre para hover/press y para el morph compartido.
    <Reveal as="li" className={styles.slot} delay={stagger(index)}>
      <m.article
        layoutId={`product-${id}`}
        data-product-card
        className={styles.card}
        style={{ borderRadius: 0 }}
        whileHover={{ x: -4, y: -4 }}
        whileTap={{ scale: 0.985 }}
        transition={{ default: springs.snappy, scale: springs.press, layout: springs.settle }}
      >
        <m.div layoutId={`product-img-${id}`} className={styles.imageArea} style={{ borderRadius: 0 }}>
          {imagen ? (
            <img src={imagen} alt="" className={styles.image} draggable={false} loading="lazy" decoding="async" />
          ) : (
            <span className={styles.imagePlaceholder}>Sin imagen</span>
          )}
        </m.div>

        <div className={styles.content}>
          <span className={styles.category}>{categoria}</span>
          <h3 className={styles.title}>{nombre}</h3>
          <p className={styles.description}>{descripcion}</p>
          <div className={styles.footer}>
            <span className={styles.price}>{formatPrecio(precio)}</span>
            <span className={styles.hint} aria-hidden="true">
              Ver detalle <ArrowRight width={16} height={16} />
            </span>
          </div>
        </div>

        {/* Un solo control accesible cubre la tarjeta: Enter/Espacio y toque abren el detalle */}
        <button
          type="button"
          className={styles.hit}
          aria-haspopup="dialog"
          aria-label={`Ver detalle de ${nombre}`}
          onClick={(e) => onOpen(id, e.currentTarget)}
        />
      </m.article>
    </Reveal>
  )
}
