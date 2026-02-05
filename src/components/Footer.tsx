import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="footer-content"
        >
          <div className="footer-logo">
            <span className="footer-logo-text">IM</span>
            <div className="footer-logo-info">
              <h3 className="footer-name">Ivan Molina</h3>
              <p className="footer-tagline">Desarrollador React Native</p>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-nav">
              <li><a href="#hero" className="footer-link">Inicio</a></li>
              <li><a href="#about" className="footer-link">Sobre mí</a></li>
              <li><a href="#skills" className="footer-link">Habilidades</a></li>
              <li><a href="#education" className="footer-link">Estudios</a></li>
              <li><a href="#contact" className="footer-link">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contacto</h4>
            <div className="footer-contact-info">
              <p className="footer-email">
                <i className="fas fa-envelope"></i>
                ivan20078261@gmail.com
              </p>
              <p className="footer-location">
                <i className="fas fa-map-marker-alt"></i>
                Los Corralitos, Mendoza
              </p>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Ivan Molina. Todos los derechos reservados.</p>

          </div>

          <div className="footer-back-to-top">
            <a href="#hero" className="back-to-top">
              <i className="fas fa-arrow-up"></i>
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
