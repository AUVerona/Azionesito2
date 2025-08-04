import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './SocialPage.css'

const SocialPage: React.FC = () => {
  return (
    <div className="social-page">
      <Navbar />
      <main>
        <section className="social-hero">
          <div className="container">
            <h1>I Nostri Social</h1>
            <p>Seguici sui social network per rimanere sempre aggiornato!</p>
          </div>
        </section>
        
        <section className="social-content">
          <div className="container">
            <div className="social-grid">
              <div className="social-card instagram">
                <div className="social-icon">📸</div>
                <h3>Instagram</h3>
                <p>Foto dei nostri eventi, stories quotidiane e aggiornamenti della vita universitaria.</p>
                <div className="social-stats">
                  <span>👥 1.2k followers</span>
                </div>
                <a href="#" className="social-btn">Seguici su Instagram</a>
              </div>
              
              <div className="social-card facebook">
                <div className="social-icon">📘</div>
                <h3>Facebook</h3>
                <p>Annunci ufficiali, eventi importanti e discussioni della community studentesca.</p>
                <div className="social-stats">
                  <span>👥 2.5k followers</span>
                </div>
                <a href="#" className="social-btn">Seguici su Facebook</a>
              </div>
              
              <div className="social-card telegram">
                <div className="social-icon">✈️</div>
                <h3>Telegram</h3>
                <p>Gruppo per comunicazioni rapide, condivisione materiali e supporto immediato.</p>
                <div className="social-stats">
                  <span>👥 800 membri</span>
                </div>
                <a href="#" className="social-btn">Unisciti al Gruppo</a>
              </div>
              
              <div className="social-card whatsapp">
                <div className="social-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>Gruppi per corso di laurea e comunicazioni dirette per supporto personalizzato.</p>
                <div className="social-stats">
                  <span>👥 600+ membri</span>
                </div>
                <a href="#" className="social-btn">Entra nei Gruppi</a>
              </div>
              
              <div className="social-card youtube">
                <div className="social-icon">🎥</div>
                <h3>YouTube</h3>
                <p>Tutorial, registrazioni delle lezioni e contenuti educativi per gli studenti.</p>
                <div className="social-stats">
                  <span>👥 500 iscritti</span>
                </div>
                <a href="#" className="social-btn">Iscriviti al Canale</a>
              </div>
              
              <div className="social-card linkedin">
                <div className="social-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Network professionale, opportunità di stage e connessioni per il futuro lavorativo.</p>
                <div className="social-stats">
                  <span>👥 300 collegamenti</span>
                </div>
                <a href="#" className="social-btn">Collegati su LinkedIn</a>
              </div>
            </div>
            
            <div className="social-feed">
              <h2>Ultimi Post</h2>
              <div className="feed-grid">
                <div className="feed-item">
                  <div className="feed-header">
                    <span className="feed-platform">📸 Instagram</span>
                    <span className="feed-time">2 ore fa</span>
                  </div>
                  <div className="feed-content">
                    <p>🎉 Grande successo per l'evento di benvenuto alle matricole! Grazie a tutti i partecipanti!</p>
                  </div>
                  <div className="feed-stats">
                    <span>❤️ 45 like</span>
                    <span>💬 12 commenti</span>
                  </div>
                </div>
                
                <div className="feed-item">
                  <div className="feed-header">
                    <span className="feed-platform">📘 Facebook</span>
                    <span className="feed-time">1 giorno fa</span>
                  </div>
                  <div className="feed-content">
                    <p>📚 Promemoria: domani alle 15:00 workshop su "Come preparare la tesi di laurea" in Aula Magna</p>
                  </div>
                  <div className="feed-stats">
                    <span>👍 78 like</span>
                    <span>🔄 23 condivisioni</span>
                  </div>
                </div>
                
                <div className="feed-item">
                  <div className="feed-header">
                    <span className="feed-platform">✈️ Telegram</span>
                    <span className="feed-time">3 giorni fa</span>
                  </div>
                  <div className="feed-content">
                    <p>📋 Disponibili nuovi appunti per il corso di Analisi Matematica. Controllate il canale materiali!</p>
                  </div>
                  <div className="feed-stats">
                    <span>👀 156 visualizzazioni</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="social-cta">
              <h2>Non Perdere Nessun Aggiornamento!</h2>
              <p>Seguici su tutti i nostri canali social per rimanere sempre connesso con la community universitaria</p>
              <div className="quick-links">
                <a href="#" className="quick-link">📸 Instagram</a>
                <a href="#" className="quick-link">📘 Facebook</a>
                <a href="#" className="quick-link">✈️ Telegram</a>
                <a href="#" className="quick-link">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SocialPage
