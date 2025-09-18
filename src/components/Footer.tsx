import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Sezione */}
        <div className="footer-section logo-section">
          <img 
            src="/Azionesito2/logo-auvr.png" 
            alt="Azione Universitaria"
            className="footer-logo"
            loading="lazy"
          />
        </div>

        {/* Navigazione */}
        <div className="footer-section navigation">
          <h4>NAVIGAZIONE</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chi-siamo">Chi siamo</Link></li>
            <li><Link to="/attivita">Attività</Link></li>
            <li><Link to="/rappresentanza">Rappresentanza</Link></li>
            <li><Link to="/unisciti">Unisciti a Noi</Link></li>
            <li><Link to="/aiuto-matricole">Aiuto Matricole</Link></li>
            <li><Link to="/contatti">Contatti</Link></li>
            <li><Link to="/statuto">Statuto</Link></li>
          </ul>
        </div>

        {/* Mappa Centrale */}
        <div className="footer-section map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.234567890123!2d10.9915678!3d45.4394321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI2JzIyLjAiTiAxMMKwNTknMzIuNyJF!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit&q=Via+Campo+Fiore+17A,+Verona"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sede Azione Universitaria Verona"
            ></iframe>
          </div>
        </div>


        {/* Legals */}
        <div className="footer-section legals">
          <h4>LEGALS</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/statuto">Statuto</Link></li>
          </ul>
        </div>

        {/* Dove Siamo */}
        <div className="footer-section segreteria">
          <h4>Dove Siamo</h4>
          <div className="contact-info">
            <p> Via Campo Fiore 17A, Verona</p>
            <p>info@azioneuniversitaria.it</p>

          </div>
          <Link to="/contatti" className="contact-btn">Contattaci</Link>
          <Link to="/donazioni" className="contact-btn">Donazioni</Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Azione Universitaria Verona | Credits: GB</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
