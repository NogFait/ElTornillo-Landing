import styles from './ResenasLIst.module.css'
import { resenas } from "../../data/dataResenas"
import { ResenaCard } from "../ResenaCard/ResenaCard"

const ResenasList = () => {
  return (
    <div className={styles.grid}>
        {resenas.map((resena)=>(
            <ResenaCard key={resena.id} resena={resena}/>
        ))}
    </div>
  )
}

export default ResenasList