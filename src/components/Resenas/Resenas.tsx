import styles from './Resenas.module.css'
import ResenasList from "../ResenasList/ResenasList"


const Resenas = () => {
  return (
    <section className={styles.resenas}>
        <h3 className={styles.title}>LO QUE DICEN NUESTROS <span className={styles.highlight}>CLIENTES</span></h3>
        <ResenasList/>
    </section>
  )
}

export default Resenas