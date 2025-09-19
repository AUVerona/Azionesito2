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
          <h1>Aurora</h1>

          <section className="global-section">
            <h2>FESTIVAL AURORA</h2>
            <p>
              Il Festival Aurora, è l'evento di benvenuto per le matricole dell'Università di Verona.
            </p>
            <p>
              Dal 9 all' 11 ottobre al Polo Santa Marta, l'ateneo si trasformerà in un luogo di cultura, musica e socialità con concerti, talk su intelligenza artificiale e imprenditoria, street market artigianale e food truck.
            </p>
            <p>
              Se sei interessato, cerchiamo volontari motivati per contribuire alla realizzazione del festival: un'occasione per stringere nuove amicizie, vivere da protagonisti la vita universitaria e arricchire il proprio percorso.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <Link to="/unisciti" className="btn-primary">Diventa volontario</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default InfoPage
