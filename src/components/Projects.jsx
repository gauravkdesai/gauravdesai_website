import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

function Projects() {
  // TODO: Update with your actual projects
  // Structure: title, description, tech (array), github (url), demo (url, optional)
  const projects = [
    /* {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for scalability and performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/gauravkdesai/ecommerce-platform',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for productivity and seamless user experience.',
      tech: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      github: 'https://github.com/gauravkdesai/task-manager',
      demo: null
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts. Features interactive maps, location-based search, and beautiful data visualizations.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      github: 'https://github.com/gauravkdesai/weather-dashboard',
      demo: 'https://weather-demo.example.com'
    },
    {
      title: 'Machine Learning Model API',
      description: 'RESTful API for serving machine learning models with automatic scaling, request queuing, and comprehensive logging. Optimized for production deployment.',
      tech: ['Python', 'Flask', 'TensorFlow', 'Docker', 'AWS'],
      github: 'https://github.com/gauravkdesai/ml-api',
      demo: null
    } */
    // TODO: Add more projects as needed
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of my work and hobby projects. {/* TODO: Customize this subtitle */}
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} demo`}
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

