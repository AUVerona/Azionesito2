import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './UniscitiPage.css'

const UniscitiPage: React.FC = () => {
  return (
    <div className="unisciti-page">
      <Navbar />
      <main>
        <section className="unisciti-hero">
          <div className="container">
            <h1>Unisciti a Noi</h1>
            <p>Diventa parte della nostra community universitaria!</p>
          </div>
        </section>
        
        <section className="unisciti-content">
          <div className="container">
            <h2>Perché Unirti a Noi?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Supporto Accademico</h3>
                <p>Ricevi aiuto per gli esami, materiali di studio e consigli dai tuoi colleghi più esperti.</p>
              </div>
              <div className="benefit-card">
                <h3>Network Professionale</h3>
                <p>Costruisci relazioni che ti accompagneranno durante e dopo l'università.</p>
              </div>
              <div className="benefit-card">
                <h3>Eventi e Attività</h3>
                <p>Partecipa a eventi, workshop e attività ricreative organizzate dalla nostra associazione.</p>
              </div>
            </div>
            
            <h2>Come Iscriversi</h2>
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <p>Compila il modulo di iscrizione online</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Partecipa al nostro evento di benvenuto</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>Inizia a far parte della community!</p>
              </div>
            </div>
            
            <div className="cta-section">
              <button className="cta-button">Iscriviti Ora</button>
              <p>L'iscrizione è gratuita per tutti gli studenti dell'Università di Verona</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default UniscitiPage
