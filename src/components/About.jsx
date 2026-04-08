
function About() {
  return (
    <section id="about" className="about fade-in">
      <h2 className="section-title">About</h2>
      <div className="about-container">
        <div className="about-image">
          <img 
            src={`${import.meta.env.BASE_URL}headshot.jpg`} 
            alt="Eric Chou" 
            className="headshot"
          />
        </div>
        <div className="about-content">
          <p>
            I'm a Computer and Information Science student at the University of Washington, 
            specializing in software development. I'm passionate about building full-stack 
            applications, optimizing system performance, and creating user-centered solutions. 
            Currently expected to graduate in December 2026.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            I've worked on projects ranging from housing platforms to financial transaction 
            systems, always focusing on scalability, performance, and clean architecture. 
            When I'm not coding, I enjoy tutoring peers and contributing to collaborative projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
