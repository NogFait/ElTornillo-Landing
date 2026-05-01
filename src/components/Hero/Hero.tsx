

import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="/HeroFondo.jpg" 
          alt="Ferretería El Tornillo" 
          className={styles.backgroundImage} 
        />
      </div>
      <div className={styles.floatingBlock}>
        <h2 className={styles.title}>FERRETERÍA <span className={styles.highlight}>EL TORNILLO</span></h2>
        <p className={styles.subtitle}>TODO PARA CONSTRUCCIÓN Y HOGAR. HERRAMIENTAS DE PRECISIÓN Y CALIDAD INDUSTRIAL PARA PROFESIONALES DE MENDOZA.</p>
        <button className={styles.ctaButton}>CONSULTAR POR WHATSAPP</button>
      </div>
    </section>
  )
}

export default Hero