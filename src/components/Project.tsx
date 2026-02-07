import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Project.css';

// Importar iconos de lucide-react
import {
  Smartphone,
  ExternalLink,
  Lock,
  Star,
  GitBranch,
  CheckCircle2,
  Code2,
  Clock,
  AlertCircle
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'mobile' | 'web';
  github?: string;
  live?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  progress?: number;
  // REMOVIMOS "color" de aquí - se generará automáticamente
  releaseDate?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'ConservaSmart',
      description: 'Aplicación de código abierto que utiliza IA para identificar frutas y verduras y sugerir recetas de conservas seguras. Incluye un módulo de diagnóstico para verificar la inocuidad de conservas existentes. Promueve la sostenibilidad, reduce el desperdicio alimentario y es accesible tanto para usuarios domésticos como para la industria alimentaria y proyectos educativos.',
      technologies: ['React Native', 'React Native Paper', 'Mistral AI', 'Firebase', 'TypeScript'],
      category: 'mobile',
      github: 'https://github.com/IM20078/ConservaSmart',
      live: '#',
      featured: true,
      status: 'completed', // ← Este determinará el color (VERDE)
      progress: 85,
      releaseDate: 'Marzo 2024'
    },
    {
      id: 2,
      title: 'Social Network Mockup',
      description: 'Prototipo de red social con diseño moderno y funcionalidades básicas de publicación, comentarios y mensajería. Incluye autenticación de usuarios y panel de administración.',
      technologies: ['React Native', 'React Native Paper', 'Firebase'],
      category: 'mobile',
      github: "https://github.com/IM20078/redSocial",
      live: '#',
      featured: false,
      status: "planned", // ← Este determinará el color (ROJO)
      releaseDate: "Marzo 2026"
    },
    {
      id: 3,
      title: "KioscoSmart",
      description: 'Aplicación para seguimiento de gastos e ingresos con análisis de hábitos financieros, gráficos interactivos y pronósticos de ahorro.',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Chart.js', 'Supabase'],
      category: 'web',
      github: 'https://github.com/ivan20078261-wq/kioscosmart',
      live: '#',
      featured: true,
      status: 'in-progress', // ← Este determinará el color (AMARILLO)
      progress: 60,
      releaseDate: 'Abril 2026'
    },
    {
      id: 4,
      title: 'Delivery Service App',
      description: 'Plataforma de delivery con seguimiento en tiempo real, chat con repartidores, sistema de calificaciones y pagos integrados.',
      technologies: ['React Native', 'Google Maps API', 'Socket.io', 'Node.js'],
      category: 'mobile',
      github: '#',
      live: '#',
      featured: false,
      status: 'planned', // ← Este determinará el color (ROJO)
      releaseDate: 'Marzo 2026'
    },
    {
      id: 5,
      title: "ClimaApp",
      description: "Descubre el tiempo actual y los pronósticos de forma rápida y sencilla. Diseñada pensando en la claridad y la facilidad de uso, ofrece una experiencia fluida que te mantiene informado sin complicaciones.",
      technologies: ["React Native", "Expo", "AccuWheather"],
      category: "mobile",
      github: "https://github.com/ivan20078261-wq/clima-app",
      featured: false,
      status: "completed",

    }
  ];

  // Función para obtener color automáticamente según el estado
  const getColorByStatus = (status: Project['status']): string => {
    switch (status) {
      case 'completed':
        return '#34a853'; // VERDE para completado
      case 'in-progress':
        return "#800080";
      case 'planned':
        return '#ea4335'; // ROJO para planificado
      default:
        return '#4285f4'; // Azul por defecto
    }
  };

  // Función para obtener configuración completa del estado
  const getStatusConfig = (status: Project['status']) => {
    const color = getColorByStatus(status);

    switch (status) {
      case 'completed':
        return {
          icon: <CheckCircle2 size={14} />,
          text: 'Completado',
          color: color,
          bgColor: `${color}15`,
          borderColor: `${color}30`
        };
      case 'in-progress':
        return {
          icon: <Clock size={14} />,
          text: 'En progreso',
          color: color,
          bgColor: `${color}15`,
          borderColor: `${color}30`
        };
      case 'planned':
        return {
          icon: <AlertCircle size={14} />,
          text: 'Planificado',
          color: color,
          bgColor: `${color}15`,
          borderColor: `${color}30`
        };
      default:
        return {
          icon: <AlertCircle size={14} />,
          text: 'Desconocido',
          color: '#5f6368',
          bgColor: 'rgba(95, 99, 104, 0.1)',
          borderColor: 'rgba(95, 99, 104, 0.3)'
        };
    }
  };

  const categories = [
    { id: 'all', label: 'Todos los proyectos' },
    { id: 'mobile', label: 'Aplicaciones Móviles' },
    { id: 'featured', label: 'Destacados' },
    { id: 'completed', label: 'Completados' },
    { id: 'in-progress', label: 'En progreso' },
    { id: 'planned', label: 'Planificados' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'featured'
      ? projects.filter(p => p.featured)
      : activeFilter === 'completed'
        ? projects.filter(p => p.status === 'completed')
        : activeFilter === 'in-progress'
          ? projects.filter(p => p.status === 'in-progress')
          : activeFilter === 'planned'
            ? projects.filter(p => p.status === 'planned')
            : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Aplicaciones móviles que he desarrollado, combinando diseño atractivo
            con funcionalidad robusta y código de calidad.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="filters-container">
            {categories.map((category) => {
              const categoryColor = getColorByStatus(category.id as any);
              const isStatusCategory = ['completed', 'in-progress', 'planned'].includes(category.id);

              return (
                <button
                  key={category.id}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                  style={
                    isStatusCategory && activeFilter === category.id
                      ? {
                        background: `linear-gradient(135deg, ${categoryColor}, ${categoryColor}cc)`,
                        borderColor: categoryColor
                      }
                      : {}
                  }
                >
                  {category.label}
                  {category.id === 'featured' && (
                    <span className="featured-badge">
                      <Star size={14} />
                    </span>
                  )}
                  {category.id === 'completed' && (
                    <span className="status-badge" style={{ color: '#34a853' }}>
                      <CheckCircle2 size={12} />
                    </span>
                  )}
                  {category.id === 'in-progress' && (
                    <span className="status-badge" style={{ color: '#fbbc05' }}>
                      <Clock size={12} />
                    </span>
                  )}
                  {category.id === 'planned' && (
                    <span className="status-badge" style={{ color: '#ea4335' }}>
                      <AlertCircle size={12} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="projects-grid" ref={ref}>
          {filteredProjects.map((project, index) => {
            const projectColor = getColorByStatus(project.status);
            const statusConfig = getStatusConfig(project.status);

            return (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Encabezado con color AUTOMÁTICO */}
                <div
                  className="project-header-color"
                  style={{ background: `linear-gradient(135deg, ${projectColor}, ${projectColor}dd)` }}
                >
                  {project.featured && (
                    <div className="featured-label">
                      <Star size={14} />
                      <span>Destacado</span>
                    </div>
                  )}
                </div>

                {/* Header del proyecto */}
                <div className="project-header">
                  <div className="project-title-container">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span className="project-category">
                        <Smartphone size={14} />
                        {project.category === 'mobile' ? 'Aplicación Móvil' : 'Web App'}
                      </span>

                      <span
                        className="project-status-badge"
                        style={{
                          backgroundColor: statusConfig.bgColor,
                          color: statusConfig.color,
                          borderColor: statusConfig.borderColor
                        }}
                      >
                        {statusConfig.icon}
                        <span>{statusConfig.text}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Barra de progreso para proyectos en progreso */}
                {project.status === 'in-progress' && project.progress && (
                  <div className="progress-container">
                    <div className="progress-info">
                      <span>Progreso: {project.progress}%</span>
                      {project.releaseDate && (
                        <span>Lanzamiento estimado: {project.releaseDate}</span>
                      )}
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ backgroundColor: projectColor }}
                      />
                    </div>
                  </div>
                )}

                {/* Descripción */}
                <div className="project-content">
                  <p className="project-description">{project.description}</p>

                  {/* Tecnologías */}
                  <div className="project-technologies">
                    <h4>Tecnologías utilizadas:</h4>
                    <div className="technologies-list">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="technology-tag"
                          style={{
                            backgroundColor: `${projectColor}15`,
                            color: projectColor,
                            borderColor: `${projectColor}30`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: `${projectColor}10`,
                          borderColor: `${projectColor}30`,
                          color: projectColor
                        }}
                      >
                        <Code2 size={16} />
                        <span>Código</span>
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        className="project-link primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: `linear-gradient(135deg, ${projectColor}, ${projectColor}cc)`,
                          borderColor: projectColor,
                          color: 'white'
                        }}
                      >
                        <ExternalLink size={16} />
                        <span>Ver demo</span>
                      </a>
                    )}
                    {(!project.github || project.github === '#') && (!project.live || project.live === '#') && (
                      <button
                        className="project-link disabled"
                        style={{
                          backgroundColor: `${projectColor}10`,
                          borderColor: `${projectColor}30`,
                          color: projectColor
                        }}
                      >
                        <Lock size={16} />
                        <span>Privado</span>
                      </button>
                    )}

                    {/* Estado del proyecto */}
                    {project.status === 'planned' && project.releaseDate && (
                      <div
                        className="planned-info"
                        style={{
                          backgroundColor: `${projectColor}10`,
                          borderLeftColor: projectColor,
                          color: projectColor
                        }}
                      >
                        <Clock size={14} />
                        <span>Planificado para {project.releaseDate}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="project-footer"
                  style={{
                    backgroundColor: `${projectColor}08`,
                    borderTopColor: `${projectColor}20`
                  }}
                >
                  <div
                    className="project-final-status"
                    style={{ color: projectColor }}
                  >
                    {statusConfig.icon}
                    <span>
                      {project.status === 'completed' && 'Proyecto completado'}
                      {project.status === 'in-progress' && `En desarrollo (${project.progress}%)`}
                      {project.status === 'planned' && 'Próximamente'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Estadísticas con colores automáticos */}
        <motion.div
          className="projects-stats"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-item" style={{ borderColor: `${getColorByStatus('completed')}30` }}>
            <div className="stat-number" style={{ color: getColorByStatus('completed') }}>
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="stat-label">Completados</div>
          </div>
          <div className="stat-item" style={{ borderColor: `${getColorByStatus('in-progress')}30` }}>
            <div className="stat-number" style={{ color: getColorByStatus('in-progress') }}>
              {projects.filter(p => p.status === 'in-progress').length}
            </div>
            <div className="stat-label">En desarrollo</div>
          </div>
          <div className="stat-item" style={{ borderColor: `${getColorByStatus('planned')}30` }}>
            <div className="stat-number" style={{ color: getColorByStatus('planned') }}>
              {projects.filter(p => p.status === 'planned').length}
            </div>
            <div className="stat-label">Planificados</div>
          </div>
          <div className="stat-item" style={{ borderColor: '#4285f430' }}>
            <div className="stat-number" style={{ color: '#4285f4' }}>
              {projects.length}
            </div>
            <div className="stat-label">Total proyectos</div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="cta-content">
            <GitBranch size={32} style={{ color: '#1a73e8' }} />
            <p>
              También tengo proyectos privados y contribuciones a código abierto.
              ¿Interesado en colaborar?
            </p>
          </div>
          <a href="#contact" className="btn btn-outline" style={{ borderColor: '#1a73e8', color: '#fff', alignItems: "center" }}>
            <span>Hablemos de tu proyecto</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
