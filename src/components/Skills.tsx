import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

// Importar iconos de lucide-react
import {
  Smartphone,
  GitBranch,
  Lightbulb
} from 'lucide-react';

// Importar iconos de react-icons para logos específicos
import { SiJavascript, SiReact, SiCss3, SiHtml5, SiLinux } from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon?: React.JSX.Element;

  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills: Skill[] = [
    {
      name: 'React Native',
      level: 83,
      icon: <Smartphone size={20} />,
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: <SiJavascript size={20} />,
      color: '#F7DF1E'
    },
    {
      name: 'React',
      level: 70,
      icon: <SiReact size={20} />,
      color: '#61DAFB'
    },
    {
      name: 'CSS/Sass',
      level: 75,
      icon: <SiCss3 size={20} />,
      color: '#1572B6'
    },
    {
      name: 'HTML',
      level: 85,
      icon: <SiHtml5 size={20} />,
      color: '#E34F26'
    },
    {
      name: 'Git',
      level: 50,
      icon: <GitBranch size={20} />,
      color: '#F05032'
    },
    {
      name: 'Linux',
      level: 60,
      icon: <SiLinux size={20} />,
      color: '#FCC624'
    },
  ];

  const technologies = ['UseContext', 'React Navigation', 'Redux', 'APIs REST', 'Supabase', 'Expo'];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Habilidades Técnicas</h2>

      <div className="skills-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skills-main card"
        >
          <div className="skills-header">
            <h3 className="skills-subtitle">Lenguajes y Frameworks</h3>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div
                    className="skill-icon"
                    style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="skills-tech card"
        >
          <div className="skills-header">
            <h3 className="skills-subtitle">Tecnologías y Herramientas</h3>
          </div>

          <p className="skills-description">
            Conocimiento profundo del ecosistema React Native y experiencia en:
          </p>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="tech-text">{tech}</span>
              </motion.div>
            ))}
          </div>

          <div className="skills-note">
            <Lightbulb size={20} className="note-icon" />
            <p>Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
