import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  const [copied, setCopied] = useState(false)
  
  // TODO: Update with your actual social media links
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gauravkdesai/',
    github: 'https://github.com/gauravkdesai',
    email: 'mailto:contact@gaurav-desai.com' // TODO: Update with your email
  }

  // Extract email address from mailto link
  const emailAddress = socialLinks.email.replace('mailto:', '')

  const handleCopyEmail = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = emailAddress
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  // TODO: Update with your short bio
  const shortBio = "Zurich-based Techno Risk Manager. Model Risk Management & AI Risk Specialist @ UBS. Always learning. Coder at heart."

  // TODO: Replace with path to your profile photo
  // Place your profile photo in public/assets/profile-photo.jpg
  const profilePhoto = '/assets/profile-photo.png'

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
                target="_blank"
                rel="noopener noreferrer"
                className="social-link email"
                aria-label="Email"
                onContextMenu={(e) => {
                  // Right-click still opens mailto
                  return true
                }}
              >
                <FaEnvelope />
                <span>Email</span>
                <button
                  className="email-copy-icon"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title={copied ? 'Copied!' : 'Click to copy email'}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                </button>
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

