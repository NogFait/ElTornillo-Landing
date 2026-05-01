import styles from './ResenaCard.module.css'
import type{ Resenas } from "../../types/Resenas";

interface Props {
  resena: Resenas;
}

export const ResenaCard = ({ resena }: Props) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h4 className={styles.name}>{resena.nombre}</h4>
        <span className={styles.stars}>{"★".repeat(resena.estrellas)}</span>
      </header>

      <p className={styles.comment}>{resena.comentario}</p>
    </article>
  );
};