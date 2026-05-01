 
 
 import styles from './Footers.module.css'

 const scrollToSection = (id: string) => {
   const element = document.getElementById(id)
   if (element) {
     const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
     const elementPosition = element.getBoundingClientRect().top + window.scrollY
     window.scrollTo({
       top: elementPosition - navbarHeight,
       behavior: 'smooth'
     })
   }
 }

 const Footer = () => {
   return (
     <footer className={styles.footer}>
         <h2 className={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           FERRETERÍA EL TORNILLO
         </h2>
         <ul className={styles.footerNav}>
             <li className={styles.footerItem} onClick={() => scrollToSection('about')}>NOSOTROS</li>
             <li className={styles.footerItem} onClick={() => scrollToSection('materials')}>PRODUCTOS</li>
             <li className={styles.footerItem} onClick={() => scrollToSection('resenas')}>RESEÑAS</li>
             <li className={styles.footerItem} onClick={() => scrollToSection('contact')}>CONTACTO</li>
         </ul>
         <p className={styles.copyright}>© {new Date().getFullYear()} Fausto Chirino. Todos los derechos reservados.</p>
     </footer>
   )
 }
 
 export default Footer