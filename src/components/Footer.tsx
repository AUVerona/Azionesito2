import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sezione Contatti - Sinistra */}
        <div className="footer-section contacts">
          <h3>Contatti:</h3>
          <div className="contact-info">
            <p>📧 info@azioneuniversitariaverona.it</p>
            <p>📍 Via Campo Fiore 17A, Verona</p>
            <p>📱 azioneuniversitariaverona</p>
            <p>🎵 azioneuinivr</p>
            <p>📘 Azione Universitaria</p>
          </div>
        </div>

        {/* Sezione Menu Pagine - Centro */}
        <div className="footer-section pages">
          <h3>Pagine del Sito</h3>
          <div className="pages-menu">
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/chi-siamo">Chi Siamo</a></li>
              <li><a href="#/unisciti">Unisciti a Noi</a></li>
              <li><a href="#/social">Social</a></li>
              <li><a href="#/contatti">Contatti</a></li>
              <li><a href="#/aiuto-matricole">Aiuto Matricole</a></li>
            </ul>
          </div>
        </div>

        {/* Sezione Immagine - Destra */}
        <div className="footer-section image">
          <div className="image-container">
            <img 
              src="https://www.matricoleverona.org/logo-auvr-verona.png" 
              alt="Logo Azione Universitaria Verona"
              className="footer-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
