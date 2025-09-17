import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/Azionesito2/AURORA.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>
      <div className="hero-cta" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div className="hero-buttons" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/info" className="hero-btn secondary" aria-label="Più informazioni">
            INFO
          </Link>
          <Link to="/diventa-volontario" className="hero-btn primary" aria-label="Diventa volontario">
            Diventa Volontario
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

          