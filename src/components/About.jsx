import './About.css'
import { aboutData } from '../data/about'
import SafeLink from './common/SafeLink'

function About() {
  const { bio, skills, certifications } = aboutData;

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-bio">
            <p>{bio}</p>
          </div>

          <div className="about-skills">
            <h3 className="subsection-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag" data-category={skill.category}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="about-certifications">
            <h3 className="subsection-title">Certifications</h3>
            {certifications.length > 0 ? (
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <li key={index} className="certification-item">
                    {cert.link ? (
                      <SafeLink href={cert.link}>
                        <strong>{cert.name}</strong>
                      </SafeLink>
                    ) : (
                      <strong>{cert.name}</strong>
                    )}
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-certifications">TODO: Add your certifications here</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

