import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from "./components/Project"
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Usa useScroll en el elemento principal que tiene scroll
  const { scrollYProgress } = useScroll();

  // Convierte el progreso a un spring para animación suave
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // El contenedor principal necesita tener posición relativa
    <div className="App" style={{ position: 'relative' }}>
      {/* Barra de progreso - DEBE estar en el mismo contexto que useScroll */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1a73e8, #4285f4)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />

      <Header scrolled={scrolled} />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Project />

        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
