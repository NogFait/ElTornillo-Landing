
import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Materials from './components/Materials/Materials'
import Navbar from './components/Navbar/Navbar'
import Resenas from './components/Resenas/Resenas'

function App() {

  return (
    <div className={styles.app}>
      <Navbar/>
      <main className={styles.main}>
        <Hero/>
        <div id="about">
          <About/>
        </div>
        <div id="materials">
          <Materials/>
        </div>
        <div id="resenas">
          <Resenas/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
