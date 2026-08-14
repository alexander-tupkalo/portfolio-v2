import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        
        {}
        <div className="contact-main">
          <span className="contact-label">CONTACT</span>
          <h2 className="contact-heading">
            Let's build something useful. <span className="contact-arrow">→</span>
          </h2>
          <p className="contact-description">
            Available for frontend opportunities, interesting products and thoughtful digital experiences.
          </p>
        </div>

        {}
        <div className="contact-separator"></div>

        {}
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-item-label">EMAIL</span>
            <a href="mailto:alexander.tupkalo@gmail.com" className="contact-link">
              alexander.tupkalo@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">GITHUB</span>
            
            <a href="https://github.com/alexander-tupkalo" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/alexandertupkalo
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">LINKEDIN</span>
            
            <a href="https://linkedin.com/in/alexandertupkalo" target="_blank" rel="noopener noreferrer" className="contact-link">
              linkedin.com/in/alexandertupkalo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;