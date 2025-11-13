import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  // TODO: Update with your actual domain names
  const domainNames = [
    'gaurav-desai.com',
    //'gauravkdesai.dev'
  ]

  // TODO: Update with your actual social links
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gauravkdesai/',
    github: 'https://github.com/gauravkdesai',
    email: 'mailto:gauravdesai111-frompersonalwebsite@gmail.com' 
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <nav className="footer-nav">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              <a href="#hobbies" onClick={(e) => handleNavClick(e, 'hobbies')}>Hobbies</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={socialLinks.email}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Domains</h4>
            <div className="footer-domains">
              {domainNames.map((domain, index) => (
                <span key={index} className="domain-name">{domain}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Gaurav Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

