import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [copied, setCopied] = useState(false)
  
  // TODO: Update with your actual contact information
  const contactInfo = {
    email: 'gauravdesai111+frompersonalwebsite@gmail.com', 
    linkedin: 'https://www.linkedin.com/in/gauravkdesai/',
    location: 'Zurich, Switzerland'
  }

  const handleCopyEmail = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = contactInfo.email
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

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="contact-content">
          <div className="contact-cards">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="contact-card"
              aria-label="Send email"
            >
              <div className="contact-icon email">
                <FaEnvelope />
              </div>
              <h3 className="contact-card-title">Email</h3>
              <div className="contact-card-value-wrapper">
                <p className="contact-card-value">{contactInfo.email}</p>
                <button
                  className="copy-email-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title={copied ? 'Copied!' : 'Copy email'}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
            </a>

            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="LinkedIn profile"
            >
              <div className="contact-icon linkedin">
                <FaLinkedin />
              </div>
              <h3 className="contact-card-title">LinkedIn</h3>
              <p className="contact-card-value">Connect with me</p>
            </a>

            <div className="contact-card location">
              <div className="contact-icon location">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-card-title">Location</h3>
              <p className="contact-card-value">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

