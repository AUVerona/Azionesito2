import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navMenuRef = useRef<HTMLUListElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navMenuRef.current && 
        hamburgerRef.current &&
        !navMenuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/Azionesito2/logo-auvr.png" alt="Logo AUVR" />
          </Link>
        </div>
        <button 
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul ref={navMenuRef} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/chi-siamo" onClick={closeMenu}>Chi Siamo</Link></li>
          <li><Link to="/unisciti" onClick={closeMenu}>Unisciti a Noi</Link></li>
          <li><Link to="/aiuto-matricole" onClick={closeMenu}>Aiuto Matricole</Link></li>
          <li><Link to="/contatti" onClick={closeMenu}>Contatti</Link></li>
          <li><Link to="/social" onClick={closeMenu}>Social</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
