import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/AURORA.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>
      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-image">
          <img src="https://azioneuniversitaria.it/wp-content/uploads/2025/07/hashtag.png" alt="Hashtag" />
        </div>
        <div className="hero-text">
          <h1>
            VIVE<br />
            UT VIVAS<br />
            VIVI
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero

          