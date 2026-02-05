import React from 'react';
import { motion } from 'framer-motion';
import {

  Smartphone,
  CheckCircle2,
  Copy,
  Play,
  Zap,
  Clock,
  Terminal
} from 'lucide-react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiSupabase
} from 'react-icons/si'; // Usando simple-icons para los logos de tech
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-badge"
          >
            <Smartphone size={18} style={{ alignItems: "center", marginRight: 10, }} className="badge-icon" />
            <span className="badge-text">Desarrollador React Native</span>
          </motion.div>

          <h1 className="hero-title">
            Hola, soy <span className="highlight">Ivan Molina</span>
          </h1>

          <p className="hero-description">
            Creo aplicaciones móviles <strong>eficientes y escalables</strong> con React Native.
            Me especializo en transformar ideas en productos digitales que ofrecen
            experiencias de usuario excepcionales.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Comprometido</span>
            </div>
          </div>

          <div className="hero-buttons">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: "white" }}
            >
              Contactar
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: "white" }}
            >
              Ver proyectos
            </motion.a>
          </div>

          <div className="hero-tech">
            <span className="tech-label">Tecnologías principales:</span>
            <div className="tech-tags">
              <span className="tech-tag"><SiReact /> React Native</span>
              <span className="tech-tag"><SiJavascript /> JavaScript</span>
              <span className="tech-tag"><SiTypescript /> TypeScript</span>
              <span className="tech-tag"><SiSupabase /> Supabase</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
        >
          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-filename">
                <Terminal size={14} style={{ marginRight: 6 }} />
                App.tsx
              </span>
              <div className="code-actions">
                <span className="code-action"><Copy size={14} /></span>
                <span className="code-action"><Play size={14} /></span>
              </div>
            </div>

            <div className="code-content">
              <div className="code-lines">
                <pre><code className="language-javascript">{`import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [projects] = useState([
    { id: 1, name: 'E-commerce', status: '✅' },
    { id: 2, name: 'Fitness App', status: '🚀' }
  ]);

  return (
    <View style={styles.container}>
      <Text>¡Hola! Soy Ivan</Text>
      {projects.map(p => <Card key={p.id} project={p} />)}
    </View>
  );
};`}</code></pre>
              </div>

              <div className="code-terminal">
                <div className="terminal-output">
                  <span className="output-line">$ npm start</span>
                  <span className="output-line success">✅ Metro server running</span>
                  <span className="output-line">📱 Launching app...</span>
                </div>
              </div>
            </div>

            <div className="code-footer">
              <span className="footer-item"><CheckCircle2 size={12} /> Sin errores</span>
              <span className="footer-item"><Zap size={12} /> TypeScript</span>
              <span className="footer-item"><Clock size={12} /> Actualizado</span>
            </div>
          </div>

          {/* Elementos flotantes con iconos de marca */}
          <motion.div
            className="floating-element"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <SiReact color="#61DAFB" size={40} />
          </motion.div>
          <motion.div
            className="floating-element element-2"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            <SiTypescript color="#3178C6" size={35} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
