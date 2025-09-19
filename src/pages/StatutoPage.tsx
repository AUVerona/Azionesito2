import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getImagePath } from '../utils/paths'
import './StatutoPage.css'
import '../styles/globalPageStyles.css'

const StatutoPage: React.FC = () => {
  return (
    <div className="statuto-page global-page-layout">
      <Navbar />
      <main>
        {/* Sezione Hero semplificata */}
        <section className="statuto-hero global-page-section">
          <div className="container global-page-container">
            <h1>Statuto e Trasparenza</h1>
          </div>
        </section>

        {/* Contenuto principale seguendo il pattern di ChiSiamoPage */}
        <section className="statuto-content-section">
          <div className="container global-page-container">
            <h2>Il nostro Statuto</h2>
            <div className="content-section">
              <p>
                Il nostro statuto definisce la <strong>missione, gli obiettivi e la struttura organizzativa</strong> 
                dell'Associazione Universitaria di Verona. È il documento fondamentale che regola tutte le nostre attività 
                e stabilisce i principi che guidano il nostro operato quotidiano.
              </p>
              <p>
                Questo documento rappresenta il nostro impegno verso la <em>trasparenza e la democrazia</em>, 
                elementi essenziali per una rappresentanza studentesca autentica e responsabile. 
                Ogni nostra azione è guidata dai valori e dalle procedure stabilite in questo statuto.
              </p>
              <p>
                La governance democratica, la partecipazione attiva degli studenti e il rispetto dei diritti 
                di tutti i membri sono i <strong>pilastri fondamentali</strong> su cui si basa la nostra organizzazione.
              </p>
            </div>

            <h2>Visualizza il documento completo</h2>
            <div className="pdf-section">
              <div className="pdf-container">
                <iframe 
                  src={`${getImagePath('statuto-auvr.pdf')}#toolbar=0&navpanes=0&scrollbar=1`} 
                  title="Statuto AUVR"
                  className="pdf-viewer"
                >
                  Il tuo browser non supporta la visualizzazione PDF.
                </iframe>
              </div>
            </div>

            <h2>Trasparenza e Responsabilità</h2>
            <div className="content-section">
              <p>
                La <strong>trasparenza</strong> è uno dei nostri valori fondamentali. Crediamo che ogni studente 
                abbia il diritto di conoscere come opera la propria rappresentanza, quali decisioni vengono prese 
                e come vengono utilizzate le risorse a disposizione.
              </p>
              <p>
                Il nostro impegno verso la <em>responsabilità democratica</em> si manifesta attraverso la pubblicazione 
                di tutti i documenti ufficiali, la rendicontazione delle attività svolte e la disponibilità 
                al confronto con tutti gli studenti dell'università.
              </p>
            </div>

            <div className="call-to-action">
              <p>
                Per qualsiasi domanda sul nostro statuto o per richiedere chiarimenti sui nostri processi 
                decisionali, <strong>contattaci</strong>. Siamo sempre disponibili al dialogo e al confronto costruttivo.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default StatutoPage
