import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  // TODO: Update with your actual social media links
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gauravkdesai/',
    github: 'https://github.com/gauravkdesai',
    email: 'mailto:your.email@example.com' // TODO: Update with your email
  }

  // TODO: Update with your short bio
  const shortBio = "Passionate software engineer with expertise in building scalable applications and solving complex problems. Always learning, always building."

  // TODO: Replace with path to your profile photo
  // Place your profile photo in public/assets/profile-photo.jpg
  const profilePhoto = '/assets/profile-photo.jpg'

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-greeting">Hello, I'm</h2>
            <h1 className="hero-name">Gaurav Desai</h1>
            <p className="hero-bio">{shortBio}</p>
            
            <div className="hero-social">
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a 
                href={socialLinks.email}
                className="social-link email"
                aria-label="Email"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src={profilePhoto} 
              alt="Gaurav Desai" 
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Photo'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

