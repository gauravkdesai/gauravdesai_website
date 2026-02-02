import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'
import SafeLink from './common/SafeLink'
import './Projects.css'

function Projects() {
  // Extract unique categories from all projects
  const allCategories = ['All', ...new Set(projects.flatMap(project => project.tech))].sort();
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.tech.includes(selectedCategory));

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
          Portfolio of Personal Projects 
          </p>

          {/* Category Filter */}
          <div className="projects-filter">
            {allCategories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={`${project.title}-${index}`} // Use title to maintain identity for animation
                className={`project-card ${project.wip ? 'project-card-wip' : ''}`}
              >
                <div className="project-title-container">
                  <h3 className="project-title">{project.title}</h3>
                  {project.wip && (
                    <span className="wip-badge" title="Work in Progress">WIP</span>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`tech-badge ${selectedCategory === tech ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(tech);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <SafeLink 
                      href={project.github} 
                      className="project-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </SafeLink>
                  )}
                  {project.demo && (
                    <SafeLink 
                      href={project.demo} 
                      className="project-link"
                      aria-label={`View ${project.title} demo`}
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </SafeLink>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects