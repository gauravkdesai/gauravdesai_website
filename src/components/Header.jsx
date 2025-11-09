import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // TODO: Update tagline with your personal tagline
  const tagline = "Software Engineer & Developer"

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'hobbies', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="header-name">Gaurav Desai</h1>
          <p className="header-tagline">{tagline}</p>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href="#hobbies" 
            className={activeSection === 'hobbies' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'hobbies')}
          >
            Hobbies
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

