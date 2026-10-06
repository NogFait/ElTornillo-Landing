import { direccion, mapsHref } from '../../data/contacto'
import { stagger } from '../../motion/variants'
import { Reveal } from '../Reveal/Reveal'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Contacto.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader index="04" eyebrow="Contacto" title="Visitanos en" accent="Mendoza" id="contact-title" />

        <div className={styles.layout}>
          <Reveal className={styles.info} delay={stagger(1)}>
            <dl className={styles.list}>
              <div className={styles.row}>
                <dt className={styles.label}>Dirección</dt>
                <dd className={styles.text}>
                  {direccion}
                  <br />
                  Ciudad de Mendoza, Argentina
                </dd>
              </div>
              <div className={styles.row}>
                <dt className={styles.label}>Horarios de atención</dt>
                <dd className={styles.text}>Martes a sábado · 10:00 – 20:00</dd>
              </div>
            </dl>
            <ButtonLink href={mapsHref} variant="dark" external>
              Cómo llegar
            </ButtonLink>
          </Reveal>

          <Reveal className={styles.mapContainer} delay={stagger(2)}>
            <iframe
              className={styles.map}
              title="Mapa: Ferretería El Tornillo, Av. Arístides Villanueva 450, Mendoza"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8!2d-68.8458!3d-32.8895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09746b5862b5%3A0x6b4f7e5e3e3e3e3e!2sAv.%20Ar%C3%ADstides%20Villanueva%20450%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
