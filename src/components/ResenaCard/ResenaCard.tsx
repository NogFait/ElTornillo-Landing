import type { Resenas } from '../../types/Resenas'
import { stagger } from '../../motion/variants'
import { Reveal } from '../Reveal/Reveal'
import { Star } from '../Icons/Icons'
import styles from './ResenaCard.module.css'

interface Props {
  resena: Resenas
  index: number
}

export const ResenaCard = ({ resena, index }: Props) => {
  return (
    <Reveal as="li" className={styles.card} delay={stagger(index)}>
      <div className={styles.stars} role="img" aria-label={`${resena.estrellas} de 5 estrellas`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} filled={i < resena.estrellas} width={20} height={20} />
        ))}
      </div>

      <blockquote className={styles.comment}>{resena.comentario}</blockquote>

      <p className={styles.name}>{resena.nombre}</p>
    </Reveal>
  )
}
