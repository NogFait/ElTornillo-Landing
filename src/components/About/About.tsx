

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about}>
        <div className={styles.twoColumnGrid}>
          {/* Columna Izquierda: Info + Stats */}
          <div className={styles.infoColumn}>
            <h3 className={styles.title}>TRAYECTORIA Y <span className={styles.highlight}>CONFIANZA</span></h3>
            <p className={styles.description}>Somos una empresa familiar con más de 25 años equipando los proyectos de Mendoza. Nuestra herencia se basa en la durabilidad de los materiales y el conocimiento técnico profundo.</p>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                  <div className={styles.iconBox}>📦</div>
                  <span className={styles.statLabel}>AMPLIO STOCK</span>
                  <p className={styles.statValue}>INVENTARIO MASIVO DISPONIBLE HOY</p>
              </div>
              <div className={styles.statCard}>
                  <div className={styles.iconBox}>⚡</div>
                  <span className={styles.statLabel}>SERVICIO RAPIDO</span>
                  <p className={styles.statValue}>ATENCIÓN TECNICA INMEDIATA</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Una sola imagen */}
          <div className={styles.imageColumn}>
            <div className={styles.imagePlaceholder}>
              <img src="https://static6.depositphotos.com/1000144/599/i/450/depositphotos_5993206-stock-photo-set-of-working-tools-on.jpg" alt="herramientas" className={styles.image} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default About