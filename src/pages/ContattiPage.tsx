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
        <section className="global-page-section">
          <div className="global-page-container">
            <h1>Contatti</h1>
            
            <div className="section-split">
              <div className="section-text">
                <h2>Seguici sui Social</h2>
                <p>
                  Resta sempre aggiornato sulle nostre attività e iniziative attraverso i nostri canali social ufficiali.
                </p>
                
                <div className="social-links-compact">
                  <div className="social-icons-block">
                    <a href="https://www.instagram.com/azioneuniversitariaverona/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <span className="social-icon">📷</span>
                      <span className="social-text">Instagram</span>
                    </a>
                    <a href="https://www.tiktok.com/@azioneuniversitariavr" target="_blank" rel="noopener noreferrer" className="social-link">
                      <span className="social-icon">🎵</span>
                      <span className="social-text">TikTok</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61578882905758" target="_blank" rel="noopener noreferrer" className="social-link">
                      <span className="social-icon">📘</span>
                      <span className="social-text">Facebook</span>
                    </a>
                  </div>
                </div>

                <h2>La Nostra Sede</h2>
                <p>
                  Ci trovi presso la nostra sede in Via Campo Fiore. Vieni a trovarci per conoscere meglio le nostre iniziative e per unirti al nostro movimento studentesco.
                </p>
                
                <address className="address-info">
                  <strong>Azione Universitaria Verona</strong><br />
                  Via Campo Fiore, 17A<br />
                  37129 Verona (VR)
                </address>
              </div>

              <div className="section-figure">
                <div className="map-container">
                  <iframe
                    title="Mappa Sede Azione Universitaria Verona"
                    src="https://www.google.com/maps?q=Via%20Campo%20Fiore%2017A%2C%2037129%20Verona&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="location-map"
                  />
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
