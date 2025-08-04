import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sezione Contatti - Sinistra */}
        <div className="footer-section contacts">
          <h3>Contatti</h3>
          
          <div className="social-links">
            <h4>Seguici</h4>
            <div className="social-icons">
              <a href="#" className="social-link">📸 Instagram</a>
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">✈️ Telegram</a>
              <a href="#" className="social-link">💬 WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Sezione Mappa - Centro */}
        <div className="footer-section map">
          <div className="map-container">
            <div className="interactive-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.123456789!2d10.9999!3d45.4064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia%20Campofiore%2C%20Verona!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Università di Verona - Via Campofiore"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Sezione Logo - Destra */}
        <div className="footer-section logo">
          <div className="logo-container">
            <div className="footer-logo">
              {/* Placeholder per il logo - sostituirai con il tuo */}
              <div className="logo-placeholder">
                <span>🎓</span>
                <h2>AUVR</h2>
                <p>Associazione Universitaria<br />di Verona</p>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Link Utili</h4>
              <nav className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/chi-siamo">Chi Siamo</Link>
                <Link to="/unisciti">Unisciti a Noi</Link>
                <Link to="/aiuto-matricole">Aiuto Matricole</Link>
                <Link to="/contatti">Contatti</Link>
                <Link to="/social">Social</Link>
              </nav>
            </div>
            
            <div className="footer-info">
              <h4>Informazioni</h4>
              <p><strong>Fondato:</strong> 2015</p>
              <p><strong>Membri Attivi:</strong> 500+</p>
              <p><strong>Eventi/Anno:</strong> 50+</p>
              <p><strong>Codice Fiscale:</strong> XXXXXXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Associazione Universitaria di Verona (AUVR). Tutti i diritti riservati.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Termini di Utilizzo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
