import React from 'react'
import Navbar from '../components/Navbar'
import ChiSiamo from '../components/ChiSiamo'
import Footer from '../components/Footer'
import './ChiSiamoPage.css'

const ChiSiamoPage: React.FC = () => {
  return (
    <div className="chi-siamo-page">
      <Navbar />
      <main>
        <ChiSiamo />
        {/* Qui puoi aggiungere altro contenuto specifico per la pagina Chi Siamo */}
        <section className="chi-siamo-extra">
          <div className="container">
            <h2>La Nostra Storia</h2>
            <p>Qui puoi aggiungere più dettagli sulla vostra storia, missione, visione...</p>
            
            <h2>Il Nostro Team</h2>
            <p>Presentazione del team, ruoli, competenze...</p>
            
            <h2>I Nostri Valori</h2>
            <p>Valori aziendali, principi, obiettivi...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ChiSiamoPage
