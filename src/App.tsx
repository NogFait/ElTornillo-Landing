import { LazyMotion, MotionConfig } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Resenas from './components/Resenas/Resenas'

// El catálogo es la única sección con movimiento "pesado" (morph tarjeta → panel, drag):
// va en su propio chunk, junto con la librería, y se precarga en reposo.
const loadMaterials = () => import('./components/Materials/Materials')
const Materials = lazy(loadMaterials)
// drag + layout (domMax) también aparte: el primer render no los espera.
const loadFeatures = () => import('./motion/features').then((mod) => mod.default)

function App() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      void loadMaterials()
      void loadFeatures()
    }, 800)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <LazyMotion features={loadFeatures} strict>
      {/* "user": respeta prefers-reduced-motion (sin desplazamientos ni springs; se mantienen los fundidos) */}
      <MotionConfig reducedMotion="user">
        <div className={styles.app}>
          <Navbar />
          <main className={styles.main}>
            <Hero />
            <About />
            {/* El contenedor con id es estable: ancla y scroll-spy funcionan antes y después de cargar */}
            <div id="materials">
              <Suspense fallback={<div className={styles.materialsPlaceholder} aria-hidden="true" />}>
                <Materials />
              </Suspense>
            </div>
            <Resenas />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
