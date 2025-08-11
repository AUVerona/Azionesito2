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
          <h2>I nostri Obiettivi</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⏰</div>
              <h3>Ottimizare gli orari</h3>
              <p>Pause infinite e orari impossibili? Cambiamo le cose insieme!
               Con Azione Universitaria proponiamo:</p>
              <ul>
                <li>Lezioni senza pause eccessive.</li>
                <li>Fine delle lezioni entro orari ragionevoli.</li>
                <li>Pianificazione più intelligente per evitare inutili perdite di tempo.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
              <h3>Organizziamo il futuro del CLA pensando a TE!</h3>
              <p>Con Azione Universitaria vogliamo:</p>
              <ul>
                <li>Sessioni d'esame più ampie e flessibili.</li>
                <li>Aumento valore della certificazione</li>
                <li>Collaborazioni inter-corso</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Sessioni d'esame più organizzate, meno stress!</h3>
              <p>Basta esami sovrapposti o sessioni ingestibili! Con Azione Universitaria proponiamo:</p>
              <ul>
                <li>Preappelli obbligatori per suddividere il carico.</li>
                <li>Sessioni più ampie e flessibili.</li>
                <li>Zero sovrapposizioni tra date d'esame</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Organizziamo i seminari universitari pensando a TE!</h3>
              <p>Con Azione Universitaria vogliamo:</p>
              <ul>
                <li>Programmazione senza sovrapposizioni con le lezioni.</li>
                <li>Accessibilità per studenti lavoratori, pendolari e fuoricorso.</li>
                <li>Temi innovativi e interdisciplinari.</li>
                <li>Comunicazione chiara e tempestiva su tutte le opportunità.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Rappresentanza studentesca efficace</h3>
              <p>La tua voce conta! Con Azione Universitaria assicuriamo:</p>
              <ul>
                <li>Rappresentanti attivi e presenti in tutti gli organi.</li>
                <li>Comunicazione trasparente delle decisioni prese.</li>
                <li>Raccolta sistematica di feedback e proposte degli studenti.</li>
                <li>Dialogo costruttivo con docenti e amministrazione.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Innovazione e digitalizzazione</h3>
              <p>Verso un'università più moderna e tecnologica:</p>
              <ul>
                <li>Piattaforme digitali più intuitive e funzionali.</li>
                <li>App universitaria per gestire tutto dal tuo smartphone.</li>
                <li>Wifi potenziato in tutti gli edifici universitari.</li>
                <li>Strumenti digitali per migliorare l'apprendimento.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Miglioramento spazi universitari</h3>
              <p>Spazi di studio più confortevoli e funzionali:</p>
              <ul>
                <li>Aule studio aperte 24/7 durante i periodi d'esame.</li>
                <li>Spazi relax e socializzazione rinnovati.</li>
                <li>Postazioni studio individuali e di gruppo.</li>
                <li>Climatizzazione e illuminazione ottimali.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Orientamento e career service</h3>
              <p>Supporto per il tuo futuro professionale:</p>
              <ul>
                <li>Career day con aziende del territorio.</li>
                <li>Workshop su CV e colloqui di lavoro.</li>
                <li>Orientamento per magistrali e specializzazioni.</li>
                <li>Mentorship con alumni e professionisti.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Sostenibilità ambientale</h3>
              <p>Un'università più verde e responsabile:</p>
              <ul>
                <li>Raccolta differenziata potenziata in tutte le sedi.</li>
                <li>Distributori d'acqua per ridurre la plastica.</li>
                <li>Mobilità sostenibile con bike sharing universitario.</li>
                <li>Eventi di sensibilizzazione ambientale.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤗</div>
              <h3>Inclusività e benessere</h3>
              <p>Un'università accogliente per tutti:</p>
              <ul>
                <li>Servizi di supporto psicologico gratuiti.</li>
                <li>Abbattimento barriere architettoniche.</li>
                <li>Politiche anti-discriminazione attive.</li>
                <li>Gruppi di supporto per studenti internazionali.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🍕</div>
              <h3>Servizi alimentari migliorati</h3>
              <p>Mangiare meglio in università:</p>
              <ul>
                <li>Mense con menù più vari e di qualità.</li>
                <li>Prezzi accessibili per tutti gli studenti.</li>
                <li>Opzioni vegetariane e vegane sempre disponibili.</li>
                <li>Distributori automatici con cibi sani.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏆</div>
              <h3>Riconoscimenti e premi</h3>
              <p>Valorizzare l'eccellenza studentesca:</p>
              <ul>
                <li>Borse di studio al merito ampliate.</li>
                <li>Riconoscimenti per progetti innovativi.</li>
                <li>Premi per tesi di laurea eccellenti.</li>
                <li>Opportunità di pubblicazione e ricerca.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Responsabili */}
      <section className="team-leaders">
        <div className="container">
          <h2>I nostri Responsabili</h2>
          <div className="leaders-split">
            <div className="leader-left">
              <div className="leader-avatar">
                <div className="avatar-icon">👨‍💼</div>
              </div>
              <div className="leader-info">
                <h3>Marco Rossi</h3>
                <h4>Presidente</h4>
                <p>Studente di Giurisprudenza al quarto anno, Marco coordina le attività dell'associazione e rappresenta gli studenti negli organi universitari. Appassionato di diritto costituzionale e attivismo studentesco, si dedica al miglioramento dell'esperienza universitaria per tutti gli studenti.</p>
              </div>
            </div>
            
            <div className="leader-right">
              <div className="leader-avatar">
                <div className="avatar-icon">👩‍💻</div>
              </div>
              <div className="leader-info">
                <h3>Sofia Bianchi</h3>
                <h4>Vice Presidente</h4>
                <p>Laureanda in Economia e Management, Sofia si occupa della gestione organizzativa e dei rapporti con le aziende partner. Esperta in project management e networking professionale, coordina eventi e iniziative per lo sviluppo della carriera studentesca.</p>
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
