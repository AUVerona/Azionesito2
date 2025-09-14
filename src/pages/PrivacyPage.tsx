import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PrivacyPage.css'

const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      <Navbar />
      <main>
        <div className="container">
          <h1>Informativa Privacy</h1>
          
          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati è <strong>Azione Universitaria Verona (AUVR)</strong>, 
                con sede presso l'Università di Verona, contattabile all'indirizzo email: 
                <a href="mailto:verona@azioneuniversitaria.it">verona@azioneuniversitaria.it</a>
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Tipologia di Dati Raccolti</h2>
              <p>Attraverso il modulo di iscrizione raccogliamo i seguenti dati personali:</p>
              <ul>
                <li>Nome e Cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (facoltativo)</li>
                <li>Corso di Studi</li>
                <li>Eventuali messaggi o comunicazioni</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>3. Finalità del Trattamento</h2>
              <p>I dati personali raccolti vengono utilizzati per le seguenti finalità:</p>
              <ul>
                <li>Gestione delle iscrizioni all'associazione studentesca</li>
                <li>Comunicazioni relative alle attività e agli eventi dell'associazione</li>
                <li>Invio di newsletter e aggiornamenti (previo consenso)</li>
                <li>Adempimento di obblighi di legge</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Base Giuridica del Trattamento</h2>
              <p>
                Il trattamento dei dati è basato sul consenso dell'interessato (art. 6, comma 1, lett. a) del GDPR) 
                e sull'interesse legittimo del titolare per la gestione delle attività associative 
                (art. 6, comma 1, lett. f) del GDPR).
              </p>
            </section>

            <section className="privacy-section">
              <h2>5. Modalità di Trattamento</h2>
              <p>
                Il trattamento dei dati personali avviene mediante strumenti informatici e/o telematici, 
                con modalità organizzative e con logiche strettamente correlate alle finalità indicate. 
                Oltre al Titolare, potrebbero avere accesso ai dati anche soggetti incaricati della manutenzione.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Conservazione dei Dati</h2>
              <p>
                I dati personali vengono conservati per il tempo necessario al conseguimento delle finalità 
                per le quali sono stati raccolti e, comunque, per un periodo non superiore a quello previsto 
                dalla normativa vigente.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Diritti dell'Interessato</h2>
              <p>L'interessato ha il diritto di:</p>
              <ul>
                <li>Accedere ai propri dati personali (art. 15 GDPR)</li>
                <li>Richiedere la rettifica dei dati inesatti (art. 16 GDPR)</li>
                <li>Richiedere la cancellazione dei dati (art. 17 GDPR)</li>
                <li>Richiedere la limitazione del trattamento (art. 18 GDPR)</li>
                <li>Richiedere la portabilità dei dati (art. 20 GDPR)</li>
                <li>Opporsi al trattamento (art. 21 GDPR)</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
              <p>
                Per esercitare tali diritti, è possibile contattare il Titolare all'indirizzo: 
                <a href="mailto:verona@azioneuniversitaria.it">verona@azioneuniversitaria.it</a>
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Comunicazione a Terzi</h2>
              <p>
                I dati personali non vengono diffusi a terzi, salvo nei casi previsti dalla legge o 
                previa specifica autorizzazione dell'interessato.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Trasferimento dei Dati</h2>
              <p>
                I dati personali vengono trattati presso le sedi operative del Titolare e non vengono 
                trasferiti in paesi terzi al di fuori dell'Unione Europea.
              </p>
            </section>

            <section className="privacy-section">
              <h2>10. Sicurezza dei Dati</h2>
              <p>
                Il Titolare adotta idonee misure di sicurezza volte a impedire l'accesso, la divulgazione, 
                la modifica o la distruzione non autorizzate dei dati personali.
              </p>
            </section>

            <section className="privacy-section">
              <h2>11. Aggiornamenti</h2>
              <p>
                La presente informativa può essere aggiornata periodicamente. 
                Data ultimo aggiornamento: <strong>14 settembre 2025</strong>
              </p>
            </section>

            <section className="privacy-section">
              <h2>12. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa alla presente informativa o al trattamento dei dati personali, 
                è possibile contattare:
              </p>
              <div className="contact-box">
                <p><strong>Azione Universitaria Verona (AUVR)</strong></p>
                <p>Email: <a href="mailto:verona@azioneuniversitaria.it">verona@azioneuniversitaria.it</a></p>
                <p>Sede: Università di Verona</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPage