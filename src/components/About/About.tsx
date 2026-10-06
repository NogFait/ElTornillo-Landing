import { stagger } from '../../motion/variants'
import { Reveal } from '../Reveal/Reveal'
import { CountUp } from '../CountUp/CountUp'
import { Bolt, Package } from '../Icons/Icons'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.infoColumn}>
          <SectionHeader index="01" eyebrow="Nosotros" title="Trayectoria y" accent="confianza" id="about-title" />

          <Reveal as="p" className={styles.description} delay={stagger(1)}>
            Somos una empresa familiar con más de 25 años equipando los proyectos de Mendoza. Nuestra herencia se basa
            en la durabilidad de los materiales y el conocimiento técnico profundo.
          </Reveal>

          <ul className={styles.stats}>
            <Reveal as="li" className={`${styles.statCard} ${styles.statHero}`} delay={stagger(2)}>
              <span className={styles.bigNumber}>
                <CountUp to={25} suffix="+" />
              </span>
              <span className={styles.statLabel}>años equipando Mendoza</span>
            </Reveal>

            <Reveal as="li" className={styles.statCard} delay={stagger(3)}>
              <Package className={styles.icon} width={32} height={32} />
              <h3 className={styles.statTitle}>Amplio stock</h3>
              <p className={styles.statText}>Inventario disponible hoy.</p>
            </Reveal>

            <Reveal as="li" className={styles.statCard} delay={stagger(4)}>
              <Bolt className={styles.icon} width={32} height={32} />
              <h3 className={styles.statTitle}>Servicio rápido</h3>
              <p className={styles.statText}>Atención técnica inmediata.</p>
            </Reveal>
          </ul>
        </div>

        <Reveal as="div" className={styles.imageColumn} delay={stagger(2)}>
          <div className={styles.imageFrame}>
            <img
              src="https://static6.depositphotos.com/1000144/599/i/450/depositphotos_5993206-stock-photo-set-of-working-tools-on.jpg"
              alt="Herramientas de trabajo sobre una mesa"
              className={styles.image}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
