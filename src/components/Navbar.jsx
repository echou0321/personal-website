import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        EC
      </span>
      <div className="nav-links">
        {['about', 'projects', 'skills', 'contact'].map((id) => (
          <button key={id} onClick={() => scrollTo(id)} className="nav-link">
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
