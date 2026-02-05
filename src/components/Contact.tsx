import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react'; // Importa Formspree
import './Contact.css';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Usa el hook de Formspree con tu ID
  const [state, handleSubmit] = useForm("mdalnpzw");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Maneja el submit combinando tu estado con Formspree
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Envía el formulario a Formspree
    await handleSubmit(e);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contacto</h2>

      <div className="contact-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-info card"
        >
          <h3 className="contact-subtitle">Información de Contacto</h3>

          <div className="contact-item">
            <div className="contact-icon gmail-icon">
              <Mail size={24} />
            </div>
            <div className="contact-details">
              <h4 className="contact-type">Gmail</h4>
              <a href="mailto:ivan20078261@gmail.com" className="contact-value">
                ivan20078261@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon linkedin-icon">
              <Linkedin size={24} />
            </div>
            <div className="contact-details">
              <h4 className="contact-type">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/ivan-molina-25b42325a"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                Conectar en LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon location-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-details">
              <h4 className="contact-type">Ubicación</h4>
              <p className="contact-value">Los Corralitos, Guaymallén, Mendoza</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-form card"
        >
          <h3 className="contact-subtitle">Envíame un mensaje</h3>

          {/* Mensaje de éxito */}
          {state.succeeded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message"
            >
              <div className="success-icon">✓</div>
              <h4>¡Mensaje enviado con éxito!</h4>
              <p>Gracias por contactarme. Te responderé pronto.</p>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-secondary"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          )}

          {/* Formulario (solo se muestra si no hay éxito) */}
          {!state.succeeded && (
            <form onSubmit={handleFormSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tu nombre"
                  required
                  style={{ color: "#000" }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="tu@email.com"
                  required
                  style={{ color: "#000" }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  style={{ color: "#000" }}
                ></textarea>
                <ValidationError
                  prefix="Mensaje"
                  field="message"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>

              <button
                type="submit"
                className="btn btn-submit"
                disabled={state.submitting}
              >
                <Send size={18} />
                <span>
                  {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
