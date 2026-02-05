import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

// Importar iconos de lucide-react
import {
  GraduationCap,
  CheckCircle2,
  BookOpen,
  Target,
  Calendar,
  Award,
  Code2,
  GitBranch,
  Database,
  Layers,
  TestTube
} from 'lucide-react';

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationItems: EducationItem[] = [
    {
      year: '2020 - 2025',
      title: 'Técnico agrario con orientación a enología',
      institution: 'Escuela Secundaria Los Corralitos',
      description: 'Formación técnica especializada en agricultura con enfoque en enología (elaboración de vinos).'
    }
  ];

  const learningItems = [
    { text: 'Desarrollo de aplicaciones móviles con React Native', icon: <Code2 size={16} /> },
    { text: 'JavaScript moderno (ES6+)', icon: <Code2 size={16} /> },
    { text: 'Patrones de diseño y arquitectura de software', icon: <Layers size={16} /> },
    { text: 'Gestión de estado con Context API y Redux', icon: <Database size={16} /> },
    { text: 'Integración de APIs REST y Firebase', icon: <Database size={16} /> },
    { text: 'Control de versiones con Git', icon: <GitBranch size={16} /> },
    { text: 'Tercer puesto en concurso de aplicaciones para industria', icon: <Award size={16} /> }
  ];

  const learningGoals = [
    { text: 'Profundizar en TypeScript', icon: <Code2 size={14} /> },
    { text: 'Aprender desarrollo backend con Node.js', icon: <Code2 size={14} /> },
    { text: 'Explorar testing en React Native', icon: <TestTube size={14} /> }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Estudios y Formación</h2>

      <div className="education-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="education-timeline card"
        >
          <div className="education-header">
            <GraduationCap size={24} />
            <h3 className="education-subtitle">Formación Académica</h3>
          </div>

          <div className="timeline">
            {educationItems.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">
                  <Calendar size={14} />
                  <span>{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="education-note">
            <BookOpen size={20} />
            <p>
              Complemento mi formación técnica con aprendizaje autodidacta en desarrollo de software.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="education-learning card"
        >
          <div className="education-header">
            <Target size={24} />
            <h3 className="education-subtitle">Aprendizaje Continuo</h3>
          </div>

          <p className="learning-description">
            Como desarrollador, mantengo un compromiso constante con el aprendizaje
            y la mejora de mis habilidades técnicas.
          </p>

          <div className="learning-list">
            {learningItems.map((item, index) => (
              <motion.div
                key={index}
                className="learning-item"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <div className="learning-icon">
                  {item.icon}
                </div>
                <span className="learning-text">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="education-goals">
            <div className="goals-header">
              <Target size={20} />
              <h4 className="goals-title">Objetivos de aprendizaje 2026</h4>
            </div>
            <ul className="goals-list">
              {learningGoals.map((goal, index) => (
                <li key={index}>
                  <div className="goal-icon">
                    {goal.icon}
                  </div>
                  <span>{goal.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
