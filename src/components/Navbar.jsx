import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <img src="/images/logo.png" alt="PM Club SJSU" />
        </a>
        <div className="navbar__links">
          <a href="#about" className="navbar__link">About Us</a>
          <a href="#contact" className="navbar__link">Contact</a>
          <a href="#join" className="navbar__cta">Join Now</a>
        </div>
      </div>
    </nav>
  )
}
