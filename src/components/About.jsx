import './About.css'
import { motion } from 'framer-motion'
import { aboutData } from '../data/about'
import SafeLink from './common/SafeLink'

function About() {
  const { bio, skills, certifications } = aboutData;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <motion.div 
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-bio">
            <p>{bio}</p>
          </div>

          <div className="about-skills">
            <h3 className="subsection-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-tag" 
                  data-category={skill.category}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="about-certifications">
            <h3 className="subsection-title">Certifications</h3>
            {certifications.length > 0 ? (
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="certification-item"
                    variants={itemVariants}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    {cert.link ? (
                      <SafeLink href={cert.link}>
                        <strong>{cert.name}</strong>
                      </SafeLink>
                    ) : (
                      <strong>{cert.name}</strong>
                    )}
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="no-certifications">TODO: Add your certifications here</p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

