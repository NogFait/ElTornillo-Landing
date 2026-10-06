import styles from './MaterialList.module.css'
import { materiales } from '../../data/dataMaterials'
import { MaterialCard } from '../MaterialCard/MaterialCard'

interface Props {
  onOpen: (id: number, trigger: HTMLElement) => void
}

const MaterialList = ({ onOpen }: Props) => {
  return (
    <ul className={styles.grid}>
      {materiales.map((material, index) => (
        <MaterialCard key={material.id} material={material} index={index} onOpen={onOpen} />
      ))}
    </ul>
  )
}

export default MaterialList
