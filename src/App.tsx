import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from "./components/Project"
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getStoredTheme, applyTheme, toggleTheme, type Theme } from './utils/theme';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /* Aplica el tema al <html> cada vez que cambia */
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => toggleTheme(prev));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" style={{ position: 'relative' }}>
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />

      <Header scrolled={scrolled} theme={theme} onToggleTheme={handleToggleTheme} />
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
