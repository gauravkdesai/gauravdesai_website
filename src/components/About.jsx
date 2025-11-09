import './About.css'

function About() {
  // TODO: Update with your expanded bio
  const expandedBio = `I'm a passionate software engineer with a strong foundation in computer science and a love for building innovative solutions. 
  With experience in full-stack development, I enjoy working on challenging problems and creating applications that make a difference.
  
  My journey in technology has been driven by curiosity and a commitment to continuous learning. I'm always exploring new technologies 
  and methodologies to stay at the forefront of software development.`

  // TODO: Update with your actual skills
  const skills = [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'React', category: 'framework' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Python', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'SQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Docker', category: 'devops' },
    { name: 'Git', category: 'tool' },
    { name: 'Agile', category: 'methodology' }
  ]

  // TODO: Update with your actual certifications
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      // TODO: Add link if available
      link: null
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      link: null
    }
    // TODO: Add more certifications as needed
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-bio">
            <p>{expandedBio}</p>
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
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <strong>{cert.name}</strong>
                      </a>
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

