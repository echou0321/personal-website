
function Contact() {
  return (
    <section id="contact" className="contact fade-in">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content">
        <p className="contact-text">
          Feel free to reach out if you'd like to connect or collaborate!
        </p>
        <div className="contact-links">
          <a href="mailto:choueri20@gmail.com" className="contact-link">
            Email
          </a>
          <a 
            href="https://linkedin.com/in/eric-chou-739616183/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
