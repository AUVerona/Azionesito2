import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ElevatedCards from '../components/ElevatedCards'
import Footer from '../components/Footer'
import AnimatedStats from '../components/AnimatedStats'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <ElevatedCards />
      
      {/* Sezione Chi Siamo Preview */}
      <section className="about-preview" style={{
        backgroundImage: 'url(/fotodigruppo.jpeg)',
        backgroundAttachment: 'fixed',
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
          zIndex: 1
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
            <AnimatedStats />
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="services">
        <div className="container">
          <h2>I Nostri Servizi</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Supporto Accademico</h3>
              <p>Tutor personalizzati, gruppi di studio e materiali didattici per ogni corso di laurea.</p>
              <ul>
                <li>Sessioni di ripasso pre-esame</li>
                <li>Condivisione appunti e materiali</li>
                <li>Mentoring da studenti senior</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Networking</h3>
              <p>Costruisci relazioni durature con colleghi, alumni e professionisti del settore.</p>
              <ul>
                <li>Eventi di networking</li>
                <li>Incontri con alumni</li>
                <li>Collaborazioni inter-corso</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Orientamento Carriera</h3>
              <p>Workshop, seminari e consulenze per prepararti al mondo del lavoro.</p>
              <ul>
                <li>CV e colloqui di lavoro</li>
                <li>Stage e opportunità</li>
                <li>Career coaching</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Eventi e Attività</h3>
              <p>Un calendario ricco di eventi sociali, culturali e ricreativi per tutti i gusti.</p>
              <ul>
                <li>Feste e aperitivi</li>
                <li>Gite ed escursioni</li>
                <li>Tornei sportivi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Testimonianze */}
      <section className="testimonials">
        <div className="container">
          <h2>Cosa Dicono i Nostri Membri</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Grazie all'associazione ho trovato un gruppo di studio fantastico e sono riuscita a superare gli esami più difficili. Il supporto dei tutor è stato fondamentale!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🎓</div>
                <div className="author-info">
                  <h4>Sarah M.</h4>
                  <span>Economia e Management</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Le attività di networking mi hanno permesso di incontrare professionisti del mio settore e trovare il tirocinio perfetto per il mio percorso."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💻</div>
                <div className="author-info">
                  <h4>Marco R.</h4>
                  <span>Informatica</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Non solo supporto accademico, ma anche tante amicizie e momenti divertenti. L'università non è mai stata così coinvolgente!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🔬</div>
                <div className="author-info">
                  <h4>Elena G.</h4>
                  <span>Biotecnologie</span>
                </div>
              </div>
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
                <span className="day">15</span>
                <span className="month">AGO</span>
              </div>
              <div className="event-info">
                <h3>Welcome Day Matricole 2025</h3>
                <p>Evento di benvenuto per le nuove matricole con presentazioni, tour del campus e aperitivo di networking.</p>
                <div className="event-details">
                  <span>📍 Aula Magna</span>
                  <span>🕒 15:00 - 19:00</span>
                  <span>👥 Gratuito</span>
                </div>
              </div>
              <button className="event-btn">Partecipa</button>
            </div>
            
            <div className="event-card">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">AGO</span>
              </div>
              <div className="event-info">
                <h3>Workshop: "Come Preparare la Tesi"</h3>
                <p>Seminario pratico su metodologie di ricerca, struttura della tesi e presentazione.</p>
                <div className="event-details">
                  <span>📍 Sala Conferenze</span>
                  <span>🕒 14:00 - 17:00</span>
                </div>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date">
                <span className="day">29</span>
                <span className="month">AGO</span>
              </div>
              <div className="event-info">
                <h3>Aperitivo di Fine Estate</h3>
                <p>Momento di socializzazione per concludere l'estate e prepararsi al nuovo anno accademico.</p>
                <div className="event-details">
                  <span>📍 Terrazza UniBar</span>
                  <span>🕒 18:30 - 21:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="events-cta">
            <p>Vuoi rimanere aggiornato su tutti i nostri eventi?</p>
            <Link to="/social" className="btn-secondary">Seguici sui Social</Link>
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
            <div className="cta-benefits">
              <span>✓ Iscrizione gratuita</span>
              <span>✓ Accesso a tutti gli eventi</span>
              <span>✓ Supporto accademico</span>
              <span>✓ Network professionale</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
