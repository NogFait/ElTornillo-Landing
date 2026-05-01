import styles from './Materials.module.css'
import MaterialList from "../MaterialList/MaterialList"


const Materials = () => {
  return (
    <section className={styles.materials}>
        <h3 className={styles.title}>CATÁLOGO DE <span className={styles.highlight}>MATERIALES</span></h3>
        <MaterialList/>
    </section>
  )
}

export default Materials