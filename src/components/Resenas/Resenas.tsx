import ResenasList from '../ResenasList/ResenasList'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Resenas.module.css'

const Resenas = () => {
  return (
    <section id="resenas" className={styles.resenas} aria-labelledby="resenas-title">
      <div className="container">
        <SectionHeader index="03" eyebrow="Reseñas" title="Lo que dicen" accent="nuestros clientes" id="resenas-title" />
        <ResenasList />
      </div>
    </section>
  )
}

export default Resenas
