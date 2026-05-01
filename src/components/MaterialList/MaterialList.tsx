import styles from './MaterialList.module.css'
import { materiales } from "../../data/dataMaterials"
import { MaterialCard } from "../MaterialCard/MaterialCard"

const MaterialList = () => {
  return (
    <div className={styles.grid}>
        {materiales.map((material)=>(
            <MaterialCard key={material.id} material={material}/>
        ))}
    </div>
  )
}

export default MaterialList