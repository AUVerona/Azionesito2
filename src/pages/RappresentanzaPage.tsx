import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globalPageStyles.css'
import '../styles/animations.css'
import { getImagePath } from '../utils/paths'

const RappresentanzaPage: React.FC = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom')) as HTMLElement[]
    if (!els.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const fotoGruppo = getImagePath('fotodigruppo.jpeg')
  const fotoSenato = getImagePath('senato-accademico.jpeg')
  const fotoEnzo = getImagePath('enzo.jpeg')

  return (
    <div className="global-page-layout">
      <Navbar />
      <main className="global-page-section">
        <div className="global-page-container">
          <h1 className="reveal-up fx">Rappresentanza</h1>

          <section className="global-content-section">
            <p className="reveal">
              L'università non è solo studio: è una comunità. E si costruisce con gesti concreti, con la disponibilità ad aiutarsi e con occasioni di incontro.
            </p>
            <p className="reveal reveal-delay-1">
              Il cuore di tutto è il volontariato gratuito: donare tempo agli altri studenti, senza aspettarsi nulla, crea legami veri e rende l'ambiente più unito.
            </p>
            <p className="reveal reveal-delay-2">
              Allo stesso tempo, noi di Azione Universitaria crediamo in una meritocrazia giusta, che valorizzi impegno, talento e capacità, senza trasformarsi in egoismo o competizione sterile. Siamo noi, con le nostre azioni quotidiane, a scrivere la storia del nostro Ateneo. Insieme possiamo lasciare il segno e costruire un'università migliore, oggi e per chi verrà domani.
            </p>
          </section>

          <section className="global-content-section">
            <h2 className="reveal-up fx">Senato accademico</h2>
            <div className="section-split">
              <div className="section-text">
                <p className="reveal">
                  Il Senato Accademico è l’organo di rappresentanza della comunità universitaria. Collabora con il Rettore ed il Consiglio di Amministrazione all’amministrazione generale dell’ateneo.
                </p>
                <p className="reveal">In particolare, il Senato Accademico:</p>
                <ul className="reveal reveal-delay-1">
                  <li>svolge in generale funzioni di proposta e consultive in materia di didattica, di ricerca e di servizi agli studenti</li>
                  <li>approva lo statuto, il Codice Etico e i regolamenti di ateneo, ad eccezione di quelli relativi all’amministrazione finanziaria e contabile ed al reclutamento del personale</li>
                  <li>nomina il Consiglio di Amministrazione</li>
                </ul>
              </div>
              <div className="section-figure reveal reveal-delay-2">
                <figure style={{marginTop: '0.5rem'}}>
                  <img 
                    src={fotoSenato} 
                    alt="Foto rappresentante in Senato Accademico" 
                    style={{maxWidth: '480px', width: '100%', borderRadius: '10px'}}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = fotoGruppo }}
                  />
                  <figcaption style={{color: '#666', marginTop: '.5rem'}}>Rappresentante in Senato Accademico</figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="global-content-section">
            <h2 className="reveal-up fx">Il Consiglio di Amministrazione</h2>
            <div className="section-split image-left">
              <div className="section-figure reveal reveal-delay-2">
                <figure style={{marginTop: '0.5rem'}}>
                  <img 
                    src={fotoEnzo}
                    alt="Foto di Enzo"
                    style={{maxWidth: '480px', width: '100%', borderRadius: '10px'}}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = fotoGruppo }}
                  />
                  <figcaption style={{color: '#666', marginTop: '.5rem'}}>Rappresentante in consiglio studentesco</figcaption>
                </figure>
              </div>
              <div className="section-text">
                <p className="reveal">
                  Il Consiglio di Amministrazione è l’organo di indirizzo strategico, di programmazione finanziaria e del personale. Vigila sulla sostenibilità finanziaria delle attività.
                </p>
                <p className="reveal">In particolare:</p>
                <ul className="reveal reveal-delay-1">
                  <li>definisce la missione, i valori e la visione dell’Ateneo</li>
                  <li>approva i piani di sviluppo scientifici e didattici, nonché ogni altro documento di programmazione strategica</li>
                  <li>garantisce la stabilità finanziaria e indirizza e verifica l’effettiva sussistenza delle risorse finanziarie, umane e materiali disponibili</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="global-content-section">
            <h2 className="reveal-up fx">Consiglio degli studenti</h2>
            <p className="reveal">
              Il Consiglio Studentesco è l’organo di rappresentanza degli studenti dell’ateneo. Ha funzioni consultive e propositive su materie di interesse degli studenti.
            </p>
            <p className="reveal">In particolare:</p>
            <ul className="reveal reveal-delay-1">
              <li>esprime il proprio parere in materia di diritto allo studio, contribuzione studentesca e sui piani di sviluppo dell’Ateneo</li>
              <li>formula proposte sull’organizzazione delle attività didattiche e sui servizi agli studenti</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RappresentanzaPage
