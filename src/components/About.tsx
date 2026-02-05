import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

// Importar iconos de lucide-react
import {
  Laptop,
  MapPin,
  Mail,
  Languages,
  Target,
  Quote
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Sobre Mí</h2>

      <div className="about-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about-card card"
        >
          <div className="about-icon">
            <Laptop size={32} />
          </div>
          <h3 className="about-card-title">Desarrollador React Native</h3>
          <p className="about-card-text">
            Desarrollador con una sólida base en JavaScript y un profundo conocimiento
            de las herramientas y librerías del ecosistema React Native.
          </p>
          <p className="about-card-text">
            Experiencia en la implementación de UseContext, React Navigation, y otras
            tecnologías modernas para crear aplicaciones móviles escalables y mantenibles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-details card"
        >
          <h3 className="details-title">Detalles Personales</h3>

          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-icon">
                <MapPin size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">Los Corralitos, Guaymallen, Mendoza</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Mail size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Email:</span>
                <a href="mailto:ivan20078261@gmail.com" className="detail-value link">
                  ivan20078261@gmail.com
                </a>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Languages size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Idioma:</span>
                <span className="detail-value">Español nativo</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <Target size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Enfoque:</span>
                <span className="detail-value">Desarrollo móvil con React Native</span>
              </div>
            </div>
          </div>

          <div className="about-quote">
            <Quote size={20} className="quote-icon" />
            <p className="quote-text">
              "Me apasiona crear aplicaciones que no solo funcionen bien,
              sino que también brinden una experiencia de usuario excepcional."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
