import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContattiPage.css'
import '../styles/globalPageStyles.css'

const ContattiPage: React.FC = () => {
  return (
    <div className="contatti-page global-page-layout">
      <Navbar />
      <main>
        <section className="contatti-hero global-page-section">
          <div className="container global-page-container">
            <h1>Contatti</h1>
            <p>Seguici sui social o vieni a trovarci in sede</p>
          </div>
        </section>
        
        <section className="contatti-content">
          <div className="container global-page-container">
            <div className="contact-split">
              <div className="contact-text">
                <h2 className="title-highlight">Seguici sui Social</h2>
                <ul className="social-list">
                  <li className="social-item">
                    <span className="social-icon">�</span>
                    <a href="https://instagram.com/auverona" target="_blank" rel="noopener noreferrer">Instagram @auverona</a>
                  </li>
                  <li className="social-item">
                    <span className="social-icon">🎵</span>
                    <a href="https://www.tiktok.com/@auverona" target="_blank" rel="noopener noreferrer">TikTok @auverona</a>
                  </li>
                  <li className="social-item">
                    <span className="social-icon">�</span>
                    <a href="https://www.facebook.com/auverona" target="_blank" rel="noopener noreferrer">Facebook /auverona</a>
                  </li>
                </ul>

                <h2 className="title-highlight" style={{ marginTop: '2rem' }}>Sede</h2>
                <address className="address-block">
                  Università degli Studi di Verona
                  <br />Via dell'Università, 4
                  <br />37129 Verona (VR)
                </address>
              </div>

              <div className="contact-visual">
                <div className="map-section">
                  <h2>Come Raggiungerci</h2>
                  <div className="map-embed">
                    <iframe
                      title="Mappa Università di Verona"
                      src="https://www.google.com/maps?q=Via%20dell%27Universit%C3%A0%2C%204%2C%2037129%20Verona&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContattiPage
