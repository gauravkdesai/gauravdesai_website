import { FaExternalLinkAlt } from 'react-icons/fa'
import './Hobbies.css'

function Hobbies() {
  // TODO: Update with your hobbies description
  const hobbiesDescription = `When I'm not coding, I enjoy exploring various hobbies that keep me creative and engaged. 
  These activities help me maintain a healthy work-life balance and often inspire new ideas for my projects.`

  // TODO: Update with your hobby projects/links
  const hobbyProjects = [
    {
      title: 'Photography Portfolio',
      description: 'A collection of my travel and nature photography, showcasing different techniques and perspectives.',
      link: 'https://example.com/photography'
    },
    {
      title: 'Cooking Blog',
      description: 'Sharing recipes and cooking tips from my culinary adventures, featuring dishes from various cuisines.',
      link: 'https://example.com/cooking'
    },
    {
      title: 'Open Source Contributions',
      description: 'Contributing to open-source projects that align with my interests in technology and community building.',
      link: 'https://github.com/gauravkdesai'
    }
    // TODO: Add more hobby projects as needed
  ]

  return (
    <section id="hobbies" className="hobbies">
      <div className="hobbies-container">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="hobbies-content">
          <p className="hobbies-description">{hobbiesDescription}</p>
          
          {hobbyProjects.length > 0 && (
            <div className="hobby-projects">
              <h3 className="subsection-title">Related Projects</h3>
              <div className="hobby-grid">
                {hobbyProjects.map((hobby, index) => (
                  <div key={index} className="hobby-card">
                    <h4 className="hobby-title">{hobby.title}</h4>
                    <p className="hobby-description">{hobby.description}</p>
                    {hobby.link && (
                      <a 
                        href={hobby.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hobby-link"
                        aria-label={`View ${hobby.title}`}
                      >
                        <span>View Project</span>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hobbies

