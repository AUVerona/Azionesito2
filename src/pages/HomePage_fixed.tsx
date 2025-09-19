import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ElevatedCards from '../components/ElevatedCards'
import Footer from '../components/Footer'
import fotoDigruppo from '../assets/fotodigruppo.jpeg'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <ElevatedCards />
      
      {/* Sezione Chi Siamo Preview */}
      <section className="about-preview" style={{
        backgroundImage: `url(${fotoDigruppo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-content">
            <div className="about-text">
              <h2>Chi Siamo</h2>
              <p>
                Siamo l'Associazione Universitaria di Verona, una community dinamica 
                che riunisce studenti di tutti i corsi di laurea. La nostra missione è creare 
                un ambiente di supporto, crescita e condivisione per migliorare l'esperienza 
                universitaria di ogni studente.
              </p>
              <p>
                Dal 2024 organizziamo eventi, workshop, sessioni di studio e attività ricreative 
                per favorire l'integrazione e il successo accademico dei nostri membri.
              </p>
              <Link to="/chi-siamo" className="btn-primary">Scopri di Più</Link>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">1600+</span>
                <span className="stat-label">Studenti che hanno creduto in noi</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Eventi all'Anno</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Membri Attivi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="services">
        <div className="container">
          <h2>Le Nostre Battaglie</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>PIÙ ALLOGGI PER GLI STUDENTI</h3>
              <p>Gli affitti non sono mai stati così alti e le città universitarie hanno smesso di essere a misura di studente.</p>
              <ul>
                <li>Risposte concrete sul caro affitti</li>
                <li>Aumento degli alloggi per residenze universitarie</li>
                <li>Tutela degli studenti fuorisede</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">�</div>
              <h3>AGEVOLAZIONI SUI TRASPORTI</h3>
              <p>Vogliamo un sistema di trasporto pubblico efficiente ed accessibile a tutti gli studenti pendolari e fuori sede.</p>
              <ul>
                <li>Tariffe agevolate per studenti</li>
                <li>Convenzioni con trasporti pubblici</li>
                <li>Accessibilità per pendolari e fuorisede</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">�️</div>
              <h3>POTENZIAMENTO INFRASTRUTTURE</h3>
              <p>L'università necessita di infrastrutture all'altezza delle esigenze degli studenti e della ricerca.</p>
              <ul>
                <li>Basta aule sovraffollate e spazi inadeguati</li>
                <li>Piano di investimenti per atenei accessibili</li>
                <li>Infrastrutture innovative e moderne</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Sezione Prossimi Eventi */}
      <section className="upcoming-events">
        <div className="container">
          <h2>Prossimi Eventi</h2>
          <div className="events-grid">
            <div className="event-card featured">
              <div className="event-date">
                <span className="day">1</span>
                <span className="month">OTT</span>
              </div>
              <div className="event-info">
                <h3>Welcome Day Matricole 2025</h3>
                <p>Evento di benvenuto per le nuove matricole con presentazioni, tour del campus e aperitivo di networking.</p>
                <div className="event-details">
                  <span>📍 Polo Zanotto</span>
                  <span>🕒 15:00 - 19:00</span>
                  <span>👥 Gratuito</span>
                </div>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date">
                <span className="day">9-11</span>
                <span className="month">OTT</span>
              </div>
              <div className="event-info">
                <h3>Festival Aurora</h3>
                <p>Festival di inizio anno accademico organizzato da Azione Universitaria.</p>
                <div className="event-details">
                  <span>Santa Marta</span>
                  <span>🕒 18:00 - 23:00</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Sezione CTA Finale */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto a Unirti a Noi?</h2>
            <p>Diventa parte della community universitaria più attiva di Verona. L'iscrizione è gratuita e aperta a tutti gli studenti!</p>
            <div className="cta-buttons">
              <Link to="/unisciti" className="btn-primary large">Iscriviti Ora</Link>
              <Link to="/contatti" className="btn-outline large">Contattaci</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
