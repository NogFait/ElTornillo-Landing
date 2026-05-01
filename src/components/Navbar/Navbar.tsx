

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
    setMenuOpen(false)
  }

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav')
      if (nav && !nav.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  // Cerrar menú con ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [menuOpen])

  return (
    <nav className={styles.navbar}>
        <h1 className={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          FERRETERÍA EL TORNILLO
        </h1>
        
        <button 
          className={styles.burgerButton} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.navList} ${menuOpen ? styles.navListOpen : ''}`}>
            <li className={styles.navItem} onClick={() => scrollToSection('about')}>NOSOTROS</li>
            <li className={styles.navItem} onClick={() => scrollToSection('materials')}>PRODUCTOS</li>
            <li className={styles.navItem} onClick={() => scrollToSection('resenas')}>RESEÑAS</li>
            <li className={styles.navItem} onClick={() => scrollToSection('contact')}>CONTACTO</li>
        </ul>
    </nav>
  )
}

export default Navbar