import './About.css'

function About() {
  const expandedBio = `Hi, I’m Gaurav. I work in tech and risk management at UBS in Zurich. I started my career in software development, Java, Python, all kinds of coding. These days, I'm focused on data ethics and AI risk.

Travel is a big part of my life, whether it is family trips, quick escapes, or just poking around new places. And while I appreciate living surrounded by Swiss mountains, you’ll more likely find me exploring a city or catching an event than hiking a summit.

On the professional side, I focus a lot on practical problem-solving, making sure we balance innovation with real-world responsibility. My work keeps evolving - these days it is as much about sorting out risks as it is about code.

This space is just about sharing what I am up to, what I care about, and occasionally what I am learning along the way. If something here sparks a conversation, even better.`

  const skills = [
    { name: 'Python', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'SQL', category: 'database' },
    { name: 'QlikView', category: 'BI/dashboard' },
    { name: 'Scikit-learn', category: 'ML framework' },
    { name: 'Pandas', category: 'data analysis' },
    { name: 'NumPy', category: 'data analysis' },
    { name: 'R', category: 'language' },
    { name: 'Latex', category: 'documentation' },
    { name: 'Agile', category: 'methodology' },
    { name: 'Leadership', category: 'management' },
    { name: 'Model Risk Management', category: 'risk management' },
    { name: 'AML Financial Risk', category: 'risk management' },
    { name: 'Data Science', category: 'domain' },
    { name: 'Cloud (AWS/GCP)', category: 'cloud' },
    { name: 'Git', category: 'tool' }
  ]
  
  const certifications = [
    {
      name: 'Certificate in Quantitative Finance',
      issuer: 'CQF Institute',
      date: '2022',
      link: null
    },
    {
      name: 'Oxford Data Ethics Certification',
      issuer: 'University of Oxford',
      date: '2025',
      link: null
    },
    {
      name: 'Master of Information and Data Science',
      issuer: 'University of California, Berkeley',
      date: '2020',
      link: null
    }
    // Add more if the LinkedIn profile lists other recent certifications
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

