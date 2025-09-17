import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globalPageStyles.css'

const InfoPage: React.FC = () => {
  return (
    <div className="global-page-layout">
      <Navbar />
      <main>
        <div className="container global-page-container">
          <h1>Info</h1>

          <section className="global-section">
            <h2>FESTIVAL AURORA</h2>
            <p>
              Il Festival Aurora, è l'evento di benvenuto per le matricole dell'Università di Verona.
            </p>
            <p>
              Dal 9 all'TI ottobre al Polo Santa Marta, l'ateneo si trasformerà in un luogo di cultura, musica e socialità con concerti, talk su intelligenza artificiale e imprenditoria, street market artigianale e food truck.
            </p>
            <p>
              Se sei interessato, cerchiamo volontari motivati per contribuire alla realizzazione del festival: un'occasione per stringere nuove amicizie, vivere da protagonisti la vita universitaria e arricchire il proprio percorso.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <Link to="/diventa-volontario" className="btn-primary">Diventa volontario</Link>
            </div>
          </section>

          <section className="global-section">
            <h2>Chi siamo, in breve</h2>
            <p>
              Siamo Azione Universitaria Verona: studenti di diverse facoltà che collaborano per migliorare la vita
              accademica a Verona. Organizziamo eventi, offriamo supporto alle matricole e rappresentiamo gli studenti negli organi universitari.
            </p>
            <p>
              Se vuoi conoscere la nostra storia e i nostri valori visita la pagina <Link to="/chi-siamo">Chi Siamo</Link>.
            </p>
          </section>

          <section className="global-section">
            <h2>Cosa facciamo</h2>
            <p>
              Dalle attività di orientamento e tutoraggio alle iniziative culturali e ricreative: il nostro obiettivo è creare una community attiva e inclusiva.
            </p>
            <ul>
              <li><Link to="/attivita">Le nostre attività</Link>: iniziative, progetti ed eventi durante l'anno.</li>
              <li><Link to="/rappresentanza">Rappresentanza</Link>: la voce degli studenti negli organi dell'ateneo.</li>
              <li><Link to="/aiuto-matricole">Aiuto Matricole</Link>: sostegno pratico per iniziare al meglio.</li>
            </ul>
          </section>

          <section className="global-section">
            <h2>Come partecipare</h2>
            <p>
              Vuoi metterti in gioco? Puoi diventare volontario, partecipare agli eventi o proporre nuove idee.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/diventa-volontario" className="btn-primary">Diventa volontario</Link>
              <Link to="/contatti" className="btn-outline">Contattaci</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default InfoPage
