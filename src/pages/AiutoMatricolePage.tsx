import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AiutoMatricolePage.css'

const AiutoMatricolePage: React.FC = () => {
  return (
    <div className="aiuto-matricole-page">
      <Navbar />
      <main>
        <section className="aiuto-hero">
          <div className="container">
            <h1>Aiuto Matricole</h1>
            <p>Tutto quello che devi sapere per iniziare al meglio la tua avventura universitaria</p>
          </div>
        </section>
        
        <section className="aiuto-content">
          <div className="container">
            <div className="help-sections">
              <div className="help-card">
                <h3>📚 Guide di Studio</h3>
                <ul>
                  <li>Come organizzare lo studio</li>
                  <li>Tecniche di memorizzazione</li>
                  <li>Preparazione agli esami</li>
                  <li>Gestione del tempo</li>
                </ul>
              </div>
              
              <div className="help-card">
                <h3>🏫 Orientamento in Università</h3>
                <ul>
                  <li>Mappa del campus</li>
                  <li>Aule e laboratori</li>
                  <li>Biblioteca e servizi</li>
                  <li>Mensa e bar universitari</li>
                </ul>
              </div>
              
              <div className="help-card">
                <h3>📋 Procedure Burocratiche</h3>
                <ul>
                  <li>Iscrizione agli esami</li>
                  <li>Piano di studi</li>
                  <li>Segreteria studenti</li>
                  <li>Documenti necessari</li>
                </ul>
              </div>
              
              <div className="help-card">
                <h3>👥 Vita Universitaria</h3>
                <ul>
                  <li>Come fare nuove amicizie</li>
                  <li>Gruppi di studio</li>
                  <li>Associazioni studentesche</li>
                  <li>Eventi e attività</li>
                </ul>
              </div>
            </div>
            
            <div className="faq-section">
              <h2>Domande Frequenti</h2>
              <div className="faq-item">
                <h4>Come mi iscrivo agli esami?</h4>
                <p>Puoi iscriverti agli esami tramite il portale studenti online. L'iscrizione apre solitamente 15 giorni prima della data dell'esame.</p>
              </div>
              <div className="faq-item">
                <h4>Dove trovo i materiali di studio?</h4>
                <p>I materiali sono disponibili sulla piattaforma e-learning del corso. Inoltre, la biblioteca universitaria offre testi e risorse aggiuntive.</p>
              </div>
              <div className="faq-item">
                <h4>Come contatto i professori?</h4>
                <p>Ogni professore ha un orario di ricevimento pubblicato sul sito del dipartimento. Puoi anche contattarli via email istituzionale.</p>
              </div>
            </div>
            
            <div className="contact-help">
              <h2>Hai ancora dubbi?</h2>
              <p>Il nostro team di tutor è sempre disponibile per aiutarti!</p>
              <button className="help-button">Contatta un Tutor</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AiutoMatricolePage
