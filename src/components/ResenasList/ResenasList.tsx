import { resenas } from '../../data/dataResenas'
import { ResenaCard } from '../ResenaCard/ResenaCard'
import styles from './ResenasLIst.module.css'

const ResenasList = () => {
  return (
    <ul className={styles.grid}>
      {resenas.map((resena, index) => (
        <ResenaCard key={resena.id} resena={resena} index={index} />
      ))}
    </ul>
  )
}

export default ResenasList
