import React from 'react'
import { Link } from 'react-router-dom'
import { getImagePath } from '../utils/paths'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Sezione */}
        <div className="footer-section logo-section">
          <img 
            src={getImagePath('logo-auvr.png')} 
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
              src="https://www.google.com/maps?q=Via%20Campo%20Fiore%2017A%2C%2037129%20Verona&output=embed"
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
