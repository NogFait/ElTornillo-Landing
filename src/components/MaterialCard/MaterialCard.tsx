import styles from './MaterialCard.module.css'
import type{ Material } from "../../types/Materials";

interface Props {
  material: Material;
}

export const MaterialCard = ({ material }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        {material.imagen ? (
          <img src={material.imagen} alt={material.nombre} className={styles.image} />
        ) : (
          <span className={styles.imagePlaceholder}>SIN IMAGEN</span>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{material.nombre}</h3>
        <p className={styles.description}>{material.descripcion}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${material.precio}</span>
          <small className={styles.category}>{material.categoria}</small>
        </div>
      </div>
    </article>
  );
};