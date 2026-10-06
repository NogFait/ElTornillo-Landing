import { Reveal } from '../Reveal/Reveal'
import styles from './SectionHeader.module.css'

interface Props {
  index: string
  eyebrow: string
  title: string
  accent: string
  id?: string
}

// Encabezado único para las 4 secciones: antes cada una repetía el mismo CSS.
export const SectionHeader = ({ index, eyebrow, title, accent, id }: Props) => (
  <Reveal as="header" className={styles.header}>
    <p className={styles.eyebrow}>
      <span className={styles.index}>{index}</span>
      {eyebrow}
    </p>
    <h2 className={styles.title} id={id}>
      {title} <span className={styles.accent}>{accent}</span>
    </h2>
  </Reveal>
)
