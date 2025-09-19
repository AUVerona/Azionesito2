import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  const bgUrl = `${import.meta.env.BASE_URL}AURORA.jpg`
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'flex-start'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.25) 100%)',
        zIndex: 1
      }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-cta">
          <div className="hero-buttons">
            <Link to="/aurora" className="hero-btn secondary" aria-label="Più informazioni su Aurora">
              AURORA
            </Link>
            <Link to="/diventa-volontario" className="hero-btn primary" aria-label="Diventa volontario">
              Diventa Volontario
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

          