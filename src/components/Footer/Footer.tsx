import { HexNut } from '../Icons/Icons'
import styles from './Footers.module.css'

const LINKS = [
  { id: 'about', label: 'Nosotros' },
  { id: 'materials', label: 'Productos' },
  { id: 'resenas', label: 'Reseñas' },
  { id: 'contact', label: 'Contacto' },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand}>
          <HexNut className={styles.mark} width={28} height={28} />
          <span>Ferretería El Tornillo</span>
        </a>

        <nav aria-label="Secciones">
          <ul className={styles.footerNav}>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={styles.footerLink}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copyright}>© {new Date().getFullYear()} Fausto Chirino. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
