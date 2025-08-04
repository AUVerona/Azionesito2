import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContattiPage.css'

const ContattiPage: React.FC = () => {
  return (
    <div className="contatti-page">
      <Navbar />
      <main>
        <section className="contatti-hero">
          <div className="container">
            <h1>Contatti</h1>
            <p>Mettiti in contatto con noi per qualsiasi informazione</p>
          </div>
        </section>
        
        <section className="contatti-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Informazioni di Contatto</h2>
                
                <div className="contact-item">
                  <h3>📧 Email</h3>
                  <p>info@auverona.it</p>
                  <p>presidente@auverona.it</p>
                </div>
                
                <div className="contact-item">
                  <h3>📱 WhatsApp</h3>
                  <p>+39 XXX XXX XXXX</p>
                  <small>Disponibile dal lunedì al venerdì, 9:00-18:00</small>
                </div>
                
                <div className="contact-item">
                  <h3>📍 Sede</h3>
                  <p>Università degli Studi di Verona</p>
                  <p>Via dell'Università, 4</p>
                  <p>37129 Verona (VR)</p>
                </div>
                
                <div className="contact-item">
                  <h3>🕒 Orari di Ricevimento</h3>
                  <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p>Sabato: 9:00 - 13:00</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Inviaci un Messaggio</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Nome *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Oggetto</label>
                    <select id="subject" name="subject">
                      <option value="">Seleziona un argomento</option>
                      <option value="info">Informazioni generali</option>
                      <option value="iscrizione">Iscrizione</option>
                      <option value="eventi">Eventi</option>
                      <option value="collaborazione">Collaborazione</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Messaggio *</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Scrivi qui il tuo messaggio..."></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">Invia Messaggio</button>
                </form>
              </div>
            </div>
            
            <div className="map-section">
              <h2>Come Raggiungerci</h2>
              <div className="map-placeholder">
                <p>🗺️ Mappa dell'Università di Verona</p>
                <p>Qui sarà inserita la mappa interattiva</p>
              </div>
              
              <div className="transport-info">
                <h3>Mezzi di Trasporto</h3>
                <div className="transport-grid">
                  <div className="transport-item">
                    <h4>🚌 Autobus</h4>
                    <p>Linee 11, 12, 13 - Fermata "Università"</p>
                  </div>
                  <div className="transport-item">
                    <h4>🚗 Auto</h4>
                    <p>Parcheggio disponibile in Via dell'Università</p>
                  </div>
                  <div className="transport-item">
                    <h4>🚲 Bicicletta</h4>
                    <p>Rastrelliere per bici disponibili nel campus</p>
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
