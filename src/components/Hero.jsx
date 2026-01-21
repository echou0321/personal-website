import './Hero.css'

function Hero() {
  const backgroundImage = `${import.meta.env.BASE_URL}UW-background.jpg`;
  
  return (
    <section 
      className="hero fade-in"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="hero-content">
        <h1 className="hero-name">Eric Chou</h1>
        <p className="hero-school">University of Washington • Computer and Information Science</p>
        <p className="hero-tagline">
          Full-stack developer crafting scalable solutions with modern technologies
        </p>
        <div className="hero-links">
          <a 
            href="https://linkedin.com/in/eric-chou-739616183/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            LinkedIn
          </a>
          <a 
            href={`${import.meta.env.BASE_URL}Eric_Chou_Resume_SWE.pdf`}
            target="_blank"
            className="hero-link"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
