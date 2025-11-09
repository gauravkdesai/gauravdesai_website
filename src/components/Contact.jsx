import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  // TODO: Update with your actual contact information
  const contactInfo = {
    email: 'gauravdesai111+frompersonalwebsite@gmail.com', 
    linkedin: 'https://www.linkedin.com/in/gauravkdesai/',
    location: 'Zurich, Switzerland'
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
              <p className="contact-card-value">{contactInfo.email}</p>
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

