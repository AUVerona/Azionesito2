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

        {/* Sezione Mappa - Centro */}
        <div className="footer-section map">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.123456789!2d10.9999!3d45.4064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia%20Campo%20Fiore%2017A%2C%20Verona!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Via Campo Fiore 17A, Verona"
            ></iframe>
          </div>
        </div>

        {/* Sezione Immagine - Destra */}
        <div className="footer-section image">
          <div className="image-container">
            {/* Placeholder per l'immagine che aggiungerai */}
            <div className="image-placeholder">
              <span>Inserisci qui la tua immagine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
