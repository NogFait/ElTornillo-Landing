import styles from './Contacto.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2 className={styles.title}>VISITÁNOS EN MENDOZA</h2>
            <span className={styles.label}>DIRECCIÓN</span>
            <p className={styles.text}>Av. Arístides Villanueva 450</p>
            <p className={styles.text}>Ciudad de Mendoza, Argentina</p>
            <span className={styles.label}>HORARIOS DE ATENCIÓN</span>
            <p className={styles.text}>Martes a Sábado | 10:00 - 20:00</p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8!2d-68.8458!3d-32.8895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09746b5862b5%3A0x6b4f7e5e3e3e3e3e!2sAv.%20Ar%C3%ADstides%20Villanueva%20450%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
            />
          </div>
        </div>
    </section>
  )
}

export default Contact